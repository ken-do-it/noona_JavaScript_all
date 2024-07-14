const API_KEY = `01402902efde4961a35ed0f1df9f81a3`;
let newsList = []; // 뉴스 목록을 저장할 배열
const newsContainer = document.getElementById("news_container"); // 뉴스 컨테이너 요소
const menus = document.querySelectorAll(".menus button, .side_menu_list button"); // 메뉴 버튼들 선택
const home = document.getElementById("home"); // 로고 선택
let totalResults = 0; // 전체 뉴스 기사 수
let page = 1; // 현재 페이지
const pageSize = 10; // 페이지당 뉴스 기사 수
const groupSize = 5; // 페이지 그룹당 페이지 수

// 뉴스 API URL 설정
//let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
let url = new URL("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines"); // 새로운 API 주소

// 메뉴 버튼에 클릭 이벤트 리스너 추가
menus.forEach(menu => menu.addEventListener("click", (event) => {
    page = 1; // 페이지 번호 초기화
    getNewsByCategory(event); // 카테고리별 뉴스 가져오기
    closeNav(); // 메뉴 클릭 후 사이드 메뉴 닫기
}));

// 뉴스 데이터를 가져오는 함수
const getNews = async () => {
    try {
        // URL에 페이지와 페이지 크기 설정
        url.searchParams.set("page", page); // => &page=page
        url.searchParams.set("pageSize", pageSize);

        const response = await fetch(url); // URL로 데이터 가져오기
        const data = await response.json(); // JSON 형태로 변환
        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error("No result for this search"); // 검색 결과가 없을 때 에러 발생
            }
            newsList = data.articles; // 뉴스 목록 업데이트
            totalResults = data.totalResults; // 전체 뉴스 기사 수 업데이트
            render(); // 렌더링 함수 호출
            paginationRender(); // 페이지네이션 렌더링 함수 호출
        } else {
            throw new Error(data.message); // 응답이 성공적이지 않을 때 에러 발생
        }
    } catch (error) {
        errorRender(error.message); // 에러 메시지 렌더링
    }
};

// 최신 뉴스를 가져오는 함수
const getLatesNews = async () => {
    page = 1; // 페이지 번호 초기화
    //url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`); // my API 주소 사용
    url = new URL("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines"); // 새로운 noona API 주소
    await getNews(); // 뉴스 가져오기
};

// 카테고리별 뉴스를 가져오는 함수
const getNewsByCategory = async (event) => {
    page = 1; // 카테고리 선택시 1번 페이지로 초기화
    const category = event.target.textContent.toLowerCase(); // 카테고리 가져오기
    //url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`); // my API 주소 사용
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?category=${category}`); // noona 새로운 API 주소
    await getNews(); // 뉴스 가져오기
};

// 키워드로 뉴스를 가져오는 함수
const getNewsByKeyword = async () => {
    page = 1; // 페이지 번호 초기화
    const keyword = document.getElementById("search_input").value; // 검색어 가져오기
    //url = new URL(`https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`); // my API 주소 사용
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?q=${keyword}`); // noona 새로운 API 주소
    await getNews(); // 뉴스 가져오기
};

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
};

// 네비게이션 열기
const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};

// 네비게이션 닫기
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};

// 검색 박스 열기/닫기
const openSearchBox = () => {
    const inputArea = document.getElementById("input_area");
    inputArea.style.display = inputArea.style.display === "block" ? "none" : "block";
};

// Enter 키를 눌렀을 때 키워드로 뉴스 검색
document.getElementById("search_input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        page = 1; // 페이지 번호 초기화
        getNewsByKeyword(); // 키워드로 뉴스 검색 함수 호출
    }
});

// 검색 입력란 클릭 시 내용 초기화
document.getElementById("search_input").addEventListener("click", function() {
    this.value = ""; // 입력란 내용 초기화
});

// 로고에 클릭 이벤트 리스너 추가 (페이지 새로 고침)
home.addEventListener("click", () => {
    page = 1; // 페이지 번호 초기화
    getLatesNews(); // 최신 뉴스 가져오기
});

// 에러 메시지 렌더링 함수
const errorRender = (errorMessage) => {
    const errorHTML = `
    <div class="alert alert-danger" role="alert">
    ${errorMessage}
</div>`;

    document.getElementById("news_board").innerHTML = errorHTML; // 에러 메시지 렌더링
};

// 페이지네이션 렌더링 함수
const paginationRender = () => {
    const totalPages = Math.ceil(totalResults / pageSize); // 전체 페이지 수 계산
    const pageGroup = Math.ceil(page / groupSize); // 현재 페이지 그룹 계산

    let lastPage = pageGroup * groupSize; // 현재 페이지 그룹의 마지막 페이지 계산
    if (lastPage > totalPages) {
        lastPage = totalPages; // 마지막 페이지가 총 페이지 수보다 클 경우 총 페이지 수로 설정
    }

    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1); // 현재 페이지 그룹의 첫 페이지 계산

    let paginationHTML = '';
    // 첫 페이지가 아닌 경우 "<<"와 "Previous" 버튼 추가
    if (page > 1) {
        paginationHTML += `<li class="page-item" onclick="moveToPage(1)"><a class="page-link"><<</a></li>`;
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page - 1})"><a class="page-link">Previous</a></li>`;
    }

    // 페이지 번호 렌더링
    for (let i = firstPage; i <= lastPage; i++) {
        paginationHTML += `<li class="page-item ${i === page ? "active" : ""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`;
    }

    // 마지막 페이지가 아닌 경우 "Next"와 ">>" 버튼 추가
    if (page < totalPages) {
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})"><a class="page-link">Next</a></li>`;
        paginationHTML += `<li class="page-item" onclick="moveToPage(${totalPages})"><a class="page-link">>></a></li>`;
    }

    document.querySelector(".pagination").innerHTML = paginationHTML; // 페이지네이션 HTML을 DOM에 추가
};

// 페이지 이동 함수
const moveToPage = (pageNum) => {
    console.log("move to page", pageNum);
    page = pageNum; // 페이지 번호 업데이트
    getNews(); // 뉴스 가져오기
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 화면을 맨 위로 스크롤
};

// Google Translate Element 초기화 함수
function onLoadTranslate () {
    new google.translate.TranslateElement({pageLanguage: ''}, 'google_translate_element');
};

// Google Translate Element 로드 스크립트
const googleTranslateScript = document.createElement('script');
googleTranslateScript.type = 'text/javascript';
googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=onLoadTranslate';
document.head.appendChild(googleTranslateScript);

// 페이지 로드 시 최신 뉴스 가져오기
getLatesNews();
