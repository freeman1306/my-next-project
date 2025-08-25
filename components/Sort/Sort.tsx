import {JSX} from "react";
import styles from './Sort.module.css'
import {SortEnum, SortProps} from "@/components/Sort/Sort.props";
import SortIcon from './SortIcon.svg'
import cn from 'classnames'


export const Sort = ({sort, setSort, className, ...props}: SortProps) :JSX.Element => {

   return (
<div  className={cn(styles.sort, className)} {...props}>
      <span
      onClick={() => setSort(SortEnum.rating)}
      className={cn({
         [styles.active]: sort == SortEnum.rating
      })}
      >
         <SortIcon className={styles.sortIcon}/> Rating
      </span>

   <span
       onClick={() => setSort(SortEnum.price)}
       className={cn({
          [styles.active]: sort == SortEnum.price
       })}
   >
         <SortIcon className={styles.sortIcon}/> Price
      </span>
</div>
   )
}