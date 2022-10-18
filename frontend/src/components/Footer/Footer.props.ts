import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    pageLinks: {name:string,link:string}[],
    catalogLinks: {name:string,link:string}[]
}