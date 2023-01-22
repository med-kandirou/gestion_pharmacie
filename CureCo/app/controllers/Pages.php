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
    public function login(){  
        $this->view('login');
    }

    
    public function dashbord(){  
        if(isset($_SESSION['id'])){
            $data=$this->product->getstatistiques();
            $this->view('admin/dashbord',$data);
        }
        
    }

    public function gestion(){  
        if(isset($_SESSION['id'])){
            $data=$this->product->getprod();
            $data2=$this->product->getcat();
            $this->view('admin/gestion',$data,$data2);
        }
    }

}