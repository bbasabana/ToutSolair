import React from "react";
import { useField } from "formik";
import ErrorMessage from "../components/validation/errorMessage";


interface Props {
    name: string,
    type?: string,
    placeholder?: string,
    value?:string,
    className?: string
}
// const InputForm : React.FC<Props> =  ({name, className, ...props}) => {
//     const [field, {touched, error}] = useField(name)
//     const id = `field_${name}`
//     //const {name, type, placeholder, value, id, onChange, errors, className, touched} = props
//
//     return (
//         <>
//         <div className="InputDiv">
//         <input
//             {...field}
//             {...props}
//             id={id}
//            // onChange={(e)  => onChange(e)}
//             className={className}
//              />
//             {touched && error && (<ErrorMessage>{error}</ErrorMessage>)}
//         </div>
//        </>
//     )
// }

const InputForm  = (props:any) => {
    const {name, type, placeholder, value, id, onChange, errors, className, touched} = props
    return (
        <>
            <div className="InputDiv">
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e)  => onChange(e)}
                    className={className}
                />
                {errors &&   <ErrorMessage>{errors}</ErrorMessage>}
            </div>
        </>
    )
}


InputForm.defaultProps = {
    type: 'text',
}

export default InputForm