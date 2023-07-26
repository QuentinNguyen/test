import { Watch } from "../Watch";



export class NewWatches extends Watch {

    //HTMLELEMENT FOR watch
    private element: HTMLElement;

    constructor(currentTime: Date, element: HTMLElement) {
        super(currentTime);
        this.element = element;
    }

    public addWatch() {
        let button = document.getElementById('animateButton');
        button.addEventListener("click", () => {
            let element = document.querySelector('.watch-wrapper') as HTMLElement;
            const newClock = new NewWatches(this._currentTime, element);
        })


    }
}