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

  })
})
