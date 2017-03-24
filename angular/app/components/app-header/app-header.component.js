class AppHeaderController{
    constructor($sce,ToastService,OrganizationService,EcosystemService){
        'ngInject';

        this.$sce = $sce;
        this.ToastService = ToastService;
        this.OrganizationService = OrganizationService;
        this.EcosystemService = EcosystemService;

    }

    clickMe(){
        this.EcosystemService.getOne(2);
    }

    $onInit(){
      
    }

}

export const AppHeaderComponent = {
    templateUrl: './views/app/components/app-header/app-header.component.html',
    controller: AppHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
