class MessageDetailsController{
    constructor($scope,$log,DataService){
        'ngInject';

        //
        this.$scope = $scope;
        this.$log = $log;
        this.DataService = DataService;
        this.scopeData = this.DataService.getEventFromMarkers();

    }

    $onInit(){
    }
}

export const MessageDetailsComponent = {
    templateUrl: './views/app/components/message-details/message-details.component.html',
    controller: MessageDetailsController,
    controllerAs: 'vm',
    bindings: {}
}
