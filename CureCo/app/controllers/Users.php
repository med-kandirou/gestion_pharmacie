<?php

class Users extends Controller{
    private $user;
    function __construct() {
        $this->user=$this->model('User');
    }
    
    public function login(){
        if($_SERVER['REQUEST_METHOD']=='POST'){
            extract($_POST);
            $data=$this->user->login($email,$pass);
            echo $data;
        }
    }
}