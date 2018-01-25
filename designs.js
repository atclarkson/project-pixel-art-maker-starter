// Select color input
var colorPick = document.getElementById("colorPicker");
var color = #000000;
colorPick.addEventListener("input", function() {
  color = this.value;
  console.log(color);
});




// Select size input
var columns;
var rows;
var submitGrid = document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  rows = $('input#input_height').val();
  columns = $('input#input_width').val();
  $('#pixel_canvas').children('*').remove();
  $( "#pixel_canvas").html(makeGrid());
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for (var r = 0; r < rows; r++){
    $( "#pixel_canvas" ).append( "<tr id='row" + r + "'></tr>" );
    for (var c = 0; c < columns; c++) {
      $( "#row" + r ).append( "<td id='cell'></td>" );
    }
  }
}

$('#pixel_canvas').on('click', 'td', function(){
      $(this).css('background', color);
    });
