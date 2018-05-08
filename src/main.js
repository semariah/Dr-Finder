import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {DocApi} from './Api.js';


$(document).ready(function(){
  $("#doctor-form").submit(function(event){
    event.preventDefault();
    let medIssue = $("#med-issue").val();
    $('.result').show(medIssue);
    $('.medical-Issue').text(medIssue);
    let api = new DocApi();
    let promise = api.makeApiCall();
    promise.then(function(response){
      let body = JSON.parse(response);
      let wholeArray = body.data;
      if (wholeArray.length === 0){
        $('.showsolution').text("0 Doctors meet your search criteria");
      } else {
        for (let i = 0; i < wholeArray.length; i++){
          $('.showsolution').append(`<h4>${wholeArray[i].profile.first_name} ${wholeArray[i].profile.last_name}</h4>`);
          $('.showsolution').append(`<li> Address: ${wholeArray[i].practices[0].visit_address.city}, ${wholeArray[i].practices[0].visit_address.state}, ${wholeArray[i].practices[0].visit_address.street}, ${wholeArray[i].practices[0].visit_address.zip}</li>`);
          $('.showsolution').append(`<li> Phone Number: ${wholeArray[i].practices[0].phones[0].number}, ${wholeArray[i].practices[0].phones[0].type}`);
          $('.showsolution').append(`<li> Accepts New Patients : ${wholeArray[i].practices[0].accepts_new_patients}</li>`);
          if (wholeArray[i].practices[0].website !== undefined){
            $('.showsolution').append(`<li>${wholeArray[i].practices[0].website}</li>`);
          } else {
            $('.showsolution').append(`<li> Website: None </li>`);
          }
        }
      }
    }, function(error){
      $('.showErrors').text(`there was an error processing your request: ${error.message}`);
    });
  });
});
