import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Card(){
    const [animals, setAnimals] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/api/animalsV2', null, null)
        .then((res)=>{
            console.log(res.data.data);
            setAnimals(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div className="card-component container w-[930px]">
            
            <div className="grid grid-cols-4 gap-3">
                {/* 카드 틀 */}
                {animals.map((animal, idx)=>(
                    <div key={idx} className="flex flex-col h-[300px] rounded-lg bg-white">
                        <img src={animal.filename} className="h-[200px]  rounded-t-lg block"/>
                        <div className="ml-4 mt-2 h-[100px] ">
                            <span className="text-md font-kor font-semibold text-accent ">
                                {animal.ageCd}  + 성별아이콘
                            </span>
                            <p className="text-sm block">
                                품종 : <br/>
                                상태 : {animal.processState} <br/>
                                위치: (지역)보호소 이름 <br/>
                                중성화 여부 : 완료 <br/>
                                보호기간 : <br/>
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

