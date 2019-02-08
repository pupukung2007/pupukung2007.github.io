$(document).ready(function() {
    $('#submit-btn').click(function() {
        console.log('click on submit button');
    });


    $.ajax({
        url: "pokemon.json",
        dataType: "json"
    }).done(function(response) {
        response.forEach(pokemon => {
            $("#pokemon-body").append("<tr><td>"+
            pokemon.ID+
            "<td>"+pokemon.Name+"</td>"+
            "<td>"+pokemon.Type1+"</td>"+
            "<td>"+pokemon.Type2+"</td>"+
            "</td></tr>");
        });
    });
});