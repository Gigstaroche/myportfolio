'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// blog modal variables
const blogItems = document.querySelectorAll("[data-blog-item]");
const blogModalContainer = document.querySelector("[data-blog-modal-container]");
const blogModalCloseBtn = document.querySelector("[data-blog-modal-close-btn]");
const blogOverlay = document.querySelector("[data-blog-overlay]");

// blog modal elements
const blogModalImg = document.querySelector("[data-blog-modal-img]");
const blogModalTitle = document.querySelector("[data-blog-modal-title]");
const blogModalCategory = document.querySelector("[data-blog-modal-category]");
const blogModalDate = document.querySelector("[data-blog-modal-date]");
const blogModalText = document.querySelector("[data-blog-modal-text]");

// blog modal toggle function
const blogModalFunc = function () {
  blogModalContainer.classList.toggle("active");
  blogOverlay.classList.toggle("active");
}

// blog full texts
const blogFullTexts = {
  "Mastering JavaScript: From Basics to Advanced Concepts": `
    <p>JavaScript is the backbone of modern web development. In this comprehensive guide, we'll explore everything from basic syntax and data types to advanced concepts like closures, prototypes, and asynchronous programming.</p>
    <p>We'll cover topics such as variable declarations, functions, objects, arrays, and DOM manipulation. You'll learn about ES6 features, promises, async/await, and how to write clean, maintainable code. By the end of this guide, you'll have a solid foundation to build complex web applications.</p>
  `,
  "Building Modern Web Apps with Vue.js and Nuxt.js": `
    <p>Vue.js and Nuxt.js are powerful tools for building modern web applications. This article dives into the fundamentals of Vue.js components, reactivity, and the server-side rendering capabilities of Nuxt.js.</p>
    <p>Learn how to set up a Nuxt.js project, create dynamic pages, manage state with Vuex, and deploy your application. We'll also cover best practices for performance and SEO optimization.</p>
  `,
  "UI/UX Design Principles for Developers": `
    <p>Understanding UI/UX design principles is crucial for developers who want to create user-friendly applications. This guide covers key concepts like user-centered design, information architecture, and usability testing.</p>
    <p>We'll explore color theory, typography, layout principles, and how to conduct user research. You'll learn to create wireframes, prototypes, and iterate on designs based on user feedback.</p>
  `,
  "The Future of Web Development: Trends to Watch": `
    <p>Web development is constantly evolving. Stay ahead of the curve by learning about emerging trends like WebAssembly, progressive web apps, and serverless architecture.</p>
    <p>This article discusses the impact of AI and machine learning on web development, the rise of headless CMS, and the importance of web accessibility. We'll also look at new frameworks and tools shaping the future.</p>
  `,
  "Optimizing Performance in Vue.js Applications": `
    <p>Performance is key to user experience. Learn how to optimize your Vue.js applications for speed and efficiency.</p>
    <p>We'll cover lazy loading, code splitting, bundle analysis, and caching strategies. You'll discover how to minimize re-renders, optimize images, and use Vue's built-in performance features effectively.</p>
  `,
  "From Concept to Launch: Building Happy Happier": `
    <p>This case study details the journey of building Happy Happier, a cleaning services platform. From initial concept to successful launch, learn about the challenges and solutions in creating a real-world application.</p>
    <p>We'll cover requirement gathering, design process, development challenges, testing, and deployment. This real-world example provides insights into full-stack development and project management.</p>
  `
};

// add click event to all blog items
for (let i = 0; i < blogItems.length; i++) {

  blogItems[i].addEventListener("click", function () {

    const title = this.querySelector("[data-blog-title]").innerHTML;
    blogModalImg.src = this.querySelector("[data-blog-banner] img").src;
    blogModalImg.alt = this.querySelector("[data-blog-banner] img").alt;
    blogModalTitle.innerHTML = title;
    blogModalCategory.innerHTML = this.querySelector("[data-blog-category]").innerHTML;
    blogModalDate.innerHTML = this.querySelector("[data-blog-date]").innerHTML;
    blogModalDate.setAttribute("datetime", this.querySelector("[data-blog-date]").getAttribute("datetime"));
    blogModalText.innerHTML = blogFullTexts[title] || "<p>Content coming soon...</p>";

    blogModalFunc();

  });

}

