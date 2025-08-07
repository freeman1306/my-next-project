import {JSX, useEffect, useState} from "react";
import styles from './Rating.module.css'
import cn from 'classNames'
import StarIcon from './star.svg'
import {RatingProps} from "@/components/Rating/Rating.props";


export const Rating = ({isEditable=false, setRating, rating, children, ...props}: RatingProps) :JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(()=> {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number)=> {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number)=> {
            return (
                <StarIcon
                className={cn(styles.star,
                    {
                        [styles.filled]: i < currentRating
                    }
                    )}
                />
            )
        })
        setRatingArray(updatedArray)
    }

   return (
       <div {...props}>
           {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
       </div>
   )
}