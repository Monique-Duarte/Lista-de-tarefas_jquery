$(document).ready(function() { //longin usando o jquery

    $('form').on('submit',function(e) { // atribuir evento com .on de submit informação da qual aciona uma função 
        e.preventDefault() // previna ação padrão do navegador (atualizar a pagina)

        const itemTarefa = $('#tarefa').val() //constante tarefa
        const novoItem = $('<li></li>') // inserção da nova tarefa
        $(`<p>${itemTarefa}</p>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('#tarefa').val('')
        $(itemTarefa).click
    })

    $(document).on('click', '#lista-tarefas li', function () { // risca quando clica na tarefa
        $(this).toggleClass('riscar'); 
    })

})