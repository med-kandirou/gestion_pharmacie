<?php require_once APPROOT . '/views/inc/header.php' ?>
<?php require_once APPROOT . '/views/admin/sidebar.php'; ?>
<?php notification(); ?>



<div data-dial-init class="fixed right-6 bottom-6 group">
    <button type="button" id="autre" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <span class="sr-only">Open actions menu</span>
    </button>
</div>



<h1 class="text-center text-3xl font-bold text-gray-900 dark:text-white mt-6 mb-10">Ajouter les produits</h1>

<div class="w-full p-4 overflow-x-hidden flex justify-center overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="px-6 py-6 lg:px-8">
                <form class="space-y-6" id="form_add" enctype="multipart/form-data">
                    <div id="products">
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
                            <option value="1">tete</option>
                        </select></br>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajouter</button>
                </form></br>
            </div>
        </div>
    </div>
</div>







<?php require_once APPROOT . '/views/inc/footer.php'  ?>
<script src="<?= URLROOT . '/js/addProd.js' ?>"></script>