$(document).ready(function() {
    $('#submit-btn').click(function() {
        console.log('click on submit button');
    });


    $.ajax({
        url: "pokemon.json",
        dataType: "json"
    }).done(function(response) {
        response.forEach(pokemon => {
            switch(pokemon.Type1){
                case "Normal":
                    color1="#A8A878";
                    break;
                case "Fire":
                    color1="#F08030";
                    break;
                case "Fighting":
                    color1="#C03028";
                    break;
                case "Water":
                    color1="#6890F0";
                    break; 
                case "Flying":
                    color1="#A890F0";
                    break;    
                case "Grass":
                    color1="#78C850";
                    break;
                case "Poison":
                    color1="#A040A0";
                    break;
                case "Electric":
                    color1="#F8D030";
                    break;
                case "Ground":
                    color1="#E0C068";
                    break;
                case "Psychic":
                    color1="#F85888";
                    break;
                case "Rock":
                    color1="#B8A038";
                    break;
                case "Ice":
                    color1="#98D8D8";
                    break;
                case "Bug":
                    color1="#A8B820";
                    break;
                case "Dragon":
                    color1="#7038F8";
                    break;
                case "Ghost":
                    color1="#705898";
                    break;       
                case "Dark":
                    color1="#705848";
                    break;
                case "Steel":
                    color1="#B8B8D0";
                    break;
                case "Fairy":
                    color1="#EE99AC";
                    break;
                default:
                    color1="white";
            }
            switch(pokemon.Type2){
                case "Normal":
                    color2="#A8A878";
                    break;
                case "Fire":
                    color2="#F08030";
                    break;
                case "Fighting":
                    color2="#C03028";
                    break;
                case "Water":
                    color2="#6890F0";
                    break; 
                case "Flying":
                    color2="#A890F0";
                    break;    
                case "Grass":
                    color2="#78C850";
                    break;
                case "Poison":
                    color2="#A040A0";
                    break;
                case "Electric":
                    color2="#F8D030";
                    break;
                case "Ground":
                    color2="#E0C068";
                    break;
                case "Psychic":
                    color2="#F85888";
                    break;
                case "Rock":
                    color2="#B8A038";
                    break;
                case "Ice":
                    color2="#98D8D8";
                    break;
                case "Bug":
                    color2="#A8B820";
                    break;
                case "Dragon":
                    color2="#7038F8";
                    break;
                case "Ghost":
                    color2="#705898";
                    break;       
                case "Dark":
                    color2="#705848";
                    break;
                case "Steel":
                    color2="#B8B8D0";
                    break;
                case "Fairy":
                    color2="#EE99AC";
                    break;
                default:
                    color2="white";
            }
            $("#pokemon-body").append("<tr><td>"+
            pokemon.ID+
            "<td>"+pokemon.Name+"</td>"+
            "<td style='background-color :"+color1+"'>"+pokemon.Type1+"</td>"+
            "<td style='background-color :"+color2+"'>"+pokemon.Type2+"</td>"+
            "<td>"+pokemon.Total+"</td>"+
            "</td></tr>");
            
        });
    });

    
});