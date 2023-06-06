/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("body").classList.add("loaded");

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Pre Loader Screen
// window.addEventListener('DOMContentLoaded', event => {
//     document.querySelector('body').classList.add('loaded');
// $('body').toggleClass('loaded');

// const sidebarWrapper = document.getElementById('sidebar-wrapper');
// let scrollToTopVisible = false;
// // Closes the sidebar menu
// const menuToggle = document.body.querySelector('.menu-toggle');
// menuToggle.addEventListener('click', event => {
//     event.preventDefault();
//     sidebarWrapper.classList.toggle('active');
//     _toggleMenuIcon();
//     menuToggle.classList.toggle('active');
// })

// // Closes responsive menu when a scroll trigger link is clicked
// var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
// scrollTriggerList.map(scrollTrigger => {
//     scrollTrigger.addEventListener('click', () => {
//         sidebarWrapper.classList.remove('active');
//         menuToggle.classList.remove('active');
//         _toggleMenuIcon();
//     })
// });

// function _toggleMenuIcon() {
//     const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
//     const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
//     if (menuToggleBars) {
//         menuToggleBars.classList.remove('fa-bars');
//         menuToggleBars.classList.add('fa-xmark');
//     }
//     if (menuToggleTimes) {
//         menuToggleTimes.classList.remove('fa-xmark');
//         menuToggleTimes.classList.add('fa-bars');
//     }
// }

// // Scroll to top button appear
// document.addEventListener('scroll', () => {
//     const scrollToTop = document.body.querySelector('.scroll-to-top');
//     if (document.documentElement.scrollTop > 100) {
//         if (!scrollToTopVisible) {
//             fadeIn(scrollToTop);
//             scrollToTopVisible = true;
//         }
//     } else {
//         if (scrollToTopVisible) {
//             fadeOut(scrollToTop);
//             scrollToTopVisible = false;
//         }
//     }
// })
// });

// function fadeOut(el) {
//     el.style.opacity = 1;
//     (function fade() {
//         if ((el.style.opacity -= .1) < 0) {
//             el.style.display = "none";
//         } else {
//             requestAnimationFrame(fade);
//         }
//     })();
// };

// function fadeIn(el, display) {
//     el.style.opacity = 0;
//     el.style.display = display || "block";
//     (function fade() {
//         var val = parseFloat(el.style.opacity);
//         if (!((val += .1) > 1)) {
//             el.style.opacity = val;
//             requestAnimationFrame(fade);
//         }
//     })();
// };
