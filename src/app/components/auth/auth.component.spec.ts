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
});
