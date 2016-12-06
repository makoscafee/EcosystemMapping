class MessageDetailsController{
    constructor($scope,$log){
        'ngInject';

        //
        this.$scope = $scope;
        this.$log = $log;
        this.scopeData = this.$scope.$parent.data;
        this.$log.log("message details is executing");
        this.$log.log(this.scopeData);

    }

    $onInit(){
    }
}

export const MessageDetailsComponent = {
    templateUrl: './views/app/components/message-details/message-details.component.html',
    controller: MessageDetailsController,
    controllerAs: 'vm',
    bindings: {}
}
