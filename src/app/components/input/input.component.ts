import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    @Input() public type!: string;
    @Input() public name!: string;
    @Input() public label!: string;
    @Input() public required: boolean = false;
}
