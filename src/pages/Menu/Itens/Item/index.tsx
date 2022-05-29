import styles from './Item.module.scss';
import logo from 'assets/logo.svg';
import classNames from "classnames";
interface Props {
    id: number;
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    category: {
        id: number;
        label: string;
    }
}
export function Item(props: Props) {
    return (
        <div className={styles.item}>
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