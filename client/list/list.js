Template.list.helpers({
  tarefas : () => {
    return Tarefas.find({});
  },

  formataData : () => {
    return moment(this.data).format('DD/MM/YYYY HH:mm');
  }
});
