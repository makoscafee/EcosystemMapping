class CreateProjectController {
    constructor(ProjectsService, $log, OrganizationService, $localStorage, $state, EcosystemService, $rootScope, $q, $timeout) {
        'ngInject';

        // Initializing services
        this.organisationService = OrganizationService;
        this.ecosystemService = EcosystemService;
        this.projectService = ProjectsService;
        this.$localStorage = $localStorage;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$log = $log;
        this.$q = $q;
        this.$timeout = $timeout;

        // list of `state` value/display objects
        this.states = this.allOrganisations;
        this.selectedItem = null;
        this.searchText = null;
    }
    // adds an event to the database
    addProject() {
        let data = this.makeProject;
        let modifiedProject = {
            name: this.makeProject.project.name,
            description: this.makeProject.project.description,
            start_date: this.makeProject.project.start_date.toJSON,
            end_date: this.makeProject.project.end_date.toJSON

        };
        this.$log.log("lets see data");
        this.$log.log(modifiedProject);

        this.projectService.createProject(modifiedProject).then((response) => {
            /*this.$rootScope.$emit('stop', 'stop change of state');*/
            this.attachId = {
                project_id: response.data.id
            };
            this.projectId = response.data.id;
            this.$log.log(response.data);
            this.$log.log("a project was created successfully");
            this.projectService.attachProject(data.organisationId, this.attachId).then(() => {
                this.$log.log("project attached successfully");

                this.ecosystemService.getOrganisation(this.$localStorage.ecosystem.id).then((response) => {
                    this.$localStorage.organisations = response.data;
                    /*this.$state.go('app.home.projects.all',{id:this.$localStorage.ecosystem.id},{reload:true});*/
                    this.$rootScope.$emit('stop', 'stop change of state');
                });
            });

        });
    }

    // display organisations
    displayOrganisations() {
        this.organisationService.getByEcosystem(this.$localStorage.ecosystem.id).then((response) => {
            this.allOrganisations = response.data.data;
            this.$log.log("organisations retrived successfully");
        });

    }

    querySearch(query) {
        let results = query
            ? this.states.filter(createFilterFor(query))
            : this.states;
        let deferred = this.$q.defer();
        this.$timeout(() => {
            deferred.resolve(results);
        }, Math.random() * 1000, false);
        return deferred.promise;
    }

    /**
    * Create filter function for a query string
    */
    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function(state) => {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }

    $onInit() {
        this.displayOrganisations();

    }
}

export const CreateProjectComponent = {
    templateUrl: './views/app/components/create-project/create-project.component.html',
    controller: CreateProjectController,
    controllerAs: 'vm',
    bindings: {}
}
