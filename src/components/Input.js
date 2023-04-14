import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { FieldFeedback } from "./FieldFeedBack";
import Postcode from "./PostCode";
import {useSelector, useDispatch} from 'react-redux';
import { CHANGE_ADDRESS1, CHANGE_ZIP } from "../redux/actions/postcodeAction";

export function Input({label, type, labelcss, inputcss, withFeedbackLabel = true, customFeedbackLabel, ...props}) {
  const [field, meta, helpers] = useField(props);
  const { touched, error } = meta;

  const [home, setHome] = useState({zip:"", city:""});
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("==================Input 주소변경");
    if(home.zip != ''){
      console.log("zip:"+home.zip+", address1:"+home.city);
      
      //redux 저장
      dispatch({type:CHANGE_ZIP, data:home.zip});
      dispatch({type:CHANGE_ADDRESS1, data:home.city});
      console.log("리덕스 저장 성공");
    }
  }, [home]);

  return (
    <>
      {/* {label && <label> {label}</label>}
      <input className="login-input" type={type} {...field} {...props} /> */}
      {inputcss == 'login-input' && 
        <>
          <td className=""> 
            {label && <label className={labelcss}> {label} </label> }
          </td>
          <td>
            <input className={inputcss} type={type} {...field} {...props} />
          </td>
        </>
      }

      {inputcss == 'signup-input' && 
        <>
          {label && <label className={labelcss}> {label} </label> }
          {label != '주소' && 
            <input className={inputcss} type={type} {...field} {...props} />
          }
          {label=='주소' && 
          <>
            <input className="signup-input-zip" type={type} placeholder="우편번호" value={home.zip} {...props}/>
            <Postcode home={home} setHome={setHome}/>
            <input className={inputcss} type={type} placeholder="" value={home.city} {...props}/>
            <input className={inputcss} type={type} placeholder="상세주소 입력" {...field} {...props} />
          </>
          }
        </>
      }
      
      {/* error message */}
      {meta.touched && meta.error ? (
         <div className="error text-midgrey text-sm m-2">{meta.error}</div>
       ) : null}
      
    </>
  );
}