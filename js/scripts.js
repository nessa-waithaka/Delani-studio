$(document).ready(function() {
  $("#contacts form").submit(function(event) {
    var fullname = $("input#name").val();
    var email = $("input#mail").val();
    var text = $("textarea#textarea").val();

    $(".name").text(fullname);
    $(".mail").text(email);
    $(".text").text(text);

    if (fullname == "" || email == "") {
      alert("Please fill in all your details");
    } else if (text == "") {
      alert("Kindly write a message");
    } else {
      alert(
        fullname +
          " we have received your message. Thank you for reaching out to us."
      );
    }

    event.preventDefault();
  });
});

//Toggle function
$("#design").click(function() {
  $("#design p").toggle();
  $("#design img").toggle();
});

$("#dev").click(function() {
  $("#dev p").toggle();
  $("#dev img").toggle();
});

$("#product").click(function() {
  $("#product p").toggle();
  $("#product img").toggle();
});
