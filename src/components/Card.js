import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Card(props){
    
    const animals = props.animals;
    
    return (
        <div className="card-component container w-[930px] mx-auto rounded-xl space-y-5">
            
            {animals.map((animal, idx)=>{
                let region = (animal.noticeNo).substr(0,2);

                let idxKind = (animal.kind).indexOf("]")+1;
                let kind = (animal.kind).substring(idxKind);

                let idxWeight = (animal.weight).indexOf("(");
                let weight = (animal.weight).substring(0, idxWeight) + "kg";

                let idxAge = (animal.age).indexOf("(년생)");
                let age = (animal.age).substr(0, idxAge) + "년생";

                return (
                    <div key = {idx} className="flex mx-[11px] bg-white w-[210px] h-[350px] inline-flex overflow-hidden">
                        <div className="카드전체 ">
                            <img src={animal.originalImage} alt={animal.desertionNo} className="이미지 w-[210px] h-[200px] rounded-2xl border border-sub object-cover"/>
                            <div className="텍스트 w-[210px] h-[100px]">
                                <div className="title text-main mt-2">
                                    <span className="text-md text-accent font-semibold pl-4 pr-1">{kind}</span>
                                    <span className="text-midgrey"> {weight} </span> 
                                    {/* 성별 아이콘 */}
                                    { animal.sex == 'F' && <img src="./icon-gender-female.png" className="card-icon-sex"/>}
                                    { animal.sex == 'M' && <img src="./icon-gender-male.png" className="card-icon-sex"/>}
                                    { animal.sex == 'Q' && <img src="./icon-gender-unknown.png" className="card-icon-sex"/>}
                                </div>
                                <div className="content px-4 text-sm text-main">
                                    {age} &nbsp;
                                    {/* 상태 아이콘 */}
                                    { animal.processState == '보호중' && <img src="./icon-state-protect.png" className="card-icon-state"/>}
                                    { animal.processState == '공고중' && <img src="./icon-state-notice.png" className="card-icon-state"/>}
                                    <br/>
                                    <strong> 보호소 </strong>  <span className="text-accent">{region}</span> {animal.careNm} <br/>
                                    <strong> 특이사항 </strong> {animal.specialMark} <br/>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                )
            })}
            


        </div>
    )
}

