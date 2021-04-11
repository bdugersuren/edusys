import React, { useState } from 'react'


function CheckBoxAnswer({answer}) {
    const [isCheck, setIsCheck] = useState(true);
    console.log("---------------------------> ",answer);
    return (
        <div>
            <div  onClick={()=>setIsCheck(!isCheck)}> a</div>
            <div>
                 {answer.answer1} 
              </div>
        </div>
    )
}

export default CheckBoxAnswer
