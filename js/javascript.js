var items = $('#container img');
var currentIndex = 0;
var itemAmount = items.length - 1;
var circles = $('.circle');

$(document).ready(function(){
  $('#container img').first().fadeIn(300);
  
  $('#next').click(function() {
    currentIndex += 1;
    if (currentIndex > itemAmount) {
      currentIndex = 0;
    }
    showItems();
  });
  
  $('#prev').click(function() {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmount;
    }
    showItems();
  });
  
  circles.click(function() {
    var circleIndex = circles.index($(this));
	  circles[circleIndex].className = 'circle active';
	  currentIndex = circleIndex;
    showItems();
  });
  
  slide();
});

function slide() {
  showItems();
  currentIndex += 1;
  if (currentIndex > itemAmount) {
    currentIndex = 0;
  }
  setTimeout(function(){slide();}, 5000);
}

function showItems() {
  var item = $('#container img').eq(currentIndex);
  items.hide();
  item.fadeIn(300);
  $('.active').removeClass('active');
	circles[currentIndex].className = 'circle active';
}
