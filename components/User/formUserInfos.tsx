import InputForm from "../../widgets/Input";
import ButtonForm from "../../widgets/button";
import usedForm from "./useForm";


const FormContactUser  = () => {
const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    isValidating,
    dirty} = usedForm()

    return <div className="solarFormUserInfos space-y-6 rounded-xl border border-gray-200 bg-white">
                <div  className="flex-1 overflow-hidden m-8">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="inline align-text-top mr-4"
                         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c1b1b" ><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                    <p  className="hero-title-solar inline  font-semibold lg:-pts-4 leading-none">Information Personnelle</p>
                </div>
                <form
                    onSubmit={handleSubmit}>
                     <div className="personal-infos">
                        <div className="px-5 pb-5">
                         <div className="flex">
                        <div className="flex-grow pr-2">
                            <InputForm
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Nom"
                                value={values.name}
                                onChange={handleChange}
                                errors={errors.name}
                                className={`${errors.name ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}
                            />
                        </div>
                        <div className="flex-grow">
                            <InputForm
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Prénom"
                                value={values.lastname}
                                onChange={handleChange}
                                errors={errors.lastname}
                                className={`${errors.lastname ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                            />
                        </div>
                    </div>
                    <InputForm
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        errors={errors.email}
                        className={`${errors.email ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                    />

                    <InputForm
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Téléphone"
                        value={values.phone}
                        onChange={handleChange}
                        errors={errors.phone}
                        className={`${errors.phone ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                    />
                </div>
                        <div  className="flex-1 overflow-hidden m-8">
                            <svg className="inline align-text-top" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c1b1b" ><circle cx="11.5" cy="8.5" r="5.5"/><path d="M11.5 14v7"/></svg>
                            <p  className="hero-title-solar inline  font-semibold lg:-pts-4 leading-none">Adresse</p>
                        </div>
                         <div className="px-5 pb-5">
                            <InputForm
                                id="street"
                                name="street"
                                type="text"
                                placeholder="Avenue"
                                value={values.street}
                                onChange={handleChange}
                                errors={errors.street}
                                className={`${errors.street ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                            />
                            <InputForm
                                id="reference"
                                name="reference"
                                type="text"
                                placeholder="Référence du lieu"
                                value={values.reference}
                                onChange={handleChange}
                                errors={errors.reference}
                                className={`${errors.reference ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                            />
                         <div className="flex">
                        <div className="flex-grow w-1/4 pr-2">
                            <InputForm
                                id="quarter"
                                name="quarter"
                                type="text"
                                placeholder="Quartier"
                                value={values.quarter}
                                onChange={handleChange}
                                errors={errors.quarter}
                                className={`${errors.quarter ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                            />
                        </div>
                        <div className="flex-grow">
                            <InputForm
                                id="commune"
                                name="commune"
                                type="text"
                                placeholder="Commune"
                                value={values.commune}
                                onChange={handleChange}
                                errors={errors.commune}
                                className={`${errors.commune ? "border border-red-500 pb-36 rounded-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" :  values.name ? "bg-gray-50 border pb-36 border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    : 'bg-gray-50 border pb-36 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} `}

                            />
                        </div>
                    </div>
                         <hr className="mt-4" />
                </div>
                         <div  className="flex flex-row-reverse p-3">
                    <div  className="flex-initial pl-3">
                        <ButtonForm
                            type="submit"
                            disabled={!(isValid && dirty)}
                            loading={ isSubmitting === true &&   <div className="w-4 h-4 rounded-full animate-spin border-2 border-dashed border-yellow-600 border-t-transparent"></div>}
                            svg={(!isValid || !dirty ) ? <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1b1b" ><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                             : <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5a623" ><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>}
                            text={`${!(isValid && dirty) && !isValidating ? (isSubmitting === true ? 'Patienter...' : 'Continue') : 'Continue'}`}
                            className={`${!(isValid && dirty) ? 'btn-disabled' : 'btn-actived'}`}
                        />
                    </div>
                </div>
                      </div>
                </form>
    </div>
}

export default FormContactUser