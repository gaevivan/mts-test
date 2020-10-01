
/** Элемент: файл или папка. */
export interface IItem {
    name: string;
    type: IItemType,
    children: IItem[];
}

/** Тип элепмента: файл или папка. */
export type IItemType = "folder" | "file";

/** Корневой элемент. */
export interface ICoreItem {
    tree: IItem[];
}