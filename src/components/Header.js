import { useState } from 'react'


export default function Header() {

    return(
        <header className="bg-white">
            <nav className='flex mx-32 h-24 mt-16 mb-10 items-center font-kor font-medium text-main'> 

                <div className='flex mx-auto'>
                    <a href="#" className="-m-1.5 p-1.5 ">
                        애니몰리 소개
                    </a>
                </div>

                <div className='flex mx-auto'>
                    <a href="#" className="-m-1.5 p-1.5">
                        정보 게시판 
                    </a>
                </div>

                {/* 로고 : 가운데 배치 */}
                <div className='flex'> 
                    <a href='#' className='-m-1.5 p-1.5'>
                        <span className='sr-only'> Animoly </span>
                        <img className='h-24 w-auto' src='/animoly-logo.png' alt='animoly-logo'/>
                    </a>
                </div>

                <div className='flex mx-auto'>
                    <a href="#" className="-m-1.5 p-1.5">
                        커뮤니티
                    </a>
                </div>

                <div className='flex mx-auto'>
                    <a href="#" className="-m-1.5 p-1.5 ">
                        입양 및 후원 
                    </a>
                </div>
            </nav>

        </header>
    )
}