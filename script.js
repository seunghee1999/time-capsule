// script.js
function navigate(page) {
    const content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = `
                <h1>미래에 전하는 특별한 메시지, 타임캡슐 서비스</h1>
                <p>소중한 추억을 담아 미래의 누군가에게 전달하세요.</p>
                <button onclick="navigate('about')">서비스 소개</button>
                <button onclick="navigate('howto')">이용 방법</button>
            `;
            break;
        case 'create':
            content.innerHTML = `
                <h2>새 타임캡슐 만들기</h2>
                <form id="createForm">
                    <select>
                        <option>편지</option>
                        <option>소형 물건</option>
                        <option>중형 물건</option>
                    </select>
                    <input type="text" placeholder="받는 사람">
                    <textarea placeholder="메시지 내용"></textarea>
                    <input type="date" placeholder="개봉 날짜">
                    <select>
                        <option>단기 보관</option>
                        <option>장기 보관 (구독)</option>
                    </select>
                    <button type="submit">생성하기</button>
                </form>
            `;
            document.getElementById('createForm').onsubmit = function(e) {
                e.preventDefault();
                alert('타임캡슐이 생성되었습니다!');
            };
            break;
        case 'dashboard':
            content.innerHTML = `
                <h2>내 타임캡슐</h2>
                <ul>
                    <li>
                        타임캡슐 1 - 개봉 날짜: 2025-08-19
                        <button onclick="showDetails(1)">상세 보기</button>
                        <button onclick="showShipping(1)">배송 현황</button>
                    </li>
                    <li>
                        타임캡슐 2 - 개봉 날짜: 2030-01-01
                        <button onclick="showDetails(2)">상세 보기</button>
                        <button onclick="showShipping(2)">배송 현황</button>
                    </li>
                </ul>
            `;
            break;
        case 'shop':
            content.innerHTML = `
                <h2>타임캡슐 키트</h2>
                <div class="product-list">
                    <div class="product-item">
                        <img src="placeholder.jpg" alt="기본 키트">
                        <h3>기본 키트</h3>
                        <p>가격: 10,000원</p>
                        <button onclick="purchaseKit('basic')">구매하기</button>
                    </div>
                    <div class="product-item">
                        <img src="placeholder.jpg" alt="프리미엄 키트">
                        <h3>프리미엄 키트</h3>
                        <p>가격: 20,000원</p>
                        <button onclick="purchaseKit('premium')">구매하기</button>
                    </div>
                </div>
            `;
            break;
        case 'login':
            content.innerHTML = `
                <h2>로그인</h2>
                <form id="loginForm">
                    <input type="email" placeholder="이메일">
                    <input type="password" placeholder="비밀번호">
                    <button type="submit">로그인</button>
                </form>
                <p>계정이 없으신가요? <a href="#" onclick="navigate('signup')">회원가입</a></p>
            `;
            document.getElementById('loginForm').onsubmit = function(e) {
                e.preventDefault();
                alert('로그인되었습니다!');
            };
            break;
        default:
            content.innerHTML = '<h2>페이지를 찾을 수 없습니다.</h2>';
    }
}

// 초기 페이지 로드
navigate('home');

// 내비게이션 이벤트 리스너
document.querySelector('nav').addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
        e.preventDefault();
        navigate(e.target.getAttribute('href').slice(1));
    }
});

// 추가 함수들
function showDetails(id) {
    alert(`타임캡슐 ${id}의 상세 정보입니다.`);
}

function showShipping(id) {
    alert(`타임캡슐 ${id}의 배송 현황입니다.`);
}

function purchaseKit(type) {
    alert(`${type} 키트가 구매되었습니다!`);
}