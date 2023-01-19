$(document).ready(function () {
    // recupere id_prod
    let id_prod;
    var delete_prod=document.querySelectorAll('.delete_btn');
    delete_prod.forEach(item => {
        $(item).click(function () { 
            id_prod=item.value;
        });
    });
    // confirmer la suppression
    $('.confirm_delete').click(function () { 
       location.href='../Products/delete_prod/'+id_prod+'';
    });
});


