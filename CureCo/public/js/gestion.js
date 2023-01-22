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
            document.getElementById(''+field+'_err').classList.remove('hidden');
            return 1;
        }
        else{
            document.getElementById(''+field+'_err').classList.add('hidden');
            return 0;
        }
    }
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
    $('#search').on('keyup',function (){ 
        $.post("../Products/chercher", {nom:$('#search').val()},
            function (response) {
                var data=JSON.parse(response);
                let tbody=document.getElementById('tbody');
                if(data.length>0){
                    $('#tbody').html('');
                    for (let i = 0; i < data.length; i++) {
                        tbody.innerHTML+=`
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
                        </tr>`;
                    }
                }
                else{
                    tbody.innerHTML='<p class="text-3xl text-center mt-5 text-gray-900 dark:text-black">Aucun produit trouvé</p>';
                }
            },
        );
        
    });


    $('#add_new_Prod').on('click',function(){
        let container_models=document.getElementById('container_models');
        container_models.innerHTML+=`
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="relative top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ajouter un produit</h3>
                    <form class="space-y-6">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du produit :</label>
                            <input type="text" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nom du produit" >
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantité :</label>
                            <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Quantité">
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix :</label>
                            <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Prix">
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image :</label>
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-25 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div> 
                        </div>
                        <button type="button" id="add_new_Prod" class="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter un autre produit</button>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
                    </form>
                </div>
            </div>
        </div>
    </div> `;
    })

});


