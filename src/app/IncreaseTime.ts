import { HourFormat } from "./HourFormat";
import { Modes } from "./Mode";

export class IncreaseTime {


    constructor() { }

    public increaseTime(currentTime: Date, modeValue: number, isActive: boolean, elementId: string): Date {
        let udpateTime = new Date();
        const oneHourInMilliseconds = 60 * 60 * 1000;
        const oneMinuteInMilliSeconds = 60 * 1000;

        if (modeValue == 1) {
            udpateTime.setTime(currentTime.getTime() + oneHourInMilliseconds);
            currentTime = udpateTime;
        }
        else if (modeValue == 2) {
            udpateTime.setTime(currentTime.getTime() + oneMinuteInMilliSeconds);
            currentTime = udpateTime;
        }

        let spanTime: HTMLElement = document.getElementById(elementId);
        if (isActive) {
            spanTime.innerHTML = `${currentTime.toLocaleTimeString("en-US")}`
        }
        else {
            spanTime.innerHTML = `${currentTime.toLocaleTimeString()}`
        }

        return currentTime;
    }




}