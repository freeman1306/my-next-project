import {JSX, useEffect, useState} from "react";
import {Htag} from "@/components/Htag/Htag";
import {Button, Input, P, Rating, Tag, Textarea} from "@/components";
import {Layout, withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios'
import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/helpers/api";

export function Home({menu, firstCategory}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4)

  return (
      <>
<Input/>
          <Textarea/>

      </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () =>{
    const firstCategory = 0
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    })

 return ({
     props: {
         menu,
         firstCategory
     }
 })
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
}