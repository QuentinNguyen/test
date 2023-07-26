import { LightMode } from "./LightMode";
import { Modes } from "./Mode";

export class ResertAll {

    constructor() { }

    public resetAll(lightMode: LightMode, mode: Modes, spanElementId: string, buttonIncreaseId: string): Date {
        this.resetMode(mode, buttonIncreaseId);
        this.resetLight(lightMode, spanElementId);
        let currentTime: Date = this.resetTime(spanElementId);


        return currentTime;
    }

    private resetTime(spanElementId: string): Date {
        let currentTime = new Date;
        let spanTime: HTMLElement = document.getElementById(spanElementId);
        spanTime.innerHTML = currentTime.toLocaleTimeString();

        return currentTime;
    }

    private resetMode(mode: Modes, buttonIncreaseId: string) {
        mode.setCount = 0
        const buttonIncrease: HTMLButtonElement = document.getElementById(buttonIncreaseId) as HTMLButtonElement;
        buttonIncrease.innerText = "Add one hour";
        buttonIncrease.disabled = true;
    }

    private resetLight(lightMode: LightMode, spanElementId: string) {
        lightMode.changeLightMode(true, spanElementId)
    }
}