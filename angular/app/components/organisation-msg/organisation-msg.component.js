class OrganisationMsgController{
    constructor($scope,$log,$state){
        'ngInject';

        //
        this.$scope = $scope;
        this.$state = $state;
        this.$log = $log;

        this.mapOrganisation = this.$scope.$parent.data;
        this.$log.log("this is the clicked organision");
        this.$log.log(this.mapOrganisation);
    }

    viewOrganisation(){
        this.$state.go('app.home.pins.details');
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
