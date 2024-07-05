import Head from 'next/head';
import styles from '../styles/estilos.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.menu}>
        <h1>CAMPER CAFE</h1>
        <p className={styles.est}>Est. 2020</p>
        <hr className={styles['bottom-line']} />
        <section>
          <h2 className={styles.yo}>Coffee</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="icon" />
          <article className={styles.item}>
            <p className={styles.flavor}>French Vanilla</p>
            <p className={styles.price}>3.00</p>
          </article>
          
          // Agrega el resto de tu contenido con las clases de estilos de estilos.module.css
          
        </section>
      </div>
    </div>
  );
};

export default Home;
