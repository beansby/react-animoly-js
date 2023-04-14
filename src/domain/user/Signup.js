import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import axios from "axios";
import { Formik, Form, Field } from "formik";
import DaumPostCode from 'react-daum-postcode';
import Postcode from "../../components/PostCode";
import { Input } from "../../components/Input";
import {useSelector} from 'react-redux';



const Signup = () => {

    const [user, setUser] = useState({});
    //redux 저장 state 가져오기
    const zipcode = useSelector(state => state.zipcode);
    const address1 = useSelector(state => state.address1);

    // register validation : id, password, name, nickname, phoneNumber, city, street, zipcode
    // input : userid, nickname, password, password2, name, tel, address 
    const schema = Yup.object().shape({
        userid: Yup.string().min(5,"5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.").max(20, "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.").required("필수 정보입니다."),
        nickname: Yup.string().min(2, "닉네임은 최소 2글자 이상입니다.").max(10, "2~10자의 닉네임만 사용 가능합니다.").required("필수 정보입니다."),
        password: Yup.string().min(8, "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.").max(16, "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.").required("필수 정보입니다.")
            .matches(
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
            "비밀번호는 알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다."
            ),
        password2: Yup.string().oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.").required("필수 정보입니다."),
        name: Yup.string().required("필수 정보입니다.").matches(
            /^[가-힣]{2,6}$/, "한글과 영문 대소문자를 사용하세요. (특수기호, 공백 사용 불가)"
        ),
        tel: Yup.string().required("필수 정보입니다.").matches(
            /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/, "10~11자리의 전화번호를 입력하세요. (숫자만 입력 가능합니다.)"
        ),
        address2: Yup.string().required("필수 정보입니다."),
    });

    //초기값 설정
    const initialValues = {
        userid:"", nickname:"",
        password:"", password2:"",
        name:"", tel:"", address2:""
    }

    //회원가입
    const join = (values) => {
        console.log(values);
        const formData = new FormData();
        formData.append('id', values.userid);
        formData.append('password', values.password);
        formData.append('name', values.name);
        formData.append('nickname', values.nickname);
        formData.append('phoneNumber', values.tel);
        formData.append('city', address1);          //검색주소
        formData.append('street', values.address2); //상세주소
        formData.append('zipcode', zipcode);        //우편번호
        
        axios.post("http://localhost:8080/api/users/join", formData, null)
        .then((res)=>{
            console.log(res.data);
            console.log("회원가입 성공");
            alert(`${values.nickname} 님, Animoly의 가족이 되신 걸 환영합니다.`);
            document.location.href='/login';
        }).catch((err)=>{
            console.log(err.response.data);
            console.log(err.response.data.message);
        })
    }


    return (

        <div className="w-full bg-white mt-[60px] mx-auto" >
            
            <div className="font-animoly3 text-accent text-[50px] text-center ">
                <span className="text-main"> Welcome, </span>
                Animoly
            </div>
            
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={join}>
                {({handleSubmit, ...props})=>{
                    return (
                        <Form>
                            <div className="signup-div">   
                                <Input name="userid" label="아이디" type="text" inputcss="signup-input" labelcss="signup-input-label"/>
                            </div>

                            <div className="signup-div"> 
                                <Input name="nickname" label="닉네임" type="text" inputcss="signup-input" labelcss="signup-input-label"/>
                            </div>

                            <div className="signup-div">
                                <Input name="password" label="비밀번호" type="password" inputcss="signup-input" labelcss="signup-input-label"/>                                       
                            </div>
                            <div className="signup-div">
                                <Input name="password2" label="비밀번호 재확인" type="password" inputcss="signup-input" labelcss="signup-input-label"/>
                            </div>

                            <div className="signup-div">
                            <   Input name="name" label="이름" type="text" inputcss="signup-input" labelcss="signup-input-label"/>
                            </div>

                            <div className="signup-div">
                                <Input name="tel" label="전화번호" type="tel" inputcss="signup-input" labelcss="signup-input-label"/>
                            </div>

                            {/* 주소창 */}
                            <div className="signup-div">
                                <Input name="address2" label="주소" type="text" inputcss="signup-input" labelcss="signup-input-label"/>     
                            </div>

                            <div className="signup-div">
                                <input type="submit" value="가입하기" className="btn w-[250px] h-[40px] hover:cursor-pointer"/>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            
        </div>
    )
}


export default Signup;