export class Time {
    private _currentTime: Date;

    private _divElement: HTMLElement;
    private _spanElement: HTMLElement;


    constructor(currentTime: Date, elementClass: string) {
        this._currentTime = currentTime;
        this._divElement = document.querySelector(elementClass);
        this._spanElement = document.createElement("span");
        this._spanElement.id = "watch-time";
        this._spanElement.textContent = this._currentTime.toLocaleTimeString();

        this._divElement.append(this._spanElement);
    }
}