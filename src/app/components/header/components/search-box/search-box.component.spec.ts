import {SearchBoxComponent} from './search-box.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('SearchBoxComponent', () => {
    let fixture: ComponentFixture<SearchBoxComponent>;
    let component: SearchBoxComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchBoxComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('tests create', () => {
        expect(component).toBeTruthy();
    });

    it('tests submit', () => {
        const input = host.querySelector('input');
        expect(input).toBeTruthy();

        component.searchPhrase = 'hello';
        fixture.detectChanges();

        component.submitSearch(input!);
        fixture.detectChanges();

        expect(input!.textContent).toBe('');
        expect(component.searchPhrase).toBe('');
    });
});
