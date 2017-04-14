export class EcosystemFilterService {
    constructor(API, $log, EcosystemService) {
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
    role(roleId) {
        return this.API.one('roles', roleId).one('organizations').get('');
    }

    //filters organisations
    orgFilter(getData, allOrganisations) {
        this.globalData = allOrganisations.data;
        //local variables for
        // storing temporary results
        var myData = [];
        myData = getData;
        var filteredData = [];
        var sectorResult,
            roleResult;

        //using angular forEach to filter organisations
        let sectorLength = myData.sector.length > 0;
        let roleLength = myData.role.length > 0;
        if ((sectorLength && !roleLength) || (!sectorLength && roleLength)) {
            angular.forEach(allOrganisations.data, function(value) {

                try {
                    sectorResult = myData.sector.indexOf(value.sectors.data[0].id);
                    roleResult = myData.role.indexOf(value.roles.data[0].id);
                    if (sectorResult !== -1 || roleResult !== -1) {
                        filteredData.push(value);
                    } else {
                        this.$log.log("not selected");
                    }

                } catch (e) {
                    this.$log.log("missing role or sector information ");

                }

            });
        }
        else if (sectorLength && roleLength) {
          // creating array of organisation id's by roles
          let roleOrgId = [];
          let sectorOrgId = [];
          angular.forEach(allOrganisations.data,(org)=>{
          try{
          let  roleInfo = myData.role.indexOf(org.roles.data[0].id);
            if(roleInfo > -1){
              roleOrgId.push(org.id);
            }
            this.$log.log("no stress role");
          }
            catch(e){
              this.$log.log("missing role");
              this.$log.log(e);
            }

          });

          // for sectors
          angular.forEach(allOrganisations.data,(org)=>{
            try{
              let sectorInfo = myData.sector.indexOf(org.sectors.data[0].id);
              if(sectorInfo > -1){
                  sectorOrgId.push(org.id);
              }
              this.$log.log("no stress sector");
            }
              catch(e){
                this.$log.log("missing sector");

            }
          });

          //find the intersecting organisations
          let foundOrg = []
          let intersectingOrg = this.getIntersecting(sectorOrgId,roleOrgId);
          angular.forEach(allOrganisations.data,(org) =>{
            if(org.roles.length !== 0 && org.sectors.length !== 0){
              if(intersectingOrg.indexOf(org.id) > -1){
                foundOrg.push(org);
            }
            }
            else {
              this.$log.log("missing info in new Logic");
            }
          });

          filteredData = foundOrg;

        }
         else {

            filteredData = allOrganisations.data;
        }

        this.checkedOrg = filteredData;

        filteredData = [];
    }

    //getting filtered organisations
    getFilteredOrg() {
        return this.checkedOrg;
    }

      //getting intersecting values from two arrays
      getIntersecting(arrayA,arrayB){
        let values = [];
        let setA = new Set(arrayA);
        let intersectingValues = new Set(arrayB.filter(x => setA.has(x)));

        for(let x of intersectingValues){
            values.push(x);
        }

        return values;
      }

}
