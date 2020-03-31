$(function () {
    // $("#devour-burger").on("click", function (event) {
    //     console.log("this was clicked")

    //     var id = $(this).data("id");
    //     var devour = $(this).data("devour");

    //     var changeDevoured = {
    //         devoured: devour
    //     };

    //     $.ajax('/api/burgers/' + id, {
    //             method: 'PUT',
    //             data: changeDevoured
    //         }).then(function () {
    //             console.log("changed devoured to", devour)

    //             location.reload();
    //         });
    // });


    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val()
        };
        
        console.log("submit button clicked", newBurger)

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("new burger inputed:", newBurger);
            location.reload();
        });
    });

});