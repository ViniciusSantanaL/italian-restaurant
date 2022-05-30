import styles from "./Header.module.scss";
import {Outlet} from "react-router-dom";
import stylesDefault from "styles/Theme.module.scss";
export function Header(props: {children?: React.ReactNode}) {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.header__text}>
                The Best Pasta Restaurant You have Ever Seen
            </div>
        </header>
        <div className={stylesDefault.container}>
            <Outlet/>
            {props.children}
        </div>
        </>
    );
}