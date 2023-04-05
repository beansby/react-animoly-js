import React, { useEffect } from "react";

function Login() {
    useEffect = () => {

    }


    return (
        <section className="font-kor">
            <div className="w-[930px] h-[600px] mx-auto ">
                <div className="w-[400px] h-[600px] float-left overflow-hidden bg-[url('/Users/ebina/Animoly/react-animoly-js/public/img-dog3.png')] bg-[520px] bg-cover">
                </div>

                {/* 로그인창 */}
                <div className="w-[530px] h-[600px] pt-[140px] float-right ">
                    {/* 인삿말  */}
                    <div className="text-center">
                        <p className="text-main text-3xl font-bold font-animoly1 inline-block"> Welcome , &nbsp;
                            <span className="text-accent text-5xl font-animoly3 inline-block"> Animoly! </span>
                        </p>
                    </div>

                    {/* 로그인 입력 */}
                    <center>
                        <form action="" className="mt-10 ">
                            <table className="h-[160px]  border-separate border-spacing-3">
                                <tr className="text-right h-[40px]">
                                    <td className=""> <label className="input-label"> 아이디 </label> </td>
                                    <td> <input type="text" className="login-input"/> </td>
                                </tr>
                                <tr className="text-right h-[40px]">
                                    <td> <label className="input-label"> 비밀번호 </label> </td>
                                    <td> <input type="password" className="login-input"/> </td>
                                </tr>

                                {/* 로그인 옵션 */}
                                <tr className="">
                                    {/* <td className="border">
                                
                                    </td> */}

                                    <td colSpan={2} className="text-right">
                                        <div className="inline-block mx-4">
                                            <label className="text-main font-normal text-sm"> 
                                                <input type="checkbox" className="checkbox-btn "/> 
                                                <span className="ml-1"> 
                                                    로그인 상태 유지 
                                                </span>
                                            </label>
                                        </div>
                                        <div className="inline-block">
                                            <label className="text-main font-normal text-sm"> 
                                                <input type="checkbox" className="checkbox-btn"/> 
                                                <span className="ml-1">
                                                    아이디 기억하기 
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            

                                <tr className="text-center h-[60px]">
                                    <td colSpan={2} className=""> <input type="submit" value="로그인" className="block bg-accent text-white rounded-xl w-[200px] h-[40px] mx-auto"/></td>
                                </tr>
                            </table>
                        </form>
                    </center>
                    
                    {/* ID/PW 찾기, 회원가입 */}
                    <div className="text-sub text-sm text-center mt-4">
                        <div className="inline-block w-[100px]">
                            <a href="#"> 아이디 찾기 </a>
                        </div>
                        <div className="inline-block  w-[100px] ">
                            <a href="#"> 비밀번호 찾기 </a>
                        </div>
                        <div className="inline-block  w-[100px]">
                            <a href="/signup"> 회원가입 </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Login;