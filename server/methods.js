Meteor.methods({
  adiciona : (obj) => {
    Tarefas.insert({sabadoDesol: obj.sabadoDesol, data: new Date(),
                    usuario: this.userId})
  },

  remove : (id) => {
    Tarefas.remove({ _id : id, usuario: this.UserId });

  }
});
