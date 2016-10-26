class AppHomeController{
    constructor($state, $log, EcosystemService){
        'ngInject';

        this.$state = $state;
        this.$log = $log;
        this.EcosystemService = EcosystemService;
        this.ecosystemId =this.$state.params.ecosystemId;
        this.organisationData = null;


        //
    }

    $onInit(){
      if (this.ecosystemId) {
        this.EcosystemService.getOrganisation(this.ecosystemId).then((response) => {
            this.organisationData = response.data.data;
            this.$log.log(this.organisationData)
        });
      }
    }
}

export const AppHomeComponent = {
    templateUrl: './views/app/components/app-home/app-home.component.html',
    controller: AppHomeController,
    controllerAs: 'vm',
    bindings: {}
}
