export class EcosystemFilterService{
    constructor(API,$log,EcosystemService){
        'ngInject';

        // initializing ecosystem
        this.EcosystemService = EcosystemService;

        this.API = API;
        this.$log = $log;

        //initializing global vaariables
        this.checkedOrg = [];
        this.allOrganisations = null;
    }

    //gets organisatios by roles
    role(roleId){
      return this.API.one('roles',roleId).one('organizations').get('');
    }


      //filters organisations
    orgFilter(getData,allOrganisations){
      this.globalData = allOrganisations.data;
      //local variables for
      // storing temporary results
      var myData=[];
      myData = getData;
       var filteredData=[];
       var i = 0;
       var sectorResult,roleResult;

      //using angular forEach to filter organisations
      if(myData.sector.length > 0 || myData.role.length > 0 ){
        angular.forEach(allOrganisations.data,function(value,key){

          try{
              sectorResult = myData.sector.indexOf(value.sectors.data[0].id);
              roleResult = myData.role.indexOf(value.roles.data[0].id);
              if(sectorResult !== -1 || roleResult !==-1){
                filteredData.push(value);
              }
              else{
                this.$log.log("not selected");
              }

          }
          catch(e){
              console.log("missing role or sector information ");

          }

          });
      }
      else{

          filteredData = allOrganisations.data;
      }

      this.checkedOrg = filteredData;



        filteredData = [];
    }


    //getting filtered organisations
    getFilteredOrg(){
        return this.checkedOrg;
    }



}
