// constants.js
module.exports = {
    GREETINGS: ["hi", "hello", "hey"],


    APPOINTMENT_MESSAGES: {
        HEADER: "Welcome to Appmetry Chatbot",
        BODY: "Hi there! 👋 I can help you book an appointment. Please select an option below:",
        FOOTER: "Select an appointment to view details.",
        BUTTONNAME: "MENU",
    },


    APPOINTMENT_SECTIONS: [
        {
            title: "APPOINTMENT SECTION",
            rows: [
                { id: "book", title: "Book Appointment 📅", description: "" },
                { id: "reschedule", title: "Reschedule Appointment 🔄", description: "" },
                { id: "view", title: "View Appointment 🗓️", description: "" },
                { id: "cancel", title: "Cancel Appointment ❌", description: "" },
            ],
        },
        {
            title: "MORE INFO",
            rows: [
                { id: "doctorslist", title: " View Doctors 🩺", description: "" },
                { id: "doctorinfo", title: "Doctor Information ℹ️", description: "" },
            ],
        },
    ],



    // DEPT LIST TITLE
    DR_DEPT_TITLE: {
        HEADER: "👍 Great! Please choose a specialist category: 🩺🦷🌡️🧬",
        BODY: "Select from the options below",
        FOOTER: "click on select button",
        BUTTONNAME: "SELECT",
    },

    //DEPT LIST

    DR_DEPTS: [
        {
            "rows": [
                {
                    "id": "crd",
                    "title": "🩺 Cardiologist",
                    "description": "Heart and blood vessel specialist."
                },
                {
                    "id": "dnt",
                    "title": "🦷 Dentist",
                    "description": "Oral health and dental care provider"
                },
                {
                    "id": "gen",
                    "title": "🌡️ General Practitioner",
                    "description": "Comprehensive family doctor.."
                },
                {
                    "id": "spc",
                    "title": "🧬 Specialist",
                    "description": "Expert in a specific medical field."
                },
                {
                    "id": "ped",
                    "title": "👶 Pediatrician",
                    "description": "Cares for children's health and development"
                },
                {
                    "id": "psyc",
                    "title": "🧠 Psychiatrist",
                    "description": "Deals with mental health and psychiatric disorders."
                },
                {
                    "id": "gyn",
                    "title": "👩‍⚕️ Gynecologist",
                    "description": "Specializes in women's reproductive health."
                }
            ]
        }
    ],



    DR_NAME_TITLE: {
        HEADER: "👍 Great! To 📅 book an 🩺 appointment,",
        BODY: "please choose a 🩺doctor from the list",
        FOOTER: "click on select button",
        BUTTONNAME: "SELECT",
    },

    CRD_DR: [
        {
            "rows": [
                {
                    "id": "dr1",
                    "title": "Dr. Wilson 👨‍⚕️",
                    "description": ""
                },
                {
                    "id": "dr2",
                    "title": "Dr. Davis 👩‍⚕️",
                    "description": ""
                },
                {
                    "id": "dr3",
                    "title": "Dr. Johnson 👨‍⚕️",
                    "description": ""
                },
                {
                    "id": "dr4",
                    "title": "Dr. Brown 👨‍⚕️",
                    "description": ""
                },
                {
                    "id": "dr5",
                    "title": "Dr. Adams 👨‍⚕️",
                    "description": ""
                }
            ]
        }
    ],

    DENTIST_DR: [
        {
            "rows": [
                {
                    "id": "dnt1",
                    "title": "Dr. Dentist 1 👩‍⚕️",
                    "description": ""
                },
                {
                    "id": "dnt2",
                    "title": "Dr. Dentist 2 👩‍⚕️",
                    "description": ""
                },
                {
                    "id": "dnt3",
                    "title": "Dr. Dentist 3 👩‍⚕️",
                    "description": ""
                },
            ]
        }
    ],

    PSYC_DR: [
        {
            "rows": [
                {
                    "id": "psyc1",
                    "title": "Dr. Psychiatrist 1 👨‍⚕️",
                    "description": ""
                },
                {
                    "id": "psyc2",
                    "title": "Dr. Psychiatrist 2 👨‍⚕️",
                    "description": ""
                }
            ]
        }
    ],

    GEN_DR: [{
        "rows": [
            {
                "id": "gen1",
                "title": "Dr. General 1 👨‍⚕️",
                "description": ""
            },
            {
                "id": "gen2",
                "title": "Dr. General 2 👨‍⚕️",
                "description": ""
            },
        ]
    }],

    SPC_DR: [{
        'rows': [
            {
                "id": "spc1",
                "title": "Dr. Specialist 1 👨‍⚕️",
                "description": ""
            },
            {
                "id": "spc2",
                "title": "Dr.Specialist 2 👨‍⚕️",
                "description": ""
            },
        ]
    }],



    VISITING_BTN_TITLE: "Are you visiting for the first time 🆕, or is it a follow-up visit ↩️?",

    VISITING_BTN: [
        {
            "type": "reply",
            "reply": {
                "id": "new",
                "title": "First Visit 🆕"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "existing",
                "title": "Follow-up Visit ↩️"
            }
        },
    ],

    SLOT_BOOKING_TITLE: "Please select one of the following options",
    SLOT_BOOKING: [
        {
            "type": "reply",
            "reply": {
                "id": "ns",
                "title": "Next available⏰"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "wk",
                "title": "Within 7 days 📅"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "hlm",
                "title": "Within 15 days 📅"
            }
        },
    ],

    SCHEDULE_BUTTONS: [
        {
            "type": "reply",
            "reply": {
                "id": "mr",
                "title": "Morning(9AM-12PM) 🌄"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "af",
                "title": "Afternoon(1PM-4PM) 🌅"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "ev",
                "title": "Evening(5PM-8PM) 🌆"
            }
        }
    ],

    IS_REGISTERED_TITLE: "Are you already registered with us? 📋",
    IS_REGISTERED_MENU: [
        {
            "type": "reply",
            "reply": {
                "id": "reg",
                "title": "Yes, I am! 😃"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "new",
                "title": "Nope, 😞"
            }
        }
    ],

    ENTER_MOBILE_NUMBER: "Enter your 10-digit Mobile Number 🔢 below ",
    ENTER_FULL_NAME: " What is your full name?",
    SELECT_GENDER_TITLE: "🚻 Please select your gender 👇",
    SELECT_GENDER_LIST: [
        {
            "type": "reply",
            "reply": {
                "id": "male",
                "title": "Male 👨"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "female",
                "title": "Female 👩"
            }
        }
    ],

    ENTER_DOB: "📅 And what's your date of birth(enter in DD/MM/YYY)?",
    IS_ANY_COMMNENTS: "💬 Do you have any comments/messages about the appointment? Please give them here 👇",

    // UNKNOWM_COMMAND: "I'm not sure how to respond to that. Type 'help' for assistance.",
    UNKNOWM_COMMAND: "Invalid Input, Please try again"
};
