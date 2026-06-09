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

  submenuLinks.on("click", function(e){
    if (window.innerWidth <= 768){
      e.preventDefault();

      const parentItem = $(this).parent();
      const isOpen = parentItem.toggleClass("is-submenu-open").hasClass(".is-submenu-open");

      $(this).attr("aria-expanded", isOpen ? "true" : "false");
    }
  });

});