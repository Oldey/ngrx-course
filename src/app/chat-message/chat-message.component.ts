import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MessageVM } from '../message-section/message.vm';

@Component({
    selector: 'nc-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.styl'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent {

    @Input()
    message: MessageVM;

}
