import React from "react";

function FloatingButton() {

    return (
        <div className="fixed right-0 top-[100px] bg-accent text-white w-[20px] h-[70px] px-5 py-2 text-center rounded-l-2xl font-bold text-sm">
            <a href="/login">
                로그인
            </a>
        </div>
    )
}

export default FloatingButton;