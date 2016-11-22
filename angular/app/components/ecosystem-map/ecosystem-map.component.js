


class EcosystemMapController {
    constructor(SidemenuDataService,EcosystemService,$log,MapDataService,$localStorage) {
        'ngInject';

        this.SidemenuDataService = SidemenuDataService;
        this.EcosystemService = EcosystemService;
        this.MapDataService = MapDataService;
        this.$localStorage = $localStorage;
        this.$log = $log;
        this.markers =[];
                this.darEsSalaam={
                    lat: -6.792287,
                    lng: 39.2376063,
                    zoom: 6
                }
this.markers = this.MapDataService.createMarkers(this.$localStorage.organisations.data);


    }



      // returns an array of selected org
    selectedOrganisations(){
      this.markers = this.MapDataService.checkedOrganisations()
    }


    $onInit() {

    }
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {
      markers: '<'
    }
}
