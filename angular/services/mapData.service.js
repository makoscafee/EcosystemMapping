export class MapDataService{
    constructor(SidemenuDataService,$log,$localStorage,$compile){
        'ngInject';

        //
        this.SidemenuDataService = SidemenuDataService;
        this.$localStorage = $localStorage;
        this.$compile = $compile;
        this.$log = $log;


        this.markerIcons ={
          startup:{
            iconUrl: 'img/icons/startup.png',
             iconSize:     [25, 41]
          },
          coworkingSpaces:{
            iconUrl: 'img/icons/coworking.png',
             iconSize:     [25, 41]
          },
          fundingAgencies:{
            iconUrl: 'img/icons/investor.png',
             iconSize:     [25, 41]
          },
          randD:{
            iconUrl: 'img/icons/incubator.png',
             iconSize:     [25, 41]
          },
          event:{
            iconUrl: 'img/icons/event.png',
             iconSize:     [25, 41]
          },
          project:{
            iconUrl: 'img/icons/accelerator.png',
             iconSize:     [25, 41]
          }
        };


    }
      // displaying all the events
    createEventMarkers(holdEvents){
      var markers = [];
      var evts = [];
      var eventMarkers = {markers:[],events:[]}

      var divTemplate = '<div><h1>Events name</h1><p>Events description</p><a ng-click="click()">click me</a></div>';

        //creating location information
        angular.forEach(holdEvents, (response)=> {
          if(response.events.data.length > 0){
            angular.forEach(response.events,(events)=>{
              angular.forEach(events,(event)=>{
                evts.push(event);

                  //creating markers
                angular.forEach(response.locations, (locations)=>{
                  angular.forEach(locations, (location)=> {
                    var marker = {
                      lat: parseFloat(location.lat),
                      lng: parseFloat(location.long),
                      getMessageScope: function(){ return this},
                      message:divTemplate,
                      icon: {}

                    }
                    marker.icon = this.markerIcons.event;
                    markers.push(marker);
                  })
                })


              })
            });


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
      let role = {};
      //creating location information
      angular.forEach(data, (response)=> {
        angular.forEach(response.locations, (locations)=>{
          angular.forEach(locations, (location)=> {
            var marker = {
              lat: parseFloat(location.lat),
              lng: parseFloat(location.long),
              message:'Iam an Organisation',
                  icon: {}
                }
                try{
                  let roleName = response.roles.data[0].name;
                  if(roleName == "R&D"){
                      marker.icon = this.markerIcons.randD;
                      markers.push(marker);
                  }
                  else if (roleName == "Funding Agencies" ) {
                    marker.icon = this.markerIcons.fundingAgencies;
                    markers.push(marker);
                  }
                  else if (roleName == "Startup") {
                    marker.icon = this.markerIcons.startup;
                    markers.push(marker);
                  }
                  else if (roleName == "Coworking Space") {
                    marker.icon = this.markerIcons.coworkingSpaces;
                    markers.push(marker);
                  }
                  else {
                    this.$log.log("no such a role");
                  }


                }
                catch(e){
                  this.$log.log("no role info in this org");
                }

          })
        })
      });


            return markers;
    }


    click(){
      this.$log.log("click function works");
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
                          message:'Iam a project',
                          icon:{}
                        }
                        marker.icon = this.markerIcons.project;
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
