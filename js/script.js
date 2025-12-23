const targets = document.querySelectorAll('.bar-chart-002');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bar-chart-003');
    }
  });
},{
    // rootMargin: '-50% 0px -50% 0px',
    threshold: 1
});

targets.forEach(target => observer.observe(target));

