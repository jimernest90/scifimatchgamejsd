$(document).ready(function() {
//randomize $boxes
  const $grid = $('.grid'),
    $boxes = $grid.children();
    //defines $boxes as the children of the container
    $boxes.sort(function() {return Math.random() - .5; });
    // update dom with new sort
    $grid.append($boxes);

    let firstGuess = ''
    let secondGuess = ''
    let count = 0



})
