class HomeViewController{
    constructor(EcosystemFilterService,$log){
        'ngInject';

        //
        this.EcosystemFilterService = EcosystemFilterService;
        this.$log = $log;

    }

    $onInit(){
    }
}

export const HomeViewComponent = {
    templateUrl: './views/app/components/home-view/home-view.component.html',
    controller: HomeViewController,
    controllerAs: 'vm',
    bindings: {}
}
