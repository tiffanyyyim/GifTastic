 $(document).ready(function(){
     
//going through the sports array and creating buttons for each 
        var sports = ["nfl", "nba", "mlb", "tennis", "nhl", "soccer"];
        
        for (var i = 0; i < sports.length; i++) {

        // Inside the loop...

        // 2. Create a variable named "gifButtons" equal to $("<button>");
        var gifButtons = $("<button>");

        // 3. Then give each "gifButtons" the following classes: "letter-button" "letter" "letter-button-color".
        gifButtons.addClass("letter-button letter letter-button-color");

        // 4. Then give each "gifButtons" a data-attribute called "data-letter".
        gifButtons.attr("data-letter", sports[i]);

        // 5. Then give each "gifButtons" a text equal to "sports[i]".
        gifButtons.text(sports[i]);

        // 6. Finally, append each "gifButtons" to the "#buttons" div (provided).
        $("#buttons").append(gifButtons);
        }
        

//performing our AJEX GET request   

     

     
//adding GIFs to the gif holder tag
     
     
     
     
     
//creating new button from search bar     
     
     
 
 
 
 })  


