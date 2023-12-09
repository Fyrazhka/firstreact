import {useEffect, useRef} from "react";

export const useObserver=(ref,canLoad,isLoading, callback)=>{
    const  observer=useRef();
    useEffect(() => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && canLoad) {
                    callback();
                }
            },
            { threshold: 0.5 } // добавьте пороговое значение для IntersectionObserver
        );
        observer.current.observe(ref.current);
    }, [isLoading])
}