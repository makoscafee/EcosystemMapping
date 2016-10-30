class LeftMenuController{
    constructor(SidemenuDataService,$log,EcosystemFilterService,EcosystemService,MapDataService){
        'ngInject';

        //Initilizing the services
      this.EcosystemFilterService = EcosystemFilterService;
      this.SidemenuDataService = SidemenuDataService;
      this.EcosystemService = EcosystemService;
      this.MapDataService = MapDataService;
      this.$log = $log;

        //getting all roles
      this.SidemenuDataService.roles().then((response)=>{
        this.roles = response.data;
      });

          //getting all sectors
      this.SidemenuDataService.sectors().then((response)=>{
        this.sectors = response.data;
      });
      this.orgLocation = this.MapDataService.checkedOrganisations();

      //displaying all organisations initially
      this.selectedOrganisations();
    }



      // updating makers
      selectedOrganisations(){
        this.orgMakers = this.SidemenuDataService.getMapData();
        var markers = [];

          //creating location objects
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
                this.markers = this.MapDataService.checkedOrganisations();
      }

    //creates an array of select sectors
    setRoleArray(roleId){
      this.SidemenuDataService.roleArray(roleId);
      this.selectedOrganisations();
    }


      //creates an array of selected sectors
    setSectorArray(sectorId){
      this.SidemenuDataService.sectorArray(sectorId);
      this.selectedOrganisations();
    }


    //testing the organisation filter
    test(){
      this.$log.log(this.EcosystemFilterService.getFilteredOrg());
    }

    $onInit(){
    }
}

export const LeftMenuComponent = {
    templateUrl: './views/app/components/left-menu/left-menu.component.html',
    controller: LeftMenuController,
    controllerAs: 'vm',
    bindings: {}
}
