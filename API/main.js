const API_KEY = `01402902efde4961a35ed0f1df9f81a3`;
let newsList = []; // 뉴스 목록을 저장할 배열
const newsContainer = document.getElementById("news_container"); // 뉴스 컨테이너 요소
const menus = document.querySelectorAll(".menus button, .side_menu_list button"); // 메뉴 버튼들 선택
const home = document.getElementById("home"); // 로고 선택


//let url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`)
let url = new URL("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines"); // 새로운 API 주소


// 메뉴 버튼에 클릭 이벤트 리스너 추가
menus.forEach(menu => menu.addEventListener("click", (event) => {getNewsByCategory(event);
    closeNav(); // 메뉴 클릭 후 사이드 메뉴 닫기
}));


const getNews = async () => {

    try {
    const response = await fetch(url); // URL로 데이터 가져오기
    const data = await response.json(); // JSON 형태로 변환
    if (response.status === 200) {
        if (data.articles.length === 0) {
            throw new Error("No result for this search") // 검색 결과가 없을 때 에러 발생
        }
        newsList = data.articles; // 뉴스 목록 업데이트
        render(); // 렌더링 함수 호출
    } else {
        throw new Error(data.message) // 응답이 성공적이지 않을 때 에러 발생
    }
    
    }catch(error) {
        errorRender(error.message) // 에러 메시지 렌더링
    }
    
}



// 최신 뉴스를 가져오는 함수
const getLatesNews = async () => {
    // 뉴스 API URL 설정
     //url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`); // API 주소 사용
    url = new URL("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines"); // 새로운 API 주소
    await getNews() // 뉴스 가져오기
}

// 카테고리별 뉴스를 가져오는 함수
const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase(); // 카테고리 가져오기
    console.log("category", category);
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?category=${category}`); // 새로운 API 주소
    //url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`); // my API 주소 사용
    await getNews() // 뉴스 가져오기
}

// 키워드로 뉴스를 가져오는 함수
const getNewsByKeyword = async () => {
    const keyword = document.getElementById("search_input").value; // 검색어 가져오기
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?q=${keyword}`); // 새로운 API 주소
    //url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`); // API 주소 사용
   await getNews() // 뉴스 가져오기
}

// 뉴스를 렌더링하는 함수
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
                <div>${news.source.name} * ${moment(news.publishedAt).fromNow()}</div>
            </div>
        </div>
    `).join(" ");

    document.getElementById('news_board').innerHTML = newsHTML; // 뉴스 보드에 렌더링된 HTML 추가
}

// 네비게이션 열기
const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

// 네비게이션 닫기
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

// 검색 박스 열기/닫기
const openSearchBox = () => {
    const inputArea = document.getElementById("input_area");
    inputArea.style.display = inputArea.style.display === "block" ? "none" : "block";
}

// Enter 키를 눌렀을 때 키워드로 뉴스 검색
document.getElementById("search_input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getNewsByKeyword(); // 키워드로 뉴스 검색 함수 호출
    }
});

// 검색 입력란 클릭 시 내용 초기화
document.getElementById("search_input").addEventListener("click", function() {
    this.value = ""; // 입력란 내용 초기화
});

// 로고에 클릭 이벤트 리스너 추가  첫 페이지로 돌아가기 
home.addEventListener("click", getLatesNews);



const errorRender = (errorMessage) => {
    const errorHTML = `
    <div class="alert alert-danger" role="alert">
    ${errorMessage}
</div>`

    document.getElementById("news_board").innerHTML = errorHTML // 에러 메시지 렌더링
}



// 페이지 로드 시 최신 뉴스 가져오기
getLatesNews();
