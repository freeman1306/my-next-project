import {JSX} from "react";
import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components";

export default function Home(): JSX.Element {
  return (
      <>
     <Htag tag="h1">Teкст</Htag>
      <Button appearance='primary' className='asas'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      </>
  )
}
