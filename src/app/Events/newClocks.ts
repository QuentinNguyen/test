import { HourFormat } from "./HourFormat";
import { IncreaseTime } from "./IncreaseTime";
import { LightMode } from "./LightMode";
import { Modes } from "./Mode";
import { ResertAll } from "./ResetAll";


export class Newwatchs{
    private _hourformat: HourFormat;
    private _increaseTime: IncreaseTime;
    private _lightMode: LightMode;
    private _mode: Modes;
    private _resetAll : ResertAll;

    //HTMLELEMENT FOR watch
    private element : HTMLElement;

    private _divElement : HTMLElement;
    private _divElement2 : HTMLElement;
    private _divElement3 : HTMLElement;
    private _divElement4 : HTMLElement;

    private _spanElement : HTMLElement;

    private _buttonElement : HTMLElement;
    private _buttonElement2 : HTMLElement;
    private _buttonElement3 : HTMLElement;
    private _buttonElement4 : HTMLElement;
    private _buttonElement5 : HTMLElement;


    constructor(currentTime: Date, element: HTMLElement) {
        
        this.element = element;
        console.log(element);
        
        this._divElement = document.createElement("div");
        this._divElement.className = "watch-wrapper";

        this._divElement2 = document.createElement("div");
        this._divElement2.className = "watch-inner-wrapper";

        this._divElement3 = document.createElement("div");
        this._divElement3.className = "watch-body"

        this._divElement4 = document.createElement("div");
        this._divElement4.className = "list-buttons"

        this._spanElement = document.createElement("span");
        this._spanElement.id = "watch-time";
        this._spanElement.textContent = currentTime.toLocaleTimeString();

        this._buttonElement = document.createElement("button");
        this._buttonElement.id = "modes";
        this._buttonElement.textContent = "Mode"

        this._buttonElement2 = document.createElement("button");
        this._buttonElement2.id = "increaseButton";
        this._buttonElement2.textContent = "Increase"

        this._buttonElement3 = document.createElement("button");
        this._buttonElement3.id = "resetTime";
        this._buttonElement3.textContent = "Reset"

        this._buttonElement4 = document.createElement("button");
        this._buttonElement4.id = "lightMode";
        this._buttonElement4.textContent = "Light"

        this._buttonElement5 = document.createElement("button");
        this._buttonElement5.id = "hourReadibility";
        this._buttonElement5.textContent = "24h-AM/PM"
        
        this._divElement4.append(this._buttonElement);
        this._divElement4.append(this._buttonElement2);
        this._divElement4.append(this._buttonElement3);
        this._divElement4.append(this._buttonElement4);
        this._divElement4.append(this._buttonElement5);

        this._divElement3.append(this._spanElement);

        this._divElement2.append(this._divElement3);
        this._divElement2.append(this._divElement4);

        this._divElement.append(this._divElement2);

        this.element.append(this._divElement);
    }
}