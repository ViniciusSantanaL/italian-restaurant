import styles from "./Dish.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import classNames from "classnames";
import menu from "data/menu.json";
import { NotFound } from "pages/NotFound";
import { Header } from "components/Header";

export function Dish() {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const dish = menu.find(item => item.id == Number(id));
    if(!dish) {
        return <NotFound/>;
    }
    return (
        <Header>
            <button className={styles.voltar}
            onClick={() => navigate(-1)}>
                {"< Return"}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{dish.title}</h1>
                <div className={styles.imagem}>
                    <img src={dish.photo} alt="Photo Dish"/>
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {dish.description}
                    </p>
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.tags__tipo]:true,
                            [styles[`tags__tipo__${dish.category.label.toLowerCase()}`]]: true
                        })}>
                            {dish.category.label}
                        </div>
                        <div className={styles.tags__porcao}>
                            {dish.size} g
                        </div>
                        <div className={styles.tags__qtdpessoas}>
                            Serving {dish.serving  === 1 ?  dish.serving + " Person " :  dish.serving +  " People"} 
                        </div>
                        <div className={styles.tags__valor}>
                            R$ {dish.price}
                        </div>
                    </div>
                </div>
            </section>
        </Header>
    );
}