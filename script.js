// Kakao SDK 초기화
Kakao.init('YOUR_KAKAO_APP_KEY'); // 실제 앱 키로 교체하세요

document.addEventListener('DOMContentLoaded', function() {
    // 스무스 스크롤 구현
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 카카오 로그인 버튼 클릭 이벤트
    document.getElementById('kakao-login-btn').addEventListener('click', function() {
        Kakao.Auth.login({
            success: function(authObj) {
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function(res) {
                        alert(`${res.properties.nickname}님, 환영합니다!`);
                        // 여기에 로그인 후 처리 로직을 추가하세요
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

    // CTA 버튼 클릭 이벤트
    document.querySelector('.cta-btn').addEventListener('click', function() {
        alert('타임캡슐 만들기 페이지로 이동합니다.');
        // 실제 구현 시 타임캡슐 생성 페이지로 리다이렉트
    });

    // 서비스 링크 클릭 이벤트
    document.querySelectorAll('.service-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceType = this.getAttribute('data-service');
            alert(`${serviceType} 타임캡슐 서비스를 시작합니다.`);
            // 실제 구현 시 각 서비스 페이지로 리다이렉트
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