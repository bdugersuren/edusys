import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { loadRouteMenus } from '../redux/roleMenu/actionCreator';
const ChildNode=({nodes})=>{
    return(
        <ul>
            
            {nodes.map(n=>{
                return(
                    <li key={n.id}>
                        {n.title + n.path}
                        {n.children!==null&&<ChildNode nodes={n.children}  />}
                    </li>
                )
            })}
        </ul>
    )
}

const TreePage=()=> {

    const dispatch = useDispatch();


    
      const roleMenuDate = useSelector(state => state.roleMenu.data);
return (
    <ul>
        {roleMenuDate.map(node=>{
            return(
                <li key={node.id}>
                    {node.title + node.path}
                    {node.children.length!==null&& <ChildNode nodes={node.children} /> }
                </li>
            )
        })}
    </ul>
)
   
}


export { TreePage as default }