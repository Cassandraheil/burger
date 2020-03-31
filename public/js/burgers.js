$(function() {
$(".change-devour").on("click", function(event){
    var id = $(this).data("id");
    var devour = $(this).data("devour");

    var changeDevoured ={
        devoured: devour
    };

    $.ajax("/api/burgers/"+ id, {
        type:"PUT",
        data: changeDevoured
    }).then(function(){
        console.log("changed devoured to", devour)

        location.reload();
    });
});

$(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[name=devoured:checked").val().trim()
    };

    $.ajax("api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function(){
        console.log("new burger inputed");
        location.reload();
    });
});


});