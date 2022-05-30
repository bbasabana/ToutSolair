import FormUserInfos from "../User/formUserInfos";
import {useState} from "react";
import ButtonForm from "../../widgets/button";

function LeftContent(){
    const[showFormUser, setForm] = useState(false);
    const onclickFormDevis = (e:any) => {
        setForm(true)
    }
    return <div className="leftContent w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        { !showFormUser && (
            <div className="leftContainer-Content">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">ToutSolaire</span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight"> Expert de l'autonomie solaire &amp; kit solaire</h1>
                <p className="mb-8 text-lg md:text-sm text-coolGray-500 font-medium"> Notre mission est de
                    vous donner accès à une énergie propre reposant <br/> sur les technologies les plus récentes. <br/> Nous vous
                    accompagnons avant et après votre installation <br/>que nous assurons également. </p>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                        <ButtonForm
                            type="button"
                            text="Demander un devis gratuit"
                            onClick={onclickFormDevis}
                            svg={<svg  viewBox="0 0 20 20" width="32" height="32" className="svg-icon"><path fill="#fff" d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"></path></svg>}
                            className="btn-left-content py-4 px-6 sm:px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base  hover:bg-opacity-90 font-normal rounded-lg"
                        />
                    </div>
                </div>
            </div>
        )}
        { showFormUser && (
           <FormUserInfos /> )
        }
       </div>
}

export default LeftContent