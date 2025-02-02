export default class VaccineManageMom {
    mother_id: number;
    vaccine_id: number;
    reason: string;
    date:String;

    constructor(
        mother_id: number,
        vaccine_id: number,
        reason: string,
        date:String
    ) {
        this.mother_id = mother_id;
        this.vaccine_id = vaccine_id;
        this.reason = reason;
        this.date = date;
    }
}