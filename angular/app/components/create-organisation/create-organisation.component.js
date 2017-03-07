class CreateOrganisationController {

    constructor(OrganizationService, EcosystemService, $log) {
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.ecosystemService = EcosystemService;
        this.$log = $log;




    }

    // adds a new organisation
    addOrganisation() {

        let makeOrganisation = this.forOrganisation;

        this.organisationService.createOrganisation(makeOrganisation.organisation).then(
            (response) =>{
                this.organisationId = response.data.id;
                this.orgInfo = {organization_id: this.organisationId, status:"active"};

                this.$log.log(response.data);
                this.$log.log("organisation created successifully ");


            }
        );

        this.addLocation(makeOrganisation.location).then(
            (response) => {
                this.locationId = {location_id: response.data.id};
                this.$log.log("location created succesfully");


                this.attachData = {
                    ecosystemId: makeOrganisation.ecosystemId,
                    organisationId: this.organisationId,
                    orgInfo: this.orgInfo,
                    sectorId: {sector_id: makeOrganisation.sectorId},
                    roleId: {role_id: makeOrganisation.roleId},
                    locationId: this.locationId
                };

                this.attachEveryThing(this.attachData);
            }
        );


    }

    // adds a new Location
    addLocation(data) {

        // let data = {
        //     long: "33.8020",
        //     lat: "-1.5102"
        // };

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
            }
        );

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
