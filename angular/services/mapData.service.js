export class MapDataService{
    constructor(SidemenuDataService,$log){
        'ngInject';

        //
        this.SidemenuDataService = SidemenuDataService;
        this.$log = $log;


    }
    checkedOrganisations(){
      this.orgMakers = this.SidemenuDataService.getMapData();
      var markers = [];

        //creating location information
        angular.forEach(this.orgMakers, (response)=> {
          angular.forEach(response.locations, (locations)=>{
            angular.forEach(locations, (location)=> {
              var marker = {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.long)
              }
              markers.push(marker);
            })
          })
        });

              this.markers = markers;
              return this.markers;
    }
}
