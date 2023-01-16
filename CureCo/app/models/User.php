<?php

class User extends database{
    function __construct() { }

    public function login($email,$pass){
        $sql = "SELECT `id_admin`, `nom`, `email`, `password` FROM `admin` WHERE email=:email";
        $stmt=$this->openConnection()->prepare($sql);
        $stmt->bindParam(':email',$email);
        $stmt->execute();
        if($stmt->rowCount()==1){
            $res=$stmt->fetch(PDO::FETCH_ASSOC);
            if(password_verify($pass,$res['password'])){
                $_SESSION['id']=$res['id_admin'];
                $_SESSION['nom']=$res['nom'];
                $_SESSION['email']=$res['email'];
                return true;
            }
            else{
                return false;
            } 
        }
        else{
            return false;
        }
    }

}