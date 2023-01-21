$(document).ready(function () {
    // recupere id_prod
    let id_prod;

    var delete_prod=document.querySelectorAll('.delete_btn');
    delete_prod.forEach(item => {
        $(item).on('click',function () { 
            id_prod=item.value;
        });
    });
    // confirmer la suppression
    $('.confirm_delete').on('click',function () { 
       location.href='../Products/delete_prod/'+id_prod+'';
    });
    //afficher les information du produit 
    var getinfo=document.querySelectorAll('.getinfo');
    getinfo.forEach(item => {
        $(item).on('click',function () { 
            $.post("../Products/getinfo/", {id_prod:item.value},
                function (response) {
                    var data=JSON.parse(response);
                    id_prod=data.id_prod;
                    $('#libelle').val(data.libelle);
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
    let image_upload='';
    $("#image").on("change", function(){
        image_upload=$('#image').prop("files")[0];
    })
    $('#form-update').on('submit',function (e) { 
        e.preventDefault();
        getempty('nom_prod');
        getempty('quantite');
        getempty('prix');
        if(getempty('nom_prod')==0 && getempty('quantite')==0 && getempty('prix')==0){
            $.ajax({
                url: "../Products/update/"+id_prod+"",type: "POST",data: new FormData(this),contentType: false,
                cache: false,
                processData:false,
                success: function(data)
                {
                    if(data=='updated'){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 1400,
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
                        setTimeout(()=>{
                            location.href=location.href;
                        },1400);
                    } 
                },           
            });
        }
    });
});


