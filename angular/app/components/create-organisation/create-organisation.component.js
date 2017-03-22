class CreateOrganisationController {

    constructor(OrganizationService, EcosystemService,
                $log,$localStorage,DataService,$rootScope,$state,$location) {
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.ecosystemService = EcosystemService;
        this.$localStorage = $localStorage;
        this.DataService = DataService;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$log = $log;



        this.$rootScope.$on('leafletDirectiveMap.click', function(event, args){
            let lcn = $location.path();

            if(lcn == "/home/1/create"){
                alert('Location added successfully');
                $rootScope.newLocation = {
                    lat:args.leafletEvent.latlng.lat,
                    long:args.leafletEvent.latlng.lng
                };
                alert('Location added successfully');
                console.log(lcn);
                console.log($rootScope.newLocation);

            }


        });




    }

    testScope(){
        this.$log.log("testing accessbility");
        this.$log.log(this.$rootScope.newLocation);
        this.addLocation(this.$rootScope.newLocation).then(
            (response) => {
                this.$log.log("this is the new location");
                this.$log.log(response);
            }
        );
    }

    // adds a new organisation
    addOrganisation() {
        this.org = {
            name:"For testing resons",
            website:"benitoite.co.tz",
            target_group:"vijana",
            tin_number:1234567898,
            description:"am triying to post this organisation",
            date_founded:"2002-06-15 07:55:02",
            date_registered:"2002-06-15 07:55:02",
            lat: -10.6463,
            lng:35.6424,
            sector_id:1,
            role_id:1,
            ecosystem_id:1
        };
       this.organisationService.createOrganisation(this.org)
           .then(
               res => {
                   console.log("organisation created successfully");
                   console.log(res);
               }
           );
    }

    // displays all ecosystems
    displayEcosystems() {
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
    displaySectors() {

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
    displayRoles() {
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
    displayStages() {
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



    /* an event fired after creating an organisation*/
    createdOrgEvent(){
        this.$rootScope.$emit('newOrganisation','a new organisation');
    }


    $onInit() {
        /*this.displayEcosystems();
        this.displayRoles();
        this.displaySectors();*/
        this.addOrganisation();


    }
}

export const CreateOrganisationComponent = {
    templateUrl: './views/app/components/create-organisation/create-organisation.component.html',
    controller: CreateOrganisationController,
    controllerAs: 'vm',
    bindings: {}
}
