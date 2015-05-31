

// Contact form
	var form = $('#main-contact-form');

document.getElementById("button_submit").addEventListener("click", function () {
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    var subject = $.trim($('#subject').val());
    var message = $.trim($('#message').val());
    
   if(name!=="" && email!=="" && subject!=="" && message!=="")  {
  alert("message sent");
   
   }
else
    form.prepend( '<p style="color:red;"> Please compile the required fields</p>').fadeIn() 

});

