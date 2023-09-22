const { CRD_DR, GEN_DR, PSYC_DR, DENTIST_DR, SPC_DR } = require('../model/constants');

class DoctorUtils {
    constructor() {

        this.departmentToDoctors = {
            crd: CRD_DR,
            dnt: DENTIST_DR,
            gen: GEN_DR,
            spc: SPC_DR,
            ped: DENTIST_DR,
            psyc: PSYC_DR,
            gyn: DENTIST_DR,
        };

        /*this.doctorIdToDrName = {

        }*/
    }


    getDoctorsByDepartment(departmentId) {
        return this.departmentToDoctors[departmentId] || [];
    }

    is10DigitNumber(input) {
        const cleanedInput = input.replace(/\D/g, '');
        if (/^\d{10}$/.test(cleanedInput)) {
            return true;
        } else {
            return false;
        }
    }
    isValidName(input) {
        const excludedStrings = [
            ...doctorCode,
            ...slotBookingCode,
            ...timing,
            ...genderList,
            ...isRegistered,
            ...reservWords
        ];
        if (excludedStrings.includes(input.toLowerCase())) {
            return false;
        }

        //  const regex = /^[a-zA-Z]+$/;
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(input) && input.length > 1;
    }

    isValidDate(input) {
        const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        const matches = input.match(dateRegex);
        if (!matches) {
            return false;
        }

        const day = parseInt(matches[1], 10);
        const month = parseInt(matches[2], 10) - 1; // Adjust month to 0-based index
        const year = parseInt(matches[3], 10);

        const date = new Date(year, month, day);

        if (
            date.getDate() === day &&
            date.getMonth() === month &&
            date.getFullYear() === year
        ) {
            return true; 
        }

        return false;
    }




}

const doctorCode = ["dr1", "dr2", "dr3", "dr4", "dr5", "dnt1", "dnt2", "dnt3", "spc2", "spc1", "gen1", "gen2", "gen3", "psyc2", "psy3"];
const slotBookingCode = ["ns", "wk", "hlm"];
const timing = ["mr", "af", "ev"];
const genderList = ["male", "female"];
const isRegistered = ["reg", "new"];
const reservWords = ["menu", "about", "help", "contact", "hi", "hello", "hey", "view", "reschedule", "cancel", "doctorslist", "doctorinfo"]



module.exports = { DoctorUtils, doctorCode, slotBookingCode, timing, genderList, isRegistered }
