import { useState } from 'react'
import {Link} from 'react-router-dom';


export default function Header() {

    return(
        <header className='h-[150px] font-kor text-main font-medium'>
            <nav className='navbar w-[930px] h-[150px] leading-nav mx-auto overflow-hidden'>
                {/* 드롭다운 메뉴 */}
                <div className='nav-main-btn'>
                    <button className='nav-main-text'>  
                        <Link to={'/animoly'}> 애니몰리 소개 </Link>
                    </button>
                    {/* <div className='nav-drop-box'>
                        <a href='#' className='nav-drop-btn'> 페이지 </a>
                    </div> */}
                </div>

                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 정보 게시판 </button>
                    <div className='nav-drop-box'>
                        <Link to={'/tips'} className='nav-drop-btn'> 반려동물 상식 </Link>
                        <Link to={'/faq'} className='nav-drop-btn'> FAQ </Link>
                    </div>
                </div>

                <div className='nav-logo'> 
                    <Link to={'/'} className=''> 
                         <span className='sr-only'> Animoly </span>
                         <img className='w-[100px] h-[106px]' src='/animoly-logo.png' alt='animoly-logo'/>
                    </Link>
                </div>

                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 
                        <Link to={'/community'}> 커뮤니티 </Link>
                    </button>
                    {/* <div className='nav-drop-box'>
                    </div> */}
                </div>

                <div className='nav-main-btn'>
                    <button className='nav-main-text'> 입양 및 후원 </button>
                    <div className='nav-drop-box'>
                        <Link to={'/adoption/info'} className='nav-drop-btn'> 입양 안내 </Link>
                        <Link to={'/adoption/application'} className='nav-drop-btn'> 입양 신청 </Link>
                        <Link to={'/donation'} className='nav-drop-btn'> 도네이션 </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}