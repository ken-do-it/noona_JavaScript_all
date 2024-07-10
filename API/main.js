const API_KEY = `01402902efde4961a35ed0f1df9f81a3`;
let newsList = [];
let newsContainer = document.getElementById("news_container");

const getLatesNews = async () => {
    //const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`); // my API address
    // const url = new URL (https://noonaapi.netlify.app//top-headlines)  // noona API address
    const url = new URL ("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines") //new API noona address
    const response = await fetch(url);
    const data = await response.json()
     newsList = data.articles
     render();
    console.log("ddd", newsList)

    // displayNews(news);

}
const render = () => {
    const newsHTML = newsList.map(news => `
        <div class="row news">
            <div class="col-lg-4">
                <img class="news_img_size" src="${news.urlToImage}" onerror="this.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'; this.onerror=null;" alt="">
            </div>
            <div class="col-lg-8">
                <h2>${news.title}</h2>
                <p>${news.description == null || news.description == "" 
                    ? "내용없음" :
                    news.description.length > 200
                    ? news.description.substring(0, 200) + "..."
                    : news.description
                }</p>
                <div>${news.source.name || "no source"}  ${moment(news.published_date).fromNow()}</div>
            </div>
        </div>
    `).join(" ");

    document.getElementById('news_board').innerHTML = newsHTML;
};

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};

const openSearchBox = () => {
    const inputArea = document.getElementById("input_area");
    inputArea.style.display = inputArea.style.display === "block" ? "none" : "block";
};

getLatesNews();
