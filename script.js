document.addEventListener('DOMContentLoaded', () => {
    const glider = document.querySelector('.glider');
    const loginTab = document.getElementById('loginTab');
    const regisTab = document.getElementById('regisTab');
    const currentLocation = window.location.href;

    if (currentLocation.includes('login.html')) {
        glider.style.transform = 'translateX(0%)'; // Position under the Login tab
        loginTab.classList.add('selected');
    } else if (currentLocation.includes('register.html')) {
        glider.style.transform = 'translateX(100%)'; // Move to under the Register tab
        regisTab.classList.add('selected');
    }
});
