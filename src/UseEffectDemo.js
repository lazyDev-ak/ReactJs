import { useEffect } from "react"

function UseEffectDemo(){

    useEffect(()=>{
        console.log('hiiiiiiii');
    },[])

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            
        </div>
    )
}

export default UseEffectDemo