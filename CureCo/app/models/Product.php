<?php

class Product extends database{
    function __construct() { }

    public function getprod(){
        $sql = "SELECT `id_prod`, `libelle`, `quantite`, `prix`, `image`, `date_ajout`, c.cat FROM `product` p inner join category c on c.id_cat=p.id_cat";
        $stmt=$this->openConnection()->query($sql);
        $data=$stmt->fetchAll();
        return $data;
    }

}