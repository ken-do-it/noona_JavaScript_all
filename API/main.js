const API_KEY = `01402902efde4961a35ed0f1df9f81a3`;
let news = []
let newsContainer = document.getElementById("news-container")


const getLatesNews = async () => {
    // const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const url = new URL (`https://noonaapi.netlify.app//top-headlines`)
    const response = await fetch(url);
    const data = await response.json()
     news = data.articles
    console.log("ddd", news)

    // displayNews(news);

}


// const displayNews = (news) => {
//     const newsContainer = document.getElementById('news-container');
//     newsContainer.innerHTML = '';

//     news.forEach(article => {
//         const newsItem = document.createElement('div');
//         newsItem.className = 'news-item';
        
//         const title = document.createElement('h2');
//         title.textContent = article.title;
        
//         const description = document.createElement('p');
//         description.textContent = article.description;
        
//         const link = document.createElement('a');
//         link.href = article.url;
//         link.textContent = 'Read more';
//         link.target = '_blank';
        
//         newsItem.appendChild(title);
//         newsItem.appendChild(description);
//         newsItem.appendChild(link);
        
//         newsContainer.appendChild(newsItem);
//     });
// }

getLatesNews();