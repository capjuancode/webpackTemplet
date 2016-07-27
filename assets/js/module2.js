


$( document ).ready(function() {

  $("Form").submit(function(event) {

          var postData = $('form').serializeObject();
          var formURL = $(this).attr("action");

          console.log(postData)

          // $.ajax({
          //     type: "post",
          //     url: formURL,
          //     data: postData,
          //     contentType: "application/json; charset=utf-8",
          //     dataType: "json",
          //     success: function(msg) {
          //         var SessionRecords = JSON.parse(msg.d);
          //     },
          //     error: function() {
          //         alert("An error has occurred during processing your request.");
          //     }
          // });

      event.preventDefault();
  });
});
