class EcosystemMapController {
    constructor() {
        'ngInject';
            this.darEsSalaam={
                lat: -6.792287,
                lng: 39.2376063,
                zoom: 12
            }
    }

    $onInit() {}
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {}
}
