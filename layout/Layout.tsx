import {FunctionComponent, JSX} from "react";
import styles from './Layout.module.css'
import cn from 'classNames'
import {LayoutProps} from "@/layout/Layout.props";
import {Header} from "@/layout/Header/Header";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import {Footer} from "@/layout/Footer/Footer";
import {AppContextProvider, IAppContext} from "@/context/app.context";


 const Layout = ({children}: LayoutProps) :JSX.Element => {

   return (
        <div className={styles.wrapper}>
        <Header className={styles.header}/>

                <Sidebar className={styles.sidebar}/>
                <div className={styles.body}>{children}</div>
            <Footer className={styles.footer}/>
        </div>
   )
}


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {

    return function withLayoutComponent (props: T): JSX.Element {

        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props}/>
            </Layout>
            </AppContextProvider>
        )
    }
}