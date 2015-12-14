/**
 * Created by deadw on 12/13/2015.
 */
$(document).ready(function() {

    var slider = $("#image_list1");
    var slider2 = $("#image_list2");                  // slider = ul element
    var leftProperty, newLeftProperty;
    var compLeftProperty, compNewLeftProperty;
    var CompItem, PlayerItem;

    // the click event handler for the right button
    $("#right_button").click(function() {
        // get value of current left property
        leftProperty = parseInt(slider.css("left"));
        // determine new value of left property
        if (leftProperty <= -200) {
            newLeftProperty = 0; }
        else {
            newLeftProperty = leftProperty - 100; }
        // use the animate function to change the left property
        slider.animate( {left: newLeftProperty}, 0);
    });  // end click

    // the click event handler for the left button
    $("#left_button").click(function() {
        // get value of current right property
        leftProperty = parseInt(slider.css("left"));

        // determine new value of left property
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        }
        else {
            newLeftProperty = leftProperty - 200;
        }

        // use the animate function to change the left property
        slider.animate( {left: newLeftProperty}, 0);
    });  // end click

    $("#roll").click(function() {
        if (newLeftProperty == 0){
            PlayerItem = "rock"
        } else if(newLeftProperty == -100){
            PlayerItem = "paper"
        } else {
            PlayerItem = "scissors"
        }

        compLeftProperty = parseInt(slider2.css("left"));
        slider2.animate( {left: 0}, 30);
        slider2.animate( {left: -200}, 300);

        compNewLeftProperty = (Math.floor(Math.random()*3))*-100;
        slider2.animate( {left: compNewLeftProperty}, 0);

        if (compNewLeftProperty == 0){
            CompItem = "scissors"
        } else if(compNewLeftProperty == -100){
            CompItem = "paper"
        } else {
            CompItem = "rock"
        }

        if (CompItem == PlayerItem){
            $("#message").text("Computer chose " + CompItem + ". It's a tie!")//$("roll").text("Computer chose " + CompItem + ". It's a tie!")
        } else if (CompItem == "rock" && PlayerItem == "paper"){
            $("#message").text("Computer chose " + CompItem + ". You won!")
        } else if ( CompItem == "rock" && PlayerItem == "scissors" ){
            $("#message").text("Computer chose " + CompItem + ". You lost!")
        } else if ( CompItem == "paper" && PlayerItem == "rock" ){
            $("#message").text("Computer chose " + CompItem + ". You lost!")
        } else if ( CompItem == "paper" && PlayerItem == "scissors" ){
            $("#message").text("Computer chose " + CompItem + ". You won!")
        } else if ( CompItem == "scissors" && PlayerItem == "rock" ){
            $("#message").text("Computer chose " + CompItem + ". You won!")
        } else if ( CompItem == "scissors" && PlayerItem == "paper" ){
            $("#message").text("Computer chose " + CompItem + ". You lost!")
        }
    });
}); // end ready