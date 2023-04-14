import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


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

export default function SearchOption(){
    return (
        // <div className="bg-main/5 rounded-2xl mx-auto w-[930px] font-kor">
        <div className="flex-col p-4">
            {filters.map((section)=>{
                return (
                    <div key={section.name} class="main flex-col overflow-hidden select-none w-[600px] m-1">
                        <div class="title w-24 text-center py-2 my-auto px-5 text-accent border-b-2 border-accent font-semibold mr-2">
                            {section.id}
                        </div>
                        {section.options.map((option)=>{
                            return(
                                <label className="inline-flex radio p-1 cursor-pointer text-main">
                                    <input className="my-auto transform scale-125 form-radio text-accent border-grey border h-3 w-3" type="radio" name={section.name} value={option.value} />
                                    <div className="title px-2"> {option.label} </div>
                                </label>
                            )
                        })}
                    </div>
                )
            })}
            <div className="relative h-[10px]">
                    <div className="absolute right-4 bottom-4 bg-main w-20 h-8 leading-8 text-center bg-white text-midgrey border border-grey rounded-2xl hover:text-white hover:bg-accent hover:font-semibold hover:border-accent">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <button type="button"> &nbsp; 검색 </button>
                    </div>
            </div>
            
        </div>
    )
}