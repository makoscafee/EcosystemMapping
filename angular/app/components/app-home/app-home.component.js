class AppHomeController{
    constructor($state, $log, EcosystemService, MapDataService){
        'ngInject';

        this.$state = $state;
        this.$log = $log;
        this.EcosystemService = EcosystemService;
        this.MapDataService = MapDataService;
        this.ecosystemId =this.$state.params.id;
        this.organizationData = null;


        //
    }

    $onInit(){
      this.MapDataService.initialData(this.ecosystemId);
    }
}

export const AppHomeComponent = {
    templateUrl: './views/app/components/app-home/app-home.component.html',
    controller: AppHomeController,
    controllerAs: 'vm',
    bindings: {}
}
