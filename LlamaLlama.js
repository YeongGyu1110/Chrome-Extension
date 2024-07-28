setInterval(() => {
    // 모든 <img> 요소의 src 속성을 변경
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i) => {
        a.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuvyrqDDe5qfDUundZ_WFSNeKq0DFmOl5HQ&s';
    });

    // 모든 요소의 배경 이미지를 변경
    let elements = document.querySelectorAll('*');  // 모든 요소 선택
    elements.forEach((element) => {
        element.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuvyrqDDe5qfDUundZ_WFSNeKq0DFmOl5HQ&s)';
    });

}, 100);
