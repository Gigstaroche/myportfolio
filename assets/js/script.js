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

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-switch');
const themeLabel = document.querySelector('.theme-switch-label');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeLabel(savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', function() {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeLabel(newTheme);
  updateThemeIcon(newTheme);
});

// Update theme label based on current theme
function updateThemeLabel(theme) {
  if (theme === 'light') {
    themeLabel.textContent = 'Light';
  } else {
    themeLabel.textContent = 'Dark';
  }
}

// Update theme icon based on current theme
function updateThemeIcon(theme) {
  if (theme === 'light') {
    themeIcon.setAttribute('name', 'moon-outline');
  } else {
    themeIcon.setAttribute('name', 'sunny-outline');
  }
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

// Initialize filter to show all items on page load
filterFunc("all");

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



// Resume download with modern security modal
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  
  // Reset form
  const form = document.getElementById('resume-form');
  if (form) form.reset();
  updateResumeSubmitButton();
}

// Resume form validation
function updateResumeSubmitButton() {
  const nameField = document.getElementById('resume-name');
  const emailField = document.getElementById('resume-email');
  const purposeField = document.getElementById('resume-purpose');
  const agreeCheckbox = document.getElementById('resume-agree');
  const submitBtn = document.querySelector('.resume-submit-btn');
  
  if (!nameField || !emailField || !purposeField || !agreeCheckbox || !submitBtn) return;
  
  const isValid = nameField.value.trim() && 
                 emailField.value.trim() && 
                 emailField.value.includes('@') && 
                 purposeField.value && 
                 agreeCheckbox.checked;
  
  submitBtn.disabled = !isValid;
}

// Initialize resume modal
function initResumeModal() {
  // Close modal when clicking outside
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeResumeModal();
      }
    });
  }
  
  // Add event listeners to resume form fields
  const resumeFields = ['resume-name', 'resume-email', 'resume-purpose', 'resume-agree'];
  resumeFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('input', updateResumeSubmitButton);
      field.addEventListener('change', updateResumeSubmitButton);
    }
  });
  
  // Handle resume form submission
  const resumeForm = document.getElementById('resume-form');
  if (resumeForm) {
    resumeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameField = document.getElementById('resume-name');
      const emailField = document.getElementById('resume-email');
      const purposeField = document.getElementById('resume-purpose');
      const companyField = document.getElementById('resume-company');
      const agreeCheckbox = document.getElementById('resume-agree');
      const submitBtn = document.querySelector('.resume-submit-btn');
      
      if (!agreeCheckbox.checked) {
        alert('Please agree to the terms before downloading.');
        return;
      }
      
      // Show processing state
      submitBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon>Verifying...';
      submitBtn.disabled = true;
      
      // Create download log
      const downloadLog = {
        name: nameField.value,
        email: emailField.value,
        purpose: purposeField.value,
        company: companyField.value || 'Not specified',
        timestamp: new Date().toISOString()
      };
      
      console.log('Resume download request:', downloadLog);
      
      // Simulate verification delay
      setTimeout(() => {
        // Trigger download
        const link = document.createElement('a');
        link.href = './assets/Felix_Mutai_Resume.pdf';
        link.download = `Felix_Mutai_Resume_${Date.now()}.pdf`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Success feedback
        submitBtn.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>Downloaded!';
        submitBtn.style.background = '#22c55e';
        
        // Close modal after delay
        setTimeout(() => {
          closeResumeModal();
          submitBtn.innerHTML = '<ion-icon name="shield-checkmark-outline"></ion-icon>Verify & Download';
          submitBtn.style.background = '';
        }, 2000);
        
      }, 1500);
    });
  }
}

// Contact information protection
function initContactProtection() {
  // Obfuscate email initially
  const emailLink = document.querySelector('a[href*="mailto"]');
  if (emailLink) {
    const originalEmail = emailLink.textContent;
    emailLink.textContent = 'Click to reveal email';
    emailLink.style.cursor = 'pointer';
    
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (this.textContent === 'Click to reveal email') {
        this.textContent = originalEmail;
        this.href = `mailto:${originalEmail}`;
      }
    });
  }
  
  // Obfuscate phone initially
  const phoneLink = document.querySelector('a[href*="tel"]');
  if (phoneLink) {
    const originalPhone = phoneLink.textContent;
    phoneLink.textContent = 'Click to reveal phone';
    phoneLink.style.cursor = 'pointer';
    
    phoneLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (this.textContent === 'Click to reveal phone') {
        this.textContent = originalPhone;
        this.href = `tel:${originalPhone.replace(/\s+/g, '').replace('/', ',')}`;
      }
    });
  }
}

// Initialize contact protection when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initContactProtection();
  initBasicForm();
  initResumeModal();
});

