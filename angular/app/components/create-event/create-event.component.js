class CreateEventController{
    constructor(EventService,$log,OrganizationService){
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.eventService = EventService;
        this.$log = $log;
    }

    // adds an event to the database
    addEvent(){
        data = this.makeEvent;

        this.eventService.createEvent(data.event).then(
            (response) => {
                this.attachId = {event_id: response.data.id};
                this.eventId = response.data.id;

                this.$log.log(response);
                this.$log.log("an event was created successfully");

            }
        );
    }

    // adds a new location to the database
    addLocation(data){
        return this.organisationService.createLocation(data);
    }


    // displays status for event payment
    displayFreePaid(){

    }



    $onInit(){
    }
}

export const CreateEventComponent = {
    templateUrl: './views/app/components/create-event/create-event.component.html',
    controller: CreateEventController,
    controllerAs: 'vm',
    bindings: {}
}
