class GetLocationController{
    constructor($scope,$localStorage,$log,DataService,$rootScope) {
        'ngInject';

        //


        this.$scope = $scope;
        this.$log = $log;
        this.$localStorage = $localStorage;
        this.$scope.DataService = DataService;
        this.$rootScope = $rootScope;


        this.darEsSalaam={
            lat: -6.1630,
            lng: 35.7516,
            zoom: 6
        };


        this.events = {
            events: {
                map: {
                    enable: ['click', 'drag', 'blur', 'touchstart'],

                    logic: 'emit'
                }
            }
        };



    }


    $onInit(){
    }
}

export const GetLocationComponent = {
    templateUrl: './views/app/components/get-location/get-location.component.html',
    controller: GetLocationController,
    controllerAs: 'vm',
    bindings: {}
}
