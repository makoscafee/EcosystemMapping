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
      this.organisationsFilter.role = this.roleData;
    }

    setSectorArray(sectorId){
      if(this.sectorData.indexOf(sectorId) === -1){
        this.sectorData.push(sectorId);
      }
      this.organisationsFilter.sector = this.sectorData;
    }

    filterOrganizations(){
    //    var myData=[];
    //    var filteredData=[];
    //   let i=0;
    // myData = this.organisationsFilter;
    //   //using angular foreach to filter organisations
    // angular.forEach(this.allOrganisations,function(value,key){
    //    if(myData.sector.indexOf(value.sectors.data[0].id)!=-1 ||myData.role.indexOf(value.roles.data[0].id)){
    //   filteredData.push(value.id);
    //   console.log("this is the data");
    //   console.log(filteredData);
    //    }
    //    i=i+1;
    //   });
    //   this.$log.log("the filtered Organisation");

  this.EcosystemFilterService.hello(this.organisationsFilter,this.allOrganisations)


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
