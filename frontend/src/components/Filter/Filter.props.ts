import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    setPrice: any,
    setColor: any,
    setInputValue:any,
    searchValue:any,
    colors: {}[],
    defaultPrice: string[],
    defaultFilter: any
}