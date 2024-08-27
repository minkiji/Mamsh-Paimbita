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