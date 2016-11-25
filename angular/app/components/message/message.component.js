class MessageController{
    constructor(){
        'ngInject';

        //

    }
    say(){
      this.$log.log("say function works");
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
