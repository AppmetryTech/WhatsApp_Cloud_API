"use strict";

const axios = require("axios").default;

class WhatsAppChatbot {
    constructor(token, verifyToken) {
        this.token = token;
        this.verifyToken = verifyToken;
    }

    handleIncomingMessage(req, res) {
        let body = req.body;

        if (req.body.object) {
            if (
                req.body.entry &&
                req.body.entry[0].changes &&
                req.body.entry[0].changes[0] &&
                req.body.entry[0].changes[0].value.messages &&
                req.body.entry[0].changes[0].value.messages[0]
            ) {
                let phone_number_id =
                    req.body.entry[0].changes[0].value.metadata.phone_number_id;
                let from = req.body.entry[0].changes[0].value.messages[0].from;
                let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body;

                const response = this.chatbotResponse(msg_body);

                this.sendWhatsAppMessage(phone_number_id, from, response);
            }
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }

    verifyWebhook(req, res) {
        const mode = req.query["hub.mode"];
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];

        if (mode && token) {
            if (mode === "subscribe" && token === this.verifyToken) {
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                res.sendStatus(403);
            }
        }
    }

    chatbotResponse(message) {
        message = message.toLowerCase();

        const greetings = ["hi", "hello", "hey"];
        const commands = {
            help: "Sure, I can help you with that!",
            about: "I am a simple chatbot. Ask me anything!",
            contact: "You can contact us at contact@example.com",
        };

        if (greetings.includes(message)) {
            return "Hi there! How can I assist you today?";
        }

        if (commands[message]) {
            return commands[message];
        }

        return "I'm not sure how to respond to that. Type 'help' for assistance.";
    }

    sendWhatsAppMessage(phone_number_id, to, message) {
        axios({
            method: "POST",
            url: `https://graph.facebook.com/v12.0/${phone_number_id}/messages?access_token=${this.token}`,
            data: {
                messaging_product: "whatsapp",
                to: to,
                text: { body: message },
            },
            headers: { "Content-Type": "application/json" },
        });
    }
}

module.exports = WhatsAppChatbot;
