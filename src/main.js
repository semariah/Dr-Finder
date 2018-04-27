//import { pingPong } from './scripts.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

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
      $('#showname').text(name);
    }, function(error){
      $('.showErrors').text(`there was an error processing your request: ${error.message}`);
    });


  });
});
