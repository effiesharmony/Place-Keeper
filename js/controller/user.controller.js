'use strict'

function onInit() {
    setBgc()
}

function onFormSubmit(ev) {
    ev.preventDefault()

    const user = {
        email: ev.target.email.value,
        color: ev.target.color.value
    }
    saveUser(user)
    document.querySelector('.email-container').value = ''
}
