//randomize boxes so they have different orders
//make click function to make the border of the selected absolute
//match these two items
//make items disappear



$(document).ready(function() {
//function to randomize boxes
 const $container = $('.container'),
    $boxes = $container.children();
    //defines boxes as the children of the container
    $boxes.sort(function() {return Math.random() - .5; });
    // update dom with new sort
    $container.append($boxes);

//make a function to attach a class to the the clicked
let clicked = undefined

let count = 0

let firstGuess = ''

let secondGuess = ''

  function selection(){$boxes.click(function(){

    if ($(this) !== clicked){
      console.log('this was selected')
      $(this).addClass('selected')
    }
  })
  }
  function selection(){$boxes.click(function(){

    if ($(this) !== clicked){
      console.log('match')
      $(this).addClass('match')
    }
  })
  }

//if count is less than 2 add 1
if (count < 2 && $(this) !== undefined) {

  count++


  selection()

} else if (count === 1 && $(this)!== undefined) {

  console.log('you have selected two')

  selection()

} else{



}



//    let firstGuess = ''
//    let secondGuess =''
//    let count= 0
//
//   $boxes.click(function(){
//  //...
//    if (count < 2) {
//     count++
//     //if count is less that 2 add 1
//    if (count === 1) {
//    // Assign first guess
//     firstGuess =
//     //add selection class to current target
//
//   } else {
//   // Assign second guess
//    secondGuess =
//
// }
// })


  })
