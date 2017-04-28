/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(4);

	__webpack_require__(9);

	__webpack_require__(16);

	__webpack_require__(39);

	__webpack_require__(40);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app', ['app.run', 'app.filters', 'app.services', 'app.components', 'app.directives', 'app.routes', 'app.config', 'app.partials']);

	angular.module('app.run', []);
	angular.module('app.routes', []);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.config', []);
	angular.module('app.directives', []);
	angular.module('app.components', ['ui.router', 'ngMaterial', 'angular-loading-bar', 'restangular', 'ngStorage', 'satellizer', 'leaflet-directive', 'ngStorage', 'ngMaterialDatePicker']);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(3);

	angular.module('app.run').run(_routes.RoutesRun);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	RoutesRun.$inject = ["$state", "$transitions"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesRun = RoutesRun;
	function RoutesRun($state, $transitions) {
	    'ngInject';

	    var requiresAuthCriteria = {
	        to: function to($state) {
	            return $state.data && $state.data.auth;
	        }
	    };

	    var redirectToLogin = function redirectToLogin($auth) {
	        'ngInject';

	        if (!$auth.isAuthenticated()) {
	            return $state.target('app.login', undefined, { location: false });
	        }
	    };
	    redirectToLogin.$inject = ["$auth"];

	    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(5);

	var _loading_bar = __webpack_require__(6);

	var _theme = __webpack_require__(7);

	var _satellizer = __webpack_require__(8);

	angular.module('app.config').config(_routes.RoutesConfig).config(_loading_bar.LoadingBarConfig).config(_theme.ThemeConfig).config(_satellizer.SatellizerConfig);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    var getView = function getView(viewName) {
	        return './views/app/pages/' + viewName + '/' + viewName + '.page.html';
	    };

	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('app', {
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
	    }).state('app.landing', {
	        url: '/',
	        views: {
	            'main@': {
	                templateUrl: getView('landing')
	            }
	        }
	    }).state('app.home', {
	        url: '/home/:id',
	        views: {
	            'main@': {
	                templateUrl: getView('home')
	            }
	        }
	    }).state('app.home.pins', {
	        url: '/pins',
	        views: {
	            'side': {
	                templateUrl: getView('organisation-view')
	            }
	        }
	    }).state('app.home.pins.all', {
	        url: '/all',
	        views: {
	            'organisation': {
	                templateUrl: getView('pins')
	            }
	        }
	    }).state('app.home.pins.details', {
	        url: '/details',
	        views: {
	            'organisation': {
	                templateUrl: getView('organisation-d')
	            }
	        }
	    }).state('app.home.events', {
	        url: '/events',
	        views: {
	            'side': {
	                templateUrl: getView('event-view')
	            }
	        }
	    }).state('app.home.events.all', {
	        url: '/all',
	        views: {
	            'details': {
	                templateUrl: getView('events')
	            }
	        }
	    }).state('app.home.events.details', {
	        url: '/details/:eventId',
	        views: {
	            'details': {
	                templateUrl: getView('details')
	            }
	        }
	    }).state('app.home.projects', {
	        url: '/projects',
	        views: {
	            'side': {
	                templateUrl: getView('project-view')
	            }
	        }
	    }).state('app.home.projects.all', {
	        url: '/all',
	        views: {
	            'projects': {
	                templateUrl: getView('projects')
	            }
	        }
	    }).state('app.home.projects.details', {
	        url: '/details/:projectId',
	        views: {
	            'projects': {
	                templateUrl: getView('project-d')
	            }
	        }
	    }).state('app.home.create', {
	        url: '/create',
	        views: {
	            'side': {
	                templateUrl: getView('create')
	            }
	        }
	    }).state('app.get-location', {
	        url: '/get-location',
	        views: {
	            'main@': {
	                templateUrl: getView('create')
	            }
	        }
	    }).state('app.home.create.organisation', {
	        url: '/organisation',
	        views: {
	            'create': {
	                abstract: true,
	                templateUrl: getView('createOrganisation')
	            }
	        }
	    }).state('app.home.create.event', {
	        url: '/event',
	        views: {
	            'create': {
	                templateUrl: getView('create-event')
	            }
	        }
	    }).state('app.home.create.project', {
	        url: '/project',
	        views: {
	            'create': {
	                templateUrl: getView('create-project')
	            }
	        }
	    }).state('app.login', {
	        url: '/login',
	        views: {
	            'main@': {
	                templateUrl: getView('login')
	            }
	        }
	    }).state('app.register', {
	        url: '/register',
	        views: {
	            'main@': {
	                templateUrl: getView('register')
	            }
	        }
	    }).state('app.forgot_password', {
	        url: '/forgot-password',
	        views: {
	            'main@': {
	                templateUrl: getView('forgot-password')
	            }
	        }
	    }).state('app.reset_password', {
	        url: '/reset-password/:email/:token',
	        views: {
	            'main@': {
	                templateUrl: getView('reset-password')
	            }
	        }
	    });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	LoadingBarConfig.$inject = ["cfpLoadingBarProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadingBarConfig = LoadingBarConfig;
	function LoadingBarConfig(cfpLoadingBarProvider) {
		'ngInject';

		cfpLoadingBarProvider.includeSpinner = true;
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	ThemeConfig.$inject = ["$mdThemingProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ThemeConfig = ThemeConfig;
	function ThemeConfig($mdThemingProvider) {
		'ngInject';
		/* For more info, visit https://material.angularjs.org/#/Theming/01_introduction */

		$mdThemingProvider.theme('default').primaryPalette('light-blue', {
			default: '600'
		}).accentPalette('grey').warnPalette('red');

		$mdThemingProvider.theme('warn');
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	SatellizerConfig.$inject = ["$authProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SatellizerConfig = SatellizerConfig;
	function SatellizerConfig($authProvider) {
		'ngInject';

		$authProvider.httpInterceptor = function () {
			return true;
		};

		$authProvider.loginUrl = '/api/auth/login';
		$authProvider.signupUrl = '/api/auth/register';
		$authProvider.tokenRoot = 'data'; //compensates success response macro
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _capitalize = __webpack_require__(10);

	var _human_readable = __webpack_require__(11);

	var _truncate_characters = __webpack_require__(12);

	var _truncate_words = __webpack_require__(13);

	var _trust_html = __webpack_require__(14);

	var _ucfirst = __webpack_require__(15);

	angular.module('app.filters').filter('capitalize', _capitalize.CapitalizeFilter).filter('humanReadable', _human_readable.HumanReadableFilter).filter('truncateCharacters', _truncate_characters.TruncatCharactersFilter).filter('truncateWords', _truncate_words.TruncateWordsFilter).filter('trustHtml', _trust_html.TrustHtmlFilter).filter('ucfirst', _ucfirst.UcFirstFilter);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CapitalizeFilter = CapitalizeFilter;
	function CapitalizeFilter() {
		return function (input) {
			return input ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}) : '';
		};
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HumanReadableFilter = HumanReadableFilter;
	function HumanReadableFilter() {
		return function humanize(str) {
			if (!str) {
				return '';
			}
			var frags = str.split('_');
			for (var i = 0; i < frags.length; i++) {
				frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
			}
			return frags.join(' ');
		};
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncatCharactersFilter = TruncatCharactersFilter;
	function TruncatCharactersFilter() {
		return function (input, chars, breakOnWord) {
			if (isNaN(chars)) {
				return input;
			}
			if (chars <= 0) {
				return '';
			}
			if (input && input.length > chars) {
				input = input.substring(0, chars);

				if (!breakOnWord) {
					var lastspace = input.lastIndexOf(' ');
					// Get last space
					if (lastspace !== -1) {
						input = input.substr(0, lastspace);
					}
				} else {
					while (input.charAt(input.length - 1) === ' ') {
						input = input.substr(0, input.length - 1);
					}
				}
				return input + '...';
			}
			return input;
		};
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TruncateWordsFilter = TruncateWordsFilter;
	function TruncateWordsFilter() {
		return function (input, words) {
			if (isNaN(words)) {
				return input;
			}
			if (words <= 0) {
				return '';
			}
			if (input) {
				var inputWords = input.split(/\s+/);
				if (inputWords.length > words) {
					input = inputWords.slice(0, words).join(' ') + '...';
				}
			}
			return input;
		};
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TrustHtmlFilter = TrustHtmlFilter;
	function TrustHtmlFilter($sce) {
		return function (html) {
			return $sce.trustAsHtml(html);
		};
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.UcFirstFilter = UcFirstFilter;
	function UcFirstFilter() {
		return function (input) {
			if (!input) {
				return null;
			}
			return input.substring(0, 1).toUpperCase() + input.substring(1);
		};
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _getLocation = __webpack_require__(17);

	var _createProject = __webpack_require__(18);

	var _createEvent = __webpack_require__(19);

	var _organisationDetails = __webpack_require__(20);

	var _organisationMsg = __webpack_require__(21);

	var _projectDetails = __webpack_require__(22);

	var _projectMsg = __webpack_require__(23);

	var _messageDetails = __webpack_require__(24);

	var _message = __webpack_require__(25);

	var _createOrganisation = __webpack_require__(26);

	var _homeView = __webpack_require__(27);

	var _ecosystemMap = __webpack_require__(28);

	var _searchAutocomplete = __webpack_require__(29);

	var _leftMenu = __webpack_require__(30);

	var _selectEcosystem = __webpack_require__(31);

	var _appHeader = __webpack_require__(32);

	var _appView = __webpack_require__(33);

	var _appShell = __webpack_require__(34);

	var _resetPassword = __webpack_require__(35);

	var _forgotPassword = __webpack_require__(36);

	var _loginForm = __webpack_require__(37);

	var _registerForm = __webpack_require__(38);

	angular.module('app.components').component('getLocation', _getLocation.GetLocationComponent).component('createProject', _createProject.CreateProjectComponent).component('createEvent', _createEvent.CreateEventComponent).component('organisationDetails', _organisationDetails.OrganisationDetailsComponent).component('organisationMsg', _organisationMsg.OrganisationMsgComponent).component('projectDetails', _projectDetails.ProjectDetailsComponent).component('projectMsg', _projectMsg.ProjectMsgComponent).component('messageDetails', _messageDetails.MessageDetailsComponent).component('message', _message.MessageComponent).component('createOrganisation', _createOrganisation.CreateOrganisationComponent).component('homeView', _homeView.HomeViewComponent).component('ecosystemMap', _ecosystemMap.EcosystemMapComponent).component('searchAutocomplete', _searchAutocomplete.SearchAutocompleteComponent).component('leftMenu', _leftMenu.LeftMenuComponent).component('selectEcosystem', _selectEcosystem.SelectEcosystemComponent).component('appHeader', _appHeader.AppHeaderComponent).component('appView', _appView.AppViewComponent).component('appShell', _appShell.AppShellComponent).component('resetPassword', _resetPassword.ResetPasswordComponent).component('forgotPassword', _forgotPassword.ForgotPasswordComponent).component('loginForm', _loginForm.LoginFormComponent).component('registerForm', _registerForm.RegisterFormComponent);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GetLocationController = function () {
	    GetLocationController.$inject = ["$scope", "$localStorage", "$log", "DataService", "$rootScope"];
	    function GetLocationController($scope, $localStorage, $log, DataService, $rootScope) {
	        'ngInject';

	        //


	        _classCallCheck(this, GetLocationController);

	        this.$scope = $scope;
	        this.$log = $log;
	        this.$localStorage = $localStorage;
	        this.$scope.DataService = DataService;
	        this.$rootScope = $rootScope;

	        this.darEsSalaam = {
	            lat: -6.1630,
	            lng: 35.7516,
	            zoom: 6
	        };

	        this.events = {
	            events: {
	                map: {
	                    enable: ['click', 'drag', 'blur', 'touchstart'],

	                    logic: 'emit'
	                }
	            }
	        };
	    }

	    _createClass(GetLocationController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return GetLocationController;
	}();

	var GetLocationComponent = exports.GetLocationComponent = {
	    templateUrl: './views/app/components/get-location/get-location.component.html',
	    controller: GetLocationController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateProjectController = function () {
	    CreateProjectController.$inject = ["ProjectsService", "$log", "OrganizationService", "$localStorage", "$state", "EcosystemService", "$rootScope", "$q", "$timeout"];
	    function CreateProjectController(ProjectsService, $log, OrganizationService, $localStorage, $state, EcosystemService, $rootScope, $q, $timeout) {
	        'ngInject';

	        // Initializing services

	        _classCallCheck(this, CreateProjectController);

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


	    _createClass(CreateProjectController, [{
	        key: "addProject",
	        value: function addProject() {
	            var _this = this;

	            var data = this.makeProject;
	            var selectedOrg = this.selectedItem;
	            var modifiedProject = {
	                name: this.makeProject.project.name,
	                description: this.makeProject.project.description,
	                start_date: this.makeProject.project.start_date.toJSON,
	                end_date: this.makeProject.project.end_date.toJSON

	            };
	            this.$log.log("lets see data");
	            this.$log.log(modifiedProject);

	            this.projectService.createProject(modifiedProject).then(function (response) {
	                /*this.$rootScope.$emit('stop', 'stop change of state');*/
	                _this.attachId = {
	                    project_id: response.data.id
	                };
	                _this.projectId = response.data.id;
	                _this.$log.log(response.data);
	                _this.$log.log("a project was created successfully");
	                _this.projectService.attachProject(selectedOrg.id, _this.attachId).then(function () {
	                    _this.$log.log("project attached successfully");

	                    _this.ecosystemService.getOrganisation(_this.$localStorage.ecosystem.id).then(function (response) {
	                        _this.$localStorage.organisations = response.data;
	                        /*this.$state.go('app.home.projects.all',{id:this.$localStorage.ecosystem.id},{reload:true});*/
	                        _this.$rootScope.$emit('stop', 'stop change of state');
	                    });
	                });
	            });
	        }

	        // display organisations

	    }, {
	        key: "displayOrganisations",
	        value: function displayOrganisations() {
	            var _this2 = this;

	            this.organisationService.getByEcosystem(this.$localStorage.ecosystem.id).then(function (response) {
	                _this2.allOrganisations = response.data.data;
	                _this2.$log.log("organisations retrived successfully");
	            });
	        }
	    }, {
	        key: "querySearch",
	        value: function querySearch(query) {
	            var results = query ? this.allOrganisations.filter(this.createFilterFor(query)) : this.allOrganisations;
	            var deferred = this.$q.defer();
	            this.$timeout(function () {
	                deferred.resolve(results);
	            }, Math.random() * 1000, false);
	            return deferred.promise;
	        }

	        /**
	        * Create filter function for a query string
	        */

	    }, {
	        key: "createFilterFor",
	        value: function createFilterFor(query) {
	            var lowercaseQuery = angular.lowercase(query);

	            return function (state) {
	                var _state_name_lower_case = angular.lowercase(state.name);
	                return _state_name_lower_case.indexOf(lowercaseQuery) === 0;
	            };
	        }
	    }, {
	        key: "selectedItemChange",
	        value: function selectedItemChange(item) {
	            this.selectedItem = item;
	        }
	    }, {
	        key: "$onInit",
	        value: function $onInit() {
	            this.displayOrganisations();
	        }
	    }]);

	    return CreateProjectController;
	}();

	var CreateProjectComponent = exports.CreateProjectComponent = {
	    templateUrl: './views/app/components/create-project/create-project.component.html',
	    controller: CreateProjectController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateEventController = function () {
	    CreateEventController.$inject = ["EventService", "$log", "OrganizationService", "$localStorage", "$state", "EcosystemService", "$rootScope", "$filter", "$timeout", "$q"];
	    function CreateEventController(EventService, $log, OrganizationService, $localStorage, $state, EcosystemService, $rootScope, $filter, $timeout, $q) {
	        'ngInject';

	        // Initializing services

	        _classCallCheck(this, CreateEventController);

	        this.organisationService = OrganizationService;
	        this.ecosystemService = EcosystemService;
	        this.eventService = EventService;
	        this.$localStorage = $localStorage;
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	        this.$log = $log;
	        this.$filter = $filter;
	        this.$q = $q;
	        this.$timeout = $timeout;

	        // list of `state` value/display objects
	        this.states = this.allOrganisations;
	        this.selectedItem = null;
	        this.searchText = null;
	    }

	    // adds an event to the database


	    _createClass(CreateEventController, [{
	        key: "addEvent",
	        value: function addEvent() {
	            var _this = this;

	            var data = this.makeEvent;
	            var selectedOrg = this.selectedItem;
	            var modifiedEvent = {
	                name: this.makeEvent.event.name,
	                description: this.makeEvent.event.description,
	                venue: this.makeEvent.event.venue,
	                free_or_paid: this.makeEvent.event.free_or_paid,
	                start_date: this._filterDate(this.makeEvent.event.start_date),
	                end_date: this._filterDate(this.makeEvent.event.end_date)

	            };
	            this.$log.log(modifiedEvent);

	            this.eventService.createEvent(modifiedEvent).then(function (response) {
	                _this.attachId = {
	                    event_id: response.data.id
	                };
	                _this.eventId = response.data.id;
	                _this.$log.log(response.data);
	                _this.$log.log("an event was created successfully");
	                _this.eventService.attachEvent(selectedOrg.id, _this.attachId).then(function (response) {
	                    _this.$log.log("event attached succefully");

	                    _this.ecosystemService.getOrganisation(_this.$localStorage.ecosystem.id).then(function (response) {
	                        _this.$localStorage.organisations = response.data;
	                        _this.$rootScope.$emit('newEvent', 'stop change of state');
	                    });
	                });
	            });
	        }

	        // adds a new location to the database

	    }, {
	        key: "addLocation",
	        value: function addLocation(data) {
	            return this.organisationService.createLocation(data);
	        }

	        // displays status for event payment

	    }, {
	        key: "displayFreePaid",
	        value: function displayFreePaid() {}

	        // display organisations

	    }, {
	        key: "displayOrganisations",
	        value: function displayOrganisations() {
	            var _this2 = this;

	            this.organisationService.getByEcosystem(this.$localStorage.ecosystem.id).then(function (response) {
	                _this2.allOrganisations = response.data.data;
	                _this2.$log.log("organisations retrived successfully");
	            });
	        }
	    }, {
	        key: "saveChanges",
	        value: function saveChanges() {
	            //console.log(this.dateTime);
	        }
	    }, {
	        key: "_filterDate",
	        value: function _filterDate(dateValue) {
	            var new_date = this.$filter('date')(new Date(dateValue), 'yyyy-MM-dd HH:mm:ss');

	            return new_date;
	        }
	    }, {
	        key: "querySearch",
	        value: function querySearch(query) {
	            var results = query ? this.allOrganisations.filter(this.createFilterFor(query)) : this.allOrganisations;
	            var deferred = this.$q.defer();
	            this.$timeout(function () {
	                deferred.resolve(results);
	            }, Math.random() * 1000, false);
	            return deferred.promise;
	        }

	        /**
	        * Create filter function for a query string
	        */

	    }, {
	        key: "createFilterFor",
	        value: function createFilterFor(query) {
	            var lowercaseQuery = angular.lowercase(query);

	            return function (state) {
	                var _state_name_lower_case = angular.lowercase(state.name);
	                return _state_name_lower_case.indexOf(lowercaseQuery) === 0;
	            };
	        }
	    }, {
	        key: "selectedItemChange",
	        value: function selectedItemChange(item) {
	            this.selectedItem = item;
	        }
	    }, {
	        key: "$onInit",
	        value: function $onInit() {
	            this.displayOrganisations();
	        }
	    }]);

	    return CreateEventController;
	}();

	var CreateEventComponent = exports.CreateEventComponent = {
	    templateUrl: './views/app/components/create-event/create-event.component.html',
	    controller: CreateEventController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OrganisationDetailsController = function () {
	    OrganisationDetailsController.$inject = ["$state", "$scope", "$log", "DataService"];
	    function OrganisationDetailsController($state, $scope, $log, DataService) {
	        'ngInject';

	        //

	        _classCallCheck(this, OrganisationDetailsController);

	        this.$state = $state;
	        this.$scope = $scope;
	        this.DataService = DataService;
	        this.$log = $log;

	        this.menuOrganisation = this.DataService.getOrgFromMarkers();
	        this.$log.log("this is the  organision hello");
	        this.$log.log(this.menuOrganisation);
	    }

	    _createClass(OrganisationDetailsController, [{
	        key: 'back',
	        value: function back() {
	            this.$state.go('app.home.pins.all');
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return OrganisationDetailsController;
	}();

	var OrganisationDetailsComponent = exports.OrganisationDetailsComponent = {
	    templateUrl: './views/app/components/organisation-details/organisation-details.component.html',
	    controller: OrganisationDetailsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OrganisationMsgController = function () {
	    OrganisationMsgController.$inject = ["$scope", "$log", "$state", "DataService"];
	    function OrganisationMsgController($scope, $log, $state, DataService) {
	        'ngInject';

	        //

	        _classCallCheck(this, OrganisationMsgController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.DataService = DataService;
	        this.$log = $log;

	        this.mapOrganisation = this.$scope.$parent.data;
	        this.DataService.setOrgFromMarker(this.mapOrganisation);
	    }

	    _createClass(OrganisationMsgController, [{
	        key: 'viewOrganisation',
	        value: function viewOrganisation() {
	            this.$state.go('app.home.pins.details');
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return OrganisationMsgController;
	}();

	var OrganisationMsgComponent = exports.OrganisationMsgComponent = {
	    templateUrl: './views/app/components/organisation-msg/organisation-msg.component.html',
	    controller: OrganisationMsgController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProjectDetailsController = function () {
	    ProjectDetailsController.$inject = ["$state", "DataService"];
	    function ProjectDetailsController($state, DataService) {
	        'ngInject';

	        //

	        _classCallCheck(this, ProjectDetailsController);

	        this.$state = $state;
	        this.DataService = DataService;

	        this.mapProject = this.DataService.getProjFromMarkers();
	    }

	    _createClass(ProjectDetailsController, [{
	        key: 'back',
	        value: function back() {
	            this.$state.go('app.home.projects.all');
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return ProjectDetailsController;
	}();

	var ProjectDetailsComponent = exports.ProjectDetailsComponent = {
	    templateUrl: './views/app/components/project-details/project-details.component.html',
	    controller: ProjectDetailsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProjectMsgController = function () {
	    ProjectMsgController.$inject = ["$scope", "$state", "$log", "DataService"];
	    function ProjectMsgController($scope, $state, $log, DataService) {
	        'ngInject';

	        //

	        _classCallCheck(this, ProjectMsgController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.DataService = DataService;
	        this.$log = $log;
	        this.myMarkerData = this.$scope.$parent.data;
	        this.DataService.setProjFromMarker(this.myMarkerData);
	    }

	    _createClass(ProjectMsgController, [{
	        key: 'projectDetails',
	        value: function projectDetails() {

	            this.$state.go('app.home.projects.details', { projectId: this.myMarkerData.id });
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return ProjectMsgController;
	}();

	var ProjectMsgComponent = exports.ProjectMsgComponent = {
	    templateUrl: './views/app/components/project-msg/project-msg.component.html',
	    controller: ProjectMsgController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MessageDetailsController = function () {
	    MessageDetailsController.$inject = ["$scope", "$log", "DataService", "$state"];
	    function MessageDetailsController($scope, $log, DataService, $state) {
	        'ngInject';

	        //

	        _classCallCheck(this, MessageDetailsController);

	        this.$scope = $scope;
	        this.$log = $log;
	        this.$state = $state;
	        this.DataService = DataService;
	        this.scopeData = this.DataService.getEventFromMarkers();
	    }

	    _createClass(MessageDetailsController, [{
	        key: 'back',
	        value: function back() {
	            this.$state.go('app.home.events.all');
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return MessageDetailsController;
	}();

	var MessageDetailsComponent = exports.MessageDetailsComponent = {
	    templateUrl: './views/app/components/message-details/message-details.component.html',
	    controller: MessageDetailsController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MessageController = function () {
	    MessageController.$inject = ["$scope", "$log", "$state", "DataService"];
	    function MessageController($scope, $log, $state, DataService) {
	        'ngInject';

	        //

	        _classCallCheck(this, MessageController);

	        this.$scope = $scope;
	        this.$log = $log;
	        this.$state = $state;
	        this.DataService = DataService;
	        this.myMarkerData = this.$scope.$parent.data;
	        this.DataService.setEventFromMarker(this.myMarkerData);
	    }

	    _createClass(MessageController, [{
	        key: 'getClicked',
	        value: function getClicked() {
	            this.$state.go('app.home.events.details', { eventId: this.myMarkerData.id });
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return MessageController;
	}();

	var MessageComponent = exports.MessageComponent = {
	    templateUrl: './views/app/components/message/message.component.html',
	    controller: MessageController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateOrganisationController = function () {
	    CreateOrganisationController.$inject = ["OrganizationService", "EcosystemService", "$log", "$localStorage", "DataService", "$rootScope", "$state", "$location", "ToastService"];
	    function CreateOrganisationController(OrganizationService, EcosystemService, $log, $localStorage, DataService, $rootScope, $state, $location, ToastService) {
	        'ngInject';

	        // Initializing services

	        _classCallCheck(this, CreateOrganisationController);

	        this.organisationService = OrganizationService;
	        this.ecosystemService = EcosystemService;
	        this.$localStorage = $localStorage;
	        this.DataService = DataService;
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	        this.$log = $log;
	        this.ToastService = ToastService;
	        this.isOtherSectorSelected = false;
	        this.selectedSectors = [];

	        var that = this;

	        this.$rootScope.$on('leafletDirectiveMap.click', function (event, args) {
	            var lcn = $location.path();

	            if (lcn == "/home/1/create/organisation") {
	                that.org = {
	                    lat: args.leafletEvent.latlng.lat,
	                    long: args.leafletEvent.latlng.lng
	                };

	                $rootScope.newLocation = {
	                    lat: args.leafletEvent.latlng.lat,
	                    long: args.leafletEvent.latlng.lng
	                };
	            }
	        });
	    }

	    // adds a new organisation


	    _createClass(CreateOrganisationController, [{
	        key: 'addOrganisation',
	        value: function addOrganisation() {
	            var _this = this;

	            if (!confirm) {
	                return;
	            }
	            if (!this.or) {
	                this.ToastService.show("please fill the required fields");
	                return;
	            }

	            if (!this.org) {
	                this.ToastService.show("please click on map to add location");
	                return;
	            }

	            var data = {
	                name: this.or.name,
	                description: this.or.description,
	                tin_number: this.or.tin_number,
	                website: this.or.website,
	                address: this.or.address,
	                lat: this.$rootScope.newLocation.lat,
	                long: this.$rootScope.newLocation.long,
	                date_founded: "1992-04-28 22:21:44",
	                date_registered: "1992-04-28 22:21:44",
	                target_group: this.or.target_group,
	                sector_id: this.selectedSectors,
	                role_id: this.or.role_id,
	                ecosystem_id: 1

	            };

	            if (this.isOtherSectorSelected) {
	                data['sector_description'] = this.otherSectorDescription;
	            }

	            this.organisationService.createOrganisation(data).then(function (res) {
	                _this.ToastService.show('Organisation added successfully');
	                _this.$log.log(res);
	                _this.ecosystemService.getOrganisation(1).then(function (response) {
	                    _this.$localStorage.organisations = response.data;
	                    //this.$log.log(this.$localStorage.organisations);
	                    _this.$state.go('app.home.pins.all', { id: 1 }, { reload: true });
	                });
	            });
	        }
	    }, {
	        key: 'toggleCheckBox',
	        value: function toggleCheckBox(item, list, sectorName) {
	            var idx = list.indexOf(item);
	            if (idx > -1) {
	                list.splice(idx, 1);
	            } else {
	                list.push(item);
	            }

	            if (sectorName == 'Others') {
	                this.isOtherSectorSelected = !this.isOtherSectorSelected;
	            }
	        }
	    }, {
	        key: 'checkIfExists',
	        value: function checkIfExists(item, list, name) {
	            return list.indexOf(item) > -1;
	        }

	        // displays all ecosystems

	    }, {
	        key: 'displayEcosystems',
	        value: function displayEcosystems() {
	            var _this2 = this;

	            this.ecosystemService.getAll().then(function (response) {
	                _this2.allEcosystems = response.data;
	                _this2.$log.log(_this2.allEcosystems);
	                _this2.$log.log("all Ecosystems can be displayed");
	            }, function (error) {
	                _this2.$log.log(error);
	            });
	        }

	        // displays all sectors

	    }, {
	        key: 'displaySectors',
	        value: function displaySectors() {
	            var _this3 = this;

	            this.organisationService.getSectors().then(function (response) {
	                _this3.allSectors = response.data;
	                _this3.$log.log(_this3.allSectors);
	                _this3.$log.log("all Sectors can be displayed");
	            }, function (error) {
	                _this3.$log.log(error);
	            });
	        }

	        // displays all roles

	    }, {
	        key: 'displayRoles',
	        value: function displayRoles() {
	            var _this4 = this;

	            this.organisationService.getRoles().then(function (response) {
	                _this4.allRoles = response.data;
	                _this4.$log.log(_this4.allRoles);
	                _this4.$log.log("all Roles can be displayed");
	            }, function (error) {
	                _this4.$log.log(error);
	            });
	        }

	        // displays all stages

	    }, {
	        key: 'displayStages',
	        value: function displayStages() {
	            var _this5 = this;

	            this.organisationService.getStages().then(function (response) {
	                _this5.allRoles = response.data;
	                _this5.$log.log(_this5.allStages);
	                _this5.$log.log("all Stages can be displayed");
	            }, function (error) {
	                _this5.$log.log(error);
	            });
	        }

	        /* an event fired after creating an organisation*/

	    }, {
	        key: 'createdOrgEvent',
	        value: function createdOrgEvent() {
	            this.$rootScope.$emit('newOrganisation', 'a new organisation');
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {
	            this.displayRoles();
	            this.displaySectors();
	        }
	    }]);

	    return CreateOrganisationController;
	}();

	var CreateOrganisationComponent = exports.CreateOrganisationComponent = {
	    templateUrl: './views/app/components/create-organisation/create-organisation.component.html',
	    controller: CreateOrganisationController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeViewController = function () {
	    HomeViewController.$inject = ["EcosystemFilterService", "$log"];
	    function HomeViewController(EcosystemFilterService, $log) {
	        'ngInject';

	        //

	        _classCallCheck(this, HomeViewController);

	        this.EcosystemFilterService = EcosystemFilterService;
	        this.$log = $log;
	    }

	    _createClass(HomeViewController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return HomeViewController;
	}();

	var HomeViewComponent = exports.HomeViewComponent = {
	    templateUrl: './views/app/components/home-view/home-view.component.html',
	    controller: HomeViewController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EcosystemMapController = function () {
	    EcosystemMapController.$inject = ["SidemenuDataService", "EcosystemService", "$log", "MapDataService", "$localStorage", "$scope", "$rootScope", "$mdDialog", "$timeout", "$state"];
	    function EcosystemMapController(SidemenuDataService, EcosystemService, $log, MapDataService, $localStorage, $scope, $rootScope, $mdDialog, $timeout, $state) {
	        'ngInject';

	        _classCallCheck(this, EcosystemMapController);

	        this.SidemenuDataService = SidemenuDataService;
	        this.EcosystemService = EcosystemService;
	        this.MapDataService = MapDataService;
	        this.$localStorage = $localStorage;
	        this.$mdDialog = $mdDialog;
	        this.$log = $log;
	        this.$scope = $scope;
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	        this.markers = [];
	        this.darEsSalaam = {
	            lat: -6.1630,
	            lng: 35.7516,
	            zoom: 6
	        };
	        this.defaults = {
	            zoomControlPosition: 'bottomright',
	            scrollWheelZoom: false
	        };

	        this.markerIcons = {
	            startup: {
	                iconUrl: 'img/icons/startup.png',
	                iconSize: [25, 41]
	            },
	            coworkingSpaces: {
	                iconUrl: 'img/icons/coworking.png',
	                iconSize: [25, 41]
	            },
	            fundingAgencies: {
	                iconUrl: 'img/icons/investor.png',
	                iconSize: [25, 41]
	            },
	            randD: {
	                iconUrl: 'img/icons/incubator.png',
	                iconSize: [25, 41]
	            },
	            event: {
	                iconUrl: 'img/icons/event.png',
	                iconSize: [25, 41]
	            },
	            project: {
	                iconUrl: 'img/icons/accelerator.png',
	                iconSize: [25, 41]
	            }
	        };

	        this.fab = {
	            topDirections: '',
	            bottomDirections: 'down',
	            isOpen: false,
	            selectedMode: 'md-fling',
	            selectedDirection: 'down',
	            items: [{
	                name: "Add Organization",
	                icon: "img/icons/location.svg",
	                direction: "right"
	            }, {
	                name: "Add Event",
	                icon: "img/icons/event.svg",
	                direction: "top"
	            }, {
	                name: "Add Project",
	                icon: "img/icons/project.svg",
	                direction: "right"
	            }]
	        };

	        this.markers = this.createMarkers(this.$localStorage.organisations.data);
	    }

	    //create markers

	    _createClass(EcosystemMapController, [{
	        key: 'createMarkers',
	        value: function createMarkers(data) {
	            var _this = this;

	            var scope = this.$scope;
	            var markers = [];
	            //let role = {};
	            //creating location information
	            angular.forEach(data, function (response) {
	                angular.forEach(response.locations, function (locations) {
	                    angular.forEach(locations, function (location) {
	                        var marker = {
	                            lat: parseFloat(location.lat),
	                            lng: parseFloat(location.long),
	                            getMessageScope: function getMessageScope() {
	                                var infowindowScope = scope.$new(true);
	                                infowindowScope.data = response;
	                                return infowindowScope;
	                            },
	                            message: '<organisation-msg></organisatio-msg>',
	                            icon: {}
	                        };
	                        try {
	                            var roleName = response.roles.data[0].name;
	                            if (roleName == "R&D") {
	                                marker.icon = _this.markerIcons.randD;
	                                markers.push(marker);
	                            } else if (roleName == "Funding Agencies") {
	                                marker.icon = _this.markerIcons.fundingAgencies;
	                                markers.push(marker);
	                            } else if (roleName == "Startup") {
	                                marker.icon = _this.markerIcons.startup;
	                                markers.push(marker);
	                            } else if (roleName == "Coworking Space") {
	                                marker.icon = _this.markerIcons.coworkingSpaces;
	                                markers.push(marker);
	                            } else {
	                                _this.$log.log("no such a role");
	                            }
	                        } catch (e) {
	                            _this.$log.log("no role info in this org");
	                        }
	                    });
	                });
	            });

	            return markers;
	        }
	    }, {
	        key: 'openCreatePage',
	        value: function openCreatePage($event, item) {

	            var organization_id = this.$localStorage.ecosystem.id;
	            if (item.name == 'Add Organization') {

	                this.$state.go('app.home.create.organisation', { id: organization_id });
	            } else if (item.name == 'Add Event') {

	                this.$state.go('app.home.create.event', { id: organization_id });
	            } else if (item.name == 'Add Project') {

	                this.$state.go('app.home.create.project', { id: organization_id });
	            }
	        }

	        // returns an array of selected org

	    }, {
	        key: 'selectedOrganisations',
	        value: function selectedOrganisations() {
	            this.markers = this.MapDataService.checkedOrganisations();
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return EcosystemMapController;
	}();

	var EcosystemMapComponent = exports.EcosystemMapComponent = {
	    templateUrl: './views/app/components/ecosystem-map/ecosystem-map.component.html',
	    controller: EcosystemMapController,
	    controllerAs: 'vm',
	    bindings: {
	        markers: '<'
	    }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SearchAutocompleteController = function () {
	  SearchAutocompleteController.$inject = ["$timeout", "$q", "$log", "DataService", "EcosystemService", "$state", "$localStorage", "SidemenuDataService"];
	  function SearchAutocompleteController($timeout, $q, $log, DataService, EcosystemService, $state, $localStorage, SidemenuDataService) {
	    'ngInject';

	    //services

	    var _this = this;

	    _classCallCheck(this, SearchAutocompleteController);

	    this.$timeout = $timeout;
	    this.$q = $q;
	    this.$log = $log;
	    this.DataService = DataService;
	    this.EcosystemService = EcosystemService;
	    this.SidemenuDataService = SidemenuDataService;
	    this.$state = $state;
	    this.$localStorage = $localStorage;

	    //global variables
	    this.simulateQuery = false;
	    this.isDisabled = false;
	    this.selectedItem = null;
	    this.markerIconsUrl = {
	      startup: {
	        iconUrl: 'img/icons/startup.png'
	      },
	      developmentOrganization: {
	        iconUrl: 'img/icons/service.png'
	      },
	      coworkingSpaces: {
	        iconUrl: 'img/icons/coworking.png'
	      },
	      incubators: {
	        iconUrl: 'img/icons/incubator.png'
	      },
	      fundingAgencies: {
	        iconUrl: 'img/icons/investor.png'
	      },
	      randD: {
	        iconUrl: 'img/icons/hackerspace.png'
	      }
	    };

	    //getting ecosystems
	    this.EcosystemService.getAll().then(function (response) {
	      _this.states = response.data;
	    });

	    //getting all roles
	    this.SidemenuDataService.roles().then(function (response) {

	      var collectedRoles = [];
	      angular.forEach(response.data, function (roleData) {
	        if (roleData.name == "R&D") {
	          var modifyRoles = { id: null, name: null, description: null, icon: null };
	          modifyRoles.id = roleData.id;
	          modifyRoles.name = roleData.name;
	          modifyRoles.description = roleData.description;
	          modifyRoles.icon = _this.markerIconsUrl.randD.iconUrl;
	          collectedRoles.push(modifyRoles);
	        } else if (roleData.name == "Funding Agencies") {
	          var _modifyRoles = { id: null, name: null, description: null, icon: null };
	          _modifyRoles.id = roleData.id;
	          _modifyRoles.name = roleData.name;
	          _modifyRoles.description = roleData.description;
	          _modifyRoles.icon = _this.markerIconsUrl.fundingAgencies.iconUrl;
	          collectedRoles.push(_modifyRoles);
	        } else if (roleData.name == "Startup") {
	          var _modifyRoles2 = { id: null, name: null, description: null, icon: null };
	          _modifyRoles2.id = roleData.id;
	          _modifyRoles2.name = roleData.name;
	          _modifyRoles2.description = roleData.description;
	          _modifyRoles2.icon = _this.markerIconsUrl.startup.iconUrl;
	          collectedRoles.push(_modifyRoles2);
	        } else if (roleData.name == "Coworking Space") {
	          var _modifyRoles3 = { id: null, name: null, description: null, icon: null };
	          _modifyRoles3.id = roleData.id;
	          _modifyRoles3.name = roleData.name;
	          _modifyRoles3.description = roleData.description;
	          _modifyRoles3.icon = _this.markerIconsUrl.coworkingSpaces.iconUrl;
	          collectedRoles.push(_modifyRoles3);
	        } else if (roleData.name == "Incubators") {
	          var _modifyRoles4 = { id: null, name: null, description: null, icon: null };
	          _modifyRoles4.id = roleData.id;
	          _modifyRoles4.name = roleData.name;
	          _modifyRoles4.description = roleData.description;
	          _modifyRoles4.icon = _this.markerIconsUrl.incubators.iconUrl;
	          collectedRoles.push(_modifyRoles4);
	        } else if (roleData.name == "Development Organization") {
	          var _modifyRoles5 = { id: null, name: null, description: null, icon: null };
	          _modifyRoles5.id = roleData.id;
	          _modifyRoles5.name = roleData.name;
	          _modifyRoles5.description = roleData.description;
	          _modifyRoles5.icon = _this.markerIconsUrl.developmentOrganization.iconUrl;
	          collectedRoles.push(_modifyRoles5);
	        }
	      });
	      _this.$localStorage.roles = collectedRoles;
	      _this.$log.log(_this.$localStorage.roles);
	    });

	    //getting all sectors
	    this.SidemenuDataService.sectors().then(function (response) {
	      _this.$localStorage.sectors = response.data;
	    });
	  }

	  //getting organisations of a given ecosystem and
	  //changing the state to home state


	  _createClass(SearchAutocompleteController, [{
	    key: 'home',
	    value: function home() {
	      var ecosystemId = this.$localStorage.ecosystem;
	      this.$state.go('app.home.pins.all', { id: ecosystemId.id });
	    }
	  }, {
	    key: 'createFilterFor',
	    value: function createFilterFor(query) {
	      var _this2 = this;

	      var lowercaseQuery = angular.lowercase(query);
	      return function (state) {
	        var value = state.name.toLowerCase();
	        _this2.$log.log(value);
	        return value.indexOf(lowercaseQuery) === 0;
	      };
	    }
	  }, {
	    key: 'querySearch',
	    value: function querySearch(query) {
	      var results = query ? this.states.filter(this.createFilterFor(query)) : this.states,
	          deferred = void 0;
	      if (this.simulateQuery) {
	        deferred = this.$q.defer();
	        this.$timeout(function () {
	          deferred.resolve(results);
	        }, Math.random() * 1000, false);
	        return deferred.promise;
	      } else {
	        return results;
	      }
	    }

	    //getting all organizations of a selected ecosystem

	  }, {
	    key: 'selectedItemChange',
	    value: function selectedItemChange(ecosystemId) {
	      var _this3 = this;

	      this.DataService.setSelectedEcosystem(ecosystemId);
	      this.$localStorage.ecosystem = ecosystemId;
	      this.EcosystemService.getOrganisation(ecosystemId.id).then(function (response) {
	        _this3.$localStorage.organisations = response.data;
	        _this3.$log.log(_this3.$localStorage.organisations);
	      });
	    }
	  }, {
	    key: '$onInit',
	    value: function $onInit() {}
	  }]);

	  return SearchAutocompleteController;
	}();

	var SearchAutocompleteComponent = exports.SearchAutocompleteComponent = {
	  templateUrl: './views/app/components/search-autocomplete/search-autocomplete.component.html',
	  controller: SearchAutocompleteController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LeftMenuController = function () {
	    LeftMenuController.$inject = ["SidemenuDataService", "$log", "EcosystemFilterService", "EcosystemService", "MapDataService", "$localStorage", "$state", "OrganizationService", "$rootScope", "$scope", "DataService", "$filter"];
	    function LeftMenuController(SidemenuDataService, $log, EcosystemFilterService, EcosystemService, MapDataService, $localStorage, $state, OrganizationService, $rootScope, $scope, DataService, $filter) {
	        'ngInject';

	        //Initilizing the services

	        var _this = this;

	        _classCallCheck(this, LeftMenuController);

	        this.EcosystemFilterService = EcosystemFilterService;
	        this.SidemenuDataService = SidemenuDataService;
	        this.OrganizationService = OrganizationService;
	        this.EcosystemService = EcosystemService;
	        this.MapDataService = MapDataService;
	        this.$localStorage = $localStorage;
	        this.$rootScope = $rootScope;
	        this.DataService = DataService;
	        this.$scope = $scope;
	        this.$log = $log;
	        this.$state = $state;
	        this.$filter = $filter;
	        var that = this;

	        //global variable
	        this.selectedEcosystem = this.$localStorage.ecosystem;
	        this.isRoleChecked = {};
	        this.isSectorChecked = {};
	        this.markerIcons = {
	            startup: {
	                iconUrl: 'img/icons/startup.png',
	                iconSize: [25, 41]
	            },
	            incubators: {
	                iconUrl: 'img/icons/incubator.png',
	                iconSize: [25, 41]
	            },
	            developmentOrganization: {
	                iconUrl: 'img/icons/service.png',
	                iconSize: [25, 41]
	            },
	            coworkingSpaces: {
	                iconUrl: 'img/icons/coworking.png',
	                iconSize: [25, 41]
	            },
	            fundingAgencies: {
	                iconUrl: 'img/icons/investor.png',
	                iconSize: [25, 41]
	            },
	            randD: {
	                iconUrl: 'img/icons/hackerspace.png',
	                iconSize: [25, 41]
	            },
	            event: {
	                iconUrl: 'img/icons/event.png',
	                iconSize: [25, 41]
	            },
	            project: {
	                iconUrl: 'img/icons/accelerator.png',
	                iconSize: [25, 41]
	            }
	        };

	        //getting all roles
	        this.roles = this.$localStorage.roles;

	        //creating a role count object
	        var roleCount = {};
	        angular.forEach(this.roles, function (role) {
	            roleCount[role.id] = _this.OrganizationService.getRoleCount(role.name);
	        });

	        this.countedRoles = roleCount;

	        //listening to an event
	        this.$rootScope.$on('stop', function () {
	            that.$localStorage.booleanData = true;
	            that.showProjects();
	        });
	        this.$rootScope.$on('newEvent', function () {
	            that.$localStorage.booleanData = true;
	            that.showEvents();
	        });

	        //getting all sectors
	        this.sectors = this.$localStorage.sectors;

	        //  this.orgLocation = this.MapDataService.checkedOrganisations();
	    }

	    // updating makers


	    _createClass(LeftMenuController, [{
	        key: 'selectedOrganisations',
	        value: function selectedOrganisations() {
	            var _this2 = this;

	            var data = this.SidemenuDataService.getMapData();
	            var scope = this.$scope;
	            var markers = [];
	            //let role = {};
	            //creating location information
	            angular.forEach(data, function (response) {
	                angular.forEach(response.locations, function (locations) {
	                    angular.forEach(locations, function (location) {
	                        var marker = {
	                            lat: parseFloat(location.lat),
	                            lng: parseFloat(location.long),
	                            getMessageScope: function getMessageScope() {
	                                var infowindowScope = scope.$new(true);
	                                infowindowScope.data = response;
	                                return infowindowScope;
	                            },
	                            message: '<organisation-msg></organisatio-msg>',
	                            icon: {}
	                        };
	                        try {
	                            var roleName = response.roles.data[0].name;
	                            if (roleName == "R&D") {
	                                marker.icon = _this2.markerIcons.randD;
	                                markers.push(marker);
	                            } else if (roleName == "Funding Agencies") {
	                                marker.icon = _this2.markerIcons.fundingAgencies;
	                                markers.push(marker);
	                            } else if (roleName == "Incubators") {
	                                marker.icon = _this2.markerIcons.incubators;
	                                markers.push(marker);
	                            } else if (roleName == "Development Organization") {
	                                marker.icon = _this2.markerIcons.developmentOrganization;
	                                markers.push(marker);
	                            } else if (roleName == "Startup") {
	                                marker.icon = _this2.markerIcons.startup;
	                                markers.push(marker);
	                            } else if (roleName == "Coworking Space") {
	                                marker.icon = _this2.markerIcons.coworkingSpaces;
	                                markers.push(marker);
	                            } else {
	                                _this2.$log.log("no such a role");
	                            }
	                        } catch (e) {
	                            _this2.$log.log("no role info in this org");
	                        }
	                    });
	                });
	            });

	            this.markers = markers;
	        }

	        //creates an array of select roles

	    }, {
	        key: 'setRoleArray',
	        value: function setRoleArray(roleId) {
	            this.SidemenuDataService.roleArray(roleId);
	            this.selectedOrganisations();
	        }

	        //creates an array of selected sectors

	    }, {
	        key: 'setSectorArray',
	        value: function setSectorArray(sectorId) {
	            this.SidemenuDataService.sectorArray(sectorId);
	            this.selectedOrganisations();
	        }

	        // show events

	    }, {
	        key: 'showEvents',
	        value: function showEvents() {
	            var _this3 = this;

	            this.$state.go('app.home.events.all');

	            var scope = this.$scope;
	            var markers = [];
	            var evts = [];
	            var eventMarkers = {
	                markers: [],
	                events: []
	            };

	            //creating location information
	            angular.forEach(this.$localStorage.organisations.data, function (response) {
	                if (response.events.data.length > 0 && response.locations.data.length > 0) {
	                    angular.forEach(response.events, function (events) {
	                        angular.forEach(events, function (event) {
	                            evts.push(event);

	                            //creating markers
	                            angular.forEach(response.locations, function (locations) {
	                                angular.forEach(locations, function (location) {
	                                    var marker = {
	                                        lat: parseFloat(location.lat),
	                                        lng: parseFloat(location.long),
	                                        getMessageScope: function getMessageScope() {
	                                            var infowindowScope = scope.$new(true);
	                                            infowindowScope.data = event;
	                                            return infowindowScope;
	                                        },
	                                        message: '<message></message>',
	                                        icon: {}
	                                    };
	                                    marker.icon = _this3.markerIcons.event;
	                                    markers.push(marker);
	                                });
	                            });
	                        });
	                    });
	                } else {
	                    _this3.$log.log("no events or locations");
	                }
	            });

	            eventMarkers.markers = markers;
	            eventMarkers.events = evts;
	            var data = eventMarkers;
	            this.markers = data.markers;
	            this.events = data.events;
	        }

	        // show projects

	    }, {
	        key: 'showProjects',
	        value: function showProjects() {
	            var _this4 = this;

	            this.$state.go('app.home.projects.all');

	            var scope = this.$scope;
	            var markers = [];
	            var evts = [];
	            var eventMarkers = {
	                markers: [],
	                events: []
	            };

	            //creating location information
	            angular.forEach(this.$localStorage.organisations.data, function (response) {
	                if (response.projects.data.length > 0 && response.locations.data.length > 0) {
	                    angular.forEach(response.projects, function (events) {
	                        angular.forEach(events, function (event) {
	                            evts.push(event);

	                            //creating markers
	                            angular.forEach(response.locations, function (locations) {
	                                angular.forEach(locations, function (location) {
	                                    var marker = {
	                                        lat: parseFloat(location.lat),
	                                        lng: parseFloat(location.long),
	                                        getMessageScope: function getMessageScope() {
	                                            var infowindowScope = scope.$new(true);
	                                            infowindowScope.data = event;
	                                            return infowindowScope;
	                                        },
	                                        message: '<project-msg></project-msg>',
	                                        icon: {}
	                                    };
	                                    marker.icon = _this4.markerIcons.project;
	                                    markers.push(marker);
	                                });
	                            });
	                        });
	                    });
	                } else {
	                    _this4.$log.log("no events or locations");
	                }
	            });
	            eventMarkers.markers = markers;
	            eventMarkers.events = evts;

	            var data = eventMarkers;

	            this.markers = data.markers;
	            this.events = data.events;
	        }

	        // show all organisations

	    }, {
	        key: 'showOrganisations',
	        value: function showOrganisations() {
	            var _this5 = this;

	            this.$log.log("now in initialize");
	            this.$log.log(this.$localStorage.booleanData);
	            this.$state.go('app.home.pins.all', { id: 1 });
	            this.$localStorage.booleanData = false;

	            /*this.$state.go('app.home.pins.all');*/

	            var valueHolder = this.makeMarkers(this.SidemenuDataService.getMapData());

	            if (valueHolder.length > 0) {
	                this.markers = valueHolder;
	                this.$log.log("value holder");
	                this.$log.log(valueHolder);
	            } else {
	                var _scope = this.$scope;
	                var markers = [];
	                //let role = {};
	                //creating location information
	                angular.forEach(this.$localStorage.organisations.data, function (response) {
	                    angular.forEach(response.locations, function (locations) {
	                        angular.forEach(locations, function (location) {
	                            var marker = {
	                                lat: parseFloat(location.lat),
	                                lng: parseFloat(location.long),
	                                getMessageScope: function getMessageScope() {
	                                    var infowindowScope = _scope.$new(true);
	                                    infowindowScope.data = response;
	                                    return infowindowScope;
	                                },
	                                message: '<organisation-msg></organisation-msg>',
	                                icon: {}
	                            };
	                            try {
	                                var roleName = response.roles.data[0].name;
	                                if (roleName == "R&D") {
	                                    marker.icon = _this5.markerIcons.randD;
	                                    markers.push(marker);
	                                } else if (roleName == "Funding Agencies") {
	                                    marker.icon = _this5.markerIcons.fundingAgencies;
	                                    markers.push(marker);
	                                } else if (roleName == "Incubators") {
	                                    marker.icon = _this5.markerIcons.incubators;
	                                    markers.push(marker);
	                                } else if (roleName == "Development Organization") {
	                                    marker.icon = _this5.markerIcons.developmentOrganization;
	                                    markers.push(marker);
	                                } else if (roleName == "Startup") {
	                                    marker.icon = _this5.markerIcons.startup;
	                                    markers.push(marker);
	                                } else if (roleName == "Coworking Space") {
	                                    marker.icon = _this5.markerIcons.coworkingSpaces;
	                                    markers.push(marker);
	                                } else {
	                                    _this5.$log.log("no such a role");
	                                }
	                            } catch (e) {
	                                _this5.$log.log("no role info in this org");
	                            }
	                        });
	                    });
	                });

	                this.markers = markers;
	            }
	        }

	        //showing number of organisions per role

	    }, {
	        key: 'showRoleCount',
	        value: function showRoleCount(roleName) {
	            return this.OrganizationService.getRoleCount(roleName);
	        }
	    }, {
	        key: 'makeMarkers',
	        value: function makeMarkers(data) {
	            var _this6 = this;

	            var markers = [];
	            //let role = {};
	            //creating location information
	            angular.forEach(data, function (response) {
	                angular.forEach(response.locations, function (locations) {
	                    angular.forEach(locations, function (location) {
	                        var marker = {
	                            lat: parseFloat(location.lat),
	                            lng: parseFloat(location.long),
	                            getMessageScope: function getMessageScope() {
	                                var infowindowScope = scope.$new(true);
	                                infowindowScope.data = response;
	                                return infowindowScope;
	                            },
	                            message: '<organisation-msg></organisation-msg>',
	                            icon: {}
	                        };
	                        try {
	                            var roleName = response.roles.data[0].name;
	                            if (roleName == "R&D") {
	                                marker.icon = _this6.markerIcons.randD;
	                                markers.push(marker);
	                            } else if (roleName == "Funding Agencies") {
	                                marker.icon = _this6.markerIcons.fundingAgencies;
	                                markers.push(marker);
	                            } else if (roleName == "Startup") {
	                                marker.icon = _this6.markerIcons.startup;
	                                markers.push(marker);
	                            } else if (roleName == "Coworking Space") {
	                                marker.icon = _this6.markerIcons.coworkingSpaces;
	                                markers.push(marker);
	                            } else {
	                                _this6.$log.log("no such a role");
	                            }
	                        } catch (e) {
	                            _this6.$log.log("no role info in this org");
	                        }
	                    });
	                });
	            });

	            return markers;
	        }
	    }, {
	        key: 'viewEvent',
	        value: function viewEvent(event) {
	            this.DataService.setEventFromMarker(event);
	            this.$state.go('app.home.events.details', { eventId: event.id });
	        }
	    }, {
	        key: 'viewProject',
	        value: function viewProject(project) {
	            this.DataService.setProjFromMarker(project);
	            this.$state.go('app.home.projects.details', { projectId: project.id });
	        }
	    }, {
	        key: 'filterDate',
	        value: function filterDate(dateValue1, dateValue2) {
	            var new_date_start = this.$filter('date')(new Date(dateValue1), 'MMM d');
	            var new_time_start = this.$filter('date')(new Date(dateValue1), 'h:mm a');
	            var new_date_end = this.$filter('date')(new Date(dateValue2), 'MMM d');
	            var new_time_end = this.$filter('date')(new Date(dateValue2), 'h:mm a');

	            return {
	                event_date: new_date_start + '-' + new_date_end,
	                event_time: new_time_start + '-' + new_time_end
	            };
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize() {
	            this.showOrganisations();
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {
	            this.initialize();
	        }
	    }]);

	    return LeftMenuController;
	}();

	var LeftMenuComponent = exports.LeftMenuComponent = {
	    templateUrl: './views/app/components/left-menu/left-menu.component.html',
	    controller: LeftMenuController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SelectEcosystemController = function () {
	  SelectEcosystemController.$inject = ["$log", "EcosystemService", "API", "$state"];
	  function SelectEcosystemController($log, EcosystemService, API, $state) {
	    'ngInject';

	    //Initilizing global variables

	    var _this = this;

	    _classCallCheck(this, SelectEcosystemController);

	    this.EcosystemService = EcosystemService;
	    this.$log = $log;
	    this.API = API;
	    this.$state = $state;

	    //getting ecosystems
	    this.EcosystemService.getAll().then(function (response) {
	      _this.ecosystemData = response.data;
	    });
	  } //end the constructor

	  //getting organisations of a given ecosystem and
	  //changing the state to home state


	  _createClass(SelectEcosystemController, [{
	    key: 'home',
	    value: function home(ecosystemId) {
	      var _this2 = this;

	      this.EcosystemService.getOrganisation(ecosystemId).then(function (response) {
	        _this2.organisationData = response.data;
	      });
	      this.$state.go('app.home');
	    }
	  }, {
	    key: '$onInit',
	    value: function $onInit() {}
	  }]);

	  return SelectEcosystemController;
	}();

	var SelectEcosystemComponent = exports.SelectEcosystemComponent = {
	  templateUrl: './views/app/components/select-ecosystem/select-ecosystem.component.html',
	  controller: SelectEcosystemController,
	  controllerAs: 'vm',
	  bindings: {}
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppHeaderController = function () {
	    AppHeaderController.$inject = ["$sce", "ToastService", "OrganizationService", "EcosystemService"];
	    function AppHeaderController($sce, ToastService, OrganizationService, EcosystemService) {
	        'ngInject';

	        _classCallCheck(this, AppHeaderController);

	        this.$sce = $sce;
	        this.ToastService = ToastService;
	        this.OrganizationService = OrganizationService;
	        this.EcosystemService = EcosystemService;
	    }

	    _createClass(AppHeaderController, [{
	        key: 'clickMe',
	        value: function clickMe() {
	            this.EcosystemService.getOne(2);
	        }
	    }, {
	        key: '$onInit',
	        value: function $onInit() {
	            //defer iframe loading
	            var url = 'https://ghbtns.com/github-btn.html?user=jadjoubran&repo=laravel5-angular-material-starter&type=star&count=true&size=large';
	            this.githubWidget = this.$sce.trustAsResourceUrl(url);
	        }
	    }]);

	    return AppHeaderController;
	}();

	var AppHeaderComponent = exports.AppHeaderComponent = {
	    templateUrl: './views/app/components/app-header/app-header.component.html',
	    controller: AppHeaderController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppViewController = function () {
	    AppViewController.$inject = ["$mdToast", "ToastService", "$window"];
	    function AppViewController($mdToast, ToastService, $window) {
	        'ngInject';

	        _classCallCheck(this, AppViewController);

	        this.$window = $window;
	        this.$mdToast = $mdToast;
	        this.ToastService = ToastService;
	    }

	    _createClass(AppViewController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.registerServiceWorker();
	            this.checkForNewerVersions();
	        }
	    }, {
	        key: 'registerServiceWorker',
	        value: function registerServiceWorker() {
	            if (!('serviceWorker' in navigator)) {
	                return false;
	            }
	            navigator.serviceWorker.register('/service-worker.js').then(this.handleRegistration.bind(this));
	        }
	    }, {
	        key: 'handleRegistration',
	        value: function handleRegistration(registration) {
	            var _this = this;

	            registration.onupdatefound = function () {
	                var installingWorker = registration.installing;
	                installingWorker.onstatechange = function () {
	                    if (installingWorker.state === 'installed') {
	                        if (!navigator.serviceWorker.controller) {
	                            _this.ToastService.show('App is ready for offline use.');
	                        }
	                    }
	                };
	            };
	        }
	    }, {
	        key: 'checkForNewerVersions',
	        value: function checkForNewerVersions() {
	            var _this2 = this;

	            if (navigator.serviceWorker && navigator.serviceWorker.controller) {
	                navigator.serviceWorker.controller.onstatechange = function (e) {

	                    if (e.target.state === 'redundant') {
	                        var toast = _this2.$mdToast.simple().content('A newer version of this site is available.').position(_this2.ToastService.position).action('Refresh').hideDelay(_this2.ToastService.delay);

	                        _this2.$mdToast.show(toast).then(function () {
	                            _this2.$window.location.reload();
	                        });
	                    }
	                };
	            }
	        }
	    }]);

	    return AppViewController;
	}();

	var AppViewComponent = exports.AppViewComponent = {
	    templateUrl: './views/app/components/app-view/app-view.component.html',
	    controller: AppViewController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppShellController = function () {
	    function AppShellController() {
	        'ngInject';

	        //

	        _classCallCheck(this, AppShellController);
	    }

	    _createClass(AppShellController, [{
	        key: '$onInit',
	        value: function $onInit() {}
	    }]);

	    return AppShellController;
	}();

	var AppShellComponent = exports.AppShellComponent = {
	    templateUrl: './views/app/components/app-shell/app-shell.component.html',
	    controller: AppShellController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResetPasswordController = function () {
	    ResetPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ResetPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ResetPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ResetPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.password = '';
	            this.password_confirmation = '';
	            this.isValidToken = false;

	            this.verifyToken();
	        }
	    }, {
	        key: 'verifyToken',
	        value: function verifyToken() {
	            var _this = this;

	            var email = this.$state.params.email;
	            var token = this.$state.params.token;

	            this.API.all('auth/password').get('verify', {
	                email: email, token: token
	            }).then(function () {
	                _this.isValidToken = true;
	            }, function () {
	                _this.$state.go('app.landing');
	            });
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var data = {
	                email: this.$state.params.email,
	                token: this.$state.params.token,
	                password: this.password,
	                password_confirmation: this.password_confirmation
	            };

	            this.API.all('auth/password/reset').post(data).then(function () {
	                _this2.ToastService.show('Password successfully changed');
	                _this2.$state.go('app.login');
	            });
	        }
	    }]);

	    return ResetPasswordController;
	}();

	var ResetPasswordComponent = exports.ResetPasswordComponent = {
	    templateUrl: './views/app/components/reset-password/reset-password.component.html',
	    controller: ResetPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ForgotPasswordController = function () {
	    ForgotPasswordController.$inject = ["API", "ToastService", "$state"];
	    function ForgotPasswordController(API, ToastService, $state) {
	        'ngInject';

	        _classCallCheck(this, ForgotPasswordController);

	        this.API = API;
	        this.$state = $state;
	        this.ToastService = ToastService;
	    }

	    _createClass(ForgotPasswordController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.email = '';
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            this.API.all('auth/password/email').post({
	                email: this.email
	            }).then(function () {
	                _this.ToastService.show('Please check your email for instructions on how to reset your password.');
	                _this.$state.go('app.landing');
	            });
	        }
	    }]);

	    return ForgotPasswordController;
	}();

	var ForgotPasswordComponent = exports.ForgotPasswordComponent = {
	    templateUrl: './views/app/components/forgot-password/forgot-password.component.html',
	    controller: ForgotPasswordController,
	    controllerAs: 'vm',
	    bindings: {}
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginFormController = function () {
		LoginFormController.$inject = ["$auth", "ToastService"];
		function LoginFormController($auth, ToastService) {
			'ngInject';

			_classCallCheck(this, LoginFormController);

			this.$auth = $auth;
			this.ToastService = ToastService;
		}

		_createClass(LoginFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.email = '';
				this.password = '';
			}
		}, {
			key: 'login',
			value: function login() {
				var _this = this;

				var user = {
					email: this.email,
					password: this.password
				};

				this.$auth.login(user).then(function (response) {
					_this.$auth.setToken(response.data);

					_this.ToastService.show('Logged in successfully.');
				}).catch(this.failedLogin.bind(this));
			}
		}, {
			key: 'failedLogin',
			value: function failedLogin(response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						return this.ToastService.error(response.data.errors[error][0]);
					}
				}
				this.ToastService.error(response.statusText);
			}
		}]);

		return LoginFormController;
	}();

	var LoginFormComponent = exports.LoginFormComponent = {
		templateUrl: './views/app/components/login-form/login-form.component.html',
		controller: LoginFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RegisterFormController = function () {
		RegisterFormController.$inject = ["$auth", "ToastService"];
		function RegisterFormController($auth, ToastService) {
			'ngInject';

			_classCallCheck(this, RegisterFormController);

			this.$auth = $auth;
			this.ToastService = ToastService;
		}

		_createClass(RegisterFormController, [{
			key: '$onInit',
			value: function $onInit() {
				this.name = '';
				this.email = '';
				this.password = '';
			}
		}, {
			key: 'register',
			value: function register() {
				var _this = this;

				var user = {
					name: this.name,
					email: this.email,
					password: this.password
				};

				this.$auth.signup(user).then(function (response) {
					//remove this if you require email verification
					_this.$auth.setToken(response.data);

					_this.ToastService.show('Successfully registered.');
				}).catch(this.failedRegistration.bind(this));
			}
		}, {
			key: 'failedRegistration',
			value: function failedRegistration(response) {
				if (response.status === 422) {
					for (var error in response.data.errors) {
						return this.ToastService.error(response.data.errors[error][0]);
					}
				}
				this.ToastService.error(response.statusText);
			}
		}]);

		return RegisterFormController;
	}();

	var RegisterFormComponent = exports.RegisterFormComponent = {
		templateUrl: './views/app/components/register-form/register-form.component.html',
		controller: RegisterFormController,
		controllerAs: 'vm',
		bindings: {}
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('app.directives');

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _projects = __webpack_require__(41);

	var _project = __webpack_require__(42);

	var _event = __webpack_require__(43);

	var _mapData = __webpack_require__(44);

	var _sidemenuData = __webpack_require__(45);

	var _ecosystemFilter = __webpack_require__(46);

	var _data = __webpack_require__(47);

	var _organization = __webpack_require__(48);

	var _Ecosystem = __webpack_require__(49);

	var _API = __webpack_require__(50);

	var _dialog = __webpack_require__(51);

	var _toast = __webpack_require__(52);

	angular.module('app.services').service('ProjectsService', _projects.ProjectsService).service('ProjectService', _project.ProjectService).service('EventService', _event.EventService).service('MapDataService', _mapData.MapDataService).service('SidemenuDataService', _sidemenuData.SidemenuDataService).service('EcosystemFilterService', _ecosystemFilter.EcosystemFilterService).service('DataService', _data.DataService).service('OrganizationService', _organization.OrganizationService).service('EcosystemService', _Ecosystem.EcosystemService).service('API', _API.APIService).service('DialogService', _dialog.DialogService).service('ToastService', _toast.ToastService);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProjectsService = exports.ProjectsService = function () {
	    ProjectsService.$inject = ["$log", "API"];
	    function ProjectsService($log, API) {
	        'ngInject';

	        //Initializing services

	        _classCallCheck(this, ProjectsService);

	        this.$log = $log;
	        this.API = API;
	    }

	    // creates a new project


	    _createClass(ProjectsService, [{
	        key: 'createProject',
	        value: function createProject(data) {
	            return this.API.all('projects').post(data);
	        }

	        // attaches an project to an organisation

	    }, {
	        key: 'attachProject',
	        value: function attachProject(organisationId, eventId) {

	            var DataAPI = this.API.one('organizations', organisationId);
	            return DataAPI.all('attach-projects').post(eventId);
	        }
	    }]);

	    return ProjectsService;
	}();

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Service = exports.Service = function () {
	    Service.$inject = ["$log", "API"];
	    function Service($log, API) {
	        'ngInject';

	        //Initializing services

	        _classCallCheck(this, Service);

	        this.$log = $log;
	        this.API = API;
	    }

	    // creates a new event


	    _createClass(Service, [{
	        key: 'createEvent',
	        value: function createEvent(data) {
	            return this.API.all('events').post(data);
	        }

	        // get free or paid

	    }, {
	        key: 'getFreePaid',
	        value: function getFreePaid() {}

	        // attaches location to an event

	    }, {
	        key: 'attachLocation',
	        value: function attachLocation(locationId) {
	            var dataAPI = this.API.one('projects', locationId);
	            return dataAPI.all();
	        }

	        // attaches an event to an organisation

	    }, {
	        key: 'attachEvent',
	        value: function attachEvent(organisationId, eventId) {

	            var DataAPI = this.API.one('organizations', organisationId);
	            return DataAPI.all('attach-events').post(eventId);
	        }
	    }]);

	    return Service;
	}();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventService = exports.EventService = function () {
	    EventService.$inject = ["$log", "API"];
	    function EventService($log, API) {
	        'ngInject';

	        //Initializing services

	        _classCallCheck(this, EventService);

	        this.$log = $log;
	        this.API = API;
	    }

	    // creates a new event


	    _createClass(EventService, [{
	        key: 'createEvent',
	        value: function createEvent(data) {
	            return this.API.all('events').post(data);
	        }

	        // get free or paid

	    }, {
	        key: 'getFreePaid',
	        value: function getFreePaid() {}

	        // attaches location to an event

	    }, {
	        key: 'attachLocation',
	        value: function attachLocation(eventId) {
	            var dataAPI = this.API.one('events', eventId);
	            return dataAPI.all();
	        }

	        // attaches an event to an organisation

	    }, {
	        key: 'attachEvent',
	        value: function attachEvent(organisationId, eventId) {

	            var DataAPI = this.API.one('organizations', organisationId);
	            return DataAPI.all('attach-events').post(eventId);
	        }
	    }]);

	    return EventService;
	}();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapDataService = exports.MapDataService = function () {
	  MapDataService.$inject = ["SidemenuDataService", "$log", "$localStorage", "$compile"];
	  function MapDataService(SidemenuDataService, $log, $localStorage, $compile) {
	    'ngInject';

	    //

	    _classCallCheck(this, MapDataService);

	    this.SidemenuDataService = SidemenuDataService;
	    this.$localStorage = $localStorage;
	    this.$compile = $compile;
	    this.$log = $log;

	    this.markerIcons = {
	      startup: {
	        iconUrl: 'img/icons/startup.png',
	        iconSize: [25, 41]
	      },
	      coworkingSpaces: {
	        iconUrl: 'img/icons/coworking.png',
	        iconSize: [25, 41]
	      },
	      fundingAgencies: {
	        iconUrl: 'img/icons/investor.png',
	        iconSize: [25, 41]
	      },
	      randD: {
	        iconUrl: 'img/icons/incubator.png',
	        iconSize: [25, 41]
	      },
	      event: {
	        iconUrl: 'img/icons/event.png',
	        iconSize: [25, 41]
	      },
	      project: {
	        iconUrl: 'img/icons/accelerator.png',
	        iconSize: [25, 41]
	      }
	    };
	  }
	  // displaying all the events


	  _createClass(MapDataService, [{
	    key: 'createEventMarkers',
	    value: function createEventMarkers(holdEvents) {
	      var _this = this;

	      var markers = [];
	      var evts = [];
	      var eventMarkers = { markers: [], events: [] };

	      var divTemplate = '<message></message>';

	      //creating location information
	      angular.forEach(holdEvents, function (response) {
	        if (response.events.data.length > 0) {
	          angular.forEach(response.events, function (events) {
	            angular.forEach(events, function (event) {
	              evts.push(event);

	              //creating markers
	              angular.forEach(response.locations, function (locations) {
	                angular.forEach(locations, function (location) {
	                  var marker = {
	                    lat: parseFloat(location.lat),
	                    lng: parseFloat(location.long),
	                    message: divTemplate,
	                    icon: {}
	                  };
	                  marker.icon = _this.markerIcons.event;
	                  markers.push(marker);
	                });
	              });
	            });
	          });
	        } else {
	          _this.$log.log("no events");
	        }
	      });

	      eventMarkers.markers = markers;
	      eventMarkers.events = evts;
	      return eventMarkers;
	    }

	    //create markers

	  }, {
	    key: 'createMarkers',
	    value: function createMarkers(data) {
	      var _this2 = this;

	      var markers = [];
	      //let role = {};
	      //creating location information
	      angular.forEach(data, function (response) {
	        angular.forEach(response.locations, function (locations) {
	          angular.forEach(locations, function (location) {
	            var marker = {
	              lat: parseFloat(location.lat),
	              lng: parseFloat(location.long),
	              message: 'Ishould not see this',
	              icon: {}
	            };
	            try {
	              var roleName = response.roles.data[0].name;
	              if (roleName == "R&D") {
	                marker.icon = _this2.markerIcons.randD;
	                markers.push(marker);
	              } else if (roleName == "Funding Agencies") {
	                marker.icon = _this2.markerIcons.fundingAgencies;
	                markers.push(marker);
	              } else if (roleName == "Startup") {
	                marker.icon = _this2.markerIcons.startup;
	                markers.push(marker);
	              } else if (roleName == "Coworking Space") {
	                marker.icon = _this2.markerIcons.coworkingSpaces;
	                markers.push(marker);
	              } else {
	                _this2.$log.log("no such a role");
	              }
	            } catch (e) {
	              _this2.$log.log("no role info in this org");
	            }
	          });
	        });
	      });

	      return markers;
	    }
	  }, {
	    key: 'click',
	    value: function click() {
	      this.$log.log("click function works");
	    }

	    //creating markers for Projects

	  }, {
	    key: 'createProjectMarkers',
	    value: function createProjectMarkers(holdEvents) {
	      var _this3 = this;

	      var markers = [];
	      var evts = [];
	      var eventMarkers = { markers: [], events: [] };

	      //creating location information
	      angular.forEach(holdEvents, function (response) {

	        if (response.projects.data.length > 0) {
	          angular.forEach(response.projects, function (events) {
	            angular.forEach(events, function (event) {
	              evts.push(event);
	            });
	          });

	          angular.forEach(response.locations, function (locations) {
	            angular.forEach(locations, function (location) {
	              var marker = {
	                lat: parseFloat(location.lat),
	                lng: parseFloat(location.long),
	                message: 'Iam a project',
	                icon: {}
	              };
	              marker.icon = _this3.markerIcons.project;
	              markers.push(marker);
	            });
	          });
	        } else {
	          _this3.$log.log("no events");
	        }
	      });

	      eventMarkers.markers = markers;
	      eventMarkers.events = evts;
	      return eventMarkers;
	    }
	  }, {
	    key: 'checkedOrganisations',
	    value: function checkedOrganisations() {
	      return this.createMarkers(this.SidemenuDataService.getMapData());
	    }
	  }]);

	  return MapDataService;
	}();

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SidemenuDataService = exports.SidemenuDataService = function () {
	    SidemenuDataService.$inject = ["API", "$log", "EcosystemFilterService", "EcosystemService", "DataService", "$localStorage"];
	    function SidemenuDataService(API, $log, EcosystemFilterService, EcosystemService, DataService, $localStorage) {
	        'ngInject';

	        //initializing services

	        _classCallCheck(this, SidemenuDataService);

	        this.API = API;
	        this.$log = $log;
	        this.DataService = DataService;
	        this.EcosystemFilterService = EcosystemFilterService;
	        this.EcosystemService = EcosystemService;
	        this.$localStorage = $localStorage;

	        //initializing global variables
	        this.roleData = [];
	        this.sectorData = [];
	        this.mapData = [];
	        this.filteredOrganisations = null;
	        this.organisationsFilter = {
	            role: [],
	            sector: []
	        };
	        this.orgLocations = null;

	        //getting filtered organisations
	        this.mapData = this.EcosystemFilterService.getFilteredOrg();
	    }

	    //get all org


	    _createClass(SidemenuDataService, [{
	        key: 'dataOrg',
	        value: function dataOrg() {
	            var _this = this;

	            this._dataOrgHelper().then(function (response) {
	                _this.$localStorage.allOrganisations = response.data;
	            });

	            return this._dataOrgHelper();
	        }
	    }, {
	        key: '_dataOrgHelper',
	        value: function _dataOrgHelper() {
	            return this.EcosystemService.getOrganisation(this.$localStorage.ecosystem.id);
	        }

	        //getting all roles

	    }, {
	        key: 'roles',
	        value: function roles() {
	            return this.API.all('roles').get('');
	        }

	        //getting all sectors

	    }, {
	        key: 'sectors',
	        value: function sectors() {
	            return this.API.all('sectors').get('');
	        }

	        //returns locations

	    }, {
	        key: 'getOrgLocations',
	        value: function getOrgLocations() {
	            return this.orgLocations;
	        }

	        //initializing the location object

	    }, {
	        key: 'setOrgLocations',
	        value: function setOrgLocations(locationData) {
	            var myData = [];
	            angular.forEach(locationData, function (value) {
	                myData.push(value.locations.data);
	            });
	            this.orgLocations = myData;
	        }

	        //filtering organisation by selected role

	    }, {
	        key: 'roleArray',
	        value: function roleArray(roleId) {

	            //add id if not in array else remove id
	            if (this.roleData.indexOf(roleId) === -1) {
	                this.roleData.push(roleId);
	            } else {
	                this.roleData.splice(this.roleData.indexOf(roleId), 1);
	            }
	            //saving the array of roles
	            this.organisationsFilter.role = this.roleData;
	            //updating the filtered organisations
	            this.EcosystemFilterService.orgFilter(this.organisationsFilter, this.$localStorage.organisations);

	            //getting filtered organisations
	            this.mapData = this.EcosystemFilterService.getFilteredOrg();
	        }

	        //filteres organisations by selected sectors

	    }, {
	        key: 'sectorArray',
	        value: function sectorArray(sectorId) {
	            if (this.sectorData.indexOf(sectorId) === -1) {
	                this.sectorData.push(sectorId);
	            } else {
	                this.sectorData.splice(this.sectorData.indexOf(sectorId), 1);
	            }
	            this.organisationsFilter.sector = this.sectorData;

	            //updating the filtered organisations
	            this.EcosystemFilterService.orgFilter(this.organisationsFilter, this.$localStorage.organisations);

	            //getting filtered organisations
	            this.mapData = this.EcosystemFilterService.getFilteredOrg();
	        }
	    }, {
	        key: 'orgData',
	        value: function orgData() {
	            this.allOrganisations = [];
	        }

	        //gets map data

	    }, {
	        key: 'getMapData',
	        value: function getMapData() {
	            return this.mapData;
	        }
	    }]);

	    return SidemenuDataService;
	}();

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EcosystemFilterService = exports.EcosystemFilterService = function () {
	    EcosystemFilterService.$inject = ["API", "$log", "EcosystemService"];
	    function EcosystemFilterService(API, $log, EcosystemService) {
	        'ngInject';

	        // initializing ecosystem

	        _classCallCheck(this, EcosystemFilterService);

	        this.EcosystemService = EcosystemService;

	        this.API = API;
	        this.$log = $log;

	        //initializing global vaariables
	        this.checkedOrg = [];
	        this.allOrganisations = null;
	    }

	    //gets organisatios by roles


	    _createClass(EcosystemFilterService, [{
	        key: 'role',
	        value: function role(roleId) {
	            return this.API.one('roles', roleId).one('organizations').get('');
	        }

	        //filters organisations

	    }, {
	        key: 'orgFilter',
	        value: function orgFilter(getData, allOrganisations) {
	            this.globalData = allOrganisations.data;
	            //local variables for
	            // storing temporary results
	            var myData = [];
	            myData = getData;
	            var filteredData = [];
	            var sectorResult, roleResult;

	            //using angular forEach to filter organisations
	            var sectorLength = myData.sector.length > 0;
	            var roleLength = myData.role.length > 0;
	            if (sectorLength && !roleLength || !sectorLength && roleLength) {
	                angular.forEach(allOrganisations.data, function (value) {

	                    try {
	                        sectorResult = myData.sector.indexOf(value.sectors.data[0].id);
	                        roleResult = myData.role.indexOf(value.roles.data[0].id);
	                        if (sectorResult !== -1 || roleResult !== -1) {
	                            filteredData.push(value);
	                        } else {
	                            console.log("not selected");
	                        }
	                    } catch (e) {
	                        console.log("missing role or sector information ");
	                    }
	                });
	            } else if (sectorLength && roleLength) {
	                // creating array of organisation id's by roles
	                var roleOrgId = [];
	                var sectorOrgId = [];
	                angular.forEach(allOrganisations.data, function (org) {
	                    try {
	                        var roleInfo = myData.role.indexOf(org.roles.data[0].id);
	                        if (roleInfo > -1) {
	                            roleOrgId.push(org.id);
	                        }
	                        console.log("no stress role");
	                    } catch (e) {
	                        console.log("missing role");
	                        console.log(e);
	                    }
	                });

	                // for sectors
	                angular.forEach(allOrganisations.data, function (org) {
	                    try {
	                        var sectorInfo = myData.sector.indexOf(org.sectors.data[0].id);
	                        if (sectorInfo > -1) {
	                            sectorOrgId.push(org.id);
	                        }
	                        console.log("no stress sector");
	                    } catch (e) {
	                        console.log("missing sector");
	                    }
	                });

	                //find the intersecting organisations
	                var foundOrg = [];
	                var intersectingOrg = this.getIntersecting(sectorOrgId, roleOrgId);
	                angular.forEach(allOrganisations.data, function (org) {
	                    if (org.roles.length !== 0 && org.sectors.length !== 0) {
	                        if (intersectingOrg.indexOf(org.id) > -1) {
	                            foundOrg.push(org);
	                        }
	                    } else {
	                        console.log("missing info in new Logic");
	                    }
	                });

	                filteredData = foundOrg;
	            } else {

	                filteredData = allOrganisations.data;
	            }

	            this.checkedOrg = filteredData;

	            filteredData = [];
	        }

	        //getting filtered organisations

	    }, {
	        key: 'getFilteredOrg',
	        value: function getFilteredOrg() {
	            return this.checkedOrg;
	        }

	        //getting intersecting values from two arrays

	    }, {
	        key: 'getIntersecting',
	        value: function getIntersecting(arrayA, arrayB) {
	            var values = [];
	            var setA = new Set(arrayA);
	            var intersectingValues = new Set(arrayB.filter(function (x) {
	                return setA.has(x);
	            }));

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = intersectingValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var x = _step.value;

	                    values.push(x);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return values;
	        }
	    }]);

	    return EcosystemFilterService;
	}();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataService = exports.DataService = function () {
	    function DataService() {
	        'ngInject';

	        _classCallCheck(this, DataService);

	        this.eventFromMarker = {};
	        this.newLocation = {};
	        this.ecosystem = {};
	        this.orgFromMarker = {};
	        this.projFromMarker = {};
	        this.selectedEcosystem = null;
	        this.markerIconsUrl = {
	            startup: {
	                iconUrl: 'img/icons/startup.png'
	            },
	            coworkingSpaces: {
	                iconUrl: 'img/icons/coworking.png'
	            },
	            fundingAgencies: {
	                iconUrl: 'img/icons/investor.png'
	            },
	            randD: {
	                iconUrl: 'img/icons/incubator.png'
	            }
	        };
	    }

	    //gets the selected ecosystem


	    _createClass(DataService, [{
	        key: 'setSelectedEcosystem',
	        value: function setSelectedEcosystem(ecosystem) {
	            this.selectedEcosystem = ecosystem;
	        }

	        //returns selected Ecosystem

	    }, {
	        key: 'getSelectedEcosystem',
	        value: function getSelectedEcosystem() {
	            return this.selectedEcosystem;
	        }
	    }, {
	        key: 'setEvent',
	        value: function setEvent(info) {
	            this.eventSet = info;
	        }
	    }, {
	        key: 'setEventFromMarker',
	        value: function setEventFromMarker(evtMarker) {
	            this.eventFromMarker = evtMarker;
	        }
	    }, {
	        key: 'getEventFromMarkers',
	        value: function getEventFromMarkers() {
	            return this.eventFromMarker;
	        }
	    }, {
	        key: 'setOrgFromMarker',
	        value: function setOrgFromMarker(orgMarker) {
	            this.orgFromMarker = orgMarker;
	        }
	    }, {
	        key: 'getOrgFromMarkers',
	        value: function getOrgFromMarkers() {
	            return this.orgFromMarker;
	        }
	    }, {
	        key: 'setProjFromMarker',
	        value: function setProjFromMarker(projMarker) {
	            this.projFromMarker = projMarker;
	        }
	    }, {
	        key: 'getProjFromMarkers',
	        value: function getProjFromMarkers() {
	            return this.projFromMarker;
	        }
	    }, {
	        key: 'setEcosystem',
	        value: function setEcosystem(selectedEcosystem) {
	            this.ecosystem = selectedEcosystem;
	        }
	    }, {
	        key: 'getEcosystem',
	        value: function getEcosystem() {
	            return this.ecosystem;
	        }
	    }, {
	        key: 'setNewLocation',
	        value: function setNewLocation(location) {
	            this.newLocation = location;
	        }
	    }, {
	        key: 'getNewLocaton',
	        value: function getNewLocaton() {
	            return this.newLocation;
	        }
	    }]);

	    return DataService;
	}();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OrganizationService = exports.OrganizationService = function () {
	    OrganizationService.$inject = ["API", "$log", "$localStorage"];
	    function OrganizationService(API, $log, $localStorage) {
	        'ngInject';

	        //

	        _classCallCheck(this, OrganizationService);

	        this.API = API;
	        this.$log = $log;
	        this.$localStorage = $localStorage;
	    }

	    //getting all organizations


	    _createClass(OrganizationService, [{
	        key: 'getAll',
	        value: function getAll() {
	            var _this = this;

	            this.API.all('organizations').get('').then(function (response) {
	                _this.organisationData = response.message;
	                _this.$log.log(_this.organisationData);
	            });
	        }
	    }, {
	        key: 'getByEcosystem',
	        value: function getByEcosystem(ecosystemId) {
	            var DataAPI = this.API.one('ecosystems', ecosystemId);
	            return DataAPI.all('organizations').get('');
	        }

	        //getting one organization

	    }, {
	        key: 'getOne',
	        value: function getOne(id) {
	            var _this2 = this;

	            this.API.one('organizations', id).get('').then(function (response) {
	                _this2.organisationOne = response.data;
	            });
	        }

	        // creating an organisation

	    }, {
	        key: 'createOrganisation',
	        value: function createOrganisation(data) {
	            return this.API.all('organizations').post(data);
	        }

	        // creating a new location

	    }, {
	        key: 'createLocation',
	        value: function createLocation(data) {
	            return this.API.all('locations').post(data);
	        }

	        // Attach location to an organisation

	    }, {
	        key: 'attachLocationToOrganisation',
	        value: function attachLocationToOrganisation(organisationId, locationId) {
	            var DataAPI = this.API.one('organizations', organisationId);

	            return DataAPI.all('attach-locations').post(locationId);
	        }

	        // gets all sectors

	    }, {
	        key: 'getSectors',
	        value: function getSectors() {
	            return this.API.all('sectors').get('');
	        }
	    }, {
	        key: 'attachSectorToOrganisation',
	        value: function attachSectorToOrganisation(organisationId, sectorId) {
	            var DataAPI = this.API.one('organizations', organisationId);
	            return DataAPI.all('attach-sectors').post(sectorId);
	        }
	    }, {
	        key: 'attachRoleToOrganisation',
	        value: function attachRoleToOrganisation(organisationId, roleId) {
	            var DataAPI = this.API.one('organizations', organisationId);
	            return DataAPI.all('attach-roles').post(roleId);
	        }
	    }, {
	        key: 'attachStageToOrganisation',
	        value: function attachStageToOrganisation(organisationId, stageId) {
	            var DataAPI = this.API.one('organizations', organisationId);
	            return DataAPI.all('attach-stages').post(stageId);
	        }

	        // gets all roles

	    }, {
	        key: 'getRoles',
	        value: function getRoles() {
	            return this.API.all('roles').get('');
	        }

	        // gets all stages

	    }, {
	        key: 'getStages',
	        value: function getStages() {
	            return this.API.all('stages').get('');
	        }

	        // counts all role of a Organisations under a particular ecosystem

	    }, {
	        key: 'getRoleCount',
	        value: function getRoleCount(roleName) {
	            var roleData = [];
	            angular.forEach(this.$localStorage.organisations.data, function (org) {
	                angular.forEach(org.roles, function (roleArray) {
	                    angular.forEach(roleArray, function (role) {
	                        if (role.name == roleName) {
	                            roleData.push(role.name);
	                        }
	                    });
	                });
	            });

	            return roleData.length;
	        }
	    }]);

	    return OrganizationService;
	}();

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EcosystemService = exports.EcosystemService = function () {
	  EcosystemService.$inject = ["API", "$log", "$q"];
	  function EcosystemService(API, $log, $q) {
	    'ngInject';

	    //getting all Ecosystems

	    _classCallCheck(this, EcosystemService);

	    this.API = API;
	    this.$log = $log;
	    this.$q = $q;
	    this.ecosystemData = null;
	  }

	  //getting all ecosystems


	  _createClass(EcosystemService, [{
	    key: 'getAll',
	    value: function getAll() {
	      return this.API.all('ecosystems').get('');
	    }

	    //getting one ecosystem

	  }, {
	    key: 'getOne',
	    value: function getOne(id) {
	      var _this = this;

	      this.API.one('ecosystems', id).get('').then(function (response) {
	        _this.ecosystemOne = response.data;
	        _this.$log.log('this is just one ecosystem');
	        _this.$log.log(_this.ecosystemOne);
	      });
	    }

	    //gets organizations of an ecosystem

	  }, {
	    key: 'getOrganisation',
	    value: function getOrganisation(ecosystemId) {
	      return this.API.one('ecosystems', ecosystemId).one('organizations').get('');
	    }

	    //this creates a new ecosystem

	  }, {
	    key: 'create',
	    value: function create(data) {
	      var _this2 = this;

	      this.API.all('ecosystem_parents').post(data).then(function (response) {
	        _this2.$log.log(response);
	      });
	    }
	  }, {
	    key: 'attachOrganisationToEcosystem',
	    value: function attachOrganisationToEcosystem(ecosystemId, organisationId) {
	      var DataAPI = this.API.one('ecosystems', ecosystemId);
	      return DataAPI.all('attach-organizations').post(organisationId);
	    }
	  }]);

	  return EcosystemService;
	}();

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var APIService = exports.APIService = ["Restangular", "ToastService", "$window", function APIService(Restangular, ToastService, $window) {
		'ngInject';
		//content negotiation

		_classCallCheck(this, APIService);

		var headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/x.laravel.v1+json'
		};

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api/v1').setDefaultHeaders(headers).setErrorInterceptor(function (response) {
				if (response.status === 422 || response.status === 401) {
					for (var error in response.data.errors) {
						return ToastService.error(response.data.errors[error][0]);
					}
				}
				if (response.status === 500) {
					return ToastService.error(response.statusText);
				}
			}).addFullRequestInterceptor(function (element, operation, what, url, headers) {
				var token = $window.localStorage.satellizer_token;
				if (token) {
					headers.Authorization = 'Bearer ' + token;
				}
			});
		});
	}];

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DialogService = exports.DialogService = function () {
	    DialogService.$inject = ["$mdDialog"];
	    function DialogService($mdDialog) {
	        'ngInject';

	        _classCallCheck(this, DialogService);

	        this.$mdDialog = $mdDialog;
	    }

	    _createClass(DialogService, [{
	        key: 'fromTemplate',
	        value: function fromTemplate(template, options) {
	            if (!template) {
	                return false;
	            }

	            if (!options) {
	                options = {};
	            }

	            options.templateUrl = './views/dialogs/' + template + '/' + template + '.dialog.html';

	            return this.$mdDialog.show(options);
	        }
	    }, {
	        key: 'hide',
	        value: function hide(params) {
	            return this.$mdDialog.hide(params);
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            return this.$mdDialog.cancel();
	        }
	    }, {
	        key: 'alert',
	        value: function alert(title, content, params) {
	            var alert = this.$mdDialog.alert(params).title(title).content(content).ariaLabel(content).ok('Ok');

	            this.$mdDialog.show(alert);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(title, content, params) {
	            var confirm = this.$mdDialog.confirm(params).title(title).content(content).ariaLabel(content).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(confirm);
	        }
	    }, {
	        key: 'prompt',
	        value: function prompt(title, content, placeholder, params) {
	            var prompt = this.$mdDialog.prompt(params).title(title).textContent(content).placeholder(placeholder).ariaLabel(placeholder).ok('Ok').cancel('Cancel');

	            return this.$mdDialog.show(prompt);
	        }
	    }]);

	    return DialogService;
	}();

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToastService = exports.ToastService = function () {
		ToastService.$inject = ["$mdToast"];
		function ToastService($mdToast) {
			'ngInject';

			_classCallCheck(this, ToastService);

			this.$mdToast = $mdToast;

			this.delay = 6000;
			this.position = 'top right';
			this.action = 'OK';
		}

		_createClass(ToastService, [{
			key: 'show',
			value: function show(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).action(this.action).hideDelay(this.delay));
			}
		}, {
			key: 'error',
			value: function error(content) {
				if (!content) {
					return false;
				}

				return this.$mdToast.show(this.$mdToast.simple().content(content).position(this.position).theme('warn').action(this.action).hideDelay(this.delay));
			}
		}]);

		return ToastService;
	}();

/***/ })
/******/ ]);