import React from "react";

function Footer(){
    return (
        <div className=" text-midgrey text-[12px] text-center mt-[50px] h-[100px] pt-[30px] leading-loose">
            <div className="inline-block w-[100px]">
                <a href='#'> 이용약관 </a>
            </div>

            <div className="inline-block"> | </div>

            <div className="inline-block w-[150px]">
                <a href='#' className="font-semibold"> 개인정보처리방침 </a>
            </div>

            <div className="inline-block"> | </div>

            <div className="inline-block w-[180px]">
                <a href='#'> 책임의 한계와 법적고지 </a>
            </div>

            <div className="inline-block"> | </div>

            <div className="inline-block w-[150px]">
                <a href='#'> 회원정보 고객센터 </a>
            </div>

            <div className="text-[15px]">
                © 
                <a href="/"> Animoly </a>
                 Corp.
            </div>
        </div>
    )
}

export default Footer;