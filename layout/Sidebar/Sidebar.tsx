import {JSX} from "react";
import styles from './Sidebar.module.css'
import cn from 'classNames'
import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import {Menu} from '../Menu/Menu'

export const Sidebar = ({...props}: SidebarProps) :JSX.Element => {

   return (
        <div {...props}>
    <Menu/>
        </div>
   )
}