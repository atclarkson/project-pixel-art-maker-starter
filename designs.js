// Select color input
var colorPick = document.getElementById("colorPicker");


// Select size input
var columns;
var rows;
var submitGrid = document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  rows = $('input#inputHeight').val();
  columns = $('input#inputWidth').val();
  $('#pixelCanvas').children('*').remove();
  $( "#pixelCanvas").html(makeGrid());
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for (let r = 0; r < rows; r++){
    $( "#pixelCanvas" ).append( "<tr id='row" + r + "'></tr>" );
    for (let c = 0; c < columns; c++) {
      $( "#row" + r ).append( "<td style='background-color: rgb(255, 255, 255);'></td>" );
    }
  }
}

$('#pixelCanvas').on('click', 'td', function(){
      $(this).css('background-color', colorPick.value);
    });
