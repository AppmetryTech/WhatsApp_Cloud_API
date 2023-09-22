const CommandHandler = require('../model/commandHandler');

class GreetingCommandHandler extends CommandHandler {
    constructor() {
        super();
    }

    handleCommand(message) {
        const { GREETINGS } = require('../model/constants'); // Import GREETINGS from constants
        if (GREETINGS.includes(message.toLowerCase())) {
            return "Hi there! How can I assist you today? You can type MENU to get a list of services....";
        } else {
            return null;
        }
    }
}

class AboutCommandHandler extends CommandHandler {
    constructor() {
        super();
    }

    handleCommand(message) {
        return "I am a simple chatbot. Ask me anything!";
    }
}

class ContactCommandHandler extends CommandHandler {
    constructor() {
        super();
    }

    handleCommand(message) {
        return "You can contact us at contact@appmetry.com";
    }
}

class HelpCommandHandler extends CommandHandler {
    constructor() {
        super();
    }

    handleCommand(message) {
        return "Sure, I can help you with that! Type 'Menu' to see menu details";
    }
}



module.exports = {
    AboutCommandHandler,
    ContactCommandHandler,
    HelpCommandHandler,
    GreetingCommandHandler,
   
};
