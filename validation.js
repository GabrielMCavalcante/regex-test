const username = document.querySelector('[name=username]')
const email = document.querySelector('[name=email]')
const password = document.querySelector('[name=password]')
const telephone = document.querySelector('[name=telephone]')
const slug = document.querySelector('[name=slug]')

const inputs = [username, email, password, telephone, slug]

const btnSubmit = document.querySelector('button#submit')
btnSubmit.disabled = true

function addValidation(element, validation) {
    element.addEventListener('keyup', e => {
        const value = e.target.value
        if (!value.match(validation))
            element.classList.add('invalid')
        else element.classList.remove('invalid')

        btnSubmit.disabled = false
        inputs.forEach(input => {
            if(!btnSubmit.disabled)
                if(input.classList.contains('invalid') || !input.value)
                    btnSubmit.disabled = true
        })
    })
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const inputValues = {}
    inputs.forEach(input => inputValues[input.attributes.name.value] = input.value)
    console.log(inputValues)
})

const rules = {
    username: /^[a-z\d]{5,12}$/gi,
    email: /([a-z\d\.-]+)@([a-z\d-]+)(\.[a-z]{2,8}(\.[a-z]{2,8})?)/i,
    password: /^[\w@_-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}

addValidation(username, rules.username)
addValidation(email, rules.email)
addValidation(password, rules.password)
addValidation(telephone, rules.telephone)
addValidation(slug, rules.slug)
