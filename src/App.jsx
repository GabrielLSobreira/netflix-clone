import { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import Tmdb from './services/Tmdb';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [moviesList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      let originals = list.filter((i) => i.slug === 'originals');
      let ramdomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[ramdomChosen];
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(choseInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />
      {moviesList.length <= 0 && (
        <div className="loading">
          <img
            src="https://64.media.tumblr.com/5bf8ba688ff3553b900a40dad2bbc1e0/tumblr_inline_pl93uu9rT41t9ij1a_1280.gifv"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
};

export default App;
