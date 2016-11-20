class SearchAutocompleteController {
    constructor($timeout, $q, $log, DataService, EcosystemService, $state,$localStorage,SidemenuDataService) {
        'ngInject';

        //services
        this.$timeout = $timeout;
        this.$q = $q;
        this.$log = $log;
        this.DataService = DataService;
        this.EcosystemService = EcosystemService;
        this.SidemenuDataService = SidemenuDataService;
        this.$state = $state;
        this.$localStorage = $localStorage;

        //global variables
        this.simulateQuery = false;
        this.isDisabled = false;
        this.selectedItem = null;
        this.markerIconsUrl ={
          startup:{
            iconUrl: 'img/icons/startup.png'
          },
          coworkingSpaces:{
            iconUrl: 'img/icons/coworking.png'
          },
          fundingAgencies:{
            iconUrl: 'img/icons/investor.png'
          },
          randD:{
            iconUrl: 'img/icons/incubator.png'
          }
        };



        //getting ecosystems
        this.EcosystemService.getAll().then((response) => {
            this.states = response.data;
        });


        //getting all roles
      this.SidemenuDataService.roles().then((response)=>{

        let collectedRoles=[];
        angular.forEach(response.data,(roleData) => {
        if(roleData.name == "R&D"){
          let modifyRoles ={id:null,name:null,description:null,icon:null};
          modifyRoles.id = roleData.id;
          modifyRoles.name = roleData.name;
          modifyRoles.description = roleData.description;
          modifyRoles.icon = this.markerIconsUrl.randD.iconUrl;
          collectedRoles.push(modifyRoles);
        }
        else if (roleData.name == "Funding Agencies") {
          let modifyRoles ={id:null,name:null,description:null,icon:null};
          modifyRoles.id = roleData.id;
          modifyRoles.name = roleData.name;
          modifyRoles.description = roleData.description;
          modifyRoles.icon = this.markerIconsUrl.fundingAgencies.iconUrl;
          collectedRoles.push(modifyRoles);
        }
        else if (roleData.name == "Startup") {
          let modifyRoles ={id:null,name:null,description:null,icon:null};
          modifyRoles.id = roleData.id;
          modifyRoles.name = roleData.name;
          modifyRoles.description = roleData.description;
          modifyRoles.icon = this.markerIconsUrl.startup.iconUrl;
          collectedRoles.push(modifyRoles);
        }
        else if (roleData.name == "Coworking Space") {
          let modifyRoles ={id:null,name:null,description:null,icon:null};
          modifyRoles.id = roleData.id;
          modifyRoles.name = roleData.name;
          modifyRoles.description = roleData.description;
          modifyRoles.icon = this.markerIconsUrl.coworkingSpaces.iconUrl;
          collectedRoles.push(modifyRoles);
        }
      });
        this.$localStorage.roles = collectedRoles;
        this.$log.log(this.$localStorage.roles);
      });

          //getting all sectors
      this.SidemenuDataService.sectors().then((response)=>{
        this.$localStorage.sectors = response.data;
      });

    }

    //getting organisations of a given ecosystem and
    //changing the state to home state
    home() {
      let ecosystemId = this.$localStorage.ecosystem;
        this.$state.go('app.home.pins',{id: ecosystemId.id});
    }

    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return (state) => {
            let value = state.name.toLowerCase()
            this.$log.log(value);
            return (value.indexOf(lowercaseQuery) === 0);
        };
    }

    querySearch(query) {
        var results = query ? this.states.filter(this.createFilterFor(query)) : this.states,
            deferred;
        if (this.simulateQuery) {
            deferred = this.$q.defer();
            this.$timeout(() => {
                    deferred.resolve(results);
                },
                Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    //getting all organizations of a selected ecosystem
    selectedItemChange(ecosystemId){
      this.DataService.setSelectedEcosystem(ecosystemId);
      this.$localStorage.ecosystem = ecosystemId;
      this.EcosystemService.getOrganisation(ecosystemId.id).then((response) => {
          this.$localStorage.organisations = response.data;
          this.$log.log(this.$localStorage.organisations);
      });
    }



    $onInit() {

    }
}

export const SearchAutocompleteComponent = {
    templateUrl: './views/app/components/search-autocomplete/search-autocomplete.component.html',
    controller: SearchAutocompleteController,
    controllerAs: 'vm',
    bindings: {}
}
