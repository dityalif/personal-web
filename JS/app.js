const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navslide(); 