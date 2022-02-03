const chuches = [];
const userChuches = [];

const sugus = {
    name: 'Sugus',
    description: `Caramelos masticables de forma cuadrada, y sus medidas son de 2 cm de lado y 7 mm de espesor, incluyendo el envoltorio.`,
    votes: 0
}

const petaZeta = {
    name: 'Peta Zeta',
    description: `Peta Zeta es un caramelo carbonatado, también conocido como caramelo con chasquidos.`,
    votes: 0
}

const regaliz = {
    name: 'Regaliz',
    description: `Dulce con una textura similar a la goma que se saboriza con los extractos de las raíces de la planta del regaliz, así como también aceites de anís.`,
    votes: 0
}

const lacasitos = {
    name: 'Lacasitos',
    description: `La forma es redondeada y su tamaño es siempre de 1 cm de diámetro. Se trata de una lenteja de chocolate con leche recubierta por 150 capas de azúcar.`,
    votes: 0
}

chuches.push(sugus, petaZeta, regaliz, lacasitos)

function addChuche(c, chucheN, chucheD) {
    const chuche = document.createElement('li')
    chuche.classList.add('chuche__type')

    const chucheInfo = document.createElement('div')
    chucheInfo.classList.add('.chuche__info')

    const chucheName = document.createElement('h2')
    chucheName.classList.add('.chuche__name')
    chucheName.textContent = c.name ?? chucheN

    const chucheDescription = document.createElement('p')
    chucheDescription.classList.add('.chuche__description')
    chucheDescription.textContent = c.description ?? chucheD

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('chuche__btn-container')

    const button = document.createElement('button')
    button.classList.add('chuche__vote-btn')

    const thumbUp = document.createElement('i')
    thumbUp.classList.add('chuches__vote-icon', 'far', 'fa-thumbs-up')

    const votesCounter = document.createElement('p')
    votesCounter.classList.add('chuches__votes-counter')
    votesCounter.textContent = 0;

    document.querySelector('.chuches__list').appendChild(chuche)
    chuche.appendChild(chucheInfo)
    chucheInfo.appendChild(chucheName)
    chucheInfo.appendChild(chucheDescription)
    chuche.appendChild(buttonContainer)
    buttonContainer.appendChild(button)
    button.appendChild(thumbUp)
    button.appendChild(votesCounter)

    button.addEventListener('click', (e) => {
        votesCounter.textContent ++
    })
}



//user adds chuche

function userAddsChuche() {
    const submit = document.querySelector('#submit')
    submit.addEventListener('click', e => {
        e.preventDefault();
        const nameUserChuche = document.querySelector('#chuche-name-user').value
        const descriptionUserChuche = document.querySelector('#chuche-description-user').value
        const userChuche = {
            name: nameUserChuche,
            description: descriptionUserChuche,
            votes: 0
        }
        userChuches.push(userChuche)
        addChuche(userChuche)
    })
    storageUserChuches()
}

function storageUserChuches() {
    sessionStorage.setItem('chuches del user', userChuches)
}


chuches.forEach( (c) => addChuche(c))
userAddsChuche()




