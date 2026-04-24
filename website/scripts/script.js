// interpreter //

const consoleForm = document.getElementById('consoleForm');

// ---Settings--- //

const settingsOpenButton = document.getElementById('settingsOpenButton');
const settingsFrame = document.getElementById('settingsFrame');

settingsOpenButton.addEventListener('click', () => {
    settingsFrame.classList.toggle('open');
});

// ---Settings/Theme--- //

const changeThemeButton = document.getElementById('changeThemeButton');
let darkTheme = false;

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
