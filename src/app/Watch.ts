import { HourFormat } from "./HourFormat";
import { IncreaseTime } from "./IncreaseTime";
import { LightMode } from "./LightMode";
import { Modes } from "./Mode";
import { ResertAll } from "./ResetAll";

import { Time } from "./Time";

export class Watch {
    private _hourformat: HourFormat;
    private _increaseTime: IncreaseTime;
    private _lightMode: LightMode;
    private _mode: Modes;
    private _resetAll: ResertAll;
    private _currentTime: Date;


    constructor(currentTime: Date) {
        this._currentTime = currentTime;

        new Time(this._currentTime, ".watch-body");
        this._mode = new Modes(0);
        this._increaseTime = new IncreaseTime();
        this._hourformat = new HourFormat(false,)
        this._resetAll = new ResertAll();
        this._lightMode = new LightMode(false);
        this.handleEvent();
    }

    private handleEvent() {
        const parentElement: HTMLElement = document.getElementById("list-buttons");
        parentElement.addEventListener("click", (e: Event) => {
            const targetElement = e.target as HTMLElement;

            if (targetElement.id === "increaseButton") {
                this._currentTime = this._increaseTime.increaseTime(this._currentTime, this._mode.getCount, this._hourformat.getShowAMPM, "watch-time");
            }
            else if (targetElement.id === "hourReadibility") {
                this._currentTime = this._hourformat.switchHourFormat(this._hourformat.getShowAMPM, this._currentTime, "watch-time");
            }
            else if (targetElement.id === "resetTime") {
                this._currentTime = this._resetAll.resetAll(this._mode, "watch-time", "increaseButton");

            }
            else if (targetElement.id === "lightMode") {
                this._lightMode.changeLightMode(this._lightMode.getTurnLight, "watch-time");
            }
            else if (targetElement.id === "modes") {
                this._mode.clickEvent("increaseButton");

                if (this._mode.getCount == 3) {
                    this._mode.setCount = 0;
                }
            }
        })
    }

}

