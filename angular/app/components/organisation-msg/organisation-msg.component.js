class OrganisationMsgController{
    constructor($scope,$log,$state,DataService){
        'ngInject';

        //
        this.$scope = $scope;
        this.$state = $state;
        this.DataService = DataService;
        this.$log = $log;

        this.mapOrganisation = this.$scope.$parent.data;
        this.DataService.setOrgFromMarker(this.mapOrganisation);

    }

    viewOrganisation(){
        this.$state.go('app.home.pins.details',{orgID:this.mapOrganisation.id});
    }

    $onInit(){
    }
}

export const OrganisationMsgComponent = {
    templateUrl: './views/app/components/organisation-msg/organisation-msg.component.html',
    controller: OrganisationMsgController,
    controllerAs: 'vm',
    bindings: {}
}
