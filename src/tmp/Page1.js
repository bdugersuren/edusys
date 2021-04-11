import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Translate,setLocale } from "react-redux-i18n";

function Page1() {
    const dispatch = useDispatch();
    const locate18 = useSelector(state => state.i18n.locale);




    return (
        <div>
            <Translate value="news.picture" />
            <button onClick={()=>dispatch(setLocale('EN'))}>English</button>
            <button onClick={()=>dispatch(setLocale('MN'))}>Mongolia</button>
            <button onClick={()=>dispatch(setLocale('AR'))}>Arabic</button>

            <div>
            {locate18}
            </div>
        </div>
    )
}

export default Page1
