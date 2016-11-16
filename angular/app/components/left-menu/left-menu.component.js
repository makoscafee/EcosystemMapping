class LeftMenuController {
    constructor(SidemenuDataService, $log, EcosystemFilterService,
       EcosystemService, MapDataService, $localStorage,$state,OrganizationService) {
        'ngInject';

        //Initilizing the services
        this.EcosystemFilterService = EcosystemFilterService;
        this.SidemenuDataService = SidemenuDataService;
        this.OrganizationService = OrganizationService;
        this.EcosystemService = EcosystemService;
        this.MapDataService = MapDataService;
        this.$localStorage = $localStorage;
        this.$log = $log;
        this.$state = $state;


          //global variable
          this.isRoleChecked = {};
          this.isSectorChecked = {};


        //getting all roles
        this.roles = this.$localStorage.roles;

          //creating a role count object
            let roleCount = {};
        angular.forEach(this.roles,(role)=>{
          roleCount[role.id] =this.OrganizationService.getRoleCount(role.name);
            })

            this.countedRoles = roleCount;




        //getting all sectors
        this.sectors = this.$localStorage.sectors;

        this.orgLocation = this.MapDataService.checkedOrganisations();



      //showing Organisations,events,projects initially
      this.showOrganisations();

    }

    // updating makers
    selectedOrganisations() {
        this.markers = this.MapDataService.createMarkers(this.SidemenuDataService.getMapData());

    }

    //creates an array of select roles
    setRoleArray(roleId) {
        this.SidemenuDataService.roleArray(roleId);
        this.selectedOrganisations();
    }

    //creates an array of selected sectors
    setSectorArray(sectorId) {
        this.SidemenuDataService.sectorArray(sectorId);
        this.selectedOrganisations();
    }

    // show events
    showEvents() {

            let data = this.MapDataService.createEventMarkers(this.$localStorage.organisations.data);
            this.markers = data.markers;
            this.events = data.events;
            this.$state.go('app.home.events');


    }

    // show projects
    showProjects() {

            let data = this.MapDataService.createProjectMarkers(this.$localStorage.organisations.data);
            this.markers = data.markers;
            this.events = data.events;
            this.$state.go('app.home.projects');

    }

    // show all organisations
    showOrganisations() {

        let valueHolder = this.MapDataService.checkedOrganisations();

        if (valueHolder.length > 0) {
            this.markers = valueHolder;
        } else {
            this.markers = this.MapDataService.createMarkers(this.$localStorage.organisations.data);
        }
        this.$state.go('app.home.pins');
    }

    //showing number of organisions per role
    showRoleCount(roleName){
    return this.OrganizationService.getRoleCount(roleName);
    }

    $onInit() {}
}
export const LeftMenuComponent = {
    templateUrl: './views/app/components/left-menu/left-menu.component.html',
    controller: LeftMenuController,
    controllerAs: 'vm',
    bindings: {}
}
