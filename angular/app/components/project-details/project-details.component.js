class ProjectDetailsController{
    constructor($state,DataService){
        'ngInject';

        //
        this.$state = $state;
        this.DataService = DataService;

        this.mapProject = this.DataService.getProjFromMarkers();
    }


    back(){
      this.$state.go('app.home.projects.all');
    }

    $onInit(){
    }
}

export const ProjectDetailsComponent = {
    templateUrl: './views/app/components/project-details/project-details.component.html',
    controller: ProjectDetailsController,
    controllerAs: 'vm',
    bindings: {}
}
