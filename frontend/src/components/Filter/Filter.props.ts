import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    setPrice: any,
    setColor: any,
    setFormat:any,
    setLight: any,
    setInputValue:any,
    searchValue:string,
    colors: {id:string,backedValue:string,value:string,checked:boolean}[],
    format: {id:string,backedValue:string,value:string,checked:boolean}[],
    light: {id:string,backedValue:string,value:string,checked:boolean}[],
    defaultPrice: string[],
    defaultFilter: any
}