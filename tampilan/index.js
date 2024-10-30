// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Listen for click on the document
document.addEventListener('click', function (event) {

   if (!event.target.classList.contains('accordion-toggle')) return;

   var content = document.querySelector(event.target.hash);
    if (!content) return;

    event.preventDefault();

      if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }

    // Toggle our content
    content.classList.toggle('active');
})
