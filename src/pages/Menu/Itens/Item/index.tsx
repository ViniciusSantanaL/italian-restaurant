import styles from "./Item.module.scss";
import classNames from "classnames";
import { Dish } from "types/Dish";
import { useNavigate } from "react-router-dom";

export function Item(props: Dish) {
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={() => navigate(`/dish/${props.id}`)}>
            <div className={styles.item__imagem}>
                <img src={props.photo} alt={props.title}/>
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo]: true,
                        [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true
                    })}>
                        {props.category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {props.size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve {props.serving} People
                    </div>
                    <div className={styles.item__valor}>
                        R$ {props.price}
                    </div>
                </div>
            </div>

        </div>
    );
}