import {MarkerDetailsComponent} from './app/components/marker-details/marker-details.component';
import {InfoWindowComponent} from './app/components/info-window/info-window.component';
import {AppHomeComponent} from './app/components/app-home/app-home.component';
import {EcosystemMapComponent} from './app/components/ecosystem-map/ecosystem-map.component';
import {SearchAutocompleteComponent} from './app/components/search-autocomplete/search-autocomplete.component';
import {LeftMenuComponent} from './app/components/left-menu/left-menu.component';
import {SelectEcosystemComponent} from './app/components/select-ecosystem/select-ecosystem.component';
import {AppHeaderComponent} from './app/components/app-header/app-header.component';
import {AppViewComponent} from './app/components/app-view/app-view.component';
import {AppShellComponent} from './app/components/app-shell/app-shell.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('markerDetails', MarkerDetailsComponent)
	.component('infoWindow', InfoWindowComponent)
	.component('appHome', AppHomeComponent)
	.component('ecosystemMap', EcosystemMapComponent)
	.component('searchAutocomplete', SearchAutocompleteComponent)
	.component('leftMenu', LeftMenuComponent)
	.component('selectEcosystem', SelectEcosystemComponent)
	.component('appHeader', AppHeaderComponent)
	.component('appView', AppViewComponent)
	.component('appShell', AppShellComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);

