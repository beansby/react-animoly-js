import React, { useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

// 검색 옵션 : 지역(happenPlace, careAddr), 성별(sexCd), 품종(kindCd), 상태(processState)
const filters = [
    {
        id: 'region',   //지역 (보호소)
        name : '지역',
        options: [
            { value: '서울', label: '서울', checked: false },
            { value: '경기', label: '경기', checked: false },
            { value: '인천', label: '인천', checked: false },

            { value: '강원', label: '강원', checked: false },

            { value: '충남', label: '충남', checked: false },
            { value: '충북', label: '충북', checked: false },
            { value: '세종', label: '세종', checked: false },
            { value: '대전', label: '대전', checked: false },

            { value: '전남', label: '전남', checked: false },
            { value: '전북', label: '전북', checked: false },
            { value: '광주', label: '광주', checked: false },

            { value: '경남', label: '경남', checked: false },
            { value: '경북', label: '경북', checked: false },
            { value: '대구', label: '대구', checked: false },
            { value: '부산', label: '부산', checked: false },
            { value: '울산', label: '울산', checked: false },
        ]
    },

    {
        id: 'kind',     //품종 
        name : '품종',
        options: [
            { value: '개', label: '개', checked: false },
            { value: '고양이', label: '고양이', checked: false },
            { value: '기타', label: '기타', checked: false },
        ]
    },

    {
        id: 'sex',      //성별
        name : '성별',
        options: [
            { value: 'M', label: '수컷', checked: false },
            { value: 'F', label: '암컷', checked: false },
            { value: 'Q', label: '미상', checked: false },
        ]
    },

    {
        id: 'neuter',   //중성화 여부 
        name : '중성화',
        options: [
            { value: 'Y', label: '예', checked: false },
            { value: 'N', label: '아니오', checked: false },
            { value: 'U', label: '미상', checked: false },
            { value: 'Null', label: '전체', checked: false },
        ]
    },

    {
        id: 'status',     //상태
        name : '상태',
        options: [
            { value: 'notice', label: '공고중', checked: false },
            { value: 'protect', label: '보호중', checked: false },
            { value: 'null', label: '전체', checked: false },
        ]
    },
]

//목록 정렬 옵션 
const sortBy = [
    { name: '최신순', href:'#', current: true },
    { name: '공고임박순', href:'#', current: false },
]


function AnimalList() {

    useEffect(()=>{
        axios.get("http://localhost:8080/api/animalsV2")
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=> {
            console.log(err);
        })
    }, [])

    



    return (
        // 배너 + 검색필터 + 정렬 + 카드형 목록 + 페이징
        <div className="">
            {/* 광고 배너 */}
            <div className="container w-[930px] h-[180px] mx-auto mt-20 mb-10 bg-sub2 text-center">
                광고 배너 930*180 (구글 광고배너 기준)
            </div>

            {/* 검색필터 */}
            <div className="container flex w-[930px] rounded-lg mx-auto bg-white ">
                
                {/* static child : 지도 svg*/}
                <div className="static inline-block box-content w-[250px] h-[280px] ml-2.5 rounded-lg bg-white">
                    
                </div>

                {/* static sibling : 조건 목록 */}
                {filters.map((section) => (
                    <div key={section.id} className="flex-col block static">
                        
                            {/* title */}
                            <span className="bg-accent text-white rounded-xl px-[25px] py-[5px] mx-auto">
                                {section.name}
                            </span>
                            {/* options */}
                            {section.options.map((option, idx)=>(
                                <div key={option.value} className="px-[5px] py-[5px]">
                                    <input type="checkbox" defaultValue={option.value} defaultChecked={option.checked}
                                        id={`filter-${section.id}-${idx}`} name={`${section.id}[]`}
                                        className=""
                                    />
                                    <label className="text-main">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                       
                    </div>
                ))}
                
            </div>

            {/* 정렬 : 드롭다운 */}
            <div className="container w-[930px] text-main mt-[40px] text-right right-0">
                정렬
            </div>

            {/* 카드목록 + 페이징 */}
            <div className="container w-[930px] h-[1080px] rounded-2xl mt-5 bg-sub2">
                <Card/>
            </div>

        </div>
    )
}

export default AnimalList;