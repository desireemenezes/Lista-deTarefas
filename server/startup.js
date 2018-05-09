Meteor.startup(function() {
//cria o banco no servidor
  Meteor.publish('tarefas', function(){
    return Tarefas.find({ usuario: this.UserId});
  });

});
