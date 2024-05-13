export const TextInput = ({label,type,name,css})=>{
    return(
        <div className="flex flex-col items-start gap-1">
            <label className="font-bold text-base">{label}</label>
            <input name={name} type={type} className={`rounded p-2 ${css}`}/>
        </div>
    )
}