require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const WhatsAppChatbot = require("./whatsappChatbot");


const token = process.env.WHATSAPP_TOKEN;
const verifyToken = process.env.VERIFY_TOKEN;
const port = process.env.PORT || 1337;

const app = express().use(bodyParser.json());
const chatbot = new WhatsAppChatbot(token, verifyToken);

app.listen(port, () => console.log("Webhook is listening on port " + port));

app.post("/webhook", (req, res) => chatbot.handleIncomingMessage(req, res));

app.get("/webhook", (req, res) => {
    chatbot.verifyWebhook(req, res);
});
