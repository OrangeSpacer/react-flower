import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RootLayoutprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode,
}