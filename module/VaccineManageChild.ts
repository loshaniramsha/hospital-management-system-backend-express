export default class VaccineManageChild {
    child_id: number;
    vaccine_id: number;
    reason: string;
    date:String;

    constructor(
        child_id: number,
        vaccine_id: number,
        reason: string,
        date:String
    ){
        this.child_id = child_id;
        this.vaccine_id = vaccine_id;
        this.reason = reason;
        this.date = date;
    }
}