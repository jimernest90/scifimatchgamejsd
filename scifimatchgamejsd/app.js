//randomize boxes so they have different orders
//make click function to make the border of the selected absolute
//match these two items
//make items disappear

$(document).ready(function() {
  let selectedCharacterName
  let selectedQuote
  const $container = $('.container')
  let $boxes = $container.children();
  randomize()

  //function to randomize boxes
  function randomize(){

    // const $container = $('.container'),
    // $boxes = $container.children();
    //defines boxes as the children of the container
    $boxes.sort(function() {return Math.random() - .5; });
    // update dom with new sort
    $container.append($boxes);
  }


  function displayPoints() {

   $('.points').text(`${count}/6`)
  }

  function displayMessage(){

   $('.message').text('YOU WON!!!')
  }

  function displayLosingMessage(){

   $('.losingMessage').text('YOU LOSE!!!')
  }

  function resetGuesses(){

    $('.box.quote').show(1000)

    count = 0

    guesses = 0

    $('.box.character').removeClass('selected')

    $('.box.quote').removeClass('selected')

    randomize()

  }

  function resetMessage(){

    $('.message').text('')

    $('.points').text('')

    $('.losingMessage').text('')
  }

  $('#resetButton').click(function(){

    resetGuesses()

    resetMessage()

    $('.box').removeAttr("disabled")


  })



  // $('#instructionButton').click(function(){
  //
  //   $('#instructions').css('display','block')
  //
  // })
  //
  // $('#instructionButton').mouseout(function(){
  //
  //   $('#instructions').css('display','none')
  // })

  let guesses = 0
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

     } if(selectedCharacterName !== selectedQuote) {

        if($(this).data('name')){

         guesses++



       }else if($(this).data('quote'))

         guesses++


      }else if(selectedCharacterName === selectedQuote) {

        if($(this).data('name')){

         displayPoints()

         $('.box').removeClass('selected')

       }else if($(this).data('quote')){

         $(this).hide(1000)

         count++

         displayPoints()

         $('.box').removeClass('selected')
      }
    }if(count === 6){

     displayPoints()

     displayMessage()

     $(".box").attr("disabled");


    }

     // console.log(selectedCharacterName)
     if(guesses >= 12){

      displayLosingMessage()

      $(".box").attr("disabled");







     }
  })
})
