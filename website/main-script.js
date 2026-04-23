// ---Settings--- //

const settingsOpenButton = document.getElementById('settingsOpenButton');
const settingsFrame = document.getElementById('settingsFrame');

function openAnimation(isForOpen) {
    if (isForOpen) {
        settingsFrame.style.display = "flex";
        settingsFrame.style.opacity = 0;

        let opacity = 0;
        const timer = setInterval(() => {
            opacity += 0.2;
            settingsFrame.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(timer);
                settingsFrame.style.opacity = 1;
            }
        }, 50);
    } else {
        settingsFrame.style.opacity = 1;
        let opacity = 1;
        const timer = setInterval(() => {
            opacity -= 0.2;
            settingsFrame.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(timer);
                settingsFrame.style.display = "none";
                settingsFrame.style.opacity = 0;
            }
        }, 50);
    }
}

settingsOpenButton.addEventListener('click', () => {
    const isForOpen = settingsFrame.style.display === "none";
    openAnimation(isForOpen);
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
