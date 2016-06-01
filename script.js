$(document).ready(function(){
  var index ;
  $.getJSON('user_details.json', function(data) {
    $.each(data.details, function (i, f) {
        $("#user_details tbody").append("<tr><td class=\"editIcon\" onclick = 'addNewUser(this)'></td><td class='fname'>"+f.firstname+"</td><td class='lname'>"+f.lastname+"</td><td class='mail'>"+f.email+"</td><td class='usr_status'>"+f.status+"</td></tr>");
    });
  });
  addNewUser = function(x) {
    index = x.parentElement.rowIndex;
    $('.outer').addClass('display_block');
    $('.edit_inner').addClass('display_block');
  }
  $("#cancel").click(function(){
    $('.form_outer').removeClass('display_block');
    $('.form_inner').removeClass('display_block');
  });
  $("#edit_cancel").click(function(){
    $('.outer').removeClass('display_block');
    $('.edit_inner').removeClass('display_block');
  });
  $("#submit").click(function(){
    var first_name=$("#firstname").val();
    var last_name= $("#lastname").val();
    var email= $("#email").val();
    if (first_name!="" && last_name!="" && email!="") {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if(!emailReg.test(email)) {
            alert('Enter a valid email');
      }else {
        $('.form_outer').removeClass('display_block');
        $('.form_inner').removeClass('display_block');
        $("#user_details tbody").append("<tr><td class=\"editIcon\" onclick = 'addNewUser(this)'  ></td><td class='fname'>"+first_name+"</td><td class='lname'>"+last_name+"</td><td class='mail'>"+email+"</td><td class='usr_status'>active</td></tr>");
        $("#firstname").val("");
        $("#lastname").val("");
        $("#email").val("");
      }
    }
    else {
     alert('fill all the fields');
     $("#firstname").val(first_name);
     $("#lastname").val(last_name);
     $("#email").val(email);
    }
  });
$("#edit_submit").click(function(){
  var first_name=$("#first_name").val();
  var last_name= $("#last_name").val();
  var email= $("#email_text").val();
  var status_text = $('#status :selected').text();
  if (first_name!="" && last_name!="" && email!="") {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(email)) {
          alert('Enter a valid email');
    }else {
      $('.outer').removeClass('display_block');
      $('.edit_inner').removeClass('display_block');
      // $("#user_details tbody").eq(index).("<tr><td class=\"editIcon\" onclick = 'addNewUser(this)'  ></td><td class='fname'>"+first_name+"</td><td class='lname'>"+last_name+"</td><td class='mail'>"+email+"</td><td class='usr_status'>"+status+"</td></tr>");


      var tableRow = $("#user_details tbody tr")[index-1];
      tableRow.children[1].innerHTML = first_name;
      tableRow.children[2].innerHTML = last_name;
      tableRow.children[3].innerHTML = email;
      tableRow.children[4].innerHTML = status_text;

      $("#first_name").val("");
      $("#last_name").val("");
      $("#email_text").val("");
    }
  }
  else {
   alert('fill all the fields');
   $("#firstname").val(first_name);
   $("#lastname").val(last_name);
   $("#email").val(email);
  }
});

$("#search_box").keyup(function(){
        _this = this;
        $.each($("#user_details tbody tr"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
               $(this).hide();
            else
               $(this).show();
        });
    });
});
function add() {
  $('.form_outer').addClass('display_block');
  $('.form_inner').addClass('display_block');
}
