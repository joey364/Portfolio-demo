console.log('This shit is working');

let theme = localStorage.getItem('theme');

(theme == null) ? setTheme('light') : setTheme(theme);


let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log(mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'default.css';
    }
    if (mode === 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }
    if (mode === 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }
    if (mode === 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);

}