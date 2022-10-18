import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    title: string,
    titleSide: "l" | "c" | "r",
    infoArray: string[]
}