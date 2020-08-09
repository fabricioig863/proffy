// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    // Const significa uma variável constante que não troca o seu valor.
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    // Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    

   