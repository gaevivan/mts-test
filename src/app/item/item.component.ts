import { Component, Input, SimpleChanges } from "@angular/core";
import { IItem, IItemType } from 'src/app/models/types';
import { sortFunc } from '../models/functions';

@Component({
    selector: "item",
    templateUrl: "./item.component.html"
})
export class ItemComponent {
    /** Данные строки */
    @Input() public data: IItem;
    /** С бордером */
    @Input() public withBorder: boolean = true;
    /** Открыты ли дети. */
    public isOpened: boolean = false;
    /** Тип папки для сравнения. */
    public folder: IItemType = "folder";

    /** Раскрытие. */
    public toggle(): void {
        this.isOpened = !this.isOpened;
    }
}