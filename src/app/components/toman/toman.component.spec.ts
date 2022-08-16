import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TomanComponent} from './toman.component';

describe('TomanComponent', () => {
    let component: TomanComponent;
    let fixture: ComponentFixture<TomanComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TomanComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TomanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
