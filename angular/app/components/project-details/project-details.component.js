class ProjectDetailsController{
    constructor($state){
        'ngInject';

        //
        this.$state = $state;
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
