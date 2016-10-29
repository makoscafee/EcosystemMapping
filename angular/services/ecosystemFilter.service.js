export class EcosystemFilterService{
    constructor(API,$log,EcosystemService){
        'ngInject';

        // initializing ecosystem
        this.EcosystemService = EcosystemService;
        this.API = API;
        this.$log = $log;

        //initializing global vaariables
        this.checkedOrg = null;
        this.allOrganisations = null;
    }

    //gets organisatios by roles
    role(roleId){
      return this.API.one('roles',roleId).one('organizations').get('');
    }


      //filters organisations
    orgFilter(getData,allOrganisations){

      //local variables for
      // storing temporary results
      var myData=[];
      myData = getData;
       var filteredData=[];
       var i = 0;
       var sectorResult,roleResult;
       this.$log.log(allOrganisations);
      //using angular forEach to filter organisations
      angular.forEach(allOrganisations.data,function(value,key){

        if(value.sectors.data.length > 0 && value.roles.data.length > 0){
            sectorResult = myData.sector.indexOf(value.sectors.data[0].id);
            roleResult = myData.role.indexOf(value.roles.data[0].id);
            if(sectorResult !== -1 || roleResult !==-1){
              filteredData.push(value);
            }

        }
        else {
            console.log("missing role or sector information ");

        }

        });
        this.checkedOrg = filteredData;
        filteredData = [];
    }


    //getting filtered organisations
    getFilteredOrg(){
      return this.checkedOrg;
    }



}