// Basic form handling - no complex validation
function initBasicForm() {
  const contactForm = document.getElementById('contact-form');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  if (!contactForm || !submitBtn) return;

  // Simple form validation
  function updateSubmitButton() {
    const nameField = contactForm.querySelector('input[name="name"]');
    const emailField = contactForm.querySelector('input[name="email"]');
    const reasonField = contactForm.querySelector('select[name="reason"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');
    
    const isValid = nameField.value.trim() && 
                   emailField.value.trim() && 
                   emailField.value.includes('@') && 
                   reasonField.value && 
                   messageField.value.trim();
    
    submitBtn.disabled = !isValid;
  }

  // Add event listeners
  formInputs.forEach(input => {
    input.addEventListener('input', updateSubmitButton);
    input.addEventListener('blur', updateSubmitButton);
  });

  // Form status display
  function showFormStatus(message, type) {
    if (formStatus) {
      formStatus.textContent = message;
      formStatus.className = `form-status ${type}`;
    }
  }

  // Handle form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation check
    const nameField = contactForm.querySelector('input[name="name"]');
    const emailField = contactForm.querySelector('input[name="email"]');
    const reasonField = contactForm.querySelector('select[name="reason"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');
    
    if (!nameField.value.trim() || !emailField.value.trim() || !reasonField.value || !messageField.value.trim()) {
      showFormStatus('Please fill in all fields.', 'error');
      return;
    }
    
    if (!emailField.value.includes('@')) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show loading
    showFormStatus('Sending your message...', 'loading');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';
    
    // Submit form naturally to Web3Forms
    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        showFormStatus('✅ Message sent successfully! I will get back to you shortly.', 'success');
        contactForm.reset();
        updateSubmitButton();
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    })
    .catch(error => {
      console.error('Submission error:', error);
      showFormStatus('❌ Message could not be sent. Please email me directly at info@mutaidev.co.ke', 'error');
    })
    .finally(() => {
      setTimeout(() => {
        submitBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
        updateSubmitButton();
      }, 3000);
    });
  });

  // Initial state
  updateSubmitButton();
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

// Smart Interactive Features
document.addEventListener('DOMContentLoaded', function() {
  
  // Smart Form Validation with Enhanced Visual Feedback
  const formInputs = document.querySelectorAll('.form-input');
  const formButtons = document.querySelectorAll('.form-btn, .resume-submit-btn');
  
  formInputs.forEach(input => {
    // Add enhanced focus effects
    input.addEventListener('focus', function() {
      this.classList.add('pulse-glow');
    });
    
    input.addEventListener('blur', function() {
      this.classList.remove('pulse-glow');
      validateField(this);
    });
    
    // Real-time validation
    input.addEventListener('input', function() {
      clearTimeout(this.validationTimeout);
      this.validationTimeout = setTimeout(() => {
        validateField(this);
      }, 300);
    });
  });
  
  // Smart Field Validation
  function validateField(field) {
    const value = field.value.trim();
    let isValid = false;
    
    if (field.type === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (field.tagName === 'SELECT') {
      isValid = value && value !== '';
    } else if (field.tagName === 'TEXTAREA') {
      isValid = value.length >= 10;
    } else {
      isValid = value.length >= 2;
    }
    
    // Visual feedback
    field.classList.remove('valid', 'invalid');
    if (value) {
      field.classList.add(isValid ? 'valid' : 'invalid');
    }
    
    return isValid;
  }
  
  // Smart Button Loading States
  function showButtonLoading(button) {
    button.classList.add('loading-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading-spinner">Sending...</span>';
    button.disabled = true;
    
    return () => {
      button.classList.remove('loading-btn');
      button.innerHTML = originalText;
      button.disabled = false;
    };
  }
  
  // Smart Status Messages
  function showStatusMessage(container, type, message, duration = 5000) {
    const existingMessage = container.querySelector('.status-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    const statusDiv = document.createElement('div');
    statusDiv.className = `status-message ${type}`;
    statusDiv.innerHTML = `
      <ion-icon name="${type === 'success' ? 'checkmark-circle' : 'alert-circle'}"></ion-icon>
      <span>${message}</span>
    `;
    
    container.appendChild(statusDiv);
    
    // Trigger show animation
    requestAnimationFrame(() => {
      statusDiv.classList.add('show');
    });
    
    // Auto-hide after duration
    setTimeout(() => {
      statusDiv.classList.remove('show');
      setTimeout(() => {
        if (statusDiv.parentNode) {
          statusDiv.remove();
        }
      }, 400);
    }, duration);
  }
  
  // Smart Hover Effects for Interactive Elements
  const interactiveElements = document.querySelectorAll('.form-btn, .resume-submit-btn, .info_more-btn');
  interactiveElements.forEach(element => {
    element.classList.add('smart-hover', 'smart-btn');
  });
  


  // Theme persistence
  if (!localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  
  console.log('Portfolio features initialized');
});

// Add enhanced classes
document.body.classList.add('enhanced-typography');
const smartElements = document.querySelectorAll('.service-item, .testimonials-item, .blog-post-item');
smartElements.forEach(element => {
  element.classList.add('smart-hover');
});