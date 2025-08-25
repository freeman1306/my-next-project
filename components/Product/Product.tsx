import {ForwardedRef, forwardRef, JSX, useRef, useState} from "react";
import styles from './Product.module.css'
import {ProductProps} from "@/components/P/P.props";
import cn from 'classnames'
import {Button, Card, Divider, Rating, Review, ReviewForm, Tag} from "@/components";
import {devlOfNum, priceRu} from "@/helpers/helpers";
import Image from "next/image";
import {motion} from "framer-motion";


export const Product = motion(forwardRef(({product, className, ...props}: ProductProps, ref: ForwardedRef<HTMLDivElement>) :JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)
    const reviewRef = useRef<HTMLDivElement>(null)

    const variants = {
        visible: {opacity: 1, height: auto},
        hidden: {opacity: 0, height: 0}
    }

    const scrollToReview = () => {
        setIsReviewOpened(true)
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={ product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>{priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color={'green'}>{product.price - product.oldPrice}</Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}<span className={styles.month}>month</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c.id} color={'ghost'}>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>price</div>
                <div className={styles.creditTitle}>credit</div>
                <div className={styles.rateTitle}>
                    <a href={"#ref"} onClick={scrollToReview}>{product.reviewCount} {devlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <Divider  className={styles.hr}/>
                <div className={styles.description}>{product.description} reviews</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div key={c.name} className={styles.characteristics}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages
                        &&  <div className={styles.advantages}>
                            <div className={styles.advTitle}>Advantages</div>
                            <div>{product.advantages}</div>
                        </div>
                    }
                    {product.disadvantages
                        && <div className={styles.disadvantages}>
                            <div className={styles.advTitle}>DisAdvantages</div>
                            <div>{product.disadvantages}</div>
                        </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>

                </div>
                <Button appearance={'primary'} >
                    Detailes
                </Button>

                <Button
                    appearance={'ghost'}
                    arrow={'right'}
                    className={styles.reviewButton}
                    onClick={()=> setIsReviewOpened(!isReviewOpened)}
                >
                    Read reviews
                </Button>
            </Card>
            <Card color={'blue'} className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,

            })}
                  ref={reviewRef}
            >
                {product.reviews.map(r => (
                    <div key={r._id}>
                        <Review key={r._id} review={r} />
                        <Divider />
                    </div>

                ))}

                <ReviewForm productId={product._id}/>
            </Card>
        </div>
    )
}))