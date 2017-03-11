class CreateEventController{
    constructor(EventService,$log,OrganizationService,$localStorage,$state){
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.eventService = EventService;
        this.$localStorage = $localStorage;
        this.$state = $state;
        this.$log = $log;
    }

    // adds an event to the database
    addEvent(){
       let data = this.makeEvent;
        let modifiedEvent = {
            name: this.makeEvent.event.name,
            description: this.makeEvent.event.description,
            start_date: this.makeEvent.event.start_date.toJSON,
            end_date: this.makeEvent.event.end_date.toJSON

        };
        this.$log.log("lets see data");
        this.$log.log(modifiedEvent);
       

        this.eventService.createEvent(modifiedEvent).then(
            (response) => {
                this.attachId = {event_id: response.data.id};
                this.eventId = response.data.id;
                this.$log.log(response.data);
                this.$log.log("an event was created successfully");
                this.eventService.attachEvent(data.organisationId,this.attachId).
                    then(
                    (response) =>{
                        this.$log.log("event attached succefully");
                        this.$state.go('app.home.pins.all',{id: this.$localStorage.ecosystem.id});
                    }
                );

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

    // display organisations
    displayOrganisations(){
        this.organisationService.getByEcosystem(this.$localStorage.ecosystem.id).then(
            (response) => {
                this.allOrganisations = response.data.data;
                this.$log.log("organisations retrived successfully");
            }

        );

    }





    $onInit(){
    this.displayOrganisations();
    }
}

export const CreateEventComponent = {
    templateUrl: './views/app/components/create-event/create-event.component.html',
    controller: CreateEventController,
    controllerAs: 'vm',
    bindings: {}
}
