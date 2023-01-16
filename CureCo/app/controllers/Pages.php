<?php

class Pages extends Controller{
    function __construct() {
       
    }

    public function index(){  
        $this->view('index');
    }
    public function about(){  
        $this->view('about');
    }
    public function produits(){  
        $this->view('produits');
    }
    public function login(){  
        $this->view('login');
    }
    public function dashbord(){  
        $this->view('admin/dashbord');
    }
}