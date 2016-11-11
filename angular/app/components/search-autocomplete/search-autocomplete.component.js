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

        //getting ecosystems
        this.EcosystemService.getAll().then((response) => {
            this.states = response.data;
        });


        //getting all roles
      this.SidemenuDataService.roles().then((response)=>{
        this.$localStorage.roles = response.data;
      });

          //getting all sectors
      this.SidemenuDataService.sectors().then((response)=>{
        this.$localStorage.sectors = response.data;
      });

    }

    //getting organisations of a given ecosystem and
    //changing the state to home state
    home(ecosystemId) {
        this.DataService.setSelectedEcosystem(ecosystemId);
        this.$localStorage.ecosystem = ecosystemId;
        this.EcosystemService.getOrganisation(ecosystemId.id).then((response) => {
            this.organisationData = response.data;
            this.$log.log(this.organisationData);
        });
        this.$state.go('app.home.pins');

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



    $onInit() {

    }
}

export const SearchAutocompleteComponent = {
    templateUrl: './views/app/components/search-autocomplete/search-autocomplete.component.html',
    controller: SearchAutocompleteController,
    controllerAs: 'vm',
    bindings: {}
}
