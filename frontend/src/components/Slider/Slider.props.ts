import { DetailedHTMLProps,HTMLAttributes } from "react";

export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    itemsArray: {    
        name: string
        imgLink: string,
        price: string,
        colorless: boolean}[]
}