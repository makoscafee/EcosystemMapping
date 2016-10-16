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
Route::group(['namespace' => 'API'], function() {
    // Controllers Within The "App\Http\Controllers\Admin" Namespace
    Route::resource('event_roles', 'EventRoleAPIController');

    Route::resource('event_infos', 'EventInfoAPIController');

    Route::resource('events', 'EventAPIController');

    Route::resource('contacts', 'ContactAPIController');

    Route::resource('locations', 'LocationAPIController');

    Route::resource('organizations', 'OrganizationAPIController');
    Route::get('organizations/{id}/locations', 'OrganizationAPIController@locations');

    Route::get('organizations/{id}/contacts', 'OrganizationAPIController@contacts');

    Route::get('organization/{id}/roles', 'OrganizationAPIController@roles');

    Route::get('organization/{id}/sectors', 'OrganizationAPIController@sectors');

    Route::get('organization/{id}/stages', 'OrganizationAPIController@stages');

    Route::resource('projects', 'ProjectAPIController');

    Route::resource('project_infos', 'ProjectInfoAPIController');

    Route::resource('project_roles', 'ProjectRoleAPIController');

    Route::resource('roles', 'RoleAPIController');

    Route::resource('sectors', 'SectorAPIController');

    Route::resource('stages', 'StageAPIController');

    Route::resource('contacts', 'ContactAPIController');

    Route::resource('ecosystem_parents', 'EcosystemParentAPIController');

    Route::resource('ecosystems', 'EcosystemAPIController');

    Route::get('ecosystems/{id}/organizations', 'EcosystemAPIController@organizations');
    
    Route::get('ecosystems/{id}/locations', 'EcosystemAPIController@locations');
});
