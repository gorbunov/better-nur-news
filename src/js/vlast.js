const news = document.querySelectorAll('.article-caption .title > a, .anatylic-item-title > b, .informer-news-item-in > a, h1.title');
for (let i = 0; i < news.length; i++) {
    let headline = news[i];
    if ((headline.textContent.substr(-3) !== '...') && (headline.textContent.substr(0, 12) !== 'Мир за ночь.')) {
        headline.textContent = headline.textContent.trim() + ', но это не точно';
        //console.log(headline.textContent);
    }
}
