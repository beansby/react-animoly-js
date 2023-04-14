import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Input } from "../../components/Input";

function Login() {
    // 초기값
    const initialValues = {
        id:"", password:""
    };
    
    // 유효성 검사
    const validationSchema = Yup.object().shape({
        id: Yup.string().min(2, "닉네임은 최소 2글자 이상입니다.").required("아이디를 입력하세요."),
        password: Yup.string().required("비밀번호를 입력하세요."),
      });

    // 로그인
    const login = (values) => {
        const formData = new FormData();
        formData.append('id', values.id);
        formData.append('password', values.password);

        axios.post("http://localhost:8080/api/users/login", formData)
        .then((res)=>{
            console.log(res.data);
            console.log("로그인 성공");
            document.location.href='/';
        }).catch((err)=>{
            console.log(err);
        })
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
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={login}>
                            {({handleSubmit, ...props})=>{
                                return (
                                    <Form>
                                        <table className="h-[160px]  border-separate border-spacing-3">
                                            <tr className="text-right h-[40px]">
                                                <Input name='id' label='아이디' type='text' inputcss='login-input' labelcss='login-input-label'/>
                                            </tr>
                                            <tr className="text-right h-[40px]">
                                                <Input name='password' label='비밀번호' type='password' inputcss='login-input' labelcss='login-input-label'/>
                                            </tr>

                                            {/* 로그인 옵션 */}
                                            <tr className="">
                                                {/* <td className="border">
                                            
                                                </td> */}

                                                <td colSpan={2} className="text-right">
                                                    <div className="inline-block mx-6">
                                                        <label className="text-main font-normal text-sm"> 
                                                            <input type="checkbox" className="checkbox-btn "/> 
                                                            <span className="ml-[5px]"> 
                                                                로그인 상태 유지 
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="inline-block ">
                                                        <label className="text-main font-normal text-sm"> 
                                                            <input type="checkbox" className="checkbox-btn"/> 
                                                            <span className="ml-[5px]">
                                                                아이디 기억하기 
                                                            </span>
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        

                                            <tr className="text-center h-[60px]">
                                                <td colSpan={2} className=""> 
                                                    <button type="submit" onSubmit={()=>handleSubmit()} className="w-[200px] h-[40px] btn hover:cursor-pointer"> 로그인 </button>
                                                {/* <input type="button" value="로그인" className="w-[200px] h-[40px] btn hover:cursor-pointer" onClick={login}/> */}
                                                </td>
                                            </tr>
                                        </table>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </center>
                    
                    {/* ID/PW 찾기, 회원가입 */}
                    <div className="text-sub text-sm text-center mt-4">
                        <div className="inline-block w-[100px]">
                            <a href="/idrecovery"> 아이디 찾기 </a>
                        </div>
                        <div className="inline-block  w-[100px] ">
                            <a href="/passwordrecovery"> 비밀번호 찾기 </a>
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