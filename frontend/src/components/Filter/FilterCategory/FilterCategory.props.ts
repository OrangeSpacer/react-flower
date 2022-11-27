import {DetailedHTMLProps, HTMLAttributes} from "react"

export interface FilterCategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title:string,
    category: any[],
    setCategory: any
}