class InfoWindowController{
    constructor($log, $scope, $state){
        'ngInject';
        //
        this.$log = $log;
        this.$scope = $scope;
        this.markerData = this.$scope.$parent.data;
        this.$state = $state;
    }

    getClicked() {
      this.$log.log("this is clicked");
      this.$state.go('app.home.details', {detailId: this.markerData.id});
    }

    $onInit(){
      this.$log.log(this.markerData);
    }
}

export const InfoWindowComponent = {
    templateUrl: './views/app/components/info-window/info-window.component.html',
    controller: InfoWindowController,
    controllerAs: 'vm',
    bindings: {}
}
