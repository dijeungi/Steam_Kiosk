import React from 'react';
import '../css/Header.css'; // 헤더 스타일을 위한 CSS 파일

const Header = () => {
    return (
        <header className="app-header">
            <h1>- 스팀 게임 라이브러리 -</h1>
            <p>구매할 게임을 선택해주세요!</p>
        </header>
    );
};

export default Header;