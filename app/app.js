import * as MODEL from "./model.js"

//routing page content
function route() {
    let hashtagLink = window.location.hash //get page from hashtag in url 
    let pageID = hashtagLink.replace("#", "")

    //if there is nothing in the URL, default to the home page, otherwise pass the hash page in
    if(pageID == "") {
        MODEL.currentPage("home")
    } else {
        MODEL.currentPage(pageID)
    }
}

//listen for hashtag change in the URL, call route function
function initApp() {
    $(window).on("hashchange", route)
    route()
}

//when the document has been read (all html elements are known), call the functions inside
$(document).ready(function () {
    initApp()
})

//show the sign in button
$("#sign-in").on("click", () => {
    $(".modal").css("visibility", "visible")
    $(".form").css("visibility", "visible")

})

//when clicking cancel, make the box disappear
$("#cancel").on("click", () => {
    $(".modal").css("visibility", "hidden")
})

$("#done").on("click", () => {
    $(".modal").css("visibility", "hidden")
    $(".confirm").css("visibility", "hidden")
})

//submitting the form
$("#submit").on("click", function (e) {
    e.preventDefault() 
    //gather the input data
    let uName = $("#userName").val()
    let pass = $("#password").val()

    //if either of the inputs are empty, send the appropriate message
    if (uName == "") {
        $(".formAlert").html("Enter your Username")
    } else if(pass == "") {
        $(".formAlert").html("Enter your Password")
    } else { //otherwise, clear the inputs
        $("#userName").val("")
        $("#password").val("")
        $(".form").css("visibility", "hidden")
        $(".confirm").css("visibility", "visible")
    }
})