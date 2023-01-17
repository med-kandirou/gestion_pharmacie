<?php

class Pages extends Controller{

    private $product;

    function __construct() {
       $this->product=$this->model('product');
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
    
    public function gestion(){  
        $data=$this->product->getprod();
        $this->view('admin/gestion',$data);
    }

}