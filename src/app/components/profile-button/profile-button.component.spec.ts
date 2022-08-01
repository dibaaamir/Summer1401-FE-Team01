import {ProfileButtonComponent} from './profile-button.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('ProfileButtonComponent', () => {
    let fixture: ComponentFixture<ProfileButtonComponent>;
    let component: ProfileButtonComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
