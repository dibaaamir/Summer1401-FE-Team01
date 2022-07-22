import {Component} from '@angular/core';
import {Game} from '../../models/game';
import {GameImageData} from '../../models/game-image-data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public suggestionGames = this.generateSuggestionGames();

    public generateSuggestionGames(): Array<Game> {
        return new Array(5).fill(0).map(
            (_, id) =>
                new Game(
                    id,
                    'UNCHARTED™: Legacy of Thieves Collection',
                    'uncharted',
                    'در مجموعه UNCHARTED: Legacy of Thieves به دنبال میراث خود باشید و نشان خود را روی نقشه بگذارید. داستان‌سرایی هیجان‌انگیز و سینمایی Naughty Dog و بزرگترین مجموعه‌های اکشن بلاک‌باستر این مجموعه نمادین را تجربه کنید.',
                    8.7,
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
}
