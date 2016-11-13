   class LeftMenuController{
    constructor(SidemenuDataService,$log,EcosystemFilterService,EcosystemService,MapDataService,$localStorage){
        'ngInject';

        //Initilizing the services
      this.EcosystemFilterService = EcosystemFilterService;
      this.SidemenuDataService = SidemenuDataService;
      this.EcosystemService = EcosystemService;
      this.MapDataService = MapDataService;
      this.$localStorage = $localStorage;
      this.$log = $log;

        //getting all roles
        this.roles = this.$localStorage.roles;


          //getting all sectors
        this.sectors = this.$localStorage.sectors;

      this.orgLocation = this.MapDataService.checkedOrganisations();
    }



      // updating makers
      selectedOrganisations(){
        this.markers = this.MapDataService.createMarkers(this.SidemenuDataService.getMapData());

      }

    //creates an array of select roles
    setRoleArray(roleId){
      this.SidemenuDataService.roleArray(roleId);
      this.selectedOrganisations();
    }


      //creates an array of selected sectors
    setSectorArray(sectorId){
      this.SidemenuDataService.sectorArray(sectorId);
      this.selectedOrganisations();
    }




      // show events
      showEvents(){

        let test = this.MapDataService.createEventMarkers(this.SidemenuDataService.getMapData());

          if(test.markers.length > 0){
            this.markers =test.markers;
            this.events = test.events;
            this.$log.log(this.markers);

          }
          else {
            let data = this.MapDataService.createEventMarkers(this.$localStorage.organisations.data);
            this.markers = data.markers;
            this.events = data.events;
          }
      }


      // show projects
      showProjects(){

        let test = this.MapDataService.createProjectMarkers(this.SidemenuDataService.getMapData());

          if(test.markers.length > 0){
            this.$log.log("if block executing in projects");
            this.markers =test.markers;
            this.events = test.events;
            this.$log.log(this.markers);

          }
          else {
            this.$log.log("now else block is touched in project");
            let data = this.MapDataService.createEventMarkers(this.$localStorage.organisations.data);
            this.markers = data.markers;
            this.events = data.events;
          }
      }

      // show all organisations
      showOrganisations(){

          let valueHolder = this.MapDataService.checkedOrganisations();


          if (valueHolder.length > 0){
          this.markers = valueHolder;
          }
          else {
            this.markers = this.MapDataService.createMarkers(this.$localStorage.organisations.data);
          }

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
