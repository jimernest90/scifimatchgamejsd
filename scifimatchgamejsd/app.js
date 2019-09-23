$(document).ready(function() {

  const $container = $('.container'),
    $boxes = $container.children();
    //defines boxes as the children of the container
    $boxes.sort(function() {return Math.random() - .5; });
    // update dom with new sort
    $container.append($boxes);
  })
