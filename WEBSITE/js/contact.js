

// Contact form
document.getElementById("button_submit").addEventListener("click", function () {
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    var subject = $.trim($('#subject').val());
    var message = $.trim($('#message').val());

   if(name!=="" && email!=="" && subject!=="" && message!=="")  {
    $.growl.notice({ message: "Message successfully sent" });
   }
else
    $.growl.warning ({ message: "Please fill the required fields" });

});

