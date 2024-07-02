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