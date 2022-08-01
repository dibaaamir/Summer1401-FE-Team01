import {CarouselItemComponent} from './carousel-item.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CarouselItemComponent', () => {
    let fixture: ComponentFixture<CarouselItemComponent>;
    let component: CarouselItemComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CarouselItemComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CarouselItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
