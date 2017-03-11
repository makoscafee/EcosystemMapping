export class ProjectsService{
    constructor($log,API){
        'ngInject';

        //Initializing services
        this.$log = $log;
        this.API = API;
    }

    // creates a new project
    createProject(data){
        return this.API.all('projects').post(data);
    }

    // attaches an project to an organisation
    attachProject(organisationId,eventId){

        let DataAPI = this.API.one('organizations',organisationId);
        return DataAPI.all('attach-projects').post(eventId);
    }
}

