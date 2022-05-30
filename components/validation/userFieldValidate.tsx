import {validateEmail,validatePhone, validateText} from "./regex";
import * as yup from 'yup';

const validationScheme = yup.object().shape({
    name: yup.string().trim().required("Veuillez entrer votre nom").min(3, "Le nom n\'est pas correct (4 caractères ou plus")
        .matches(validateText, "Le nom n\'est pas valide"),
    lastname: yup.string().trim().required("Veuillez entrer votre prenom").min(3, "Le prenom n\'est pas correct (4 caractères ou plus")
        .matches(validateText, "Le prenom n\'est pas valide"),
    email: yup.string().required("Veuillez entrer votre email").email("Entrez une adresse e-mail valide"),
    phone: yup.string().required("Veuillez entrer votre téléphone").min(9, "Le téléphone n'est pas correct (9 caractères ou plus)")
        .matches(validatePhone, 'Entrer un numéro de téléphone valide avec (+) et que les chiffres'),
    street: yup.string().required("Veuillez entrer votre adresse").min(6, "L'avenue doit être complète (6 caractères ou plus)"),
    reference: yup.string().required("Veuillez entrer votre référence").min(6, "La référence doit être complète (6 caractères ou plus)"),
    quarter: yup.string().required("Veuillez entrer votre quartier"),
    commune: yup.string().required(" Veuillez entrer votre commune"),
})

export default validationScheme