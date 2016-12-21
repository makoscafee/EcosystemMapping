class ProjectMsgController{
    constructor($scope,$state,$log,DataService){
        'ngInject';

        //
        this.$scope = $scope;
        this.$state = $state;
        this.DataService = DataService
        this.$log = $log;
        this.myMarkerData = this.$scope.$parent.data;
        this.DataService.setProjFromMarker(this.myMarkerData);


    }


    projectDetails(){

        this.$state.go('app.home.projects.details',{projectId:this.myMarkerData.id});
    }

    $onInit(){
    }
}

export const ProjectMsgComponent = {
    templateUrl: './views/app/components/project-msg/project-msg.component.html',
    controller: ProjectMsgController,
    controllerAs: 'vm',
    bindings: {}
}
