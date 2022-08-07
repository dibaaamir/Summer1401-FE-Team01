import {CarouselItemComponent} from './carousel-item.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from '../../pages/home/home.component';

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

        component.game = HomeComponent.suggestionGamesStatic[0];
        fixture.detectChanges();
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });
});
