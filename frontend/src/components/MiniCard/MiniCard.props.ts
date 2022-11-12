import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MiniCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode
}