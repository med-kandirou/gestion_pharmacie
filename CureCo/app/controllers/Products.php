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
    
    public function getinfo(){
        if($_SERVER['REQUEST_METHOD']=='POST'){
            $id_prod=$_POST['id_prod'];
            $data=$this->product->getinfo($id_prod);
            echo json_encode($data);
        }
    }

    public function update($id_prod){
        if($_SERVER['REQUEST_METHOD']=='POST'){
            $id_prod=$id_prod;
            $libelle=$_POST['libelle'];
            $quantite=$_POST['quantite'];
            $prix=$_POST['prix'];
            $image=$_FILES['image'];
            $id_cat=$_POST['select_cate'];
            if($image['name']!=''){ 
                if($this->product->updatewithImage($id_prod,$libelle,$quantite,$prix,$image['name'],$id_cat)){
                    move_uploaded_file($_FILES['image']['tmp_name'], 'img/'.$_FILES['image']['name']);
                    echo 'updated';
                }
            }
            else{
                if($this->product->updateWithoutImage($id_prod,$libelle,$quantite,$prix,$id_cat)){
                    echo 'updated';
                }
            }
        }
    }

    function trierProduits($by,$ordre){
        $data=$this->product->trierProduits($by,$ordre);
        $this->view('admin/gestion',$data);
    }
    
    function addProduct(){
        if($_SERVER['REQUEST_METHOD']=='POST'){
            for ($i=0; $i < count($_POST['libelle']); $i++) { 
                if($this->product->addProduct($_POST['libelle'][$i],$_POST['quantite'][$i],$_POST['prix'][$i],$_FILES['image']['name'][$i],$_POST['select_cate'][$i])){
                    move_uploaded_file($_FILES['image']['tmp_name'][$i], 'img/'.$_FILES['image']['name'][$i]);
                    echo 'added';
                }
            }  
        }
    }

    function chercher(){
        $nom=$_POST['nom'];
        $data=$this->product->chercher($nom);
        echo json_encode($data);
    }


}