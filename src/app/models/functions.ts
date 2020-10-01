import { IItem, IItemType } from "./types";

const folderType: IItemType = "folder";

export function sortFunc(items: IItem[]): IItem[] {
    // console.log("sort", items);
    items
        .filter(item => !!item.children)
        .forEach(item => (item.children = sortFunc(item.children)));
    return items.sort(compareFunc);
}

function compareFunc(a: IItem, b: IItem): number {

    const existFolder: boolean = a.type === folderType || b.type === folderType;
    if (existFolder && a.type !== b.type) {
        return a.type === folderType ? -1 : 1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return a.name === b.name ? 0 : -1;
}
