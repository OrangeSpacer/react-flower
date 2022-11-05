import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    title:string,
    cost: string,
    imageId:string,
    quantity: number,
    deleteItem: any,
    changeTotalPrice: any,
    id:string
}