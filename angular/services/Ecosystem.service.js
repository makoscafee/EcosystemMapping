export class EcosystemService{
    constructor(API,$log){
        'ngInject';

        //getting all Ecosystems
        this.API = API;
        this.$log = $log;

    }


      //getting all ecosystems
    getAll(){
      this.API.all('ecosystem_parents').get('')
         .then((response) => {
               this.ecosystemData = response.data;
               this.$log.log(this.ecosystemData);

         });
    }

      //getting one ecosystem
    getOne(id){
        this.API.one('ecosystem_parents',id).get('')
        .then((response)=>{
          this.ecosystemOne = response.data;
          this.$log.log('this is just one ecosystem');
          this.$log.log(this.ecosystemOne);
        });
    }

    getOrganisation(){

    }

    create(data){
      this.API.all('ecosystem_parents').post(data).
      then((response)=> {
        this.$log.log(response);
      });
    }



}
