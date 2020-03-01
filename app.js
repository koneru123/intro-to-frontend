// Utility functions

const generateRandomColorValue = () => {
  let redValue = Math.floor((Math.random() * 256));
  let greenValue = Math.floor((Math.random() * 256));
  let blueValue = Math.floor((Math.random() * 256));
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
};
//
$(document).ready(function(){
  //console.log("Welcome to jquery!\n", $());
  /* YOUR CODE HERE */
  //var container = $('.container');
  //var boxContainer = $('.box');
  $('#randBtn').click(function() {
    $('.box').each(function() {
      $(this).css("background-color", generateRandomColorValue());
    })
  }),
  $('#addBtn').click(function(){
    $('<div class="box"></div>').appendTo('.container');
    $('<div class="box"></div>').css("background-color", generateRandomColorValue());
  })
});