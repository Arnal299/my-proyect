import Head from 'next/head';
import styles from '../app/styles.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cuban Cafe Menu</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="estilos.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="menu">
        <h1>CUBAN CAFE</h1>
        <p className="est">Est. 2020</p>
        <hr className="bottom-line" />
        <section>
          <h2 className="yo">Coffee</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="icon" />
          <article className="item">
            <p className="flavor">French Vanilla</p>
            <p className="price">3.00</p>
          </article>
          <article className="item">
            <p className="flavor">Caramel Macchiato</p>
            <p className="price">3.75</p>
          </article>
          <article className="item">
            <p className="flavor">Pumpkin Spice</p>
            <p className="price">3.50</p>
          </article>
          <article className="item">
            <p className="flavor">Hazelnut</p>
            <p className="price">4.00</p>
          </article>
          <article className="item">
            <p className="flavor">Mocha</p>
            <p className="price">4.50</p>
          </article>
        </section>
        <section>
          <h2 className="yo">Desserts</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="postre" />
          <article className="item">
            <p className="dessert">Donut</p>
            <p className="price">1.50</p>
          </article>
          <article className="item">
            <p className="dessert">Cherry Pie</p>
            <p className="price">2.75</p>
          </article>
          <article className="item">
            <p className="dessert">Cheesecake</p>
            <p className="price">3.00</p>
          </article>
          <article className="item">
            <p className="dessert">Cinnamon Roll</p>
            <p className="price">2.50</p>
          </article>
        </section>
        <hr className="bottom-line" />
        <footer>
          <p>
            <a href="https://www.google.com/search?client=firefox-b-d&q=cafe+cubano" target="_blank">
              Visita esta web
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;