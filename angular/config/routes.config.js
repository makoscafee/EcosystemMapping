export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) => {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    };

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            data: {}, //{auth: true} would require JWT auth
            views: {
                header: {
                    templateUrl: getView('header')
                },
                footer: {
                    templateUrl: getView('footer')
                },
                main: {}
            }
        })
        .state('app.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.home', {
            url: '/home/:id',
            views: {
                'main@': {
                    templateUrl: getView('home')
                }
            }
        })
        .state('app.home.pins', {
            url: '/pins',
            views: {
                'side': {
                    templateUrl: getView('organisation-view')
                }
            }
        })
        .state('app.home.pins.all', {
            url: '/all',
            views: {
                'organisation': {
                    templateUrl: getView('pins')
                }
            }
        })
        .state('app.home.pins.details', {
            url: '/details',
            views: {
                'organisation': {
                    templateUrl: getView('organisation-d')
                }
            }
        })
        .state('app.home.events', {
            url: '/events',
            views: {
                'side': {
                    templateUrl: getView('event-view')
                }
            }
        })
        .state('app.home.events.all', {
            url: '/all',
            views: {
                'details': {
                    templateUrl: getView('events')
                }
            }
        })
        .state('app.home.events.details', {
            url: '/details/:eventId',
            views: {
                'details': {
                    templateUrl: getView('details')
                }
            }
        })
        .state('app.home.projects', {
            url: '/projects',
            views: {
                'side': {
                    templateUrl: getView('project-view')
                }
            }
        })
        .state('app.home.projects.all', {
            url: '/all',
            views: {
                'projects': {
                    templateUrl: getView('projects')
                }
            }
        })
        .state('app.home.projects.details', {
            url: '/details/:projectId',
            views: {
                'projects': {
                    templateUrl: getView('project-d')
                }
            }
        })
        .state('app.create', {
          url: '/create',
          views: {
            'main@': {
              templateUrl: getView('create')
            }
          }
        })
        .state('app.create.organisation', {
          url: '/organisation',
          views: {
            'create': {
              abstract: true,
              templateUrl: getView('createOrganisation')
            }
          }
        })
        .state('app.create.event', {
          url: '/event',
          views: {
            'create': {
              templateUrl: getView('create-event')
            }
          }
        })
        .state('app.create.project', {
          url: '/project',
          views: {
            'create': {
              templateUrl: getView('create-project')
            }
          }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        });
}
