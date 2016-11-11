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
        let eventHolder = this.MapDataService.checkedOrganisations();

          if(eventHolder.length > 0){
            this.markers = valueHolder;
          }
          else {
            this.markers = this.MapDataService.createEventMarkers(this.$localStorage.organisations.data);
          }
      }


      // show projects
      showProjects(){

        let eventHolder = this.MapDataService.checkedOrganisations();

          if(eventHolder.length > 0){
            this.markers = eventHolder;
          }
          else {
            this.markers = this.MapDataService.createProjectMarkers(this.$localStorage.organisations.data);
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
