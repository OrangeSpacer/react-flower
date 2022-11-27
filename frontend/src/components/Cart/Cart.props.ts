import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    open: boolean,
    setOpen:any
}