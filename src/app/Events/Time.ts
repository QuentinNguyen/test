export class Time {
    private _currentTime: Date;

    constructor(currentTime: Date, elementClass: string) {
        this._currentTime = currentTime;
        let divElement = document.querySelector(elementClass);
        let spanElement = document.createElement("span");
        spanElement.id = "watch-time";
        spanElement.textContent = this._currentTime.toLocaleTimeString();

        divElement.append(spanElement);
    }
}