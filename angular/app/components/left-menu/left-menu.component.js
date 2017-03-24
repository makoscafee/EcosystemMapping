class LeftMenuController {
    constructor(SidemenuDataService, $log, EcosystemFilterService, _, MapDataService, $rootScope, $scope) {
        'ngInject';

        //Initilizing the services
        this.SidemenuDataService = SidemenuDataService;
        this.EcosystemFilterService = EcosystemFilterService;
        this.MapDataService = MapDataService;
        this.organisationData = null;
        this.initialOrganizationData = null;
        this.$rootScope = $rootScope;
        this.$log = $log;
        this.$scope = $scope;
        this.selectedRoles = [];
        this.selectedSectors = [];

        //getting all roles
        this.SidemenuDataService.roles().then((response) => {
            this.roles = response.data;
        });
        //getting all sectors
        this.SidemenuDataService.sectors().then((response) => {
            this.sectors = response.data;
        });
    }


    //filtering organisations by role;
    filterByRole(roleName) {
        if (this.selectedRoles.indexOf(roleName) !== -1) {
            this.selectedRoles.splice(this.selectedRoles.indexOf(roleName), 1);
        } else {
            this.selectedRoles.push(roleName);
        };
        this.filterAllData('roles', this.selectedRoles);
      }

    //filtering organizations by sectors;
    filterBySector(sectorName){
      if (this.selectedSectors.indexOf(sectorName) !== -1) {
          this.selectedSectors.splice(this.selectedSectors.indexOf(sectorName), 1);
      } else {
          this.selectedSectors.push(sectorName);
      };
      this.filterAllData('sectors', this.selectedSectors);
    }

    filterAllData(filterName, filterSelected){
      var allFilters = this.selectedRoles.concat(this.selectedSectors);
      var filteredByRole = _.filter(this.organisationData.data, (p) => {
          var results = _.filter(p[filterName].data, (roleOrSector) => {
              return _.includes(filterSelected, roleOrSector.name);
          });
          return results.length > 0;
      });
      if(allFilters.length > 0){
        this.MapDataService.setOrganizationData({data: filteredByRole});
      }else {
        this.MapDataService.setOrganizationData(this.initialOrganizationData);
      }
      var args = {};
      args.scope = this.$scope;
      this.$rootScope.$emit('eventX', args);

    }


    $onInit() {
        this.MapDataService.getInitialData().then((response) => {
            this.initialOrganizationData = response.data;
            this.organisationData = angular.copy(this.initialOrganizationData);
        });
    }
}

export const LeftMenuComponent = {
    templateUrl: './views/app/components/left-menu/left-menu.component.html',
    controller: LeftMenuController,
    controllerAs: 'vm',
    bindings: {}
}
