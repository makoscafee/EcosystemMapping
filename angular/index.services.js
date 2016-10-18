import {DataService} from './services/data.service';
import {OrganizationService} from './services/organization.service';
import {EcosystemService} from './services/Ecosystem.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('DataService', DataService)
	.service('OrganizationService', OrganizationService)
	.service('EcosystemService', EcosystemService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
