class LeftMenuController{
    constructor(SidemenuDataService,$log,EcosystemFilterService,EcosystemService){
        'ngInject';

        //Initilizing the services
      this.SidemenuDataService = SidemenuDataService;
      this.EcosystemFilterService = EcosystemFilterService;
      this.EcosystemService = EcosystemService;
      this.$log = $log;

      //initializing global variables
      this.roleData = [];
      this.sectorData = [];
      this.filteredOrganisations=null;

      this.organisationsFilter ={role:null,sector:null};

        //getting all roles
      this.SidemenuDataService.roles().then((response)=>{
        this.roles = response.data;
      });
          //getting all sectors
      this.SidemenuDataService.sectors().then((response)=>{
        this.sectors = response.data;
      });
      //getting all Organisations in ecosystems
      this.EcosystemService.getOrganisation(13).then((response)=>{
        this.allOrganisations = response.data.data;
        this.$log.log("these the Organisations from the service");
        this.$log.log(this.allOrganisations);
      });

    }


    //filtering organisations by role;
    setRoleArray(roleId){
      if(this.roleData.indexOf(roleId) === -1){
        this.roleData.push(roleId);
      }
      else{
        this.roleData.splice(this.roleData.indexOf(roleId),1);
      }
      this.organisationsFilter.role = this.roleData;
      this.$log.log(this.roleData);
    }

    setSectorArray(sectorId){
      if(this.sectorData.indexOf(sectorId) === -1){
        this.sectorData.push(sectorId);
      }
      else{
        this.sectorData.splice(this.sectorData.indexOf(sectorId),1);
      }
      this.organisationsFilter.sector = this.sectorData;
      this.$log.log(this.sectorData);
    }

    filterOrganizations(){
  this.EcosystemFilterService.orgFilter(this.organisationsFilter,this.allOrganisations)


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
