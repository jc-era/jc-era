// Main JavaScript for Beijing Zhigao Fanke Trading Co., Ltd.
document.addEventListener('DOMContentLoaded', () => {
    console.log('Zhigao Fanke Website Loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current nav item based on URL
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem.forEach(item => item.classList.remove('active'));
            menuItem[i].className = "active";
        }
    }
});
