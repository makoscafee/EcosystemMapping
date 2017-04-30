class MessageController{
    constructor($scope,$log,$state,DataService){
        'ngInject';

        //
        this.$scope = $scope;
        this.$log = $log;
        this.$state = $state;
     //   this.$log.log($scope,"scope from inside");
        this.DataService = DataService;
        this.myMarkerData = this.$scope.$parent.data;
        this.DataService.setEventFromMarker(this.myMarkerData);


    }
    getClicked() {
    this.$state.go('app.home.events.details',{eventId:this.myMarkerData.id});
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
