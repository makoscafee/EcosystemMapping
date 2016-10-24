class LeftMenuController{
    constructor(SidemenuDataService,$log,EcosystemFilterService){
        'ngInject';

        //Initilizing the services
      this.SidemenuDataService = SidemenuDataService;
      this.EcosystemFilterService = EcosystemFilterService;
      this.$log = $log;

        //getting all roles
      this.SidemenuDataService.roles().then((response)=>{
        this.roles = response.data;
      });
          //getting all sectors
      this.SidemenuDataService.sectors().then((response)=>{
        this.sectors = response.data;
      });
    }


    //filtering organisations by role;
    filterByRole(roleId){

        this.EcosystemFilterService.role(roleId).then((response)=>{
          this.$log.log(roleId);
          this.$log.log(response.message);
        });
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
