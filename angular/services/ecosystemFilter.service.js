export class EcosystemFilterService{
    constructor(API,$log,EcosystemService){
        'ngInject';

        // initializing ecosystem
        this.EcosystemService = EcosystemService;
        this.API = API;
        this.$log = $log;
    }
    role(roleId){
      return this.API.one('roles',roleId).one('organizations').get('');
    }

    orgFilter(getData,allOrganisations){
      var myData=[];
      myData = getData;
       var filteredData=[];
      //using angular foreach to filter organisations
    angular.forEach(allOrganisations,function(value,key){
      try{
        if(myData.sector.indexOf(value.sectors.data[0].id)!=-1 | myData.role.indexOf(value.roles.data[0].id) ){
          filteredData.push(value);
          console.log("data is");
          console.log(filteredData);
        }
        else{
           console.log("id :"+value.sectors.data[0].id+"not in filter object");
        }
      }
      catch(e){
        console.log("some data is missing for organisation");

      }


      });

    }
}
