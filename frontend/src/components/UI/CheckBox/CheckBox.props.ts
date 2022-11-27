import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CheckBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    checked: boolean,
}