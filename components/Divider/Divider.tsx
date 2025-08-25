import {JSX} from "react";
import styles from './Divider.module.css'
import {DividerProps} from "@/components/Divider/Divider.props";
import cn from 'classnames'


export const Divider = ({ className, ...props}: DividerProps) :JSX.Element => {

   return (
<hr className={cn(className, styles.hr)} {...props}/>
   )
}