const { AboutCommandHandler, ContactCommandHandler, HelpCommandHandler, GreetingCommandHandler } = require('../command/commands');
const { APPOINTMENT_MESSAGES, APPOINTMENT_SECTIONS, DR_NAME_TITLE, SCHEDULE_BUTTONS, UNKNOWM_COMMAND, DR_DEPTS, DR_DEPT_TITLE, SLOT_BOOKING_TITLE, SLOT_BOOKING, IS_REGISTERED_MENU, IS_REGISTERED_TITLE, ENTER_MOBILE_NUMBER, ENTER_FULL_NAME, SELECT_GENDER_LIST, SELECT_GENDER_TITLE, IS_ANY_COMMNENTS, ENTER_DOB } = require('./constants');
const { sendAppointmentList, processAppointmentRequest } = require('../utils/listUtils');
const { DoctorUtils, doctorCode, genderList, slotBookingCode, timing, isRegistered } = require('../utils/deptDrNameUtils')
const MessageSender = require('./messageSender');

class MessageProcessor {
    constructor(token) {
        this.messageSender = new MessageSender(token);
        this.doctorUtils = new DoctorUtils();
        this.commandHandlers = {
            help: new HelpCommandHandler(),
            about: new AboutCommandHandler(),
            contact: new ContactCommandHandler(),
            greeting: new GreetingCommandHandler(),

        };
    }




    processMessage(from, message, title) {
        const userReply = message.toLowerCase();
        const userList = [];
        console.log("************************", userReply, "***************************")
        if (processAppointmentRequest(this.messageSender, from, userReply, "menu", APPOINTMENT_MESSAGES, APPOINTMENT_SECTIONS)) {
            return;
        }

        if (this.commandHandlers.greeting) {
            const greetingResponse = this.commandHandlers.greeting.handleCommand(userReply);
            if (greetingResponse) {
                this.messageSender.sendWhatsAppTextMessage(from, greetingResponse);
                return;
            }
        }
        if (this.commandHandlers[userReply]) {
            const response = this.commandHandlers[userReply].handleCommand(userReply);
            this.messageSender.sendWhatsAppTextMessage(from, response);
        }
        if (userReply === "book") {
            sendAppointmentList(this.messageSender, from, DR_DEPT_TITLE, DR_DEPTS);
        }
        else if (userReply in this.doctorUtils.departmentToDoctors) {
            const doctorList = this.doctorUtils.getDoctorsByDepartment(userReply);
            sendAppointmentList(this.messageSender, from, DR_NAME_TITLE, doctorList);
        }
        else if (doctorCode.includes(userReply)) {
            // const dynamicScheduleTitle = `*Certainly! Please choose a new time slot for your appointment with ${title} on Wednesday:*`;
            // this.messageSender.sendWhatsAppButtonMessage(from, dynamicScheduleTitle, SCHEDULE_BUTTONS)
            this.messageSender.sendWhatsAppButtonMessage(from, SLOT_BOOKING_TITLE, SLOT_BOOKING)
        }
        else if (slotBookingCode.includes(userReply)) {
            const dynamicScheduleTitle = `*Certainly! Please choose a new time slot for your appointment with ${title}*`
            this.messageSender.sendWhatsAppButtonMessage(from, dynamicScheduleTitle, SCHEDULE_BUTTONS);
        }
        else if (timing.includes(userReply)) {
            this.messageSender.sendWhatsAppButtonMessage(from, IS_REGISTERED_TITLE, IS_REGISTERED_MENU);
        }
        else if (userReply === "reg") {
            this.messageSender.sendWhatsAppTextMessage(from, "---- UNDER CONSTRUCTION ---- ")
        }
        else if (userReply === "new") {
            this.messageSender.sendWhatsAppTextMessage(from, ENTER_MOBILE_NUMBER)

        } else if (this.doctorUtils.is10DigitNumber(userReply)) {
            this.messageSender.sendWhatsAppTextMessage(from, ENTER_FULL_NAME);
        } else if (this.doctorUtils.isValidName(userReply)) {
            this.messageSender.sendWhatsAppButtonMessage(from, SELECT_GENDER_TITLE, SELECT_GENDER_LIST)
        } else if (genderList.includes(userReply)) {
            this.messageSender.sendWhatsAppTextMessage(from, ENTER_DOB);

        } else if (this.doctorUtils.isValidDate(userReply)) {
            //  this.messageSender.sendWhatsAppTextMessage(from, IS_ANY_COMMNENTS)

            this.messageSender.sendWhatsAppTextMessage(from, "Thank you for your time, we have all the information we need 😊.You will soon receive an appointment confirmation message with detailed date and time information.")
           
        }
        else {
            this.messageSender.sendWhatsAppTextMessage(from, UNKNOWM_COMMAND);
        }


    }



}

module.exports = MessageProcessor;
