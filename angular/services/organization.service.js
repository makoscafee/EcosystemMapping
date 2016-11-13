export class OrganizationService{
    constructor(API,$log){
        'ngInject';

        //
        this.API =API;
        this.$log = $log;
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
        this.$log.log(this.organisationOne);
      });

    }

    getLocation(){

    }

    getContacts(){

    }

    getRole(){

    }

    getSector(){

    }

    getStage(){

    }
}
