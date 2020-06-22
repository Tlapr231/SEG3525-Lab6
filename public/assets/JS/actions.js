// Une portion de se code a ete pris de: https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis
// jQuery that will "listen" to the html index.html
$(document).ready(function(){

    $('form').on('submit', function(){
        
        // var item = $('form input');
        // console.log(item.serializeArray());
  
        $.ajax({
          type: 'POST',
          url: '/survey',
          data: $(this).serializeArray(),
          success: function(data){
            // do something with the data via front-end framework
            // Make the submit button red, disabled and saying Thank you
            $("#SubButton").css("background-color", "#eeaa7c");
            $("#SubButton").prop("disabled", "true");
            $("#SubButton").text("Merci!");
            alert("Soumis avec succès. Merci pour votre temps!");
          }
        });
        return false;
    });
  });