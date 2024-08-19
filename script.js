// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 필요한 HTML 요소 생성
    const container = document.createElement('div');
    container.className = 'preview-container';
    container.style.cssText = `
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        background-color: #f0f0f0;
    `;

    const header = document.createElement('div');
    header.style.cssText = `
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
    `;

    const codeIcon = document.createElement('div');
    codeIcon.innerHTML = '&lt;/&gt;';
    codeIcon.style.cssText = `
        background-color: #ddd;
        padding: 10px;
        font-family: monospace;
    `;

    const title = document.createElement('div');
    title.style.cssText = `
        flex-grow: 1;
        padding: 10px;
    `;
    title.innerHTML = `
        <h2 style="margin: 0; font-size: 18px;">타임캡슐 서비스 - 웹사이트 미리보기</h2>
        <p style="margin: 5px 0 0; font-size: 14px; color: #666;">클릭하여 구성 요소를 엽니다.</p>
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'https://your-website-url.com';
    input.style.cssText = `
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    `;

    const button = document.createElement('button');
    button.textContent = '미리보기';
    button.style.cssText = `
        background-color: #0056b3;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    `;

    const previewArea = document.createElement('div');
    previewArea.style.cssText = `
        margin-top: 20px;
        border: 2px dashed #ddd;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        font-style: italic;
    `;
    previewArea.textContent = '여기에 웹사이트 미리보기가 표시됩니다.';
    previewArea.style.display = 'none';

    // 요소들을 조합
    header.appendChild(codeIcon);
    header.appendChild(title);
    content.appendChild(input);
    content.appendChild(button);
    content.appendChild(previewArea);
    container.appendChild(header);
    container.appendChild(content);

    // 컨테이너를 body에 추가
    document.body.appendChild(container);

    // 버튼 클릭 이벤트 처리
    button.addEventListener('click', function() {
        const url = input.value.trim();
        if (url) {
            previewArea.style.display = 'flex';
            previewArea.textContent = `${url} 의 미리보기를 로드 중...`;
            // 여기에 실제 미리보기 로직을 구현할 수 있습니다.
            // 예: iframe 사용 또는 서버에서 스크린샷 가져오기
            setTimeout(() => {
                previewArea.textContent = `${url}의 미리보기입니다. (실제 구현 필요)`;
            }, 1500);
        } else {
            alert('유효한 URL을 입력해주세요.');
        }
    });
});