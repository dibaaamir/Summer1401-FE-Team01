// @ts-ignore

declare global {
    interface String {
        persianNums(): string;
    }
}

String.prototype.persianNums = function (): string {
    return this.replace('1', '۱')
        .replace('2', '۲')
        .replace('3', '۳')
        .replace('4', '۴')
        .replace('5', '۵')
        .replace('6', '۶')
        .replace('7', '۷')
        .replace('8', '۸')
        .replace('9', '۹')
        .replace('0', '۰')
        .replace('.', ',');
};

export {};
