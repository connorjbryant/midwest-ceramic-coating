import './blocks/reveal';

// On load wp block style animation
jQuery(window).on("load", function(){
  jQuery("body").addClass("page-is-loaded");
})

jQuery(document).ready(function($){

  //Animate on scroll
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

});