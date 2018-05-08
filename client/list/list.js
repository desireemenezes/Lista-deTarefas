Template.list.helpers({
  tarefas : () => {
    return Tarefas.find({});
  },

  formataData : () => {
    return moment(this.data).format('DD/MM/YYYY HH:mm');
  }
});

Template.list.events({
'click button' : function(e, template) {
    const taskie = this;

    //Tarefas.remove({ _id : taskie._id });
    Meteor.call('remove', taskie._id);
  }
});
