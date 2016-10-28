class LeftMenuController{
    constructor(SidemenuDataService,$log){
        'ngInject';

        //Initilizing the services
      this.SidemenuDataService = SidemenuDataService;
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


    //creates an array of select sectors
    setRoleArray(roleId){
      this.SidemenuDataService.roleArray(roleId);
    }


      //creates an array of selected sectors
    setSectorArray(sectorId){
      this.SidemenuDataService.sectorArray(sectorId);
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
