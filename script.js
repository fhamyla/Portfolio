document.addEventListener('DOMContentLoaded', function() { 
    const mainHead = document.querySelector('.main-head');
    const skillsSection = document.querySelector('.skills');
    const homeSection = document.querySelector('#home');
    const links = document.querySelectorAll('ul li a');
    
    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const skillsTop = skillsSection.offsetTop;
        
        if (scrollPosition < homeBottom) {
            mainHead.classList.remove('transparent');
            links.forEach(link => link.classList.remove('transparent'));
        } else if (scrollPosition >= skillsTop - 100) {
            mainHead.classList.add('transparent');
            links.forEach(link => link.classList.add('transparent'));
        } else {
            mainHead.classList.remove('transparent');
            links.forEach(link => link.classList.remove('transparent'));
        }
    };
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const targetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
                event.preventDefault();
            }
        });
    });
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});