import {HhData} from "@/interfaces/page.inteface";

export interface HhDataProps extends HhData{
    color?: 'white' | 'blue'
    children: ReactNode
}