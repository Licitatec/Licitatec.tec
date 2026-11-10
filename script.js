const animateCounters = () => {
  document.querySelectorAll('.counter').forEach((counter) => {
    if (counter.dataset.done) return;
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      counter.dataset.done = 'true';
      const target = Number(counter.dataset.target);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 75));
      const timer = setInterval(() => {
        value += step;
        if (value >= target) {
          value = target;
          clearInterval(timer);
        }
        counter.textContent = value;
      }, 18);
    }
  });
};

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const form = new FormData(contactForm);
    const subject = `Solicitação de consultoria - ${form.get('nome')}`;
    const message = [
      `Nome: ${form.get('nome')}`,
      `E-mail: ${form.get('email')}`,
      `Celular / WhatsApp: ${form.get('telefone') || 'Não informado'}`,
      `Área de atuação: ${form.get('area') || 'Não informada'}`,
      `Principal dificuldade: ${form.get('dificuldade')}`,
      `Já participou de licitações?: ${form.get('experiencia') || 'Não informado'}`,
      `Perfil: ${form.get('perfil') || 'Não informado'}`,
    ].join('\n');

    const mailto = `mailto:licitatec1000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  });
}
