Meteor.startup(function(){
  //o mongo do cliente tem uma cópia do banco
  Meteor.subscribe('tarefas');
});
