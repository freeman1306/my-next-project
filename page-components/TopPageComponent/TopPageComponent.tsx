import {JSX, useEffect, useReducer} from "react";
import styles from "./TopPageComponent.module.css";
import {TopPageComponentProps} from "@/page-components/TopPageComponent/TopPageComponent.props";
import {Advantages, HhData, Htag, Product, Sort, Tag} from "@/components";
import {TopLevelCategory} from "@/interfaces/page.inteface";
import {SortEnum} from "@/components/Sort/Sort.props";
import {sortReducer} from "@/page-components/TopPageComponent/sort.reducer";
import {useScrollY} from "@/hooks/useScrollY";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) :JSX.Element => {
   const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.rating})

    const y = useScrollY()

    const setSort = (sort: SortEnum) =>{
       dispatchSort({type: sort})
    }

    useEffect(() => {
dispatchSort({type: 'reset', initialState: products})
    }, [products])

    return (
       <div className={styles.wrapper}>
           <div className={styles.title}>
               <Htag tag={'h1'}>
                   {page.title}
               </Htag>
               {products && <Tag color={'grey'} size={'m'}>
                   {products.length}
               </Tag>}
               <Sort sort={sort} setSort={setSort}/>
           </div>
           <div>
               {sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p}/>))}
           </div>
           <div className={styles.hhTitle}>
               <Htag tag={'h2'}>
                  Vacations -  {page.category}
               </Htag>
                <Tag color={'red'} size={'m'}>
                   hh.ru
               </Tag>
           </div>
           {firstCategory == TopLevelCategory.Courses && page.hh &&  <HhData {...page.hh} ></HhData>}
           {page.advantages && page.advantages.length > 0
               && <>
               <Htag tag={'h2'}>advantages</Htag>
                   <Advantages advantages={page.advantages}/>
               </>

           }

           {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>}
           <Htag tag={'h2'}>Получаемые навыки</Htag>
           {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag> )}
       </div>
    )

}