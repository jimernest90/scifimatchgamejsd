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

  //function to turn blue when selected
  function selection(){$boxes.click(function(){

    if ($(this) !== clicked){
      console.log('this was selected')
      $(this).addClass('selected')
    }
  })
  }

  //function to turn green when matched
  function match(){$boxes.click(function(){

    if ($(this) !== clicked){
      console.log('match')
      $(this).addClass('match')
    }
  })
  }

$boxes.click(function(){
//if count is less than 2 add 1
if (count < 2) {

  count++


} if (count === 1) {

  firstGuess = $(this).data("name")

  console.log(firstGuess)

  selection()

} else {

 secondGuess = $(this).data("name")

  console.log('you have selected two')

  console.log(secondGuess)

  selection()

}
check to see if they match

} if (firstGuess === secondGuess){

  console.log('you matched')

  match()

} else (

  $(this).removeClass('selected')
)
})



  })
