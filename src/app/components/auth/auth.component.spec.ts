import {AuthComponent} from './auth.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('AuthComponent', () => {
    let fixture: ComponentFixture<AuthComponent>;
    let component: AuthComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests isInLoginView - default', () => {
        expect(component.isInLoginView).toBeTrue();
    });

    for (const isInLoginView of [true, false]) {
        it(`tests toggleIsInLoginView - ${isInLoginView} => ${!isInLoginView}`, () => {
            component.isInLoginView = isInLoginView;
            fixture.detectChanges();

            component.toggleIsInLoginView();
            fixture.detectChanges();

            expect(component.isInLoginView).toBe(!isInLoginView);
        });
    }
});
