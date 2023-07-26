export class Modes {
    private _count: number

    constructor(count: number) {
        this._count = count;
    }

    public clickEvent(elementId: string) {
        const buttonIncrease: HTMLButtonElement = document.getElementById(elementId) as HTMLButtonElement;
        this._count++;
        this.showIncreaseButton(buttonIncrease);
    }

    private showIncreaseButton(buttonIncrease: HTMLButtonElement) {
        if (this._count == 1) {
            buttonIncrease.innerText = "Add one hour";
            buttonIncrease.disabled = false;
        }
        else if (this._count == 2) {
            buttonIncrease.innerText = "add one minute";
            buttonIncrease.disabled = false;
        }
        else {
            buttonIncrease.innerText = "add one minute";
            buttonIncrease.disabled = true;
        }
    }

    public get getCount(): number {
        return this._count;
    }

    public set setCount(count: number) {
        this._count = count;
    }

}