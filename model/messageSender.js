require('dotenv').config()
const axios = require("axios").default;

class MessageSender {
    constructor(token) {
        this.token = token;
    }


    sendWhatsAppTextMessage(to, message) {
        const payload = {
            messaging_product: "whatsapp",
            to: to,
            text: { body: message },
        };
        this.sendMessage(payload);
    }

    sendWhatsAppListMessage(to, header, body, footer, buttonName, sections) {
        const payload = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: to,
            type: "interactive",
            interactive: {
                type: "list",
                header: { type: "text", text: header },
                body: { text: body },
                footer: { text: footer },
                action: { button: buttonName, sections: sections },
            },
        };
        this.sendMessage(payload);
    }

    sendWhatsAppButtonMessage(to, buttonText, buttons) {
        const payload = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: to,
            type: "interactive",
            interactive: {
                type: "button",
                body: { text: buttonText },
                action: { buttons: buttons },
            },
        };
        this.sendMessage(payload);
    }

    sendMessage(payload) {
        axios({
            method: "POST",
            url: `https://graph.facebook.com/v17.0/${process.env.PHONE_NUMBER_ID}/messages?access_token=${this.token}`,
            data: payload,
            headers: { "Content-Type": "application/json" },
        });
    }
}

module.exports = MessageSender;


/*class MessageSender {
    constructor(token) {
        this.token = token;
    }

    sendWhatsAppMessage(phone_number_id, to, message) {
        axios({
            method: "POST",
            url: `https://graph.facebook.com/v17.0/${phone_number_id}/messages?access_token=${this.token}`,
            data: {
                messaging_product: "whatsapp",
                to: to,
                text: { body: message },
            },
            headers: { "Content-Type": "application/json" },
        });
    }
}

module.exports = MessageSender;*/



