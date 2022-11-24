import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CreateItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    imageId: string,
    handleImage: any,
    cost: string,
    handleCost: any
    name:string,
    handleName: any
    color: string,
    handleColor: any
    format: string,
    handleFormat: any
    light: string,
    handleLight: any,
    createItem: any,
    disabledBtnCreate: boolean
}