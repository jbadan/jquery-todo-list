// to do:
// add memory

$(document).ready(function(){

var submit = $('#submit');
var newItem = $('#newItem');
var deleteButton = $('.delete');
var complete = $('.complete');

//today's date
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();


document.getElementById("date").textContent ="For "+ month + "/" + day + "/" + year+":";

//make list sortable

$('#sortable').sortable();

//submit button
  submit.click(function(e) {
    e.preventDefault();
    if(newItem.val() == ""){
      alert("Please enter a list item");
    }else{
      var toAdd = $(newItem).val();
      $('ul').append('<li><button>&#x2713</button> <button>x</button> ' + toAdd + '</li>');
      $('button').last().addClass('delete');
      $('button:nth-last-child(even)').addClass('complete');
      $(newItem).val("");
      $(newItem).focus();
    }
    });

//complete
$(document).on('click', '.complete',function(){
  $(this).parent().addClass('afterCompleted');
  $(newItem).focus();
});

//delete
$(document).on('click', '.delete',function(){
  $(this).parent().remove();
  $(newItem).focus();
});

});

