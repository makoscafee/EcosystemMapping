class MessageController{
    constructor(){
        'ngInject';

        //
        this.data = {}
    }

    $onInit(){
    }
}

export const MessageComponent = {
    templateUrl: './views/app/components/message/message.component.html',
    controller: MessageController,
    controllerAs: 'vm',
    bindings: {
      data: '<'
    }
}
