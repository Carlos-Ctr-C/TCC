import React from 'react';
import './FeaturedMovie.css';

export default ({ item }) => {


    let textoComplementar = "Esta série de drama televisivo é centrada na prestigiada escola de culinária do renomado chef Auguste Armand. O programa acompanha a vida de alunos e funcionários enquanto eles navegam pelos desafios e pressões do mundo culinário — mergulhando em suas vidas pessoais e profissionais, revelando segredos, rivalidades e relacionamentos complexos.";
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 400) {
        description = description.substring(0, 400) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview ? description : textoComplementar}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">▶️ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}