class OrganisationDetailsController{
    constructor($state){
        'ngInject';

        //
        this.$state = $state;
    }

    back(){
      this.$state.go('app.home.pins.all');
    }

    $onInit(){
    }
}

export const OrganisationDetailsComponent = {
    templateUrl: './views/app/components/organisation-details/organisation-details.component.html',
    controller: OrganisationDetailsController,
    controllerAs: 'vm',
    bindings: {}
}
