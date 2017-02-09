$(".carousel").html(`<a href="#" class="left-arrow">LeftArrow<span></span></a>
`)
$(".carousel").html(`<a href="#" class="right-arrow">RightArrow<span></span></a>
`)
$("#previous-img").addClass("hidden");
$("#current-img").addClass("visible");
var count = 0;

var imageArray = $(carouselImages.map(function (x) {
  return x.image_url;
}));

function updateBG () {
  $(".carousel").attr('style', `background-image: url(${imageArray[count]})`)
}
updateBG();

$(".right-arrow").click("click", rightClick)

function rightClick (event) {
  if (count >= 4) {
    return count = 0
  }
  count += 1;
  updateBG();
}

$(".left-arrow").click("click", leftClick)

function leftClick (event) {
  if (count <= 0) {
    return count = 5;
  }
  count += 1;
  updateBG();
}
