// ── Navbar scroll ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Hamburger menu ──
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // ── Scroll reveal ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Contact form ──
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = '#10B981';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.style.color = scrollY >= top && scrollY < top + height ? 'var(--blue)' : '';
      }
    });
  });