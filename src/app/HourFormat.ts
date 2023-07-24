export class HourFormat {
    private _showAMPM: boolean;

    constructor(showAMPM: boolean) {
        this._showAMPM = showAMPM;
    }

    public switchHourFormat(isActive: boolean, currentTime: Date, element_Id: string): Date {
        let spanTime: HTMLElement = document.getElementById(element_Id);
        if (!isActive) {
            this._showAMPM = true;
            spanTime.innerHTML = currentTime.toLocaleTimeString("en-US");
        } else {
            this._showAMPM = false;
            spanTime.innerHTML = currentTime.toLocaleTimeString();
        }

        return currentTime;
    }

    public get getShowAMPM(): boolean {
        return this._showAMPM;
    }

}