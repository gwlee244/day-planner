
$(document).ready(function() {
    // gets the day to display in the header
    
    var today = moment().format('dddd, MMMM Do, YYYY');
    $("#todayDate").text(today);

    //
    function setColor(textarea, current) {
        if (new Date().getHours() > current) {
            textarea.addClass("past");
        } else if (new Date().getHours() === current) {
            textarea.addClass("present");
        } else {
            textarea.addClass("future");
        }
    }

    // save text input in taskarea to localStorage
    $(".saveBtn").on("click", function() {
        var taskContent = $(this).siblings(".taskarea").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, taskContent);
       console.log(time, taskContent);

    });

    // retrieve data and call setColor function 
    function getData() {
        for (var i = 9; i < 18; i++) {
            setColor ($("." + i), i);
            var getTasks = localStorage.getItem("event");
            if (getTasks !==null) {
                $("event").text(JSON.parse(getTasks));
            }
        }
    } 
    getData();

    //get values from localStorage when page is refreshed
    function getStorageLocal() {
        $(".9").val(localStorage.getItem("event9a"));
        $(".10").val(localStorage.getItem("event10a"));
        $(".11").val(localStorage.getItem("event11a"));
        $(".12").val(localStorage.getItem("event12p"));
        $(".13").val(localStorage.getItem("event13p"));
        $(".14").val(localStorage.getItem("event14p"));
        $(".15").val(localStorage.getItem("event15p"));
        $(".16").val(localStorage.getItem("event16p"));
        $(".17").val(localStorage.getItem("event17p"));
    } 
    getStorageLocal();
});


