import React from 'react'
import {Link} from 'react-router-dom'

function MenuItem({childItem}) {
    return (
        <ul>
            {childItem.map(item=>{
                return(
                    <li key={item.id}>
                        <Link to={item.path} >
                            {item.title}
                        </Link>
                        {item.children!==null&&<MenuItem childItem={item.children}  />}
                    </li>
                )
            })}
           
        </ul>  
    )
}

export default MenuItem;
