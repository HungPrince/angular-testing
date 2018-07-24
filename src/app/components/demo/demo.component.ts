import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    isOn = false;

    constructor() { }

    ngOnInit() {
    }

    clicked() {
        this.isOn = !this.isOn;
    }

    get message() {
        return `The light is ${this.isOn ? 'On' : 'Off'}`;
    }

}
