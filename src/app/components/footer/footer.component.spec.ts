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
    //
    // it('should click Set button', fakeAsync(() => {
    //     spyOn(component, 'backToTopButtonClickHandler');
    //     fixture2 = TestBed.createComponent(ButtonComponent);
    //     buttonComponent = fixture2.componentInstance;
    //     fixture2.detectChanges();
    //     const compiled = fixture2.debugElement.nativeElement;
    //     host.querySelector('app-button').;
    //     tick();
    //     fixture.detectChanges();
    //     fixture2.detectChanges();
    //     console.log(component);
    //     console.log(compiled);
    //     console.log(component.backToTopButtonClickHandler());
    //     expect(component.backToTopButtonClickHandler()).toHaveBeenCalled();
    // }));
});
