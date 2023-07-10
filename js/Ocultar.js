const menu = document.getElementById('menu');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
});

menu.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
});
