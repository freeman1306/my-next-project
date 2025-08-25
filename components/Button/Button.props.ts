import {HTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode
    appearance: 'primary' | 'ghost'
    arrow: 'right'| 'down' | 'none'
}
