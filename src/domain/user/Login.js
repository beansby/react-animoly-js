import React, { useEffect } from "react";

function Login() {
    useEffect = () => {

    }


    return (
        <div className="flex flex-col text-center mx-auto w-[800px] h-96 align-middle justify-center">
            {/* <div className="w-[500px]">  좌측 이미지 </div> */}

            {/* 로그인 */}
            {/* <div>  */}
                <div className="title h-32 py-10">
                    <p className="text-main text-3xl font-bold font-kor inline-block">
                        WELCOME , &nbsp;
                        <p className="text-accent text-5xl font-animoly3 inline-block"> 
                             Animoly!
                        </p>
                    </p>
                </div>

                {/* 로그인 정보 입력 */}
                <form className="">
                    <div className="py-1">
                        <label htmlFor="user-id" className="sr-only"> 아이디 </label>
                        <input className="h-10 px-4 w-60 rounded-xl placeholder:px-5" id="user-id" name="user-id" type="text" required placeholder="Enter your ID"/>
                    </div>

                    <div className="py-1"> 
                        <label htmlFor="password" className="sr-only"> 비밀번호 </label>
                        <input className="h-10 px-4 w-60 rounded-xl placeholder:px-5" id="password" name="password" type="password" required placeholder="Password"/>
                    </div>
                </form>

                

                {/* 체크박스 옵션 */}
                <div className="flex items-start justify-center mt-5 mb-10">
                    {/* 로그인 정보 기억 */}
                    <div className=" my-auto">
                        <div className="h-6 items-center px-5">
                          <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor="remember" className="font-medium text-gray-900">
                            &nbsp; 아이디 기억하기 
                          </label>
                        </div>
                    </div>

                    {/* 로그인 상태 유지 */}
                    <div className="my-auto">
                        <div className="h-6 items-center px-5">
                          <input
                            id="stay"
                            name="stay"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor="stay" className="font-medium text-gray-900">
                            &nbsp; 로그인 상태 유지
                          </label>
                        </div>
                    </div>

                </div>
                    

                <div className="">
                    
                        <a href="#"> 아이디 찾기 </a>
                    
                        <a href="#"> 비밀번호 찾기 </a>
                    
                        <a href="#"> 회원가입 </a>
                 
                </div>

                <div>
                    <button type="submit" className="bg-accent mx-10 rounded-lg w-24">
                        로그인
                    </button>
                </div>
            {/* </div> */}


            {/* <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                    
                    로그인제목
                    <div>
                        <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                start your 14-day free trial
                            </a>
                        </p>
                    </div>


                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                Email address
                                </label>
                                <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                Password
                                </label>
                                <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                            </a>
                        </div>
                        </div>

                        <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                        </div>
                    </form>
                    </div>
            </div> */}
        </div>
    )
}

export default Login;