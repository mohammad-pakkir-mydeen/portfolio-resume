


const skillBars = document.querySelectorAll('.skill-bar');

window.addEventListener('load', () => {
  skillBars.forEach(skillBar => {
    const circle = skillBar.querySelector('.circle');
    const fill = skillBar.querySelector('.fill');
    const percent = parseFloat(skillBar.dataset.percent);

    const circumference = circle.offsetWidth * Math.PI;
    const animationDuration = 2000; // Adjust duration (in milliseconds)

    fill.style.strokeDasharray = `${circumference} ${circumference}`;
    fill.style.strokeDashoffset = circumference;

    const animate = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        fill.style.strokeDashoffset = circumference - (progress / 100) * circumference;
        if (progress === percent) {
          clearInterval(interval);
        }
      }, animationDuration / percent);
    };

    animate();
  });
});