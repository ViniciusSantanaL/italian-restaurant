import styles from "./NotFound.module.scss";
import classNames from "classnames";
import  stylesDefault from "styles/Theme.module.scss";
import {ReactComponent as NotFoundImage} from "assets/not_found.svg";
import {useNavigate} from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesDefault.container]: true
        })}>
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {"< Return"}
                </button>
            </div>
            <NotFoundImage/>
        </div>
    );
}