export class DataService{
    constructor(){
        'ngInject';

        //
        this.selectedEcosystem = null;
    }
    //gets the selected ecosystem
  setSelectedEcosystem(ecosystem){
    this.selectedEcosystem = ecosystem;
  }

    //returns selected Ecosystem
  getSelectedEcosystem(){
    return this.selectedEcosystem;
  }
}
