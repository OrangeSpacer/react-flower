import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ItemCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string
    imgLink: string,
    price: string,
    id:string,
    interaction?: boolean,
    inCart?:boolean,
    width?: string,
    height?: string,
    colorless?: boolean,
    tags?: {colors:string,light:string,format:string}
}