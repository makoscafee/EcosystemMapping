class LeftMenuController{
    constructor($mdSidenav){
        'ngInject';

        //
        this.$mdSidenav = $mdSidenav;
    }

      openLeftMenu() {
               this.$mdSidenav('left').toggle();
             };

    $onInit(){
    }
}

export const LeftMenuComponent = {
    templateUrl: './views/app/components/left-menu/left-menu.component.html',
    controller: LeftMenuController,
    controllerAs: 'vm',
    bindings: {}
}
