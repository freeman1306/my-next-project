import {ForwardedRef, forwardRef, JSX} from "react";
import styles from './Input.module.css'
import {InputProps} from "@/components/Input/Input.props";
import cn from 'classnames'


export const Input = forwardRef(({size='m', children, className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) :JSX.Element => {
   return (
      <div className={styles.inputWrapper}>
         <input
             className={cn(className, styles.input, {
             [styles.error] : error
         })}
             placeholder={'Name'}
             ref={ref}
             {...props}
         />
         {error && <span className={styles.errorMessage}>{error.message}</span> }
      </div>
   )
})