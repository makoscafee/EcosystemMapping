export class SidemenuDataService{
    constructor(API,$log,EcosystemFilterService,EcosystemService){
        'ngInject';

        //initializing services
        this.API = API;
        this.$log = $log;
        this.EcosystemFilterService = EcosystemFilterService;

        //initializing global variables
        this.roleData = [];
        this.sectorData = [];
        this.mapData = [];
        this.filteredOrganisations=null;
        this.organisationsFilter ={role:[],sector:[]};
        this.orgLocations = null;
        this.allOrganisations = null;


    }


      //getting all roles
    roles(){
      return  this.API.all('roles').get('');
    }


      //getting all sectors
    sectors(){
      return this.API.all('sectors').get('');
    }


        //returns locations
    getOrgLocations(){
        this.$log.log("the data is here");
      return this.orgLocations;
    }


      //initializing the location object
    setOrgLocations(locationData){
        let myData =[];
        angular.forEach(locationData,function(value,key){
          myData.push(value.locations.data);
        });
        this.orgLocations=myData;
    }



    //filtering organisation by selected role
    roleArray(roleId){

        //add id if not in array else remove id
      if(this.roleData.indexOf(roleId) === -1){
        this.roleData.push(roleId);
      }
      else{
        this.roleData.splice(this.roleData.indexOf(roleId),1);
      }
        //saving the array of roles
      this.organisationsFilter.role = this.roleData;

          //updating the filtered organisations
      this.EcosystemFilterService.orgFilter(this.organisationsFilter,this.allOrganisations);

        //getting filtered organisations
      this.mapData = this.EcosystemFilterService.getFilteredOrg();
       this.$log.log("These are the filtered Org");
       this.$log.log(this.mapData);

    }


        //filteres organisations by selected sectors
    sectorArray(sectorId){
      if(this.sectorData.indexOf(sectorId) === -1){
        this.sectorData.push(sectorId);
      }
      else{
        this.sectorData.splice(this.sectorData.indexOf(sectorId),1);
      }
      this.organisationsFilter.sector = this.sectorData;

        //updating the filtered organisations
      this.EcosystemFilterService.orgFilter(this.organisationsFilter,this.allOrganisations);

        //getting filtered organisations
      this.mapData = this.EcosystemFilterService.getFilteredOrg();
       this.$log.log("These are the filtered Org");
       this.$log.log(this.mapData);
    }

    orgData(data){
      this.allOrganisations = data;
    }


    //gets map data
    getMapData(){
      return this.mapData;
    }

}
