import menu from "data/menu.json";
import styles from "./Home.module.scss";
import stylesDefault from "styles/Theme.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import {useNavigate} from "react-router-dom";
import { Dish } from "types/Dish";
export function Home() {
    //always get a random item for render screem
    let recommendDishes = [...menu];
    recommendDishes = recommendDishes.sort(() => 0.5 - Math.random())
        .splice(0,3);

    const navigate = useNavigate();

    function navigateDetailsDish(dish: Dish){
        navigate(`/dish/${dish.id}`,{state: {dish},replace:false});
    }
    return (
      <section>
          <h3 className={stylesDefault.titulo}>
              Kitchen Recommendations
          </h3>
          <div className={styles.recomendados}>
              {recommendDishes.map(item => (
                  <div key={item.id} className={styles.recomendado}>
                      <div className={styles.recomendado__imagem}>
                          <img src={item.photo} alt={item.title}/>
                      </div>
                      <button className={styles.recomendado__botao}
                        onClick={() => navigateDetailsDish(item)}>
                            View More
                      </button>
                  </div>
              ))}
          </div>
          <br/><br/>
          <h3 className={stylesDefault.titulo}>Our Home</h3>
          <div className={styles.nossaCasa}>
            <img src={nossaCasa} alt="Our Home"/>
            <div className={styles.nossaCasa__endereco}>
                Vergueiro Street, 3185 <br/> <br/> Vila Mariana - SP
            </div>
          </div>
      </section>
    );
}