let tarefas = []

function adicionarTarefa() {
    let tarefa = document.getElementById("nome-tarefa").value

    if(tarefa) {
        tarefas.push(tarefa)
        exibeTarefas()
        tarefa = ""
    }
}

function exibeTarefas(){
    let listaTarefas = document.getElementById("lista-tarefas")
    listaTarefas.innerHTML = ""
    listaTarefa.forEach((tarefa) => {
        let li = document.createElement("li")
        li.innerHTML = tarefa 
        tarefas.appendChild(li)
    })


}