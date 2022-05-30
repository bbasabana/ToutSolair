export const validateText = new RegExp(
    '^[a-zA-Z ]{2,20}$'
)

export const validateEmail = new  RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
)

export const validatePhone = new RegExp(
    '[0-9 ]{12}'
)