function sendAppointmentList(messageSender, from, listBody, listSection) {
    const { HEADER, BODY, FOOTER, BUTTONNAME } = listBody;
    messageSender.sendWhatsAppListMessage(from, HEADER, BODY, FOOTER, BUTTONNAME, listSection);
}

function processAppointmentRequest(messageSender, from, message, command, listUpperSection, listBodySection) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage === command) {
        sendAppointmentList(messageSender, from, listUpperSection, listBodySection);
        return true;
    }
    return false;
}

module.exports = {
    sendAppointmentList,
    processAppointmentRequest,
};
