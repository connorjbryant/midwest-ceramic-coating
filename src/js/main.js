import './blocks/reveal';
import Splide from '@splidejs/splide';

// On load wp block style animation
jQuery(window).on("load", function(){
  jQuery("body").addClass("page-is-loaded");
})

jQuery(document).ready(function($){

  // AOS wp block styles
  $(".wp-block-columns.is-style-slanted-cards > .wp-block-column").each(function(index){
    $(this)
      .attr("data-aos", "fade-up")
      .attr("data-aos-delay", index * 150);
  });

  $(".is-style-aos-fade-up").attr("data-aos", "fade-up");

  //Animate on scroll initialization
  if (typeof AOS !== "undefined"){
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
      offset: 80
    });
  }

  // Mobile navigation toggle
  const hamburger = $(".js-icon");
  const navmenu = $(".nav-menu");
  const submenuLinks = $(".menu-item-has-children > a");

  hamburger.attr("aria-expanded", "false");

  hamburger.on("click", function(){
    const isOpen = navmenu.toggleClass("is-open").hasClass("is-open");
    hamburger
      .toggleClass("change", isOpen)
      .attr("aria-expanded", isOpen ? "true" : "false");
  });

  submenuLinks.attr("aria-expanded", "false");

  // Make actual submenu links clickable, while arrow section expanded other links
  submenuLinks.on("click", function(e){
    if (window.innerWidth <= 1024){
      const clickX = e.originalEvent.clientX;
      const linkRight = this.getBoundingClientRect().right;
      const toggleZone = 100;

      if (linkRight - clickX <= toggleZone){
        e.preventDefault();

        const parentItem = $(this).parent();
        const isOpen = parentItem.toggleClass("is-submenu-open").hasClass("is-submenu-open");

        $(this).attr("aria-expanded", isOpen ? "true" : "false");
      }
    }
  });

  // Keyboard: tabbing to parent open submenu automatically
  submenuLinks.on("focus", function(){
    if (window.innerWidth <= 1024){
      const parentItem = $(this).parent();

      parentItem.addClass("is-submenu-open");
      $(this).attr("aria-expanded", "true");
    }
  })

  // Product slider
  $(".product-galleryblock__slider").each(function(){
    new Splide(this, {
      type: "loop",
      perPage: 3,
      gap: "1.5rem",
      autoplay: true,
      interval: 3500,
      pauseOnHover: true,
      pauseOnFocus: true,
      arrows: true,
      pagination: true,
      breakpoints: {
        768: {
          perPage: 1
        }
      }
    }).mount();
  });

});