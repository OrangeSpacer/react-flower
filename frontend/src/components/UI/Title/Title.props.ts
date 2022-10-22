import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    titleSide: "l" | "c" | "r",
    title: string,
    subTitleSide?: "l" | "c" | "r",
    subtitle?: string
}