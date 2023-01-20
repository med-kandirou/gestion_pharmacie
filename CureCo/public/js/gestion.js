$(document).ready(function () {
    // recupere id_prod
    let id_prod;

    var delete_prod=document.querySelectorAll('.delete_btn');
    delete_prod.forEach(item => {
        $(item).click(function () { 
            id_prod=item.value;
        });
    });
    // confirmer la suppression
    $('.confirm_delete').click(function () { 
       location.href='../Products/delete_prod/'+id_prod+'';
    });

    //afficher les information du produit 
    var getinfo=document.querySelectorAll('.getinfo');
    getinfo.forEach(item => {
        $(item).click(function () { 
            $.post("../Products/getinfo/", {id_prod:item.value},
                function (response) {
                    var data=JSON.parse(response);
                    id_prod=data.id_prod;
                    $('#nom_prod').val(data.libelle);
                    $('#quantite').val(data.quantite);
                    $('#prix').val(data.prix);
                    $('#category').val(data.id_cat)
                    $('#category').text(data.cat);
                },
            );
        });
    });
    // update products
    function getempty(field){
        if($('#'+field+'').val()==''){
            document.getElementById(''+field+'_err').classList.remove('hidden');
            return 1;
        }
        else{
            document.getElementById(''+field+'_err').classList.add('hidden');
            return 0;
        }
    }
    var image='';
    $("#image").on("change", function(e){
        image=e.target.files[0].name;
    })

    $('#update').click(function () { 
        getempty('nom_prod');
        getempty('quantite');
        getempty('prix');

        if(getempty('nom_prod')==0 && getempty('quantite')==0 && getempty('prix')==0 ){
            $.post("../Products/update", {id_prod:id_prod,libelle:$('#nom_prod').val() , quantite:$('#quantite').val(),prix:$('#prix').val(),id_cat:$( "#select_cate" ).val(),image:image},
                function (data) {
                    if(data=='updated'){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          }) 
                        Toast.fire({
                          icon: 'success',
                          title: 'Le produit a été bien modifié'
                        })
                    }
                },
            );
        }

        
    });


});


