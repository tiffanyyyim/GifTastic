 $(document).ready(function(){
     
//going through the sports array and creating buttons for each 
        var sports = ["nfl", "nba", "mlb", "tennis", "nhl", "soccer"];
        
        var searchTerm = "";
     
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
     $("button").on("click", function(){
         var gifWord = $(this).attr("data-letter");
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifWord + "&api_key=HrBbC45mmSQAE22exVJxL7fziUXGYtC9&limit=2";
         console.log(queryURL);
         $.ajax({
             url: queryURL,
             method: "GET"
         })
         
         .done(function(response){
             var results = response.data;
             for (var i = 0; i <results.length; i++){
                 var sportsImage = $("<img>");
                var imagesDiv = $("<div>");
                 sportsImage.attr("src", results[i].images.fixed_height.url);            
                 imagesDiv.append(sportsImage);
                 $("#images").prepend(imagesDiv);
             }         
         })      
     })
     
//enter word into search bar and create new button from word, add the sports array
     $("#run-search").on("click", function(event){
         event.preventDefault();
         searchTerm = $("#sport").val().trim();
         console.log(searchTerm);
         var newButton = $("<button>");
         newButton.addClass("letter-button letter letter-button-color");
         newButton.attr("data-letter", searchTerm);
         newButton.text(searchTerm);
         $("#buttons").append(newButton);                  
     })
 
     
 
 
 
 })  


