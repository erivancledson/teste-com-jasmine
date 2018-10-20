describe("Agendamento", function() {

    var agenda;

    beforeEach(function() {
        agenda = new Agendamento();
        gui = new PacienteBuilder().constroi();
    });

    it("deve agendar para 20 dias depois", function() {
         //janeiro é mês 0, agosto mês 7 no java
        var consulta = new Consulta(gui, [], false, false, new Date(2014, 7, 1));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014,7,21).toString());

    });

});