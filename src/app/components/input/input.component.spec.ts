import {InputComponent} from './input.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('InputComponent', () => {
    let fixture: ComponentFixture<InputComponent>;
    let component: InputComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InputComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    const ltrNames = ['username', 'email', 'password', 'confirm'];
    for (const name of ltrNames) {
        it(`tests dir getter - ${name} - ltr`, () => {
            testDir(name, 'ltr');
        });
    }

    const rtlNames = ['given-name', 'family-name'];
    for (const name of rtlNames) {
        it(`tests dir getter - ${name} - rtl`, () => {
            testDir(name, 'rtl');
        });
    }

    // [SECTION] Utility Functions

    const testDir = (inputName: string, expectedDir: 'ltr' | 'rtl'): void => {
        component.name = inputName;
        fixture.detectChanges();

        expect(component.dir).toEqual(expectedDir);
    };
});
