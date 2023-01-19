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

    //afficher les information du produit 
    var getinfo=document.querySelectorAll('.getinfo');
    getinfo.forEach(item => {
        $(item).click(function () { 
            $.post("../Products/getinfo/", {id_prod:item.value},
                function (response) {
                    var data=JSON.parse(response);
                    console.log(data);
                    $('#nom_prod').val(data.libelle);
                    $('#quantite').val(data.quantite);
                    $('#prix').val(data.prix);
                    $('#category').val(data.id_cat)
                    $('#category').text(data.cat);

                },
            );
        });
    });
});


