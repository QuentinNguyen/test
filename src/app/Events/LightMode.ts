export class LightMode {
    private _turnLight: boolean;

    constructor(turnLight: boolean) {
        this._turnLight = turnLight;
    }

    public changeLightMode(isActive: boolean, elementId: string) {
        let spanTime: HTMLElement = document.getElementById(elementId);
        if (!isActive) {
            this._turnLight = true;
            spanTime.style.backgroundColor = "white";
        } else {
            this._turnLight = false;
            spanTime.style.backgroundColor = "gray";
        }
    }

    public get getTurnLight(): boolean {
        return this._turnLight;
    }
}