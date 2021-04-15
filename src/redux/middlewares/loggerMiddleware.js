
const loggerMiddleware =store=>{
    return next =>{
        return action=>{
            //console.log("loggerMiddleware: Dispatching ==> ", action);
            //console.log("loggerMiddleware: Dispatching ==> ", action);
            const result=next(action);
            //console.log("loggerMiddleware: Dispatching ==> ", action);
            return result;
        }
    }
}
export default loggerMiddleware;