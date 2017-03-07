export class OrganizationService{
    constructor(API,$log,$localStorage){
        'ngInject';

        //
        this.API =API;
        this.$log = $log;
        this.$localStorage = $localStorage;
    }


      //getting all organizations
    getAll(){
      this.API.all('organizations').get('').
      then((response)=>{
        this.organisationData =response.message;
        this.$log.log(this.organisationData);
      });
    }


      //getting one organization
    getOne(id){
      this.API.one('organizations',id).get('').
      then((response)=>{
        this.organisationOne = response.data;
      });

    }


    // creating an organisation
    createOrganisation(data){
       return this.API.all('organizations').post(data);
    }



    // creating a new location
    createLocation(data){
      return  this.API.all('locations').post(data);
    }

    // Attach location to an organisation
    attachLocationToOrganisation(organisationId,locationId){
        let DataAPI =this.API.one('organizations',organisationId);

       return DataAPI.all('attach-locations').post(locationId);


    }


        // gets all sectors
    getSectors(){
      return  this.API.all('sectors').get('');

    }

    attachSectorToOrganisation(organisationId,sectorId){
        let DataAPI = this.API.one('organizations',organisationId);
        return DataAPI.all('attach-sectors').post(sectorId);
    }

    attachRoleToOrganisation(organisationId,roleId){
        let DataAPI = this.API.one('organizations',organisationId);
        return DataAPI.all('attach-roles').post(roleId);
    }

    attachStageToOrganisation(organisationId,stageId){
        let DataAPI = this.API.one('organizations',organisationId);
        return DataAPI.all('attach-stages').post(stageId);
    }


    // gets all roles
    getRoles(){
        return  this.API.all('roles').get('');

    }


    // gets all stages
    getStages(){
        return  this.API.all('stages').get('');

    }


        // counts all role of a Organisations under a particular ecosystem
    getRoleCount(roleName){
      let roleData = [];
        angular.forEach(this.$localStorage.organisations.data,(org)=>{
            angular.forEach(org.roles,(roleArray)=>{
                angular.forEach(roleArray,(role)=>{
                    if(role.name == roleName){
                      roleData.push(role.name);
                    }
                })
            })
        });

        return roleData.length;
    }

}
