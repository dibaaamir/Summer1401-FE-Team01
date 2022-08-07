import {CategoriesComponent} from './categories.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CategoriesComponent', () => {
    let fixture: ComponentFixture<CategoriesComponent>;
    let component: CategoriesComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CategoriesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
