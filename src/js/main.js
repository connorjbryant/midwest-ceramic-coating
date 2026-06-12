jQuery(document).ready(function($){
  // Mobile navigation toggle
  const hamburger = $(".js-icon");
  const navmenu = $(".nav-menu");
  const submenuLinks = $(".menu-item-has-children > a");

  hamburger.attr("aria-expanded", "false");

  hamburger.on("click", function(){
    const isOpen = navmenu.toggleClass("is-open").hasClass("is-open");
    hamburger.attr("aria-expanded", isOpen ? "true" : "false");
  });

  submenuLinks.attr("aria-expanded", "false");

  // Make actual submenu links clickable, while arrow section expanded other links
  submenuLinks.on("click", function(e){
    if (window.innerWidth <= 768){
      const clickX = e.originalEvent.clientX;
      const linkRight = this.getBoundingClientRect().right;
      const toggleZone = 50;

      if (linkRight - clickX <= toggleZone){
        e.preventDefault();

        const parentItem = $(this).parent();
        const isOpen = parentItem.toggleClass("is-submenu-open").hasClass("is-submenu-open");

        $(this).attr("aria-expanded", isOpen ? "true" : "false");
      }
    }
  });

});