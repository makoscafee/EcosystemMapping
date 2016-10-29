class LeftMenuController{
    constructor(SidemenuDataService,$log,EcosystemFilterService,EcosystemService){
        'ngInject';

        //Initilizing the services
      this.EcosystemFilterService = EcosystemFilterService;
      this.SidemenuDataService = SidemenuDataService;
      this.EcosystemService = EcosystemService;
      this.$log = $log;

        //getting all roles
      this.SidemenuDataService.roles().then((response)=>{
        this.roles = response.data;
      });

          //getting all sectors
      this.SidemenuDataService.sectors().then((response)=>{
        this.sectors = response.data;
      });

      //getting all organisations
      this.EcosystemService.getOrganisation(4).then((response)=>{
        SidemenuDataService.orgData(response.data)

      });
    }


    //creates an array of select sectors
    setRoleArray(roleId){
      this.SidemenuDataService.roleArray(roleId);
    }


      //creates an array of selected sectors
    setSectorArray(sectorId){
      this.SidemenuDataService.sectorArray(sectorId);
    }


    //testing the organisation filter
    test(){
      this.$log.log("testing organision filter");
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
