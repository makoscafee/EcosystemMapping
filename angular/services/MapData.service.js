export class MapDataService {
    constructor(EcosystemService, $log) {
        'ngInject';

        //
        this.organizationPromise = null;
        this.organizationData = null;
        this.EcosystemService = EcosystemService;
        this.$log = $log;
    }
    initialData(ecosystemId) {
        if (ecosystemId) {
            this.organizationPromise = this.EcosystemService.getOrganisation(ecosystemId);
        }
    }

    getInitialData() {
        return this.organizationPromise;
    }

    getOrganizationData() {
        return this.organizationData;
    }

    setOrganizationData(data) {
        this.organizationData = data;
    }

}
