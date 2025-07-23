// 🌊 Smooth Scroll for "Enroll Now"
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

// 💬 Simple Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.style.display = 'none');
  testimonials[index].style.display = 'block';
}

// Auto-cycle every 5s
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 5000);

// 👑 Highlight Best Pricing Plan
document.addEventListener('DOMContentLoaded', () => {
  const plans = document.querySelectorAll('.plan');
  plans.forEach(plan => {
    plan.addEventListener('click', () => {
      plans.forEach(p => p.classList.remove('featured'));
      plan.classList.add('featured');
    });
  });
});
