import styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg'
import {Searchear} from "./Seachear";
import {useState} from "react";
import {Filters} from "./Filters";
import {Order} from "./Order";
import {Itens} from "./Itens";

export function Menu() {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<number>(0);
    const [order, setOrder] = useState<string>("");
    return (
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    The Best Pasta Restaurant You've Ever Seen
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Menu</h3>
                <Searchear search={search} setSearch={setSearch}/>
                <div className={styles.cardapio__filtros}>
                <Filters filter={filter} setFilter={setFilter}/>
                <Order order={order} setOrder={setOrder}/>
                </div>
                <Itens order={order} filter={filter} search={search}/>
            </section>
        </main>
    );
}