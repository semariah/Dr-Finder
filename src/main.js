//import { pingPong } from './scripts.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {DocApi} from './Api.js';

$(document).ready(function(){
  $("#doctor-form").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let medIssue = $("#med-issue").val();
    //$("#med-issue").val("");
    let api = new DocApi();
    let promise = api.docInfo();
    promise.then(function(response){
      let body = JSON.parse(response);
      let wholeArray = body.data;
      $('#showname').text(name);
      $('.medical-Issue').text(medIssue);
      //$('.showsolution').text("");
      //console.log(bodyArray[2]);
      if (wholeArray === 0){
        $('.showsolution').text("0 Doctots Found");
      } else {
        for (let i = 0; i < wholeArray.length; i++){
          $('.showsolution').append(`<li> ${wholeArray[i].profile.first_name} ${wholeArray[i].profile.last_name}</li>.`);
          $('.showsolution').append(`<li> Address: ${wholeArray[i].practices[0].visit_address.city}, ${wholeArray[i].practices[0].state}, ${wholeArray[i].practices[0].street}, ${wholeArray[i].practices[0].zip}</li>.`);

        }

      }

    }, function(error){
      $('.showErrors').text(`there was an error processing your request: ${error.message}`);
    });


  });
});
