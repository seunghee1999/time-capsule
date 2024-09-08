// Firebase 초기화 (이 부분은 HTML에서 모듈로 로드되므로 여기서는 제거)
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Kakao SDK 초기화
Kakao.init('YOUR_KAKAO_APP_KEY'); // 실제 앱 키로 교체하세요

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginPopup = document.getElementById('login-popup');
    const myInfoPopup = document.getElementById('my-info-popup');
    const closeBtns = document.getElementsByClassName('close');
    const googleLoginBtn = document.getElementById('google-login-btn'); // 수정된 부분

    let isLoggedIn = false;

    // 로그인 버튼 클릭 이벤트
    loginBtn.addEventListener('click', function() {
        loginPopup.style.display = 'block';
    });

    // 팝업 닫기 버튼 이벤트
    for (let closeBtn of closeBtns) {
        closeBtn.addEventListener('click', function() {
            loginPopup.style.display = 'none';
            myInfoPopup.style.display = 'none';
        });
    }

    // 카카오 로그인 버튼 클릭 이벤트
    document.getElementById('kakao-login-btn').addEventListener('click', function() {
        Kakao.Auth.login({
            success: function(authObj) {
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function(res) {
                        loginPopup.style.display = 'none';
                        isLoggedIn = true;
                        showMyInfo(res.properties.nickname);
                    },
                    fail: function(error) {
                        alert('로그인 처리 중 오류가 발생했습니다.');
                        console.log(error);
                    }
                });
            },
            fail: function(err) {
                alert('카카오 로그인에 실패했습니다.');
            }
        });
    });

    // Google 로그인 버튼 클릭 이벤트
    googleLoginBtn.addEventListener('click', function() {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                loginPopup.style.display = 'none';
                isLoggedIn = true;
                showMyInfo(user.displayName);
            }).catch((error) => {
                console.error("Google 로그인 실패:", error);
                alert("Google 로그인에 실패했습니다.");
            });
    });

    function showMyInfo(name) {
        document.getElementById('user-info').innerHTML = `<p>안녕하세요, ${name}님!</p>`;
        
        // 임시 타임캡슐 데이터
        const timecapsules = [
            { name: "졸업 20주년 기념", dday: 365 },
            { name: "첫 월급 기념", dday: 30 },
            { name: "결혼기념일", dday: 180 }
        ];

        const timecapsulesList = document.getElementById('my-timecapsules');
        timecapsulesList.innerHTML = '';
        timecapsules.forEach(capsule => {
            const li = document.createElement('li');
            li.textContent = `${capsule.name} (D-${capsule.dday})`;
            timecapsulesList.appendChild(li);
        });

        myInfoPopup.style.display = 'block';
    }

    // 스무스 스크롤 구현
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA 버튼 클릭 이벤트
    document.querySelector('.cta-btn').addEventListener('click', function() {
        if (isLoggedIn) {
            alert('타임캡슐 만들기 페이지로 이동합니다.');
            // 실제 구현 시 타임캡슐 생성 페이지로 리다이렉트
        } else {
            alert('로그인 후 이용 가능합니다.');
            loginPopup.style.display = 'block';
        }
    });

    // 서비스 링크 클릭 이벤트
    document.querySelectorAll('.service-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (isLoggedIn) {
                const serviceType = this.getAttribute('data-service');
                alert(`${serviceType} 타임캡슐 서비스를 시작합니다.`);
                // 실제 구현 시 각 서비스 페이지로 리다이렉트
            } else {
                alert('로그인 후 이용 가능합니다.');
                loginPopup.style.display = 'block';
            }
        });
    });

    // 문의하기 폼 제출 이벤트
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('문의가 접수되었습니다. 감사합니다!');
        this.reset();
    });

    // 스크롤에 따른 헤더 스타일 변경
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = 'none';
        }
    });
});
