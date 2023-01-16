<?php

Class Controller {
    function view($view,$data=[])
    {
        if(file_exists('../app/views/' . $view. '.php')){
            require_once '../app/views/'.$view.'.php';
        }
        else{
            echo 'file does not exist';
        }
    }
    function model($model){
        require_once '../app/models/'.$model.'.php';
        return new $model;
    }
}

