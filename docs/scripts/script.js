// console //

const consoleOpenButton = document.getElementById('consoleOpenButton');
const ConsoleFrame = document.getElementById('ConsoleFrame');

consoleOpenButton.addEventListener('click', () => {
    ConsoleFrame.classList.toggle('visible');
    ConsoleFrame.scrollIntoView({ behavior: 'smooth', block: 'start' })
});

// ---Settings--- //

const settingsOpenButton = document.getElementById('settingsOpenButton');
const settingsFrame = document.getElementById('settingsFrame');

settingsOpenButton.addEventListener('click', () => {
    settingsFrame.classList.toggle('open');
});

// ---Settings/Theme--- //

const changeThemeButton = document.getElementById('changeThemeButton');

const container = document.querySelector('.dropdown-container');
const button = document.querySelector('.settings-button');
const settings = document.querySelector('.settings');

let darkTheme = false;

button.addEventListener('click', (e) => {
  e.stopPropagation();
  settings.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!container.contains(e.target)) {
    settings.classList.remove('open');
  }
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        darkTheme = true;
    } else {
        document.documentElement.classList.remove('dark');
        darkTheme = false;
    }
}

function saveTheme() {
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
}

changeThemeButton.addEventListener('click', () => {
    darkTheme = !darkTheme;
    changeThemeButton.textContent = !darkTheme ? "Light theme: ON" : "Light theme: OFF";

    if (darkTheme) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    saveTheme();
});

loadTheme();

// ---menu--- //

const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');
const textSpan = menuButton.querySelector('.button-text');

nav.classList.add('open');

menuButton.addEventListener('click', () => {
    const isNavOpen = nav.classList.contains('open');

    if (isNavOpen) {
        nav.classList.remove('open');
        nav.classList.add('close');
        textSpan.textContent = 'Menu';
    } else {
        nav.classList.remove('close');
        nav.classList.add('open');
        textSpan.textContent = 'Close Menu';
    }

    textSpan.classList.add('fade');
    setTimeout(() => textSpan.classList.remove('fade'), 300);
});

