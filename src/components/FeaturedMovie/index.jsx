import './styles.css';

const FeaturedMovie = ({ item }) => {
  let first = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let descripton = item.overview;
  if (descripton.length > 200) {
    descripton = descripton.substring(0, 200) + '...';
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name}</div>
          <div className="featured--info">
            <div className="featured--vote">
              {item.vote_average * 10}% relevante
            </div>
            <div className="featured--year">{first.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featured--description">{descripton}</div>
            <div className="featured--buttons">
              <a href="/" className="featured--watchbutton">
                ► Assistir
              </a>
              <a href="/" className="featured--mylistbutton">
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gênero{genres.length !== 1 ? 's' : ''}: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
