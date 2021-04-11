import React from 'react'
import CheckBoxAnswer from './CheckBoxAnswer'

function AnswerComp({answers}) {
    return (
        <div>
            {
            answers.map(ans=>{
                console.log(ans);
                return(
                     <CheckBoxAnswer answer={ans} />
                )
            })}
           

        </div>
    )
}

export default AnswerComp;

