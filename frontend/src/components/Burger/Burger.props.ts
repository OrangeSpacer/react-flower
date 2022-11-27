import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BurgerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    linkList: {name:string,link:string}[]
}