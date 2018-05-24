Template.new.events({

  'submit form': function(e, template) {
    e.preventDefault();

    const input = $('#tarefa');
    const valorInput = input.val();

    Meteor.call('adiciona', { descricao : valorInput, usuario: this.UserId });
    input.val("");
  },
});
