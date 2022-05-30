const ButtonForm = (props:any)  => {
    const {type, text, svg, className, onClick, disabled,loading}  = props
    return <button
               type={type}
               className={className}
               onClick={onClick}
               disabled={disabled}
           >
               {svg}
               {loading}
            <span  className="pl-2 mx-1">{text}</span>
    </button>
}
export default ButtonForm