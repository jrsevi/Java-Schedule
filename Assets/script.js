// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

    //* Current Date *//
    function currentDay() {
        var today = dayjs();
        $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
    }
    currentDay();

    //* This adds the past, present, or future class to the time slots on the schedule*//
    function classId() {
        $(".time-block").each(function () {
            var time = dayjs().hour();
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            //*This prints the saved entry to the time slot*//
            var id = $(this).attr("id");
            var savedEntry = localStorage.getItem(id);
            $(this).children(".description").val(savedEntry);
            console.log(blockTime);
            if (blockTime < time) {
                $(this).addClass("past");
            } else if (blockTime == time) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        });
    }
    classId();

    //* This saves the user input to local storage*//
    function saveInput() {
        $(".saveBtn").on("click", function () {
            var time = $(this).parent().attr("id");
            var input = $(this).siblings(".description").val();
            localStorage.setItem(time, input);
        });
    }
    saveInput();

})
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

