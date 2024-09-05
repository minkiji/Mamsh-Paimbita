// FAQs checkbox close when it opens another
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
              checkboxes.forEach(otherCheckbox => {
                  if (otherCheckbox !== checkbox) {
                      otherCheckbox.checked = false;
                  }
              });
          }
      });
  });
});


// Fade up load
const elements = document.querySelectorAll(".animate-load");

function fadeInElements() {
  let delay = 0;
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("image--visible");
    }, delay);
    delay += 0; // Adjust the delay as needed
  });
}

window.addEventListener("load", fadeInElements);



// Fade in effects when scrolled
const paragraphs = document.querySelectorAll(".animate-delay");

document.addEventListener("scroll", function () {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("paragraph--visible");
    }
  })
})

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
    (window.innerheight - 200 || document.documentElement.clientHeight - 200)
  )
}


// Header effect
document.addEventListener('scroll' , () => {
  const header = document.querySelector('nav');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger_menu');
  const navMenu = document.querySelector('.nav_menu');
  const bars = document.querySelectorAll('.hamburger_bar');
  const navLinks = navMenu.querySelectorAll('a');

  // Toggle menu on hamburger click
  hamburgerMenu.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    bars.forEach(bar => bar.classList.toggle('change'));
  });

  // Close menu when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show');
      bars.forEach(bar => bar.classList.remove('change'));
    });
  });
});
