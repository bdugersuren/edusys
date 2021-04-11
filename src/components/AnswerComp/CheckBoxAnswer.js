import React, { useState } from 'react'
import { BiChevronRight, BiChevronDown,BiCheckboxChecked,BiCheckbox,BiCheckboxSquare, BiVerticalCenter,BiBookOpen,
    BiBook,BiBookReader,BiArrowFromTop} from "react-icons/bi";

function CheckBoxAnswer({answer}) {
    const [isCheck, setIsCheck] = useState(true);
    console.log("---------------------------> ",answer);
    return (
        <div>
            <div  onClick={()=>setIsCheck(!isCheck)}> {isCheck?<BiCheckboxChecked  />:<BiCheckbox />}</div>
            <div>
                 {answer.answer1} 
              </div>
        </div>
    )
}

export default CheckBoxAnswer
