import React, { useEffect, useState } from "react";
import DaumPostcode, { useDaumPostcodePopup } from 'react-daum-postcode';
import {useSelector, useDispatch} from 'react-redux';
import { CHANGE_ADDRESS1, CHANGE_ZIP } from "../redux/actions/postcodeAction";

const Postcode = ({home, setHome}) => {
    const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const open = useDaumPostcodePopup(scriptUrl);

    const [zip, setZip] = useState(home.zip);
    const [city, setCity] = useState(home.city);
    const dispatch = useDispatch();

    useEffect(()=>{
      console.log("==================PostCode 주소 변경")
      console.log("zip:"+zip+"city:"+city);
      setHome({zip:zip, city:city});
    },[zip, city]);

    const handleComplete = (data) => {
      // console.log(data);
      //우편번호
      let zipcode = data.zonecode;
      //전체주소, city
      let fullAddress = data.address;
      let extraAddress = '';
  
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      // console.log(zipcode);
      // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      setZip(zipcode);
      setCity(fullAddress);
    };

    const handleClick = () => {
      open({ onComplete: handleComplete });
    };
  
    return (
      <button type='button' onClick={handleClick} className='signup-btn-zip'>
        주소검색 
      </button>
    );
};

export default Postcode;