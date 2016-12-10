class ProjectMsgController{
    constructor($scope,$state,$log){
        'ngInject';

        //
        this.$scope = $scope;
        this.$state = $state;
        this.$log = $log;
        this.myMarkerData = this.$scope.$parent.data;


    }


    projectDetails(){

        this.$state.go('app.home.projects.details');
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
