function toggleImage() {
    const globeImage = document.getElementById('globeImage');
    if (globeImage.style.display === 'none') {
        globeImage.style.display = 'block';
    } else {
        globeImage.style.display = 'none';
    }
}

function changeTheme() {
    const themeSelector = document.getElementById('themeSelector');
    const selectedTheme = themeSelector.value;
    document.body.dataset.theme = selectedTheme;
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        document.body.dataset.theme = themeSelector.value;
    }
});