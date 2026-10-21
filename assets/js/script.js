'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

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
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");
    
    if (avatar && modalImg) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }
    if (title && modalTitle) modalTitle.innerHTML = title.innerHTML;
    if (text && modalText) modalText.innerHTML = text.innerHTML;

    testimonialsModalFunc();
  });
}

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-switch');
const themeLabel = document.querySelector('.theme-switch-label');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeLabel(savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeLabel(newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeLabel(theme) {
  if (themeLabel) themeLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
}

function updateThemeIcon(theme) {
  if (themeIcon) {
    themeIcon.setAttribute('name', theme === 'light' ? 'moon-outline' : 'sunny-outline');
  }
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// blog modal variables
const blogItems = document.querySelectorAll("[data-blog-item]");
const blogModalContainer = document.querySelector("[data-blog-modal-container]");
const blogModalCloseBtn = document.querySelector("[data-blog-modal-close-btn]");
const blogOverlay = document.querySelector("[data-blog-overlay]");

const blogModalImg = document.querySelector("[data-blog-modal-img]");
const blogModalTitle = document.querySelector("[data-blog-modal-title]");
const blogModalCategory = document.querySelector("[data-blog-modal-category]");
const blogModalDate = document.querySelector("[data-blog-modal-date]");
const blogModalText = document.querySelector("[data-blog-modal-text]");

const blogModalFunc = function () {
  if (blogModalContainer && blogOverlay) {
    blogModalContainer.classList.toggle("active");
    blogOverlay.classList.toggle("active");
  }
}

const blogFullTexts = {
  "AWS Architecture: Hardening Multi-Tier VPCs on a Budget": `
    <p>Designing cloud architecture for startups and SMEs requires balancing enterprise security with strict cost efficiency. A multi-tier VPC provides robust isolation between public ingress and private data layers.</p>
    <p>Key architecture best practices include deploying public subnets solely for Internet-facing Application Load Balancers and NAT Gateways, while keeping EC2 compute instances and RDS database clusters entirely within private subnets. Configuring strict Security Group rules and IAM least-privilege roles ensures zero unauthorized exposure.</p>
    <p>Automating CloudWatch operational alarms and billing thresholds prevents unexpected cost overruns while maintaining 99.9% uptime.</p>
  `,
  "The QA Engineer's Blueprint: Writing Bug Reports Developers Love": `
    <p>After 5+ years of logging defects on global crowdsourced testing platforms like uTest and Testlio, one truth stands out: a bug report is only as good as its reproducibility.</p>
    <p>A high-impact defect report should include: a crystal-clear title highlighting the failure and component, exact environmental specs (OS, build number, browser version), precondition setup, deterministic step-by-step reproduction instructions, actual vs expected results, and accompanying Charles Proxy network logs or Postman payload captures.</p>
    <p>Providing clean diagnostic data drastically reduces developer triage latency and accelerates release cycles.</p>
  `,
  "Building Scalable Single-Page Apps with Vue.js & REST APIs": `
    <p>Vue.js provides a progressive, approachable framework for building reactive single-page applications. When architecting enterprise interfaces, structuring modular components and centralizing state logic is paramount.</p>
    <p>By leveraging Vue's reactivity system alongside clean asynchronous REST API abstraction layers (Axios/Fetch), developers can maintain seamless user experiences with optimistic UI updates and resilient error handling.</p>
  `,
  "Hardening Ubuntu & Kali Linux: Practical Defensive Essentials": `
    <p>Securing Linux servers is the foundational pillar of cloud infrastructure reliability. Whether deploying production workloads on Ubuntu Server or conducting vulnerability testing in Kali Linux, defensive hardening is essential.</p>
    <p>Essential steps include disabling password-based SSH authentication in favor of ED25519 keys, configuring Uncomplicated Firewall (UFW) to enforce strict ingress rules, setting up Fail2ban against brute-force attacks, and automating daily security patches with unattended-upgrades.</p>
  `
};

for (let i = 0; i < blogItems.length; i++) {
  blogItems[i].addEventListener("click", function () {
    const titleElem = this.querySelector("[data-blog-title]");
    const bannerElem = this.querySelector("[data-blog-banner] img");
    const catElem = this.querySelector("[data-blog-category]");
    const dateElem = this.querySelector("[data-blog-date]");

    if (!titleElem) return;
    const title = titleElem.innerText.trim();

    if (bannerElem && blogModalImg) {
      blogModalImg.src = bannerElem.src;
      blogModalImg.alt = bannerElem.alt;
    }
    if (blogModalTitle) blogModalTitle.innerHTML = title;
    if (catElem && blogModalCategory) blogModalCategory.innerHTML = catElem.innerHTML;
    if (dateElem && blogModalDate) {
      blogModalDate.innerHTML = dateElem.innerHTML;
      blogModalDate.setAttribute("datetime", dateElem.getAttribute("datetime") || "");
    }
    if (blogModalText) {
      blogModalText.innerHTML = blogFullTexts[title] || "<p>Detailed case study and technical breakdown coming soon.</p>";
    }

    blogModalFunc();
  });
}

if (blogModalCloseBtn) blogModalCloseBtn.addEventListener("click", blogModalFunc);
if (blogOverlay) blogOverlay.addEventListener("click", blogModalFunc);

// Filter & category selection
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

const filterFunc = function (selectedValue) {
  const normSelected = selectedValue.trim().toLowerCase();
  for (let i = 0; i < filterItems.length; i++) {
    const itemCat = (filterItems[i].dataset.category || "").trim().toLowerCase();
    if (normSelected === "all" || normSelected === itemCat) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

filterFunc("all");

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText;
    if (selectValue) selectValue.innerText = selectedValue;
    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText;
    if (selectValue) selectValue.innerText = selectedValue;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.dataset.pageTarget || this.innerText.trim().toLowerCase();
    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// Contact Form Handling
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  if (!contactForm || !submitBtn) return;

  function showStatus(msg, type) {
    if (formStatus) {
      formStatus.textContent = msg;
      formStatus.className = `form-status ${type}`;
    }
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameField = contactForm.querySelector('input[name="name"]');
    const emailField = contactForm.querySelector('input[name="email"]');
    const reasonField = contactForm.querySelector('select[name="reason"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');

    if (!nameField.value.trim() || !emailField.value.trim() || !reasonField.value || !messageField.value.trim()) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    showStatus('Sending your message securely...', 'loading');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        showStatus('✅ Thank you! Your message has been sent successfully. Felix will get back to you shortly.', 'success');
        contactForm.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    })
    .catch(err => {
      console.error(err);
      showStatus('❌ Message delivery error. Please contact directly at info@mutaidev.co.ke', 'error');
    })
    .finally(() => {
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
      }, 3500);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
});
