export class EcosystemFilterService{
    constructor(API,$log){
        'ngInject';

        //
        this.API = API;
        this.$log = $log;
    }
    role(roleId){
      return this.API.one('roles',roleId).one('organizations').get('');
    }
}
