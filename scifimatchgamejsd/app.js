$(document).ready(function() {

 const $container = $('.container'),
    $boxes = $container.children();
    //defines boxes as the children of the container
    $boxes.sort(function() {return Math.random() - .5; });
    // update dom with new sort
    $container.append($boxes);

  let firstGuess = ''
  let secondGuess =''
  let count= 0
 //add click function that turns the border blue
  $boxes.click(function(){
 //...
   if (count < 2) {
    count++
   if (count === 1) {
   // Assign first guess
    firstGuess = $boxes.name

    $(event.currentTarget).css('border', '2px solid blue')
  } else {
  // Assign second guess
  secondGuess = $boxes.name

  $(event.currentTarget).css('border', '2px solid blue')
}
}

  // If both guesses are not empty...
  if (firstGuess !== '' && secondGuess !== '') {
  // and the first guess matches the second match...
  if (firstGuess === secondGuess) {
    // run the match function
    firstGuess.hide()
  }
}
})
  })