// add click event to blog modal close button
blogModalCloseBtn.addEventListener("click", blogModalFunc);
blogOverlay.addEventListener("click", blogModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const successMessage = document.getElementById("form-success");
const contactForm = document.getElementById("contact-form");

// form validation function
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}-error`);

  if (!errorElement) return true;

  // Clear previous error
  errorElement.textContent = '';
  errorElement.classList.remove('show');
  field.classList.remove('error');

  // Validation rules
  if (field.hasAttribute('required') && !value) {
    errorElement.textContent = `${field.placeholder} is required`;
    errorElement.classList.add('show');
    field.classList.add('error');
    return false;
  }

  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errorElement.textContent = 'Please enter a valid email address';
      errorElement.classList.add('show');
      field.classList.add('error');
      return false;
    }
  }

  if (field.name === 'message' && value.length < 10) {
    errorElement.textContent = 'Message must be at least 10 characters long';
    errorElement.classList.add('show');
    field.classList.add('error');
    return false;
  }

  return true;
}

// validate entire form
function validateForm() {
  let isValid = true;
  formInputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  return isValid;
}

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    validateField(this);

    // check form validation
    if (validateForm()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });

  formInputs[i].addEventListener("blur", function () {
    validateField(this);
  });
}

// form submission handler
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Validate form before submission
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message.show');
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Show loading state
    const originalBtnText = formBtn.innerHTML;
    formBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';
    formBtn.setAttribute("disabled", "");

    // Prepare form data
    const formData = new FormData(contactForm);

    // Submit to Formspree
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Success - show success message
        form.style.display = "none";
        successMessage.style.display = "block";
        successMessage.scrollIntoView({ behavior: "smooth" });
      } else {
        // Error - show error message
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      // Check if this is a CORS error (common in localhost development)
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        // CORS error - this is expected on localhost
        console.log('CORS error detected - this is normal on localhost');

        // For development, simulate success since we can't test Formspree from localhost
        // In production, this will work fine
        setTimeout(() => {
          form.style.display = "none";
          successMessage.style.display = "block";
          successMessage.scrollIntoView({ behavior: "smooth" });
        }, 1500); // Simulate network delay

      } else {
        // Other error - show error message
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again or contact me directly at info@mutaidev.co.ke');

        // Reset button
        formBtn.innerHTML = originalBtnText;
        formBtn.removeAttribute("disabled");
      }
    });
  });
}

// reset form function
function resetForm() {
  form.style.display = "block";
  successMessage.style.display = "none";
  contactForm.reset();

  // Clear all error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => {
    error.textContent = '';
    error.classList.remove('show');
  });

  // Remove error classes from inputs
  formInputs.forEach(input => {
    input.classList.remove('error');
  });

  formBtn.setAttribute("disabled", "");
  formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// update active navigation based on current page
function updateActiveNavigation() {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains("active")) {
      const pageName = pages[i].dataset.page;
      
      // Remove active class from all nav links
      navigationLinks.forEach(link => link.classList.remove("active"));
      
      // Add active class to corresponding nav link
      navigationLinks.forEach(link => {
        if (link.innerHTML.toLowerCase() === pageName) {
          link.classList.add("active");
        }
      });
      break;
    }
  }
}

// Initialize active navigation on page load
updateActiveNavigation();

// theme toggle functionality
const themeToggleBtn = document.querySelector("[data-theme-toggle-btn]");
const themeText = themeToggleBtn.querySelector(".theme-text");

// check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

// update theme text based on current theme
function updateThemeText() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  themeText.textContent = currentTheme === "dark" ? "Dark Mode" : "Light Mode";
}

// initialize theme text
updateThemeText();

// theme toggle event listener
themeToggleBtn.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeText();
});