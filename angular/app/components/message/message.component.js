class MessageController{
    constructor(){
        'ngInject';

        //

    }
    click(){
      this.$log.log("click function works");
    }

    $onInit(){
    }
}

export const MessageComponent = {
    templateUrl: './views/app/components/message/message.component.html',
    controller: MessageController,
    controllerAs: 'vm',
    bindings: {

    }
}
