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
        //defer iframe loading
        let url = 'https://ghbtns.com/github-btn.html?user=jadjoubran&repo=laravel5-angular-material-starter&type=star&count=true&size=large';
        this.githubWidget = this.$sce.trustAsResourceUrl(url);
    }

}

export const AppHeaderComponent = {
    templateUrl: './views/app/components/app-header/app-header.component.html',
    controller: AppHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
