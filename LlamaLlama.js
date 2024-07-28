setInterval(() => {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i) => {
        a.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuvyrqDDe5qfDUundZ_WFSNeKq0DFmOl5HQ&s';
    });

    let elements = document.querySelectorAll('*');
    elements.forEach((element) => {
        element.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuvyrqDDe5qfDUundZ_WFSNeKq0DFmOl5HQ&s)';
    });

}, 500);
