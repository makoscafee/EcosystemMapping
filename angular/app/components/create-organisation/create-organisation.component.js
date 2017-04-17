class CreateOrganisationController {

    constructor(OrganizationService, EcosystemService,
                $log,$localStorage,DataService,$rootScope,$state,$location, ToastService) {
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.ecosystemService = EcosystemService;
        this.$localStorage = $localStorage;
        this.DataService = DataService;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$log = $log;
        this.ToastService = ToastService;
        this.isOtherSectorSelected = false;
        this.selectedSectors = [];


        let that = this;





        this.$rootScope.$on('leafletDirectiveMap.click', function(event, args){
            let lcn = $location.path();

            if(lcn == "/home/1/create/organisation"){
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
      if(!confirm){
          return;
      }
        if (!this.or){
            this.ToastService.show("please fill the required fields");
            return;
        }

        if (!this.org){
            this.ToastService.show("please click on map to add location");
            return;
        }

        let data = {
            name:this.or.name,
            description:this.or.description,
            tin_number:this.or.tin_number,
            website:this.or.website,
            address:this.or.address,
            lat: this.$rootScope.newLocation.lat,
            long:this.$rootScope.newLocation.long,
            date_founded:"1992-04-28 22:21:44",
            date_registered:"1992-04-28 22:21:44",
            target_group:this.or.target_group,
            sector_id:this.selectedSectors,
            role_id:this.or.role_id,
            ecosystem_id:1


        };

      if(this.isOtherSectorSelected){
        data['sector_description'] = this.otherSectorDescription;
      }

       this.organisationService.createOrganisation(data)
           .then(
               res => {
                   this.ToastService.show('Organisation added successfully');
                   this.$log.log(res);
                   this.ecosystemService.getOrganisation(1).then((response) => {
                       this.$localStorage.organisations = response.data;
                       //this.$log.log(this.$localStorage.organisations);
                       this.$state.go('app.home.pins.all',{id:1},{reload:true});
                   });

               }
           );
    }

    toggleCheckBox(item, list, sectorName){
      let idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }

        if (sectorName == 'Others') {
          this.isOtherSectorSelected = !this.isOtherSectorSelected;
        }
    }

    checkIfExists(item, list, name) {
      return list.indexOf(item) > -1;
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
