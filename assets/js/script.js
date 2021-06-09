$(document).ready( function(){
     $.each( hours, function( index, value ){
        $(".time-block #textArea-" + index).val(localStorage.getItem(index));
     });
});
// set variable for site
var dayPlanner = document.getElementById("dayPlanner");
var day = document.getElementById("dayPlanner");
var tmp = '';
// localstorage object
var schedule = {
     name: "",
     value:""
};

// set the date for the schedule
setInterval(function(){ 
     var today = moment();
     $("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));  
});
// create the json object
var hours = 
{
     "1" : "12:00 AM",
     "2" : "1:00 AM",
     "3" : "2:00 AM",
     "4" : "3:00 AM",
     "5" : "4:00 AM",
     "6" : "5:00 AM",
     "7" : "6:00 AM",
     "8" : "7:00 AM",
     "9" : "8:00 AM",
     "10" : "9:00 AM",
     "11" : "10:00 AM",
     "12" : "11:00 AM",
     "13" : "12:00 PM",
     "14" : "1:00 PM",
     "15" : "2:00 PM",
     "16" : "3:00 PM",
     "17" : "4:00 PM",
     "18" : "5:00 PM",
     "19" : "6:00 PM",
     "20" : "7:00 PM",
     "21" : "8:00 PM",
     "22" : "9:00 PM",
     "23" : "10:00 PM",
     "24" : "11:00 PM"
};

$.each( hours, function( index, value ){
     var hour = moment();
     var horita = hour.format('H');
     var currentTime = parseInt(horita)+1;

     tmp += '<div class="row time-block no-gutters mb-2">';
     tmp += '<div class="col-12 col-sm-2 hour">'+ value + '</div>';
     tmp += '<div class="col-12 col-sm-8">'; 
     if(index == currentTime){ //moment returns a string
          tmp += '<textarea class="form-control present" id="textArea-'+ index + '" data-id="' + index + '" rows="3"></textarea>';
     }else if(index > currentTime){
          tmp += '<textarea class="form-control future" id="textArea-'+ index + '" data-id="' + index + '" rows="3"></textarea>';
     } else if( index < currentTime) {
          tmp += '<textarea class="form-control past" id="textArea-'+ index + '" data-id="' + index + '" rows="3"></textarea>';
     } else {
          tmp += '<textarea class="form-control past" id="textArea-'+ index + '" data-id="' + index + '"  rows="3"></textarea>';
     } 
     tmp += '</div><div class="col-12 col-sm-2 d-flex justify-content-around">';
     tmp += '<div style="" class="saveBtn w100 d-flex justify-content-center flex-fill">';
     tmp += '<div id="button" class="d-flex align-self-stretch align-items-center" data-save="'+ index +'"><i class="far fa-save"></i></div></div>';
     tmp += '</div></div>';
},1000);

$(dayPlanner).prepend(tmp);

$(document).on("click","#button", function(){
     $(".time-block #textArea-" + id).val();
     var id = $(this).data("save");
     var value = $("#textArea-"+id).val();
     var key = id;
    addToLocalStorage(key,value);
});


var addToLocalStorage = function(key,value){
     //get existing data
     var existing = localStorage.getItem(schedule);

     // if there is data, create an array
     existing = existing ? JSON.parse(existing) : {};
     // add new data to localStorage Array
     existing[key] = value;
     //save back to localStorage
     localStorage.setItem(key, value);
     //localStorage.setItem(name, JSON.stringify(existing));
} 