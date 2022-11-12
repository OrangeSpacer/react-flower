import { DetailedHTMLProps,HTMLAttributes } from "react";

export interface ListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    condition?:string,
    result?:string,
    defaultText: string
}