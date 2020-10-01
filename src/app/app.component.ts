import { Component } from "@angular/core";
import { ICoreItem, IItem } from './models/types';
import {default as DATA} from "./models/data.json";
import { sortFunc } from './models/functions';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public data: IItem[];

    public ngOnInit(): void {
        const data: ICoreItem = DATA as ICoreItem;
        this.data = sortFunc(data.tree);
    }
}
