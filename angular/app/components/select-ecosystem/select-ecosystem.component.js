class SelectEcosystemController{
    constructor($log,EcosystemService,API,$state){
        'ngInject';

        //Initilizing global variables
        this.EcosystemService = EcosystemService;
        this.$log = $log;
        this.API =  API;
        this.$state = $state;


          //getting ecosystems
           this.EcosystemService.getAll().then((response)=>{
             this.ecosystemData = response.data;
           });
    } //end the constructor

      //getting organisations of a given ecosystem and
      //changing the state to home state
    home(ecosystemId){
      this.EcosystemService.getOrganisation(ecosystemId).then((response)=>{
        this.organisationData = response.data;
      });
      this.$state.go('app.home');

    }



    $onInit(){
    }
}

export const SelectEcosystemComponent = {
    templateUrl: './views/app/components/select-ecosystem/select-ecosystem.component.html',
    controller: SelectEcosystemController,
    controllerAs: 'vm',
    bindings: {}
}
