const API_KEY = `01402902efde4961a35ed0f1df9f81a3`;
let news = []

const getLatesNews = async () => {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    // const url = new URL (`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`)
    const response = await fetch(url);
    const data = await response.json()
     news = data.articles
    console.log("ddd", news)

}

getLatesNews();