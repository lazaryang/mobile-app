
interface Props {
    typeInput:string,
    placeholder:string
}

function Input({typeInput,placeholder}:Props):any{
    return <input type={typeInput}  placeholder={placeholder} ></input>
}


export default Input