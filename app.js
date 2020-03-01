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
  const colorFunction = function() {
    $('.box').each(function() {
      $(this).css("background-color", generateRandomColorValue());
    })
  };
  $('#randBtn').click(function() {
    colorFunction();
  }),
  $('#addBtn').click(function(){
    const st = 'background-color:' + generateRandomColorValue();
    $('<div class="box" style="'+ st +'"></div>').appendTo('.container');

  })
});