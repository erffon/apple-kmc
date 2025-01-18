$(document).ready(function () {
  $(".slider").slick({
    rtl: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    draggable: true,
    cssEase: "ease-out",
  });
});
$(document).ready(function () {
  $(".product_slider").slick({
    rtl: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4.5, // Show 3 items (adjust as needed)
    slidesToScroll: 1,
    draggable: true,
    cssEase: "ease-out",
    arrows: true,
    centerMode: false, // Disable center mode
    initialSlide: 0, // Start from the first item
  });
});

function convertToFarsiNumbers(element) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  element.innerHTML = element.innerHTML.replace(/\d/g, (d) => persianDigits[d]);
}
$(".fa-num").each(function () {
  convertToFarsiNumbers(this);
});
