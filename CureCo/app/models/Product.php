<?php

class Product extends database{
    function __construct() { }

    public function getprod(){
        $sql = "SELECT `id_prod`, `libelle`, `quantite`, `prix`, `image`, `date`, c.cat FROM `product` p inner join category c on c.id_cat=p.idcat";
        $stmt=$this->openConnection()->query($sql);
        $data=$stmt->fetchAll();
        return $data;
    }

    public function getstatistiques(){
        $sql = "SELECT count(id_prod) as 'total' ,MAX(`prix`) as 'max' ,MIN(`prix`) as 'min' FROM `product`";
        $stmt=$this->openConnection()->query($sql);
        $data=$stmt->fetch();
        return $data;
    }

    public function delete_prod($id_prod){
        $sql = "DELETE FROM `product` WHERE id_prod=:id_prod";
        $stmt=$this->openConnection()->prepare($sql);
        $stmt->bindParam('id_prod',$id_prod);
        if($stmt->execute()){
            return true;
        }
    }
}