export class SidemenuDataService {
    constructor(API, $log, EcosystemFilterService, EcosystemService, DataService, $localStorage) {
        'ngInject';

        //initializing services
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
    dataOrg() {

        this._dataOrgHelper().then((response) => {
            this.$localStorage.allOrganisations = response.data;
        });

        return this._dataOrgHelper();
    }

    _dataOrgHelper() {
        return this.EcosystemService.getOrganisation(this.$localStorage.ecosystem.id);
    }

    //getting all roles
    roles() {
        return this.API.all('roles').get('');
    }

    //getting all sectors
    sectors() {
        return this.API.all('sectors').get('');
    }

    //returns locations
    getOrgLocations() {
        return this.orgLocations;
    }

    //initializing the location object
    setOrgLocations(locationData) {
        let myData = [];
        angular.forEach(locationData, function(value, key) {
            myData.push(value.locations.data);
        });
        this.orgLocations = myData;
    }

    //filtering organisation by selected role
    roleArray(roleId) {

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
    sectorArray(sectorId) {
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

    orgData(data) {
        this.allOrganisations = [];
    }

    //gets map data
    getMapData() {
        return this.mapData;
    }

}
