class OrganisationDetailsController{
    constructor($state,$scope,$log,DataService){
        'ngInject';

        //
        this.$state = $state;
        this.$scope = $scope;
        this.DataService = DataService;
        this.$log = $log;


                this.menuOrganisation = this.DataService.getOrgFromMarkers();
                this.$log.log("this is the  organision hello");
                this.$log.log(this.menuOrganisation);
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
