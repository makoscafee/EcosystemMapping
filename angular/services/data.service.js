export class DataService{
    constructor(){
        'ngInject';

        this.eventFromMarker={};
        this.ecosystem = {};
        this.orgFromMarker={};
        this.projFromMarker={};
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
  setEvent(info){
    this.eventSet = info
  }
  setEventFromMarker(evtMarker){
    this.eventFromMarker=evtMarker;
  }
  getEventFromMarkers(){
    return this.eventFromMarker;
  }

  setOrgFromMarker(orgMarker){
    this.orgFromMarker=orgMarker;
  }
  getOrgFromMarkers(){
    return this.orgFromMarker;
  }

  setProjFromMarker(projMarker){
    this.projFromMarker=projMarker;
  }
  getProjFromMarkers(){
    return this.projFromMarker;
  }
  setEcosystem(selectedEcosystem){
    this.ecosystem = selectedEcosystem;
  }

  getEcosystem(){
    return this.ecosystem;
  }

}
