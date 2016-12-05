class MessageController{
    constructor($scope,$log,$state,$localStorage){
        'ngInject';

        //
        this.$scope = $scope;
        this.$log = $log;
        this.$state = $state;
        this.$localStorage = $localStorage;
        this.myMarkerData = this.$scope.$parent.data;


    }
    getClicked() {
    this.$log.log("this is clicked");
    this.$state.go('app.home.events.details', {detailId: this.myMarkerData.id});
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
