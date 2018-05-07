Template.new.events({

  "submit form": function(e, template) {
    e.preventDefault();

    const input = $("#taskie");
    const valorIput = input.val();

    Tarefas.insert({sabadoDesol: valorIput, data: new Date()});
    input.val("");
  },
});
