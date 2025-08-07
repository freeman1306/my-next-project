import {JSX, useEffect, useState} from "react";
import {Htag} from "@/components/Htag/Htag";
import {Button, P, Rating, Tag} from "@/components";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0)
    useEffect(()=> {
        console.log('Counter' + counter)

        return function cleanup(){
            console.log('Unmount')
        }
    }, [])

    useEffect(()=>{
        console.log('Mounted')
    }, [])

  return (
      <>
     <Htag tag="h1">{counter}</Htag>
      <Button appearance='primary' className='asas' arrow='right' onClick={()=> setCounter(x => x+1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
          <P size='l'>Большой</P>
          <P>Средний</P>
          <P size='s'>Маленький</P>
          <Tag size='m'>Ghost</Tag>
          <Tag size='s' color='red'>Red</Tag>
          <Tag size='s' color='green'>Green</Tag>
          <Rating rating={4}/>
      </>
  )
}
