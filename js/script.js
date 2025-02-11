// Smooth scrolling effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Filter portfolio projects by category
const filters = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.portfolio-item');

filters.forEach(filter => {
    filter.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Form validation
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        if (!email || !message) {
            alert('Mohon isi semua kolom!');
            e.preventDefault();
        }
    });
}
