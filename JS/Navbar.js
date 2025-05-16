


    // const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();

    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/+$/, '').toLowerCase();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });


   



  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });