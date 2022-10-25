import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface StepProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    step: string,
    text:string
}