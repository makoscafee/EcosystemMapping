export class SidemenuDataService{
    constructor(API,$log){
        'ngInject';

        //
        this.API = API;
        this.$log = $log;
    }

    roles(){
    return  this.API.all('roles').get('');
    }
    sectors(){
      return this.API.all('sectors').get('');
    }
}
