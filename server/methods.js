Meteor.methods({
  
  adiciona : (obj) => {
    Tarefas.insert({descricao: obj.descricao, data: new Date(),
                    usuario: Meteor.userId()})
  },

  remove : (tarefaId) => {
    Tarefas.remove({ _id : tarefaId, usuario: Meteor.userId() });
  }
});
