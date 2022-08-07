import {CarouselComponent} from './carousel.component';
import {ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../../pages/home/home.component';

describe('CarouselComponent', () => {
    let fixture: ComponentFixture<CarouselComponent>;
    let component: CarouselComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, CarouselItemModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        component.games = HomeComponent.suggestionGamesStatic;
        fixture.detectChanges();
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests css classes being set by index properly - default', () => {
        component.ngAfterViewInit();
        fixture.detectChanges();

        testCurrentClassNames(0);
    });

    it('tests css classes being set by index properly - manual', () => {
        const index = 2;
        component.currentIndex = index;
        fixture.detectChanges();
        testCurrentClassNames(index);
    });

    it('tests auto-next interval', fakeAsync(() => {
        component.ngAfterViewInit();
        fixture.detectChanges();
        discardPeriodicTasks();

        testCurrentClassNames(0);

        tick(component.SLIDE_TIMEOUT);
        testCurrentClassNames(1);
    }));

    it('tests next-button sets currentIndex properly', () => {
        testForcefulSetIndexSetsProperly();
    });

    it('tests next-button resets interval', fakeAsync(() => {
        testForcefulSetIndexHandlesInterval();
    }));

    it('tests bullet click sets currentIndex properly', () => {
        testForcefulSetIndexSetsProperly(3);
    });

    it('tests bullet click resets interval', fakeAsync(() => {
        testForcefulSetIndexHandlesInterval(3);
    }));

    // [SECTION] Utility Functions

    const testCurrentClassNames = (index: number): void => {
        fixture.detectChanges();

        expect(component.currentIndex).toEqual(index);

        const bullets = host.querySelectorAll('.bullets > i');
        expect(bullets.length).not.toEqual(0);

        bullets.forEach((el, i) => {
            expect(el).toBeTruthy();

            expect(el.className).toEqual(i === index ? 'current' : '');
        });

        const firstSlide = host.querySelector<HTMLElement>('.slides > app-carousel-item > .slide');
        expect(firstSlide).toBeTruthy();

        const actualCurrentIndex = firstSlide!.style.getPropertyValue('--current-index');
        expect(actualCurrentIndex).not.toBeNaN();
        expect(actualCurrentIndex).toEqual(index.toString());
    };

    const testForcefulSetIndexSetsProperly = (index?: number): void => {
        component.ngAfterViewInit();
        fixture.detectChanges();

        testCurrentClassNames(0);

        if (!!index) component.setIndexByClick(index);
        else component.nextButtonClickHandler();

        fixture.detectChanges();

        if (!!index) testCurrentClassNames(index);
        else testCurrentClassNames(1);
    };

    const testForcefulSetIndexHandlesInterval = (index?: number): void => {
        component.ngAfterViewInit();
        fixture.detectChanges();

        discardPeriodicTasks();

        // initial index (0)
        testCurrentClassNames(0);

        // click "next slide" or "bullet" button after half interval
        tick(component.SLIDE_TIMEOUT / 2);

        if (!!index) component.setIndexByClick(index);
        else component.nextButtonClickHandler();

        fixture.detectChanges();

        discardPeriodicTasks();

        // index "increment" or "set" successful because of click (1)
        testCurrentClassNames(index || 1);

        // interval should reset and therefore index should stay at (1) after half interval
        tick(component.SLIDE_TIMEOUT / 2);
        fixture.detectChanges();

        // index no change (1)
        testCurrentClassNames(index || 1);

        // resetted interval should end after half interval (1)
        tick(component.SLIDE_TIMEOUT / 2);
        fixture.detectChanges();

        // index "increment" or "set" successful because of interval (2)
        testCurrentClassNames((index || 1) + 1);
    };
});
