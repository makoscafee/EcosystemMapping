export class DataService{
    constructor(){
        'ngInject';

        
        this.selectedEcosystem = null;
        this.markerIconsUrl ={
          startup:{
            iconUrl: 'img/icons/startup.png'
          },
          coworkingSpaces:{
            iconUrl: 'img/icons/coworking.png'
          },
          fundingAgencies:{
            iconUrl: 'img/icons/investor.png'
          },
          randD:{
            iconUrl: 'img/icons/incubator.png'
          }
        };
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
