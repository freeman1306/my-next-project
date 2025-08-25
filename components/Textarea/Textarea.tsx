import {ForwardedRef, forwardRef, JSX} from "react";
import styles from './Textarea.module.css'
import {TextareaProps} from "@/components/Textarea/Textarea.props";
import cn from 'classnames'


export const Textarea = forwardRef(
    ({size='m', children, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) :JSX.Element => {

       return (
           <textarea className={cn(className, styles.input)} ref={ref} placeholder={'ReviewForm Text'}  {...props}/>
       )
    }
)