class EcosystemMapController {
    constructor(MapDataService, $log, _, $rootScope,$scope) {
        'ngInject';
        this.$log = $log;
        this.MapDataService = MapDataService;
        this.$scope = $scope;
        this.ecosystemMap = {};
        this.ecosystemMap.center = {
            lat: -6.1630,
            lng: 35.7516,
            zoom: 6
        };

        this.$rootScope = $rootScope;
        var consol = this.$log;
        var foramt = this.formatLocationInformation;
        var ecosystemMap = this.ecosystemMap;
        this.$rootScope.$on('eventX', function(ev, args) {
            var response = MapDataService.getOrganizationData();
            ecosystemMap.markers = foramt(response);
        });

    }

    formatLocationInformation(data) {
        var markers = [];
        _.map(data, (value) => {
            angular.forEach(value, (response) => {
                if (response) {
                    var scope = this.$scope;
                    angular.forEach(response.locations.data, (locationData) => {
                        var locationInfo = {
                            lat: parseFloat(locationData.lat),
                            lng: parseFloat(locationData.lng),
                            message: '<info-window></info-window>',
                            getMessageScope: function() {
                              var infowindowScope = scope.$new(true);
                              infowindowScope.data = response;
                              return infowindowScope;
                            },
                        }
                        markers.push(locationInfo);
                    });
                }
            });
        });
        return markers;
    }

    $onInit() {
        this.MapDataService.getInitialData().then((response) => {
            this.organisationData = response.data;
            this.ecosystemMap.markers = this.formatLocationInformation(this.organisationData);

        });
    }
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {},
}
