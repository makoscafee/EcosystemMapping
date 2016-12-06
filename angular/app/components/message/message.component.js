class MessageController{
    constructor($scope,$log,$state){
        'ngInject';

        //
        this.$scope = $scope;
        this.$log = $log;
        this.$state = $state;
        this.myMarkerData = this.$scope.$parent.data;
        this.$log.log("an event marker is clicked");
        this.$log.log(this.myMarkerData);


    }
    getClicked() {
    this.$state.go('app.home.events.details');
  }

    $onInit(){
    }
}

export const MessageComponent = {
    templateUrl: './views/app/components/message/message.component.html',
    controller: MessageController,
    controllerAs: 'vm',
    bindings: {

    }
}
