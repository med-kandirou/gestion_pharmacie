<?php
class Products extends Controller{
    private $product;
    function __construct()
    {
        $this->product=$this->model('Product');
    }

    public function delete_prod($id_prod){
        if($this->product->delete_prod($id_prod)){
            $_SESSION['notif']="Le produit a éte supprimé avec success";
            header('location:'.URLROOT.'/pages/gestion');
            exit();
        }
    }




}