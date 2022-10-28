import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    products: any[]
}