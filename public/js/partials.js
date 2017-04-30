(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/app-header/app-header.component.html',
    '<md-content class="Page-Container DemoHeader">\n' +
    '    <div layout="row">\n' +
    '        <div flex="90" flex-offset="5" class="DemoHeader-container">\n' +
    '            <div layout="row" layout-align="space-between">\n' +
    '                <a  ui-sref="app.landing" class="DemoHeader-logo">Ecosystem Mapping</a>\n' +
    '                <md-button class="md-primary" ng-click="vm.clickMe()">click me</md-button>\n' +
    '                <div layout="row" layout-align="center stretch">\n' +
    '                    <a hide-xs class="DemoHeader-link md-subhead" href="#">Login</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '<div class="DemoHeader-spacer"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/app-shell/app-shell.component.html',
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/app-view/app-view.component.html',
    '<!-- removwd <div ui-view="header"></div> -->\n' +
    '<div ui-view="main"></div>\n' +
    '<!-- removed  <div ui-view="footer"></div> --> \n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create-event/create-event.component.html',
    '<md-input-container>\n' +
    '  <label>Event\'s Name</label>\n' +
    '  <input type="text" ng-model="vm.makeEvent.event.name" md-maxlength="40" maxlength="40" required>\n' +
    '</md-input-container>\n' +
    '\n' +
    '<!-- <md-input-container>\n' +
    '  <label>Organisation Website</label>\n' +
    '  <input type="text" ng-model="color">\n' +
    '</md-input-container> -->\n' +
    '\n' +
    '<md-input-container>\n' +
    '  <label>Event Description</label>\n' +
    '  <textarea type="text" rows="3" ng-model="vm.makeEvent.event.description" md-maxlength="250" maxlength="250" required></textarea>\n' +
    '</md-input-container>\n' +
    '\n' +
    '<md-input-container>\n' +
    '  <label>Event\'s Venue</label>\n' +
    '  <input type="text" ng-model="vm.makeEvent.event.venue" md-maxlength="20" maxlength="20" required>\n' +
    '</md-input-container>\n' +
    '\n' +
    '\n' +
    '<md-input-container>\n' +
    ' <label class="Input_header_label md-container-ignore">Event Type</label>\n' +
    '<md-radio-group ng-model="vm.makeEvent.event.free_or_paid">\n' +
    '    <md-radio-button value="Free" class="md-primary">Free</md-radio-button>\n' +
    '    <md-radio-button value="Paid" class="md-primary"> Paid </md-radio-button>\n' +
    '</md-radio-group>\n' +
    '</md-input-container>\n' +
    '\n' +
    '<md-autocomplete flex required\n' +
    '          md-input-name="autocompleteField"\n' +
    '          md-input-minlength="0"\n' +
    '          md-input-maxlength="18"\n' +
    '          md-no-cache="vm.noCache"\n' +
    '          md-selected-item="vm.selectedItem"\n' +
    '          md-search-text="vm.searchText"\n' +
    '          md-selected-item-change="vm.selectedItemChange(item)"\n' +
    '          md-items="item in vm.querySearch(vm.searchText)"\n' +
    '          md-item-text="item.name"\n' +
    '          md-require-match\n' +
    '          md-floating-label="Select an Organization">\n' +
    '        <md-item-template>\n' +
    '          <span md-highlight-text="vm.searchText">{{item.name}}</span>\n' +
    '        </md-item-template>\n' +
    '        <md-not-found>\n' +
    '           No Ecosystems matching "{{vm.searchText}}" were found.\n' +
    '        </md-not-found>\n' +
    '        <div ng-messages="autocompleteField.$error" ng-if="autocompleteField.$touched">\n' +
    '          <div ng-message="required">You <b>must</b> have a favorite state.</div>\n' +
    '          <div ng-message="md-require-match">Please select an existing state.</div>\n' +
    '          <div ng-message="minlength">Your entry is not long enough.</div>\n' +
    '          <div ng-message="maxlength">Your entry is too long.</div>\n' +
    '        </div>\n' +
    '  </md-autocomplete>\n' +
    '\n' +
    '<!-- <md-datepicker ng-model="vm.makeEvent.event.start_date" md-placeholder="Start Date"></md-datepicker> -->\n' +
    '<md-input-container>\n' +
    '        <label class="Input_header_label md-container-ignore">Start Date</label>\n' +
    '        <input mdc-datetime-picker="" date="true" time="true" type="text" id="datetime"\n' +
    '               placeholder="Date"\n' +
    '               show-todays-date="true"\n' +
    '               min-date="vm.date"\n' +
    '               format=\'YYYY-MM-DD HH:mm:ss\'\n' +
    '               ng-model="vm.makeEvent.event.start_date"\n' +
    '               class="md-input"\n' +
    '               required\n' +
    '               readonly="vm.readonly">\n' +
    '</md-input-container>\n' +
    '<md-input-container>\n' +
    '        <label class="Input_header_label md-container-ignore">End Date</label>\n' +
    '        <input mdc-datetime-picker="" date="true" time="true" type="text" id="datetime"\n' +
    '               placeholder="Date"\n' +
    '               show-todays-date="true"\n' +
    '               min-date="vm.date"\n' +
    '               format=\'YYYY-MM-DD HH:mm:ss\'\n' +
    '               ng-model="vm.makeEvent.event.end_date"\n' +
    '               class="md-input"\n' +
    '               required\n' +
    '               readonly="vm.readonly">\n' +
    '</md-input-container>\n' +
    '<md-button ng-click="vm.addEvent()" class="md_button_submit">submit</md-button>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create-organisation/create-organisation.component.html',
    '<div layout="row" class="organization_form_container">\n' +
    '    <!-- row for form -->\n' +
    '    <div >\n' +
    '        <div layout="column">\n' +
    '            <md-input-container>\n' +
    '                <label class="Input_required">Organisation Name</label>\n' +
    '                <input type="text" ng-model="vm.or.name" required>\n' +
    '                <div ng-messages="colorForm.favoriteColor.$error">\n' +
    '                  <div ng-message="required">Organisation\'s name is required!</div>\n' +
    '                </div>\n' +
    '            </md-input-container>\n' +
    '            <md-input-container>\n' +
    '                <label class="Input_required" >Organisation Description</label>\n' +
    '                <textarea type="text" rows="3" ng-model="vm.or.description" required></textarea>\n' +
    '                <div ng-messages="colorForm.favoriteColor.$error">\n' +
    '                  <div ng-message="required">Organisation\'s description is required!</div>\n' +
    '                </div>\n' +
    '            </md-input-container>\n' +
    '            <md-input-container>\n' +
    '                <label class="Input_required">Organisation Adress</label>\n' +
    '                <input type="text" ng-model="vm.or.address" required>\n' +
    '                <div ng-messages="colorForm.favoriteColor.$error">\n' +
    '                  <div ng-message="required">Organisation\'s address is required!</div>\n' +
    '                </div>\n' +
    '            </md-input-container>\n' +
    '            <label class="descriptionlabel">Click on the Map, to obtain Organisation\'s Location</label>\n' +
    '            <div layout="row">\n' +
    '                <md-input-container>\n' +
    '                    <label class="Input_required">latitude</label>\n' +
    '                    <input type="text" ng-model="vm.org.lat" required disabled>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container >\n' +
    '                    <label class="Input_required">longitude</label>\n' +
    '                    <input type="text" ng-model="vm.org.long" required disabled>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '\n' +
    '            <md-input-container>\n' +
    '             <label class="Input_required Input_header_label md-container-ignore">Select a role</label>\n' +
    '             <md-radio-group ng-model="vm.or.role_id" placeholder="Select a role">\n' +
    '               <md-radio-button ng-repeat="opt in vm.allRoles" ng-value="opt.id" aria-label="{{ opt.name }}" required>\n' +
    '                      {{ opt.name }}\n' +
    '               </md-radio-button>\n' +
    '             </md-radio-group>\n' +
    '\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <md-input-container>\n' +
    '             <label class="Input_required Input_header_label md-container-ignore">Select a sector(s)</label>\n' +
    '             <ul>\n' +
    '              <li ng-repeat="sector in vm.allSectors" class="Details__options-list__item">\n' +
    '                <md-checkbox class="Organization_sector_checkbox" aria-label="{{ sector.name }}" ng-checked="vm.checkIfExists(sector.id, vm.selectedSectors)" ng-click="vm.toggleCheckBox(sector.id, vm.selectedSectors, sector.name)">\n' +
    '                  {{ sector.name }}\n' +
    '                </md-checkbox>\n' +
    '              </li>\n' +
    '              <li>{{vm.or.sector_id}}</li>\n' +
    '             </ul>\n' +
    '            </md-input-container>\n' +
    '            <md-input-container ng-if="vm.isOtherSectorSelected">\n' +
    '                <label>Please specify</label>\n' +
    '                <input type="text" ng-model="vm.otherSectorDescription" >\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <md-input-container>\n' +
    '                <label>Organisation Website</label>\n' +
    '                <input type="text" ng-model="vm.or.website" >\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <md-input-container>\n' +
    '                <label>Organisation Tin Number</label>\n' +
    '                <input type="text" ng-model="vm.or.tin_number">\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <md-input-container>\n' +
    '                <label>Target Group</label>\n' +
    '                <input type="text" ng-model="vm.or.target_group">\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <md-datepicker ng-model="vm.or.date_founded" md-placeholder="Date Founded"></md-datepicker>\n' +
    '            <md-datepicker ng-model="vm.or.organisation.date_registered" md-placeholder="Data Registered"></md-datepicker>\n' +
    '\n' +
    '\n' +
    '         <md-button ng-click="vm.addOrganisation()" class="md_button_submit">submit</md-button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create-project/create-project.component.html',
    '<md-input-container>\n' +
    '  <label>Project\'s Name</label>\n' +
    '  <input type="text" ng-model="vm.makeProject.project.name" md-maxlength="30" maxlength="30">\n' +
    '</md-input-container>\n' +
    '\n' +
    '<!-- <md-input-container>\n' +
    '  <label>Organisation Website</label>\n' +
    '  <input type="text" ng-model="color">\n' +
    '</md-input-container> -->\n' +
    '\n' +
    '<md-input-container>\n' +
    '  <label>Project Description</label>\n' +
    '  <input type="text" ng-model="vm.makeProject.project.description" md-maxlength="250" maxlength="250">\n' +
    '</md-input-container>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<md-input-container>\n' +
    '  <!-- <md-select ng-model="vm.makeProject.organisationId" placeholder="Select an Organisation">\n' +
    '    <md-option ng-value="opt.id" ng-repeat="opt in vm.allOrganisations">{{ opt.name }}</md-option>\n' +
    '  </md-select> -->\n' +
    '  <md-autocomplete flex required\n' +
    '            md-input-name="autocompleteField"\n' +
    '            md-input-minlength="0"\n' +
    '            md-input-maxlength="18"\n' +
    '            md-no-cache="vm.noCache"\n' +
    '            md-selected-item="vm.selectedItem"\n' +
    '            md-search-text="vm.searchText"\n' +
    '            md-selected-item-change="vm.selectedItemChange(item)"\n' +
    '            md-items="item in vm.querySearch(vm.searchText)"\n' +
    '            md-item-text="item.name"\n' +
    '            md-require-match\n' +
    '            md-floating-label="Select an Organization">\n' +
    '          <md-item-template>\n' +
    '            <span md-highlight-text="vm.searchText">{{item.name}}</span>\n' +
    '          </md-item-template>\n' +
    '          <md-not-found>\n' +
    '             No Ecosystems matching "{{vm.searchText}}" were found.\n' +
    '          </md-not-found>\n' +
    '          <div ng-messages="autocompleteField.$error" ng-if="autocompleteField.$touched">\n' +
    '            <div ng-message="required">You <b>must</b> have a favorite state.</div>\n' +
    '            <div ng-message="md-require-match">Please select an existing state.</div>\n' +
    '            <div ng-message="minlength">Your entry is not long enough.</div>\n' +
    '            <div ng-message="maxlength">Your entry is too long.</div>\n' +
    '          </div>\n' +
    '    </md-autocomplete>\n' +
    '</md-input-container>\n' +
    '\n' +
    '<md-datepicker ng-model="vm.makeProject.project.start_date" md-placeholder="Start Date"></md-datepicker>\n' +
    '<md-datepicker ng-model="vm.makeProject.project.end_date" md-placeholder="End Data"></md-datepicker>\n' +
    '<md-button ng-click="vm.addProject()" class="md_button_submit">submit</md-button>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/ecosystem-map/ecosystem-map.component.html',
    '<div layout="column" class="full-map">\n' +
    '  <leaflet lf-center="vm.darEsSalaam" defaults="vm.defaults" markers="vm.markers" width="100%" height="100vh"></leaflet>\n' +
    '  <md-fab-speed-dial ng-hide="false" md-direction="down" md-open="false" class="md-scale md-fab-top-left-map" ng-class="{ \'md-hover-full\': false }" ng-mouseenter="vm.fab.isOpen=true" ng-mouseleave="vm.fab.isOpen=false">\n' +
    '      <md-fab-trigger>\n' +
    '        <md-button aria-label="menu" class="md-fab md-warn">\n' +
    '          <md-icon md-svg-src="img/icons/add.svg" aria-label="menu"></md-icon>\n' +
    '        </md-button>\n' +
    '      </md-fab-trigger>\n' +
    '\n' +
    '      <md-fab-actions>\n' +
    '        <md-list-item ng-repeat="item in vm.fab.items" class="choice-list">\n' +
    '          <span ng-click="vm.openCreatePage($event, item)">\n' +
    '            <md-button aria-label="{{item.name}}" class="md-fab md-raised md-mini md-primary">\n' +
    '              <md-icon md-svg-src="{{item.icon}}" aria-label="{{item.name}}"></md-icon>\n' +
    '            </md-button>\n' +
    '            <span class="bug"> {{ item.name }} </span>\n' +
    '          </span>\n' +
    '        </md-list-item>\n' +
    '      </md-fab-actions>\n' +
    '    </md-fab-speed-dial>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forgot-password/forgot-password.component.html',
    '<form ng-submit="vm.submit()" class="ForgotPassword-form">\n' +
    '    <div>\n' +
    '        <md-input-container>\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="vm.email">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/get-location/get-location.component.html',
    '\n' +
    '    <leaflet lf-center="vm.darEsSalaam" markers="vm.markers" event-broadcast="vm.events" width="100%" height="100vh"></leaflet>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/home-view/home-view.component.html',
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/left-menu/left-menu.component.html',
    '\n' +
    '    <div class="wrapper">\n' +
    '      <div class="Sidebar_wrapper">\n' +
    '          <aside class="Sidebar_menu" layout="column">\n' +
    '              <nav role="navigation" class="Sidebar__nav">\n' +
    '                  <ul class="Sidebar__nav-list">\n' +
    '                      <li class="Sidebar__nav-list__item Sidebar-menu ion-ios-drag" ng-click="vm.showOrganisations()"></li>\n' +
    '                      <li class="Sidebar__nav-list__item ion-ios-home"  ng-click="vm.showOrganisations()"></li>\n' +
    '                      <label class="Sidebar_label">Home</label>\n' +
    '                      <li class="Sidebar__nav-list__item ion-android-calendar" ng-click ="vm.showEvents()"></li>\n' +
    '                      <label class="Sidebar_label">Events</label>\n' +
    '                      <li class="Sidebar__nav-list__item Sidebar__nav-list__item ion-clipboard" ng-click="vm.showProjects()"></li>\n' +
    '                      <label class="Sidebar_label">Projects</label>\n' +
    '                    </ul>\n' +
    '\n' +
    '                    <div class="feedback_button">\n' +
    '                     <ul class="Sidebar__nav-list">\n' +
    '                    <li class="Sidebar__nav-list__item Sidebar__nav-list__item  FeedbackLabel " >\n' +
    '                     <a href="https://docs.google.com/forms/d/e/1FAIpQLScHnzw5-AyIJeaiE2mmn-EduwoEE9Qh0gXdp5NEOvnfaP04cg/viewform?embedded=true" target="_blank" class="ion-speakerphone FeedbackLabel" ></a></li>\n' +
    '                    <label class="Sidebar_label FeedbackLabel">Feedback</label>\n' +
    '                   </ul>\n' +
    '                    </div>\n' +
    '                  </nav>\n' +
    '              </aside>\n' +
    '              <div layout="column" class="Sidebar_data">\n' +
    '               <!-- Heading Container -->\n' +
    '                <div class="Sidebar_heading" layout="row">\n' +
    '                 <!-- <img src="img/icons/home.png"/>-->\n' +
    '                <!-- <md-button class="md-fab" aria-label="Eat cake"  ui-sref=".create">+</md-button> -->\n' +
    '                  <h3>{{vm.selectedEcosystem.name}}</h3>\n' +
    '                </div>\n' +
    '               <!-- Heading Container -->\n' +
    '                <div  ui-view="side" class="Sidebar_content">\n' +
    '                </div>\n' +
    '                </div>\n' +
    '          </div>\n' +
    '          <section class="Details__body-Content">\n' +
    '            <ecosystem-map markers = vm.markers></ecosystem-map>\n' +
    '          </section>\n' +
    '    </div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()">\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="LoginForm-submit md-primary md-raised">Log in</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/message/message.component.html',
    '\n' +
    '<div>\n' +
    '  <p class="Event_tooltip_header"> {{vm.myMarkerData.name}} </p>\n' +
    '  <p class="Event_tooltip_description">{{vm.myMarkerData.description}}</p>\n' +
    '  <p class="Event_tooltip_readmore">\n' +
    '   <md-button ng-click="vm.getClicked()" class="Event_tooltip_readmore_button">Read more ...</md-button>\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/message-details/message-details.component.html',
    '<!-- <md-content class="Page-container">\n' +
    '<h2> {{vm.scopeData.name}} </h2>\n' +
    '<p class="details">{{vm.scopeData.description}}</p>\n' +
    '<md-button ng-click="vm.back()">back modified</md-button>\n' +
    '</md-content> -->\n' +
    '\n' +
    '<section class="Details">\n' +
    '  <div class="Details__body">\n' +
    '    <section class="Details__body-side_bar Event-section" >\n' +
    '\n' +
    '      <h2 class="Events-title">{{vm.scopeData.name}}</h2>\n' +
    '          <md-card class= " Event-card">\n' +
    '             <md-card-content>\n' +
    '\n' +
    '               <div>\n' +
    '              <!--    <h1 class="Card-title">Sector: <span ng-repeat="sector in vm.scopeData.sectors.data">{{sector.name}}</span> </h1>\n' +
    '                  <h1 class="Card-title">Target Group: <span>{{vm.scopeData.target_group}}</span></h1>\n' +
    '                  <h1 class="Card-title">Partners: </h1>\n' +
    '\n' +
    '                 -->\n' +
    '                  <p class="event-details-title"><b>Event Description: </b></p>\n' +
    '                  <p class="event-details-decription">{{vm.scopeData.description}}</p>\n' +
    '                   <p><span class="event-details-title">Venue: </span>{{vm.scopeData.venue}}</p>\n' +
    '                   <p><span class="title"><b class="event-details-title">Event Type:</b>  {{vm.scopeData.free_or_paid}}</span></p>\n' +
    '               </div>\n' +
    '             </md-card-content>\n' +
    '         </md-card>\n' +
    '    </section>\n' +
    '</div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/organisation-details/organisation-details.component.html',
    '\n' +
    '<section class="Details Detail-height">\n' +
    '  <div class="Details__body">\n' +
    '    <section class="Details__body-side_bar Event-section" >\n' +
    '\n' +
    '      <h2 class="Events-title">{{vm.menuOrganisation.name}}</h2>\n' +
    '      <h4 class="Events-title"><a href="http://{{vm.menuOrganisation.website}}" target="_blank">{{vm.menuOrganisation.website}}</a></h4>\n' +
    '          <md-card class= " Event-card">\n' +
    '             <md-card-content class="organization">\n' +
    '                <p class="Organisation-description">{{vm.menuOrganisation.description}}</p>\n' +
    '             </md-card-content>\n' +
    '             <div>\n' +
    '                <h1 class="Card-title organization"><span class="card-sector-title"> Sector:</span> <span ng-repeat="sector in vm.menuOrganisation.sectors.data" class="Card-sector-description">{{sector.name}}</span></h1>\n' +
    '                <h1 class="Card-title organization"><span class="card-sector-title">Target Group:</span> <span class="Card-sector-description">{{vm.menuOrganisation.target_group}}</span></h1>\n' +
    '             </div>\n' +
    '             <md-card-actions layout="column">\n' +
    '               <div layout="row">\n' +
    '                 <div layout="row">\n' +
    '                     <i class="Card-icon ion-ios-location carrat-organization-info"></i><p class="organization_info"><span ng-repeat="location in vm.menuOrganisation.locations.data">{{location.address}}</span></p>\n' +
    '                 </div>\n' +
    '                 <div layout="row">\n' +
    '                   <i class=" Card-icon ion-android-locate carrat-organization-info"></i><p class="organization_info">{{vm.menuOrganisation.date_founded.date}}</p>\n' +
    '                 </div>\n' +
    '               </div>\n' +
    '             </md-card-actions>\n' +
    '        </md-card>\n' +
    '    </section>\n' +
    '</div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/organisation-msg/organisation-msg.component.html',
    '<div>\n' +
    '  <p class="Organization_tooltip_header">{{vm.mapOrganisation.name}}</p>\n' +
    '  <p class="Organization_tooltip_description">{{vm.mapOrganisation.description}}</p>\n' +
    '  <p class="Organization_readmore">\n' +
    '  <md-button ng-click="vm.viewOrganisation()" class="Organization_readmore_button">more details ...</md-button>\n' +
    ' </p>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/project-details/project-details.component.html',
    '<!-- <div class="details">\n' +
    '  <p>This shows project name and description</p>\n' +
    '  <p>{{vm.mapProject.name}}</p>\n' +
    '  <p>{{vm.mapProject.description}}</p>\n' +
    '  <md-button ng-click="vm.back()">back</md-button>\n' +
    '</div> -->\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '<section class="Details">\n' +
    '  <div class="Details__body">\n' +
    '    <section class="Details__body-side_bar Event-section" >\n' +
    '\n' +
    '      <h2 class="Events-title">{{vm.mapProject.name}}</h2>\n' +
    '          <md-card class= " Event-card">\n' +
    '             <md-card-content>\n' +
    '               <div>\n' +
    '                  <h1 class="Card-title">Sector: Education</h1>\n' +
    '                  <h1 class="Card-title">Target Group: Youth</h1>\n' +
    '                  <h1 class="Card-title">Partners: </h1>\n' +
    '                  <p class="Event-description">{{vm.mapProject.description}}</p>\n' +
    '               </div>\n' +
    '             </md-card-content>\n' +
    '             <md-card-actions layout="column">\n' +
    '               <div layout="row">\n' +
    '                 <i class="Card-icon ion-ios-location"></i><p>location</p>\n' +
    '               </div>\n' +
    '               <div layout="row">\n' +
    '                 <i class=" Card-icon ion-ios-clock"></i><p>Duration</p>\n' +
    '               </div>\n' +
    '             </md-card-actions>\n' +
    '            </md-card>\n' +
    '    </section>\n' +
    '</div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/project-msg/project-msg.component.html',
    '<div>\n' +
    '  <p class="Project_tooltip_header"> {{vm.myMarkerData.name}} </p>\n' +
    '  <p class="Project_tooltip_description">{{vm.myMarkerData.description}}</p>\n' +
    '  <p class="Project_tooltip_readmore">\n' +
    '   <md-button ng-click="vm.projectDetails()" class="Project_tooltip_readmore_button">Read more ...</md-button>\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/register-form/register-form.component.html',
    '<form ng-submit="vm.register()">\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Name</label>\n' +
    '			<input type="text" ng-model="vm.name">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="RegisterForm-submit md-primary md-raised">Register</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reset-password/reset-password.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '\n' +
    '    <div ng-if="!vm.isValidToken" layout="row" layout-align="center center">\n' +
    '        <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="vm.isValidToken">\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="vm.password">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Confirm Password</label>\n' +
    '            <input type="password" ng-model="vm.password_confirmation">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/search-autocomplete/search-autocomplete.component.html',
    '\n' +
    '\n' +
    '    <div>\n' +
    '      <div layout="row" layout-align="center center" layout-fill style="min-height: 500px">\n' +
    '          <div flex="30">\n' +
    '            <!-- Input auto-complete -->\n' +
    '               <md-content class="md-padding">\n' +
    '                  <form ng-submit="$event.preventDefault()">\n' +
    '                     <md-autocomplete\n' +
    '                        ng-disabled="vm.isDisabled"\n' +
    '                        md-no-cache="vm.noCache"\n' +
    '                        md-selected-item="vm.selectedItem"\n' +
    '                        md-search-text="vm.searchText"\n' +
    '                         md-items="item in vm.querySearch(vm.searchText)"\n' +
    '                        md-item-text="item.name"\n' +
    '                        md-search-text-change="vm.searchTextChange(vm.searchText)"\n' +
    '                         md-selected-item-change="vm.selectedItemChange(item)"\n' +
    '                        md-min-length="0"\n' +
    '                        md-autoselect="true"\n' +
    '                        md-menu-class = "selectorInput"\n' +
    '                        placeholder="Select an Ecosystem">\n' +
    '                        <md-item-template>\n' +
    '                           <span md-highlight-text="vm.searchText" md-highlight-flags="^i">{{item.name}}</span>\n' +
    '                        </md-item-template>\n' +
    '                        <md-not-found>\n' +
    '                           No Ecosystems matching "{{vm.searchText}}" were found.\n' +
    '                        </md-not-found>\n' +
    '                     </md-autocomplete>\n' +
    '               </md-content>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '          <!-- search button -->\n' +
    '       <md-button class="md-raised md-primary" ng-click="vm.home()">Select</md-button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/select-ecosystem/select-ecosystem.component.html',
    '\n' +
    '<div class="box">\n' +
    '  <div class="inner">\n' +
    '    <search-autocomplete ></search-autocomplete>\n' +
    '  </div>\n' +
    '  <div class="notext"></div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create/create.page.html',
    '\n' +
    '<div ng-cloak>\n' +
    '  <div ui-view="create"></div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create-event/create-event.page.html',
    '<div class="header">Create event here</div>\n' +
    '<create-event class="Create_event_content"></create-event>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create-project/create-project.page.html',
    '<div class="header">Create project here</div>\n' +
    '<create-project  class="Create_project_content"></create-project>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/createOrganisation/createOrganisation.page.html',
    '<div class="header">Create Organisation here</div>\n' +
    '<create-organisation></create-organisation>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/details/details.page.html',
    '<message-details></message-details>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/event-view/event-view.page.html',
    '<div ui-view="details" class="Full_page"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/events/events.page.html',
    '<section class="Details">\n' +
    '    <div class="Details__body">\n' +
    '        <section class="Details__body-side_bar Event-section">\n' +
    '\n' +
    '            <h3 class="Events-title">Events</h3>\n' +
    '            <div ng-repeat="event in vm.events | orderBy : \'start_date.date\'">\n' +
    '                <md-card class="card" >\n' +
    '                    <div class="image">\n' +
    '                        <!-- <img src="http://i.imgur.com/td7pKHw.jpg"> -->\n' +
    '                        <span class="title">\n' +
    '                          <md-icon class="location_event_icon" md-svg-src="{{\'img/icons/location.svg\'}}" aria-label="location"></md-icon>\n' +
    '                           {{event.venue}}\n' +
    '                        </span>\n' +
    '                        <span class="free_or_paid">{{event.free_or_paid}}</span>\n' +
    '                    </div>\n' +
    '                    <div class="content">\n' +
    '                        <div class="Date_time_actions" layout="row">\n' +
    '                            <div class="" flex="30">\n' +
    '                                <span class="Event_date">{{vm.filterDate(event.start_date.date, event.end_date.date).event_date}}</span>\n' +
    '                            </div>\n' +
    '                            <md-divider class="event_divider"></md-divider>\n' +
    '                            <div class="" flex="50">\n' +
    '                                <span class="Event_date">{{vm.filterDate(event.start_date.date, event.end_date.date).event_time}}</span>\n' +
    '                            </div>\n' +
    '                            <md-divider class="event_divider"></md-divider>\n' +
    '                            <div class="Social_actions" flex="20">\n' +
    '                                <md-icon md-svg-src="{{\'img/icons/share.svg\'}}" aria-label="share"></md-icon>\n' +
    '                                <md-icon md-svg-src="{{\'img/icons/favourite.svg\'}}" aria-label="favourite"></md-icon>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <h4 class="title">{{event.name}}</h4>\n' +
    '                        <!-- <p ng-click="vm.viewEvent(event)">{{event.description}}</p>-->\n' +
    '                        <p>{{event.description}}</p>\n' +
    '                    </div>\n' +
    '                    <md-card>\n' +
    '            </div>\n' +
    '        </section>\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<md-content class="Page-Container Footer iOS-hack" layout-align="center center">\n' +
    '<md-icon md-svg-src="/img/icons/logo-grey.svg" class="Footer-logo"></md-icon>\n' +
    '<br/>\n' +
    '<br/>\n' +
    '<div class="Footer-text">\n' +
    '	An open source project by <a href="https://github.com/jadjoubran" class="Footer-link" target="_blank">Jad Joubran</a>.\n' +
    '	Design by <a href="http://nicolesaidy.com" class="Footer-link" target="_blank">Nicole Saidy</a>\n' +
    '</div>\n' +
    '<div class="Footer-text">\n' +
    '	&copy; 2016 Laravel Angular Material Starter\n' +
    '</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/forgot-password/forgot-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ForgotPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Forgot your password?</h1>\n' +
    '\n' +
    '        <forgot-password></forgot-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/get-location/get-location.page.html',
    '<md-content class="Page-container">\n' +
    '\n' +
    '    <div ng-model="vm.data">this page for routing get-location {{vm.data}}</div>\n' +
    '    <get-location></get-location>\n' +
    '\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<app-header></app-header>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/home/home.page.html',
    '\n' +
    '  <left-menu></left-menu>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '\n' +
    '<select-ecosystem></select-ecosystem>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/location/location.page.html',
    '<md-content class="Page-container">\n' +
    '\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="Login-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Log in to your account</h1>\n' +
    '\n' +
    '        <login-form></login-form>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/organisation-d/organisation-d.page.html',
    '<organisation-details></organisation-details>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/organisation-view/organisation-view.page.html',
    '<div ui-view="organisation" class="Sidebar_organisation_content"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/pins/pins.page.html',
    '<section class="Details">\n' +
    '    <!--<div class="Details__body">-->\n' +
    '        <section class="Details__body-side_bar">\n' +
    '         <!--<span> Filters</span>-->\n' +
    '            <ul class="List-menu" >\n' +
    '                <li class="List-item" ng-model = "vm.countedRoles" ng-repeat="role in vm.roles track by $index" >\n' +
    '                    <div class="Media" ng-model = "vm.roleCount">\n' +
    '                        <div class="Media__body Media u-flex-center--v">\n' +
    '                            <div layout="row">\n' +
    '                              <img class="role-icon" ng-src="{{role.icon}}" ></img>\n' +
    '                              <h5 class="Role-description">{{role.name}}</h5>\n' +
    '                            </div>\n' +
    '                            <div class="Media__side Media__side--right">\n' +
    '                              <md-chip>{{vm.countedRoles[role.id]}}</md-chip>\n' +
    '                              <md-checkbox aria-label="checkbox" class="md-secondary" ng-change="vm.setRoleArray(role.id)" ng-model="vm.isRoleChecked[role.id]"  ></md-checkbox>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '            <!-- <md-divider class="divide-sector-role"></md-divider> -->\n' +
    '            <div class="List-menu-sector">\n' +
    '              <h1 class="Sector-heading">Sector</h1>\n' +
    '            <ul>\n' +
    '                <li class="Details__options-list__item" ng-repeat="sector in vm.sectors track by $index">\n' +
    '                    <div class="Media">\n' +
    '                        <div layout="row">\n' +
    '                          <div>\n' +
    '                            <md-checkbox aria-label="checkbox" class="md-secondary" ng-change="vm.setSectorArray(sector.id)" ng-model="vm.isSectorChecked[sector.id]"></md-checkbox>\n' +
    '                          </div>\n' +
    '                            <div class="Sector-name">{{sector.name}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </section>\n' +
    '    <!--</div>-->\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/project-d/project-d.page.html',
    '<project-details></project-details>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/project-view/project-view.page.html',
    '<div ui-view="projects"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/projects/projects.page.html',
    '\n' +
    '\n' +
    '<section class="Details">\n' +
    '  <div class="Details__body">\n' +
    '    <section class="Details__body-side_bar Event-section" >\n' +
    '\n' +
    '      <h1 class="Events-title">Projects</h2>\n' +
    '        <div ng-repeat="event in vm.events | orderBy : \'start_date.date\'">\n' +
    '          <md-card class= " Project-card" ng-click="vm.viewProject(event)">\n' +
    '             <md-card-content layout="row" class="Project_display_card">\n' +
    '               <div flex="60" class="Project_title_description">\n' +
    '                 <h1 class="Card-title">{{event.name}}</h1>\n' +
    '                 <p class="Event-description">{{event.description}}</p>\n' +
    '               </div>\n' +
    '               <div flex="40" class="Project_sector_targetGroup">\n' +
    '                <p><h5><b>Sector:</b>Education</h5></p>\n' +
    '                <p><h5><b>Target Group:</b>Youth</h5></p>\n' +
    '               </div>\n' +
    '             </md-card-content>\n' +
    '             <md-card-actions layout="row" class="Project_duration_location">\n' +
    '               <div flex="40" layout="row">\n' +
    '                <p ><i class="Card-icon ion-ios-clock Project_duration_card_icon"></i>Duration</p>\n' +
    '               </div>\n' +
    '               <div flex="60" layout="row">\n' +
    '                 <p><i class=" Card-icon ion-ios-location Project_duration_card_icon"></i>Location</p>\n' +
    '\n' +
    '               </div>\n' +
    '             </md-card-actions>\n' +
    '            </md-card>\n' +
    '          </div>\n' +
    '    </section>\n' +
    '</div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/register/register.page.html',
    '<md-content class="Page-container">\n' +
    '	<div flex="80" flex-offset="10">\n' +
    '		<div class="Register-formContainer" layout="column" layout-align="center center">\n' +
    '			<h1 class="md-headline">Create an account</h1>\n' +
    '\n' +
    '			<register-form></register-form>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reset-password/reset-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ResetPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Reset Password</h1>\n' +
    '\n' +
    '        <reset-password></reset-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();
