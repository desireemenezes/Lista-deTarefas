Meteor.methods({
  
  adiciona : (obj) => {
    Tarefas.insert({descricao: obj.descricao, data: new Date(),
                    usuario: this.UserId})
  },

  remove : (tarefaId) => {
    Tarefas.remove({ _id : tarefaId, usuario: this.UserId });
  }
});
