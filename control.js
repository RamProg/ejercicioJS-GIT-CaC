validate = () => {
    const user = document.getElementById("user").value
    const pass = document.getElementById("pass").value
    if(user.length === 0) {
        emptyUser()
    } else if (!user.includes("@")) {
        noAt()
    } else if(pass.length === 0) {
        emptyPass()
    } else {
        submit()
    }
}

emptyUser = () => {
    alert ("Usuario vacio")
}

emptyPass = () => {
    alert ("Contraseña vacía")
}

noAt = () => {
    alert ("El email no es válido porque no tiene arroba")
}

submit = () => {
    document.getElementById("basicForm").submit()
}