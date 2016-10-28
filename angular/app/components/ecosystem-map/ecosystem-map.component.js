


class EcosystemMapController {
    constructor(SidemenuDataService,EcosystemService,$log) {
        'ngInject';

        this.SidemenuDataService = SidemenuDataService;
        this.EcosystemService = EcosystemService;
        this.$log = $log;

                this.darEsSalaam={
                    lat: -6.792287,
                    lng: 39.2376063,
                    zoom: 12
                }



                //getting all Organisations in ecosystems
                this.EcosystemService.getOrganisation(4).then((response)=>{
                  var objB =[];
                  var objA = response.data.data;
                  angular.forEach(objA,function(value,key){
                  objB.push(_.pick(objA,['car', 'age']));
                  });

                  // {"car": "suzuki", "age": 17}
                  this.$log.log(objB);

                });





    }





    $onInit() {

    }
}

export const EcosystemMapComponent = {
    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
    controller: EcosystemMapController,
    controllerAs: 'vm',
    bindings: {}
}
