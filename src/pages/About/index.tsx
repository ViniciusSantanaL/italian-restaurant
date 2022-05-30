import styles from "./About.module.scss";
import stylesDefault from "styles/Theme.module.scss";
import casa from "assets/about/casa.png";
import image1 from "assets/about/massa1.png";
import image2 from "assets/about/massa2.png";

export function About() {
    const images = [image1,image2];
    return (
        <section>
            <h3 className={stylesDefault.titulo}>About</h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt="Home Restaurant" />
                <div className={styles.sobreNos__texto}>
                    <p>
                        We at Restaurante Italiano offer you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta in São Paulo! We cherish the traditional ingredients of Italian cuisine, fresh and of excellent quality so that your experience is even more intense!
                    </p>
                    <br/>
                    <p>
                        We also have a meat menu with many options according to your taste!
                    </p>
                    <br/>
                    <p>
                        To accompany Italian pasta, the Restaurant has a reserve of special wines, which perfectly harmonize with your delivery, whether meat or pasta!
                    </p>
                </div>
            </div>
            <div className={styles.imagens}>
                {images.map((image, index) =>(
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={image} alt="Pasta of Image"/>
                    </div>
                ))}
            </div>
        </section>
    );
}