window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');}

function openForm() {
    let form = document.getElementById('popupForm');
    form.classList.remove('hide-popup');}

function closeForm() {
    let form = document.getElementById('popupForm');
    form.classList.add('hide-popup');}