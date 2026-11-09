
 const animateCounters = () => {
    document.querySelectorAll('.counter').forEach(counter => {
      if(counter.dataset.done) return;
      const rect = counter.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60){
        counter.dataset.done = 'true';
        const target = Number(counter.dataset.target);
        let value = 0;
        const step = Math.max(1, Math.ceil(target / 75));
        const timer = setInterval(() => {
          value += step;
          if(value >= target){ value = target; clearInterval(timer); }
          counter.textContent = value;
        }, 18);
      }
    });
  };
  window.addEventListener('scroll', animateCounters);
  window.addEventListener('load', animateCounters);
