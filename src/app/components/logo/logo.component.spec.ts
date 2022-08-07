import {LogoComponent} from './logo.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('LogoComponent', () => {
    let fixture: ComponentFixture<LogoComponent>;
    let component: LogoComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LogoComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
