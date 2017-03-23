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

        let that = this;





        this.$rootScope.$on('leafletDirectiveMap.click', function(event, args){
            let lcn = $location.path();

            if(lcn == "/home/1/create"){
                that.org = {
                    lat:args.leafletEvent.latlng.lat,
                    long:args.leafletEvent.latlng.lng
                };

                $rootScope.newLocation = {
                    lat:args.leafletEvent.latlng.lat,
                    long:args.leafletEvent.latlng.lng
                };

            }




        });




    }



    // adds a new organisation
    addOrganisation() {

        let data = {
            name:this.org.name,
            description:this.org.description,
            tin_number:this.org.tin_number,
            website:this.org.website,
            lat: this.$rootScope.newLocation.lat,
            long:this.$rootScope.newLocation.long,
            date_founded:"1992-04-28 22:21:44",
            date_registered:"1992-04-28 22:21:44",
            target_group:this.org.target_group,
            sector_id:this.org.sector_id,
            role_id:this.org.role_id,
            ecosystem_id:this.org.ecosystem_id,


        };

       this.organisationService.createOrganisation(data)
           .then(
               res => {
                   console.log("organisation created successfully");
                   console.log(res);
                   alert('Organisation added successfully');
                   this.$state.go('app.home.pins.all',{id:1},{reload:true});
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
        this.displayEcosystems();
        this.displayRoles();
        this.displaySectors();


    }
}

export const CreateOrganisationComponent = {
    templateUrl: './views/app/components/create-organisation/create-organisation.component.html',
    controller: CreateOrganisationController,
    controllerAs: 'vm',
    bindings: {}
}
