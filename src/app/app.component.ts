import {Component} from '@angular/core';
import {Game} from './models/game';
import {GameImageData} from './models/game-image-data';
import {User} from './models/user';

export const currentUser = new User('user123', '');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'Summer1401-FE-Team01';
    public suggestionGames = generateSuggestionGames();
}

function generateRatings(count: number, avg: number): Map<string, number> {
    const map: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < count; i++) {
        map.set(`User ${i}`, avg);
    }
    return map;
}

function generateSuggestionGames(): Array<Game> {
    return new Array(5).fill(0).map(
        (_, id) =>
            new Game(
                id,
                'UNCHARTED™: Legacy of Thieves Collection',
                'uncharted',
                'در مجموعه UNCHARTED: Legacy of Thieves به دنبال میراث خود باشید و نشان خود را روی نقشه بگذارید. داستان‌سرایی هیجان‌انگیز و سینمایی Naughty Dog و بزرگترین مجموعه‌های اکشن بلاک‌باستر این مجموعه نمادین را تجربه کنید.',
                generateRatings(100, 8.7),
                new GameImageData(
                    ['0.webp', '1.png', '2.png', '3.jpeg'].map((v) => `assets/images/games/uncharted/${v}`),
                    0,
                    1,
                    2,
                    3
                )
            )
    );
}
