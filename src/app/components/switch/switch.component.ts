import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
    @Input() public trueOptionTitle!: string;
    @Input() public falseOptionTitle!: string;
    @Input() public value!: boolean;

    @Output() public valueChange = new EventEmitter<boolean>();
}
