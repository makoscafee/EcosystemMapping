import {MessageComponent} from './app/components/message/message.component';
import {CreateOrganisationComponent} from './app/components/create-organisation/create-organisation.component';
import {HomeViewComponent} from './app/components/home-view/home-view.component';
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
	.component('message', MessageComponent)
	.component('createOrganisation', CreateOrganisationComponent)
	.component('homeView', HomeViewComponent)
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

