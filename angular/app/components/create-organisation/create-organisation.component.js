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

            // Initializing some objects and data conversions
        let makeOrganisation = this.forOrganisation;
        let modifiedOrg = {
            name: makeOrganisation.organisation.name,
            description:makeOrganisation.organisation.description,
            date_founded: makeOrganisation.organisation.date_founded.toJSON,
            date_registered: makeOrganisation.organisation.date_registered.toJSON,
            tin_number:makeOrganisation.organisation.tin_number
        };

        let newLocation = this.$rootScope.newLocation;
        this.$log.log("this is the new Location");
        this.$log.log(newLocation);


                // creating a new organisation
        this.organisationService.createOrganisation(modifiedOrg).then(
            (response) =>{
                this.organisationId = response.data.id;
                this.orgInfo = {organization_id: this.organisationId, status:"active"};

                this.$log.log(response.data);
                this.$log.log("organisation created successifully ");

                // creating new location
                this.addLocation(newLocation).then(
                    (response) => {
                        this.locationId = {location_id: response.data.id};
                        this.$log.log("location created succesfully");
                        this.$log.log(response.data);



                        // object containing information for attachment of data
                        this.attachData = {
                            ecosystemId: makeOrganisation.ecosystemId,
                            organisationId: this.organisationId,
                            orgInfo: this.orgInfo,
                            sectorId: {sector_id: makeOrganisation.sectorId},
                            roleId: {role_id: makeOrganisation.roleId},
                            locationId: this.locationId
                        };

                        // attaching  all data
                        this.attachEveryThing(this.attachData);
                    }
                );


            }
        );





    }

    // adds a new Location
    addLocation(data) {

        return this.organisationService.createLocation(data);
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


    // attaches necessary objects to the organisation and ecosystem
    attachEveryThing(attach) {

         this.$log.log(attach.orgInfo);
        // attaching organisation to an ecosystem
        this.ecosystemService.attachOrganisationToEcosystem(attach.ecosystemId, attach.orgInfo).then(
            (response) => {
                this.$log.log("organisation attached successfully");

            },
        (error) =>{
                this.$log.log(error);
                this.$log.log("an error has occured");
        }
        );

        // attaching a location to an organisation
        this.organisationService.attachLocationToOrganisation(attach.organisationId, attach.locationId).then(
            (response) => {
                this.$log.log("location attached ");

            }
        );

        // attaching a role to an organisation
        this.organisationService.attachRoleToOrganisation(attach.organisationId, attach.roleId).then(
            (response) => {
                this.$log.log(response);
                this.$log.log("role attached to organisation succesfully");
            }
        );

        // attaching a sector to an organisation
        this.organisationService.attachSectorToOrganisation(attach.organisationId, attach.sectorId).then(
            (response) => {
                this.$log.log(response);
                this.$log.log("sector attached to organisation succesfully");
                this.ecosystemService.getOrganisation(attach.ecosystemId).then((response) => {
                    this.$localStorage.organisations = response.data;
                    this.createdOrgEvent();
                    this.$state.go('app.home.pins.all',{id: attach.ecosystemId},{reload:true});
                });



            }
        );

    }

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
