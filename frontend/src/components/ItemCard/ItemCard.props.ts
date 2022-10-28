import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ItemCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string
    imgLink: string,
    price: string,
    width?: string,
    height?: string,
    colorless?: boolean
}