class tarefaController {
    static rotas(app){
        app.get('/tarefa', tarefaController.listar)
    }

    static listar(req,res){
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')
    }
}

export default tarefaController