class CreateOrganisationController{



    constructor(OrganizationService,EcosystemService,$log){
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.ecosystemService = EcosystemService;
        this.$log = $log;
      
    }

        // adds a new organisation
    addOrganisation(data){
        // let data = {
        //     name: "Can you Post me",
        //     description: "Checking if this method can post organisation to the database",
        //     date_founded: "1996-06-29 00:00:00",
        //     date_registered: "2013-07-29 00:00:00",
        //     tin_number: "9792256147875"
        // };

        this.organisationService.createOrganisation(data);
    }


        // adds a new Location
    addLocation(data){

        // let data = {
        //     long: "39.698249",
        //     lat: "-9.987608"
        // };

        this.organisationService.createLocation(data);
    }

        // displays all ecosystems
    displayEcosystems(){
        this.ecosystemService.getAll().then(
            (response) => {
                this.allEcosystems = response.data;
                this.$log.log(this.allEcosystems);
                this.$log.log("all Ecosystems can be displayed");
            }, (error) => {
                this.$log.log(error);
            }
        );
    }

        // displays all sectors
    displaySectors(){
        this.organisationService.getSectors().then(
            (response) => {
                this.allSectors = response.data;
                this.$log.log(this.allSectors);
                this.$log.log("all Sectors can be displayed");
            }, (error) => {
                this.$log.log(error);
            }
        );
    }



            // displays all roles
    displayRoles(){
        this.organisationService.getRoles().then(
            (response) => {
                this.allRoles = response.data;
                this.$log.log(this.allRoles);
                this.$log.log("all Roles can be displayed");
            }, (error) => {
                this.$log.log(error);
            }
        );
    }


    // displays all stages
    displayStages(){
        this.organisationService.getStages().then(
            (response) => {
                this.allRoles = response.data;
                this.$log.log(this.allStages);
                this.$log.log("all Stages can be displayed");
            }, (error) => {
                this.$log.log(error);
            }
        );
    }


    $onInit(){

    }
}

export const CreateOrganisationComponent = {
    templateUrl: './views/app/components/create-organisation/create-organisation.component.html',
    controller: CreateOrganisationController,
    controllerAs: 'vm',
    bindings: {}
}
