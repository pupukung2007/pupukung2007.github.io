$(document).ready(function() { 
    $('#input-text').keypress(function() {
        key=event.which;
        if(key == 13){
            var word = $("#input-text").val().toLowerCase();
            $("#pokemon-body tr").filter(function() {
                if($(this).text().toLowerCase().indexOf(word) != -1){
                    $(this).show();
                }
                else{
                    $(this).hide();
                }
            });
        }
    });
    $('#search-btn').click(function() {
        var word = $("#input-text").val().toLowerCase();
        $("#pokemon-body tr").filter(function() {
            if($(this).text().toLowerCase().indexOf(word) != -1){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    });

    $('#advanced-btn').click(function() {
        $(".advanced-search").toggle();
        $(".dropdown-content").hide();
    });

    
    $('#dropdown-type1').click(function() {
        $("#type1-content").toggle();
    });

    $('#dropdown-type2').click(function() {
        $("#type2-content").toggle();
    });
    $('.type2-item').click(function() {
        $("#type2-display").text($(this).text());
        $("#type2-content").toggle();
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
            "\n<td class='pokemon-name'>"+pokemon.Name+"\n</td>"+
            "<td style='background-color :"+color1+";color : white;'>"+pokemon.Type1+"\n</td>"+
            "<td style='background-color :"+color2+";color : white;'>"+pokemon.Type2+"\n</td>"+
            "<td>"+pokemon.Total+"\n</td>"+
            "<td>"+pokemon.HP+"\n</td>"+
            "<td>"+pokemon.Attack+"\n</td>"+
            "<td>"+pokemon.Defense+"\n</td>"+
            "<td>"+pokemon.SP1+"\n</td>"+
            "<td>"+pokemon.SP2+"\n</td>"+
            "<td>"+pokemon.Speed+"\n</td>"+
            "<td>"+pokemon.Generation+"\n</td>"+
            "<td>"+pokemon.Legendary+"\n</td>"+
            "</td></tr>");
            
        });
    });

    
});