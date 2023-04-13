import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import SearchOption from "../../components/SearchOption";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// 검색 옵션 : 지역(happenPlace, careAddr), 성별(sexCd), 품종(kindCd), 상태(processState)
const filters = [
    {
        id: '지역',   //지역 (보호소)
        name : 'uprCd',
        options: [
            { value: '6110000', label: '서울', checked: false },
            { value: '6410000', label: '경기', checked: false },
            { value: '6280000', label: '인천', checked: false },
            { value: '6420000', label: '강원', checked: false },
            { value: '5690000', label: '세종', checked: false },
            { value: '6300000', label: '대전', checked: false },
            { value: '6270000', label: '대구', checked: false },
            { value: '6260000', label: '부산', checked: false },
            { value: '6310000', label: '울산', checked: false },

            { value: '6440000', label: '충남', checked: false },
            { value: '6430000', label: '충북', checked: false },

            { value: '6460000', label: '전남', checked: false },
            { value: '6450000', label: '전북', checked: false },
            { value: '6290000', label: '광주', checked: false },

            { value: '6480000', label: '경남', checked: false },
            { value: '6470000', label: '경북', checked: false },

            { value: '6500000', label: '제주', checked: false },
        ]
    },

    {
        id: '축종',     //품종 
        name : 'upKind',
        options: [
            { value: '417000', label: '개', checked: false },
            { value: '422400', label: '고양이', checked: false },
            { value: '429900', label: '기타', checked: false },
        ]
    },

    {
        id: '중성화',   //중성화 여부 
        name : 'neuter_yn',
        options: [
            { value: 'Y', label: '예', checked: false },
            { value: 'N', label: '아니오', checked: false },
            { value: 'U', label: '미상', checked: false },
            { value: '', label: '전체', checked: false },
        ]
    },

    {
        id: '상태',     //상태
        name : 'state',
        options: [
            { value: 'notice', label: '공고중', checked: false },
            { value: 'protect', label: '보호중', checked: false },
            { value: '', label: '전체', checked: false },
        ]
    },
]

//목록 정렬 옵션 
const sortBy = [
    { name: '최신순', href:'#', current: true },
    { name: '공고임박순', href:'#', current: false },
]



function AnimalList() {
    const [animals, setAnimals] = useState([]);
    // const [region, setRegion] = useState('');   //지역
    // const [kind, setKind] = useState('');       //축종
    // const [sex, setSex] = useState('');         //성별
    // const [neuter, setNueter] = useState('');   //중성화
    // const [state, setState] = useState('');     //상태

    const [keywords, setKeywords] = useState({uprCd:'', upKind:'', neuter_yn:'', state:''});

    const selectSearchOption = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name +":"+ value);
        setKeywords({...keywords, [name]:value});
        console.log(keywords);
    }

    const search = (e) => {
        const formData = new FormData();
        formData.append('upKind', keywords.upKind); //축종
        formData.append('state', keywords.state);   //상태
        formData.append('neuter_yn', keywords.neuter_yn); //중성화
        formData.append('uprCd', keywords.uprCd); //지역

        let param = {upKind:keywords.upKind, state:keywords.state, neuter_yn:keywords.neuter_yn, uprCd:keywords.uprCd};
        
        axios.get("http://localhost:8080/api/fetch-animals", {params:param})
        .then((res)=>{
            console.log(res.data.data);
            setAnimals(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:8080/api/fetch-animals', null, null)
        .then((res)=>{
            console.log(res.data.data);
            setAnimals(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])


    return (
        // 배너 + 검색필터 + 정렬 + 카드형 목록 + 페이징
        <div className="">
            {/* 광고 배너 930*180 (구글 광고배너 기준)*/}
            <Banner/>

            {/* 검색필터 */}
            <div className="bg-main/5 rounded-2xl mx-auto w-[930px] font-kor flex">
                <div className="w-[300px] bg-white rounded m-2">
                    지도
                </div>
                <div className="flex-col p-4">
                    {filters.map((section)=>{
                        return (
                            <div key={section.name} class="main flex-col overflow-hidden select-none w-[600px] m-1">
                                <div class="title w-24 text-center py-2 my-auto px-5 text-accent border-b-2 border-accent font-semibold mr-2">
                                    {section.id}
                                </div>
                                {section.options.map((option)=>{
                                    return(
                                        <label className="inline-flex radio p-1 cursor-pointer text-main" onChange={selectSearchOption}>
                                            <input className="my-auto transform scale-125 form-radio text-accent border-grey border h-3 w-3" type="radio" name={section.name} value={option.value} />
                                            <div className="title px-2"> {option.label} </div>
                                        </label>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <div className="relative h-[10px]">
                            <div className="absolute right-4 bottom-4 bg-main w-20 h-8 leading-8 text-center bg-white text-midgrey border border-grey rounded-2xl hover:text-white hover:bg-accent hover:font-semibold hover:border-accent" onClick={search}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <button type="button"> &nbsp; 검색 </button>
                            </div>
                    </div>
                </div>
                
            </div>

            {/* 정렬 : 드롭다운 */}
            <div className="container w-[800px] text-main mt-[40px] text-right right-0 mx-auto">
                정렬
            </div>

            {/* 카드목록 + 페이징 */}
            
            <Card animals={animals}/>

        </div>
    )
}

export default AnimalList;