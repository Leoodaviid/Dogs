import Feed from "../components/Feed/Feed";
import Head from "../components/Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed user={0} />
    </section>
  );
};

export default Home;
