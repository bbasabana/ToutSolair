import {useState} from "react";
import {Form,ErrorMessage, useFormik} from "formik";
import validationSchema from "../validation/userFieldValidate";

const usedForm = () => {

    const  onSubmit = async (values:any) => {
        //handleSubmit(values)

        const isValid  = await validationSchema.isValid(values)
        if(!isValid){
            setSubmitting(true)
        }
        console.log(JSON.stringify(values))
    }

    // const onSubmit = {(values, actions) => {
    //     setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         actions.setSubmitting(false);
    //     }, 1000);
    // }}
     const {
         handleChange,
         handleSubmit,
         values,
         touched,
         errors,
         isValid,
         isValidating,
         dirty,
         setSubmitting,
         isSubmitting
    } = useFormik({
        initialValues: {
            name:"",
            lastname:"",
            email:"",
            phone:"",
            street:"",
            reference:"",
            quarter:"",
            commune:""
        },
      validationSchema,
      onSubmit,

    });

    return {handleChange, handleSubmit, values, isValid, errors, touched, isSubmitting, isValidating, dirty}

}

export default usedForm