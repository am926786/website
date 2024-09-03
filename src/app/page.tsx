// src/app/page.tsx
import Layout from './layout';
import Hero from './Hero';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <h2>Our Features</h2>
      <p>Details about features or services.</p>
    </Layout>
  );
};

export default Home;
