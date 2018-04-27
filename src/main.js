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
      //let bodyArray = body.data;
      $('#showname').text(name);
      $('.medical-Issue').text(medIssue);
      $('.showsolution').text("");
      //console.log(bodyArray[2]);
      //$('.showsolution').text(`Doctor names are : ${body.data[0].practices[0].name}.`);
    }, function(error){
      $('.showErrors').text(`there was an error processing your request: ${error.message}`);
    });


  });
});
