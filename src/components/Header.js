import { useState } from 'react'


export default function Header() {

    return(
        <header className='h-[150px] font-kor text-main font-medium'>
            <nav className='navbar w-[930px] h-[150px] leading-nav mx-auto overflow-hidden'>
                {/* 드롭다운 메뉴 */}
                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 애니몰리 소개 </button>
                    <div className='nav-drop-box'>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                    </div>
                </div>

                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 정보 게시판 </button>
                    <div className='nav-drop-box'>
                        <a href='#' className='nav-drop-btn'> FAQ </a>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                    </div>
                </div>

                <div className='nav-logo'> 
                    <a href='/' className=''>
                         <span className='sr-only'> Animoly </span>
                         <img className='w-[100px] h-[106px]' src='/animoly-logo.png' alt='animoly-logo'/>
                    </a>
                </div>

                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 커뮤니티 </button>
                    <div className='nav-drop-box'>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                    </div>
                </div>

                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 입양 및 후원 </button>
                    <div className='nav-drop-box'>
                        <a href='#' className='nav-drop-btn'> 도네이션 </a>
                        <a href='#' className='nav-drop-btn'> 입양 </a>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}