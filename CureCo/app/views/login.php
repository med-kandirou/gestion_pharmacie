<?php require_once 'inc/header.php'  ?>
<?php require_once 'inc/navbar.php'  ?>

<!-- component -->
<section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="<?= URLROOT.'/img/pic6.jpg' ?>" class="w-full h-full object-cover">
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">
      <h1 class="text-center text-2xl md:text-2xl font-bold leading-tight mt-12">Bienvenue , Connecter ici</h1>

      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700">Email Address :</label>
          <input type="email" id="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          <p id="email_err" class="hidden text-red-500">Email est obligatoire</p>
        </div>
        <div class="mt-4">
          <label class="block text-gray-700">Password :</label>
          <input type="password" id="pass" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required>
                <p id="pass_err" class="hidden text-red-500">Email est obligatoire</p>
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="button" class="w-full block bg-blue-700 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6" id="login">Connecter</button>
      </form>

    </div>
  </div>

</section>




















<?php require_once 'inc/footer.php'  ?>
<script src="<?= URLROOT.'/js/login.js'?>"></script>