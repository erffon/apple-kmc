$(document).ready(function () {
  $(".slider").slick({
    rtl: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3.5,
    slideToScroll: 1,
    draggable: true,
    cssEase: "ease-out",
  });
});

function convertToFarsiNumbers(element) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  element.innerHTML = element.innerHTML.replace(/\d/g, (d) => persianDigits[d]);
}
$(".fa-num").each(function () {
  convertToFarsiNumbers(this);
});
