<?php
class Products extends Controller{
    private $product;
    function __construct()
    {
        $this->product=$this->model('Product');
    }

    public function getprod (){
        if(isset($_SESSION['id'])){
            $data=$this->product->getcat();
            $this->view('admin/gestion',$data);
        } 
    }




}