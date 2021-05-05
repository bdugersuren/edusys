import React from 'react'
import {Route, Redirect} from 'react-router-dom'
const ProtectedRouter = ({isAuth, component: Component,layout: Layout, ...rest}) =>{
    return(
        <Route
            {...rest}
            render={(props)=>{
                if(isAuth){
                    return (
                        <Layout>
                    <Component location={props.location} match={props.match}/>
                    </Layout>
                    )
                }else{
                    return(
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
                }
            }}
        />
    )
}

export default ProtectedRouter