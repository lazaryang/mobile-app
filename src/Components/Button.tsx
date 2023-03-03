
interface Props {
    clikc():any,
    cN:string,
    butName:string,
    typeBut?:string
}

function Button({clikc,butName,typeBut,cN}:Props):any{
    return <button  onClick={()=>clikc} className={cN} ><h2>{butName} </h2></button>
}


export default Button
