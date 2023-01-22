$(function () {
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
            $('#'+field+'_err').removeClass('hidden');
            return 1;
        }
        else{
            $('#'+field+'_err').addClass('hidden');
            return 0;
        }
    }
    $("#image").on("change", function(){
        image_upload=$('#image').prop("files")[0];
    })
    $('#form-update').on('submit',function (e) { 
        e.preventDefault();
        getempty('libelle');
        getempty('quantite');
        getempty('prix');
        if(getempty('libelle')==0 && getempty('quantite')==0 && getempty('prix')==0){
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
    $('#search').on('keyup',function (){ 
        $.post("../Products/chercher", {nom:$('#search').val()},
            function (response) {
                var data=JSON.parse(response);
                if(data.length>0){
                    $('#tbody').empty();
                    for (let i = 0; i < data.length; i++) {
                        $('#tbody').append(`
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src="../public/img/${data[i].image}" height="100" width="100">
                            </th>
                            <td class="px-6 py-4">
                                ${data[i].libelle} 
                            </td>
                            <td class="px-6 py-4">
                                ${data[i].quantite} 
                            </td>
                            <td class="px-6 py-4">
                                ${data[i].prix}
                            </td>
                            <td class="px-6 py-4">
                                ${data[i].date} 
                            </td>
                            <td class="px-6 py-4">
                                ${data[i].cat}
                            </td>
                            <td class="px-6 py-4">
                                <button value="${data[i].id_prod}" data-modal-target="popup-modal" data-modal-toggle="popup-modal"  class="delete_btn text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" type="button">Delete</button>
                                <button value="${data[i].id_prod}" data-modal-target="update_produit" data-modal-toggle="update_produit"  type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="getinfo text-white bg-blue-600 hover:bg-blue-800 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Update
                                </button>
                            </td>
                        </tr>`);
                    }
                }
                else{
                    tbody.innerHTML='<p class="text-3xl text-center mt-5 text-gray-900 dark:text-black">Aucun produit trouvé</p>';
                }
            },
        );
        
    });
    $('#form_add').on('submit',function(e){
        e.preventDefault();
        getempty('libelle_add');
        getempty('quantite_add');
        getempty('prix_add');
        getempty('image_add');
        getempty('select_add');

        if(getempty('id_add')==0 && getempty('quantite_add')==0 && getempty('prix_add')==0 && getempty('image_add')==0 && getempty('select_add')==0){
            $.ajax({
                url: "../Products/addProduct",type: "POST",data: new FormData(this),contentType: false,
                cache: false,
                processData:false,
                success: function(data)
                {
                    if(data=='added'){
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
                    }
                },           
            });
        }  
    })

    $('#no').on('click',function(){
        location.href="../pages/gestion";
    })

    $('#add_other').on('click',function(){
        $('#libelle_add').val('');
        $('#quantite_add').val('');
        $('#prix_add').val('');
        $('#image_add').val('');
        $('#select_add').val('');
    })
    

});


