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
        $('.showsolution').append(`<li> ${body.data[0].practices[0].name}</li>.`);
      }

    }, function(error){
      $('.showErrors').text(`there was an error processing your request: ${error.message}`);
    });


  });
});
