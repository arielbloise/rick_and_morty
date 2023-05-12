const validateData = (data) => {
    let errors ={}

    if(!data.email.includes('@')){
        errors.e1 = 'Email is not valid'
    }
    if(!data.email){
        errors.e2 = 'Ingrese Email'
    }
    if(data.email.length > 35){
        errors.e3 = 'Debe tener menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos debe tener un número'
    }
    if (data.password.length < 6 || data.password.lenght > 10 ){
        errors.p2 = 'Longitud Incorrecta'
    }
    return errors
}

export default validateData