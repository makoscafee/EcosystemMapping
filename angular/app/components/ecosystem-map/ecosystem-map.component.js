


class EcosystemMapController {
    constructor(SidemenuDataService,EcosystemService,$log) {
        'ngInject';

        this.SidemenuDataService = SidemenuDataService;
        this.EcosystemService = EcosystemService;
        this.$log = $log;

                this.darEsSalaam={
                    lat: -6.792287,
                    lng: 39.2376063,
                    zoom: 12
                }



                //getting all Organisations in ecosystems
                this.EcosystemService.getOrganisation(4).then((response)=>{
                  var obj = response.data.data;
                });

    }





    $onInit() {

    }
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {}
}
