
// Sets current date in header
$("#currentDay").text(moment().format("dddd, MMM Do"));

// Variable of current time to compare to in function
const currentHour = moment().hour();
let userText = $(".row textarea");

// Function that applies "past, present or future" class to each text box by comparing current time to time listed
$(userText).each(function() {

    let hourValue = $(this).data("hour");

    if(hourValue < currentHour){
        $(this).addClass("past")
    } 

    else if (hourValue == currentHour){
        $(this).addClass("present")
    }

    else if (hourValue > currentHour){
        $(this).addClass("future")
    }
})

// Saves value of user input to local storage
$(".saveBtn").on("click", function (){

    var eventHour = $(this).data("hour");
    var eventEntered = $(this).siblings("textarea").val();

    console.log(eventHour);
    localStorage.setItem(eventHour, eventEntered);

});

// Retrieves the item from local to display when the page is refreshed or returned to
$(userText).each(function(){
    var hour = $(this).data("hour");
    
    var description = localStorage.getItem(hour);
    $(this).val(description);

})
