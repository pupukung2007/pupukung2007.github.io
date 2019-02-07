$(document).ready(function() {
    $('#submit-btn').click(function() {
        console.log('click on submit button');
    });

    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        response.forEach(element => {
            console.log(element.name, element.age);
        });
    });
});