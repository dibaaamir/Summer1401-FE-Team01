import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
    @Input() public options!: Array<string>;
    @Input() public selectedIndex!: number;

    @Output() public selectedIndexChange = new EventEmitter<number>();
}
