Template.new.events({

  'submit form': function(e, template) {
    e.preventDefault();

    const input = $('#taskie');
    const valorInput = input.val();

    // não funciona mais agora pega dos methods direto no server
    //Tarefas.insert({nome: valorIput, data: new Date()});
    Meteor.call('adiciona', {sabadoDesol : valorInput});
    input.val("");
  },
});
