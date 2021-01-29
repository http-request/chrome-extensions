window.onload = () => init();

function init() {
    const deselectAllButton = document.getElementById('deselectViewedFiles');
    const code = `(${deselectViewedFiles})();`;
    deselectAllButton.onclick = () => chrome.tabs.executeScript({ code });
}

function deselectViewedFiles() {
    document.querySelectorAll('.js-reviewed-toggle.js-reviewed-file')
        .forEach(item => item.click())
}


