const MessageProcessor = require("./model/messageProcessor");
class WhatsAppChatbot {
    constructor(token, verifyToken) {
        this.verifyToken = verifyToken;
        this.messageProcessor = new MessageProcessor(token);
    }

    handleIncomingMessage(req, res) {
        let body = req.body;
        console.dir(body, { depth: null });
        if (body.object) {
            if (
                req.body.entry &&
                req.body.entry[0].changes &&
                req.body.entry[0].changes[0] &&
                req.body.entry[0].changes[0].value.messages &&
                req.body.entry[0].changes[0].value.messages[0]
            ) {
                let phone_number_id = req.body.entry[0].changes[0].value.metadata.phone_number_id;
                let messages = req.body.entry[0].changes[0].value.messages;
                messages.forEach((message) => {
                    if (message.type === 'text') {
                        let from = message.from;
                        let msg_body = message.text.body;
                        console.log('Text message:', phone_number_id, from, msg_body);
                        this.messageProcessor.processMessage(from, msg_body);
                    } else if (message.interactive.type === 'list_reply') {
                        // Handle interactive messages (e.g., list buttons)
                        console.log("**********************in list reply*******************************")
                        let from = message.from;
                        let interactiveType = message.interactive.type;
                        let buttonId = message.interactive.list_reply.id;
                        let title = message.interactive.list_reply.title;
                        console.log('Interactive message:', phone_number_id, from, interactiveType, "***", buttonId);
                        this.messageProcessor.processMessage(from, buttonId,title);
                    } else if (message.interactive.type == "button_reply") {
                        console.log("**********************in button*******************************")
                        let from = message.from;
                        let interactiveType = message.interactive.type;
                        let buttonId = message.interactive.button_reply.id;
                        console.log('Interactive message:', phone_number_id, from, interactiveType, "***", buttonId);
                        this.messageProcessor.processMessage(from, buttonId);
                    }
                });
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
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
                console.log("NOT VERIFIED")
            }
        }
    }
}

module.exports = WhatsAppChatbot;


/*class WhatsAppChatbot {
    constructor(token, verifyToken) {
        this.verifyToken = verifyToken;
        this.messageProcessor = new MessageProcessor();
        this.messageSender = new MessageSender(token);
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
                const response = this.messageProcessor.processMessage(msg_body);
                this.messageSender.sendWhatsAppMessage(phone_number_id, from, response);

                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
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
                console.log("NOT VERIFIED")
            }
        }
    }
}*/
