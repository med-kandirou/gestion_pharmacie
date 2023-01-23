$(function () {
    function checkfield(field){
        var count=0;
        $('input[name="'+field+'[]"]').each(function(i, item) {
            if(item.value==""){
                $(this).css("border-color","red");
                count++;
            }
            else{
                $(this).css("border-color","grey");
            }
        });
        return count;
    }
    
    $('#autre').on('click',function(){
        $('#products').append(`
        </br><br>
        <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du produit :</label>
        <input type="text" name="libelle[]" id="libelle_add" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nom du produit">
    </div></br>
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantité :</label>
        <input type="number" name="quantite[]" min="0" id="quantite_add" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Quantité">
    </div></br>
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix :</label>
        <input type="number" name="prix[]" id="prix_add" min="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Prix">
    </div></br>
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image :</label>
        <div class="flex items-center justify-center w-full">
            <input name="image[]" id="image_add" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" id="image">
        </div>
    </div></br>
    <select name="select_cate[]" id="select_add" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected value="">--Select catégorie--</option>
    </select></br>`)     
    })


    $('#form_add').on('submit',function(e){
        e.preventDefault();
        checkfield('libelle');
        checkfield('quantite');
        checkfield('prix');
        checkfield('image');
        if(checkfield('libelle')==0 && checkfield('quantite')==0 && checkfield('prix')==0 && checkfield('image')==0){
            $.ajax({
                url: "../Products/addProduct",
                type: "POST",
                data:new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function(data)
                {
                    console.log(data);
                },           
            });
        }
        else{
            $('alert').removeClass('hidden');
        }
    });
});