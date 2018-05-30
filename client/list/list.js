Template.list.helpers({
  tarefas : () => {
    return Tarefas.find({});
  },

  formataData : () => {
    return moment(this.data).format('DD/MM/YYYY HH:mm');
  }
});

Template.list.events({
'click #btn-remove' : function(e, template) {
    const tarefa = this;

    Meteor.call('remove', tarefa._id);
  },
});
