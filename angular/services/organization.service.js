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

    getLocation(){

    }

    getContacts(){

    }

    getSector(){

    }

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

    getStage(){

    }
}
