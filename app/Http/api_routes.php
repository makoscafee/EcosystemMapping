<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::resource('event_roles', 'EventRoleAPIController');

Route::resource('event_infos', 'EventInfoAPIController');

Route::resource('events', 'EventAPIController');

Route::resource('contacts', 'ContactAPIController');

Route::resource('locations', 'LocationAPIController');

Route::resource('organizations', 'OrganizationAPIController');

Route::resource('organization_contacts', 'OrganizationContactAPIController');

Route::resource('organization_ecosystems', 'OrganizationEcosystemAPIController');


Route::resource('organization_locations', 'OrganizationLocationAPIController');

Route::resource('organization_roles', 'OrganizationRoleAPIController');

Route::resource('organization_sectors', 'OrganizationSectorAPIController');

Route::resource('organization_stages', 'OrganizationStageAPIController');

Route::resource('parents', 'ParentAPIController');

Route::resource('projects', 'ProjectAPIController');

Route::resource('project_infos', 'ProjectInfoAPIController');

Route::resource('project_roles', 'ProjectRoleAPIController');

Route::resource('roles', 'RoleAPIController');

Route::resource('sectors', 'SectorAPIController');

Route::resource('stages', 'StageAPIController');

Route::resource('contacts', 'ContactAPIController');