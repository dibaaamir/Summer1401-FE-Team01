import {Component} from '@angular/core';

interface Category {
    title: string;
    link: string;
    image: string;
    price: number;
    rating: number;
}

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    public categories: Category[] = [
        {
            title: 'Red Dead Redemption II',
            link: 'red-dead-redemption',
            image: 'assets/images/Red-dead-redemption.webp',
            price: 250_000,
            rating: 9.8,
        },
        {
            title: 'Last Of Us II',
            link: 'Last-of-us',
            image: 'assets/images/last-of-us.webp',
            price: 300_000,
            rating: 8.5,
        },
        {
            title: 'God Of War',
            link: 'God-Of-War',
            image: 'assets/images/God-of-war.webp',
            price: 450_000,
            rating: 9.6,
        },
        {
            title: 'Hitman III',
            link: 'hitman-3',
            image: 'assets/images/Hitman-3.webp',
            price: 600_000,
            rating: 9.7,
        },
    ];
}
