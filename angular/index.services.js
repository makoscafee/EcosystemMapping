import {ProjectsService} from './services/projects.service';
import {ProjectService} from './services/project.service';
import {EventService} from './services/event.service';
import {MapDataService} from './services/mapData.service';
import {SidemenuDataService} from './services/sidemenuData.service';
import {EcosystemFilterService} from './services/ecosystemFilter.service';
import {DataService} from './services/data.service';
import {OrganizationService} from './services/organization.service';
import {EcosystemService} from './services/Ecosystem.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('ProjectsService', ProjectsService)
	.service('ProjectService', ProjectService)
	.service('EventService', EventService)
	.service('MapDataService', MapDataService)
	.service('SidemenuDataService', SidemenuDataService)
	.service('EcosystemFilterService', EcosystemFilterService)
	.service('DataService', DataService)
	.service('OrganizationService', OrganizationService)
	.service('EcosystemService', EcosystemService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
