jQuery(document).ready(function($) {
  // Smooth scroll class for navBar items for transitioning between hash-routed sections
  $(".smoothscroll").on("click", function(e) {
    e.preventDefault();

    let target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        200,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });

  // Highlight the navbar item that corresponds with current section being displayed.
  const sections = $("section");
  const navigationLinks = $("#nav-wrap a");

  sections.waypoint({
    handler: function(event, direction) {
      let activeSection = $(this);
      if (direction === "up") activeSection = activeSection.prev();

      let activeLink = $('#nav-wrap a[href="#' + activeSection.attr("id") + '"]');

      navigationLinks.parent().removeClass("current");
      activeLink.parent().addClass("current");
    },
    offset: "35%",
  });

  // Give navbar opaque background when user scrolls past 20% of header element.
  $(window).on("scroll", function() {
    if ($(window).scrollTop() < $("header").height() * 0.05) {
      $("#nav-wrap").removeClass("opaque");
    } else {
      $("#nav-wrap").addClass("opaque");
    }
  });
});
