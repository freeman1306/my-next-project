import {JSX, useState} from "react";
import styles from './ReviewForm.module.css'
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import cn from 'classnames'
import {Button, Input, Rating, Textarea} from "@/components";
import CloseIcon from './close.svg'
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "@/components/ReviewForm/ReviewForm.interface";
import axios from "axios";
import {API} from "@/helpers/api";



export const ReviewForm = ({productId, className, ...props}: ReviewFormProps) :JSX.Element => {
const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>()
const [isSuccess, setIsSuccess] = useState<boolean>(false)
const [error, setIsError] = useState<string>()


    const onSubmit = async (formData: IReviewForm) => {
try {
    const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId})
 if (data.message) {
    setIsSuccess(true)
     reset()
 } else {
     setIsError('Something went wrong')
 }
} catch (e){
    setIsError(e.message)
}
}

   return (
<form
onSubmit={handleSubmit(onSubmit)}
>
    <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register('name', {required: {
            value: true,
                message: 'field required'
            }})}
               placeholder={'name'}
               error={errors.name}
        />
        <Input {...register('title')} className={styles.title}/>
        <div className={styles.rating}>
      <span>
         Rating:
      </span>
            <Controller
                control={control}
                render={({field}) => (
                    <Rating isEditable ref={field.ref} setRating={field.onChange} rating={field.value}/>
                )}
                name={'rating'} />

        </div>
        <Textarea {...register('description')} className={styles.description} />
        <div className={styles.submit}>
            <Button appearance={'primary'} >Send</Button>
            <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
    </div>

    {isSuccess
        && <div className={styles.success}>
            <div className={styles.successTitle}>Your review sent</div>
            <div>Thanks </div>
            <CloseIcon className={styles.close}/>
        </div>
    }

    {error
        && <div className={styles.success}>
            <div>Error </div>
            <CloseIcon className={styles.close}/>
        </div>
    }
</form>
   )
}