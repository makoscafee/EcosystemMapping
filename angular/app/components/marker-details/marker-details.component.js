class MarkerDetailsController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
    }
}

export const MarkerDetailsComponent = {
    templateUrl: './views/app/components/marker-details/marker-details.component.html',
    controller: MarkerDetailsController,
    controllerAs: 'vm',
    bindings: {
      markerId: '<'
    }
}
