$(document).ready(function() {
  $(".boxTop").click(function(){
    console.log('you have clicked my son')
    $(event.currentTarget).css("background-color", "#42f5a7")
  })
  $(".boxBottom").click(function(){
    console.log('you have clicked my daughter')
    $(event.currentTarget).css("background-color", "#42f5a7")
  })
})
