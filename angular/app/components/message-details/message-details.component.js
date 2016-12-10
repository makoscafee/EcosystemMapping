class MessageDetailsController{
    constructor($scope,$log,DataService,$state){
        'ngInject';

        //
        this.$scope = $scope;
        this.$log = $log;
        this.$state = $state;
        this.DataService = DataService;
        this.scopeData = this.DataService.getEventFromMarkers();

    }


    back(){
      this.$state.go('app.home.events.all');
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
