export class MapDataService{
    constructor(SidemenuDataService,$log,$localStorage){
        'ngInject';

        //
        this.SidemenuDataService = SidemenuDataService;
        this.$localStorage = $localStorage;
        this.$log = $log;


    }
      // displaying all the events
    createEventMarkers(holdEvents){

      var markers = [];
      var evts = [];
      var eventMarkers = {markers:[],events:[]}

        //creating location information
        angular.forEach(holdEvents, (response)=> {

          if(response.events.data.length > 0){
            angular.forEach(response.events,(events)=>{
              angular.forEach(events,(event)=>{
                evts.push(event);
              })
            });

            angular.forEach(response.locations, (locations)=>{
              angular.forEach(locations, (location)=> {
                var marker = {
                  lat: parseFloat(location.lat),
                  lng: parseFloat(location.long),
                 icon: 'fa-star',
                  message:'Iam an event'

                }
                markers.push(marker);
              })
            })
          }
          else {
                this.$log.log("no events");
          }

        });

              eventMarkers.markers = markers;
              eventMarkers.events = evts;
              return eventMarkers;
    }



        //create markers
    createMarkers(data){
      let markers = [];
      //creating location information
      angular.forEach(data, (response)=> {
        this.$log.log(response);
        angular.forEach(response.locations, (locations)=>{
          angular.forEach(locations, (location)=> {
            var marker = {
              lat: parseFloat(location.lat),
              lng: parseFloat(location.long),
              message:'Iam an Organisation'
            }
            markers.push(marker);
          })
        })
      });


            return markers;
    }

      //creating markers for Projects
      createProjectMarkers(holdEvents){

              var markers = [];
              var evts = [];
              var eventMarkers = {markers:[],events:[]}

                //creating location information
                angular.forEach(holdEvents, (response)=> {

                  if(response.projects.data.length > 0){
                    angular.forEach(response.projects,(events)=>{
                      angular.forEach(events,(event)=>{
                        evts.push(event);
                      })
                    });

                    angular.forEach(response.locations, (locations)=>{
                      angular.forEach(locations, (location)=> {
                        var marker = {
                          lat: parseFloat(location.lat),
                          lng: parseFloat(location.long),
                          message:'Iam a project'
                        }
                        markers.push(marker);
                      })
                    })
                  }
                  else {
                        this.$log.log("no events");
                  }

                });

                      eventMarkers.markers = markers;
                      eventMarkers.events = evts;
                      return eventMarkers;
        }

    checkedOrganisations(){
      return this.createMarkers(this.SidemenuDataService.getMapData());
    }
}
