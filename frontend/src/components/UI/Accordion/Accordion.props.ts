import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    content: {title:string,text:string}[]
}