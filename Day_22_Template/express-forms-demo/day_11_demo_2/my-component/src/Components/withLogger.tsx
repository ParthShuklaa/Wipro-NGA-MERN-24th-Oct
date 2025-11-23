import { useEffect } from "react";


function withLogger<P extends object >(WrappedComponent:React.ComponentType<P>){

    const ComponentWithLogger =(props: P)=>{
        useEffect(()=>{
            console.log(`Mounted component:${WrappedComponent.name}`);
            return()=>console.log( `unmounted component:${WrappedComponent.name}`);
        },[]);
        return <WrappedComponent{...props} />;
    };
    return ComponentWithLogger;

}

export default withLogger;