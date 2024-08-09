document.addEventListener('DOMContentLoaded', () => {
    let navLinks = document.querySelectorAll('.nav-link');
    let sections = document.querySelectorAll('section');

    window.onscroll = () => {
        let scrollPosition = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let activeLink = document.querySelector(`.nav-link[href='#${id}']`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // Close the menu on click for small screens
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            let navbarToggler = document.querySelector('.navbar-toggler');
            let navbarCollapse = document.querySelector('#navbarNavAltMarkup');

            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
