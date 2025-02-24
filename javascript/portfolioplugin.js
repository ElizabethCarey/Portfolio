document.addEventListener("DOMContentLoaded", function() {
    const arrowImage = document.querySelector(".landing-page-assets img");
  
    arrowImage.addEventListener("mouseenter", function() {
      arrowImage.src = "assets/portfolio_landing_page_arrow_2.svg";
    });
  
    arrowImage.addEventListener("mouseleave", function() {
      arrowImage.src = "assets/portfolio_landing_page_arrow.svg";
    });
  });

