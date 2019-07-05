const news = document.querySelectorAll('.article-headline, ' +
    '.article-footer__post-link, ' +
    '.post-preview-mixed__title, ' +
    '.post-preview-mixed-horizontal__title, ' +
    '.post-preview-text__title, ' +
    '.post-preview-mixed-big__title');
for (let i = 0; i < news.length; i++) {
    let headline = news[i];
    headline.textContent = 'Вопреки здравому смыслу, ' + headline.textContent;
    //console.log(headline.textContent);
}
