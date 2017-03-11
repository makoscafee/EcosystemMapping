export class Service{
    constructor($log,API){
        'ngInject';

        //Initializing services
        this.$log = $log;
        this.API = API;


    }

    // creates a new event
    createEvent(data){
        return this.API.all('events').post(data);
    }

    // get free or paid
    getFreePaid(){

    }

    // attaches location to an event
    attachLocation(eventId,lacationId){
        let dataAPI = this.API.one('events',eventId);
        return this.dataAPI.all()

    }

    // attaches an event to an organisation
    attachEvent(organisationId,eventId){

        let DataAPI = this.API.one('organizations',organisationId);
        return DataAPI.all('attach-events').post(eventId);
    }
}

