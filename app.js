if (Meteor.isClient) {

    Meteor.startup(function() {
        
    });

    Template.hello.greeting = function() {
        return "Welcome to meu-app-teste.";
    };

    Template.hello.events({
        'click input': function() {
            // template data, if any, is available in ’this’
            if (typeof console !== 'undefined')
                console.log("You pressed the button");
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        console.log("Iniciando Servidor Meteor.");
    });
}