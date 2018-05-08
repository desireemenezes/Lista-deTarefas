Meteor.methods({
  adiciona : (obj) => {
    Tarefas.insert({sabadoDesol: obj.sabadoDesol, data: new Date()})
  },

  remove : (id) => {
    Tarefas.remove({_id : id});

  }
});
