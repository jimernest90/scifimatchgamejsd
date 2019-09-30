//randomize boxes so they have different orders
//make click function to make the border of the selected absolute
//match these two items
//make items disappear

$(document).ready(function() {
  let selectedCharacterName
  let selectedQuote

  //function to randomize boxes
  const $container = $('.container'),
  $boxes = $container.children();
  //defines boxes as the children of the container
  $boxes.sort(function() {return Math.random() - .5; });
  // update dom with new sort
  $container.append($boxes);

  function displayPoints() {

   $('.points').text(count)
  }

  function displayMessage(){

   $('.message').text('YOU WON!!!')
  }

  let count = 0

  $boxes.click(function() {

    console.log($(this).data("name"))

    if ($(this).hasClass("character")) {
      // remove class from all other characther cards, so only
      // one character card can be selected at time
      $(".box.character").removeClass("selected")


      $(this).addClass('selected')

      console.log('user clicked on character card')
      selectedCharacterName = $(this).data('name')

    } else {
      console.log('user clicked on quote card')
      $(".box.quote").removeClass("selected")
      $(this).addClass('selected')
      selectedQuote = $(this).data('quote')


    } if (selectedCharacterName !== '' && selectedQuote !== '') {

       if (selectedCharacterName === selectedQuote) {

        if($(this).data('name')){

         $(this).hide()

         displayPoints()

       }else if($(this).data('quote')){

         $(this).hide()

         count++

         displayPoints()
      }
      }
    }

 if(count === 3){

  displayMessage()

 }else {

  return
 }
     // console.log(selectedCharacterName)
  })
})

  //   function resetGuesses(){
  //
  //     firstGuess = ''
  //
  //     secondGuess=''
  //
  //     count = 0
  //
  //     $(this).removeClass('selected')
  //   }
  // $boxes.click(function(){

  //if count is less than 2 add 1
