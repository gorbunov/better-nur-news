    const news = document.querySelectorAll('.news__caption, .article__caption');
    for (let i = 0; i < news.length; i++) {
        let headline = news[i];
        headline.textContent = 'Вопреки здравому смыслу, ' + headline.textContent;
        //console.log(headline.textContent);
    }
