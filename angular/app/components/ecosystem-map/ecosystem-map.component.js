


class EcosystemMapController {
    constructor(SidemenuDataService,EcosystemService,$log,MapDataService,$localStorage,$scope,$rootScope) {
        'ngInject';

        this.SidemenuDataService = SidemenuDataService;
        this.EcosystemService = EcosystemService;
        this.MapDataService = MapDataService;
        this.$localStorage = $localStorage;
        this.$log = $log;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.markers =[];
                this.darEsSalaam={
                    lat: -6.1630,
                    lng: 35.7516,
                    zoom: 6
                }

                this.markerIcons ={
                  startup:{
                    iconUrl: 'img/icons/startup.png',
                     iconSize:     [25, 41]
                  },
                  coworkingSpaces:{
                    iconUrl: 'img/icons/coworking.png',
                     iconSize:     [25, 41]
                  },
                  fundingAgencies:{
                    iconUrl: 'img/icons/investor.png',
                     iconSize:     [25, 41]
                  },
                  randD:{
                    iconUrl: 'img/icons/incubator.png',
                     iconSize:     [25, 41]
                  },
                  event:{
                    iconUrl: 'img/icons/event.png',
                     iconSize:     [25, 41]
                  },
                  project:{
                    iconUrl: 'img/icons/accelerator.png',
                     iconSize:     [25, 41]
                  }
                };





this.markers = this.createMarkers(this.$localStorage.organisations.data);


    }


    //create markers

createMarkers(data){
  var scope = this.$scope;
  let markers = [];
  let role = {};
  //creating location information
  angular.forEach(data, (response)=> {
    angular.forEach(response.locations, (locations)=>{
      angular.forEach(locations, (location)=> {
        var marker = {
          lat: parseFloat(location.lat),
          lng: parseFloat(location.long),
          getMessageScope: function () {
                          var infowindowScope = scope.$new(true);
                          infowindowScope.data = response;
                          return infowindowScope;
                      },
          message:'<organisation-msg></organisatio-msg>',
              icon: {}
            }
            try{
              let roleName = response.roles.data[0].name;
              if(roleName == "R&D"){
                  marker.icon = this.markerIcons.randD;
                  markers.push(marker);
              }
              else if (roleName == "Funding Agencies" ) {
                marker.icon = this.markerIcons.fundingAgencies;
                markers.push(marker);
              }
              else if (roleName == "Startup") {
                marker.icon = this.markerIcons.startup;
                markers.push(marker);
              }
              else if (roleName == "Coworking Space") {
                marker.icon = this.markerIcons.coworkingSpaces;
                markers.push(marker);
              }
              else {
                this.$log.log("no such a role");
              }


            }
            catch(e){
              this.$log.log("no role info in this org");
            }

      })
    })
  });


        return markers;
}




      // returns an array of selected org
    selectedOrganisations(){
      this.markers = this.MapDataService.checkedOrganisations()
    }


    $onInit() {

    }
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {
      markers: '<'
    }
}
