class SelectEcosystemController{
    constructor($log,EcosystemService,API){
        'ngInject';

        //
        this.EcosystemService = EcosystemService;
        this.$log = $log;
        this.API =  API;
        $log.log("Hey am gud!");
        //the logics

          //to be removed
        this.API.all('ecosystem_parents').get('')
           .then((response) => {
                this.ecosystemData = response.data;
                this.$log.log(this.ecosystemData);
           });

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
