import styles from "./Menu.module.scss";
import {Searchear} from "./Seachear";
import {useState} from "react";
import {Filters} from "./Filters";
import {Order} from "./Order";
import {Itens} from "./Itens";
import stylesTema from "styles/Theme.module.scss";

export function Menu() {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<number>(0);
    const [order, setOrder] = useState<string>("");
    return (
        <section className={styles.cardapio}>
            <h3 className={stylesTema.titulo}>Menu</h3>
            <Searchear search={search} setSearch={setSearch}/>
            <div className={styles.cardapio__filtros}>
            <Filters filter={filter} setFilter={setFilter}/>
            <Order order={order} setOrder={setOrder}/>
            </div>
            <Itens order={order} filter={filter} search={search}/>
        </section>
    );
}