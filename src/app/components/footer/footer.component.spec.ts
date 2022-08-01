import {FooterComponent} from './footer.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ButtonComponent} from '../button/button.component';

describe('FooterComponent', () => {
    let fixture: ComponentFixture<FooterComponent>;
    //let fixture2: ComponentFixture<ButtonComponent>;
    let component: FooterComponent;
    //let buttonComponent: ButtonComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent, ButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests create p', () => {
        const p = host.querySelector('p');
        expect(p).toBeTruthy();
    });
});
