export class EventService{
    constructor($log,API){
        'ngInject';

        //Initializing services
        this.$log = $log;
        this.API = API;


    }

    // creates a new event
    createEvent(data){
        return this.API.all('events').post('data');
    }

    // get free or paid
    getFreePaid(){

    }

    // attaches location to an event
    attachLocation(eventId,lacationId){
        let dataAPI = this.API.one('events',eventId);
        return this.dataAPI.all()

    }
}

