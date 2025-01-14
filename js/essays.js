function toggleEssay(element) {
    const content = element.nextElementSibling.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

function filterEssays() {
    const languageFilter = document.getElementById('languageFilter').value;
    const topicFilter = document.getElementById('topicFilter').value;
    const essays = document.querySelectorAll('.essay-item');

    essays.forEach(essay => {
        const language = essay.getAttribute('data-language');
        const topic = essay.getAttribute('data-topic');
        if ((languageFilter === "" || languageFilter === language) &&
            (topicFilter === "" || topicFilter === topic)) {
            essay.style.display = "block";
        } else {
            essay.style.display = "none";
        }
    });
}

// Populate the sidebar with essay titles
document.addEventListener('DOMContentLoaded', () => {
    const mainEssayList = document.getElementById('mainEssayList');
    const sidebarEssayList = document.getElementById('sidebarEssayList');
    const essays = mainEssayList.querySelectorAll('.essay-item');

    essays.forEach(essay => {
        const title = essay.querySelector('.essay-title').textContent;
        const listItem = document.createElement('li');
        listItem.textContent = title;
        listItem.onclick = () => {
            window.scrollTo({
                top: essay.offsetTop,
                behavior: 'smooth'
            });
        };
        sidebarEssayList.appendChild(listItem);
    });
});