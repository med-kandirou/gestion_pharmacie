$(document).ready(function () {
    function checkfield(field){
        if($('#'+field).val()==''){
            $('#'+field+'_err').removeClass('hidden');
            $('#'+field+'_err').addClass('block');
            return false;
        }
        else{
            $('#'+field+'_err').removeClass('block');
            $('#'+field+'_err').addClass('hidden');
            return true;
        }
    }
    $('#login').on('click',function () { 
        checkfield('email');
        checkfield('pass');
        if(checkfield('email')==true && checkfield('pass')==true){
            $.post("../Users/login",{email:$("#email").val(),pass:$("#pass").val()},
                function (response) {
                    if(response==true){
                        Swal.fire(
                            'Succes!',
                            'login avec succes!',
                            'success'
                        ) 
                        setTimeout(()=>{
                            location.replace('../Pages/dashbord');
                        },2000);      
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Email or password invalid !',
                          })
                    }
                },
            );
        }
    });
});