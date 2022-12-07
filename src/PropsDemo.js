
function PropsDemo(){

    const message="Hello React!!!"
    const message1="Hello Props!!!"
    return(
        <div>
            <h1>Props Demo!!!</h1>
            <ChildComponent message={message}/>
            <Child1Component message1={message1}/>

        </div>
    )
}

function ChildComponent({message,message1}){

    return(
        <div>
            <h2>Child Component!!!</h2>
            <p>Message : {message} </p>
        </div>
    )
}

function Child1Component({message1}){

    return(
        <div>
            <h2>Child1 Component!!!</h2>
            <p>Message : {message1} </p>
        </div>
    )
}

export default PropsDemo