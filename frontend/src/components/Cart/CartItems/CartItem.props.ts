import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    "title":string,
    "cost": string,
    "imgId":string,
}