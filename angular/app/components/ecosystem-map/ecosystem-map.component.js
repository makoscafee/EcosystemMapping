class EcosystemMapController {
    constructor(MapDataService, $log, _, $rootScope, $scope, $mdDialog, $timeout) {
        'ngInject';
        this.$log = $log;
        this.MapDataService = MapDataService;
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.ecosystemMap = {};
        this.ecosystemMap.center = {
            lat: -6.1630,
            lng: 35.7516,
            zoom: 6
        };
        this.ecosystemMap.defaults = {
            zoomControlPosition: 'bottomright'
        }

        this.fab = {
            topDirections: '',
            bottomDirections: 'down',
            isOpen: false,
            selectedMode: 'md-fling',
            selectedDirection: 'down',
            items: [
                {
                    name: "Organization",
                    icon: "img/icons/insert_drive.svg",
                    direction: "right"
                }, {
                    name: "Event",
                    icon: "img/icons/insert_drive.svg",
                    direction: "top"
                }, {
                    name: "Project",
                    icon: "img/icons/insert_drive.svg",
                    direction: "right"
                }
            ]
        }

        this.$rootScope = $rootScope;
        var consol = this.$log;
        this.watcherFunction(this.MapDataService);

    }

    watcherFunction(MapDataService) {
        var _formatLocationInformation = this.formatLocationInformation;
        var ecosystemMap = this.ecosystemMap;
        this.$rootScope.$on('eventX', function(ev, args) {
            var response = MapDataService.getOrganizationData();
            ecosystemMap.markers = _formatLocationInformation(response, args.scope);
        });
    }

    openDialog($event, item) {
        // Show the dialog
        this.$mdDialog.show({
            clickOutsideToClose: true,
            controller: ['$mdDialog', function($mdDialog) {
                // Save the clicked item
                this.item = item;

                // Setup some handlers
                this.close = function() {
                    $mdDialog.cancel();
                };
                this.submit = function() {
                    $mdDialog.hide();
                };
            }],
            controllerAs: 'dialog',
            templateUrl: 'dialog.html',
            targetEvent: $event
        });
    };

    formatLocationInformation(data, scope) {
        var markers = [];
        _.map(data, (value) => {
            angular.forEach(value, (response) => {
                if (response) {
                    angular.forEach(response.locations.data, (locationData) => {
                        var locationInfo = {
                            lat: parseFloat(locationData.lat),
                            lng: parseFloat(locationData.lng),
                            message: '<info-window></info-window>',
                            getMessageScope: function() {
                                var infowindowScope = scope.$new(true);
                                infowindowScope.data = response;
                                return infowindowScope;
                            }
                        }
                        markers.push(locationInfo);
                    });
                }
            });
        });
        return markers;
    }

    getLocationInformation() {
        this.MapDataService.getInitialData().then((response) => {
            this.organisationData = response.data;
            this.ecosystemMap.markers = this.formatLocationInformation(this.organisationData, this.$scope);

        });
    }

    $onInit() {
        this.getLocationInformation();
    }
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {}
}
