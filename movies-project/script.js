const movies = {
  "Sci-fi": [
    {
      "id": 1,
      "name": "Interstellar",
      "year": 2014,
      "rating": 8.7,
      "image": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      "id": 2,
      "name": "Inception",
      "year": 2010,
      "rating": 8.8,
      "image": "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      "id": 3,
      "name": "The Matrix",
      "year": 1999,
      "rating": 8.7,
      "image": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
      "id": 4,
      "name": "Avatar",
      "year": 2009,
      "rating": 7.9,
      "image": "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
      "id": 5,
      "name": "Dune",
      "year": 2021,
      "rating": 8.0,
      "image": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    }
  ],
  "Action": [
    {
      "id": 6,
      "name": "John Wick",
      "year": 2014,
      "rating": 7.4,
      "image": "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
    },
    {
      "id": 7,
      "name": "The Dark Knight",
      "year": 2008,
      "rating": 9.0,
      "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      "id": 8,
      "name": "Gladiator",
      "year": 2000,
      "rating": 8.5,
      "image": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },
    {
      "id": 9,
      "name": "Mad Max: Fury Road",
      "year": 2015,
      "rating": 8.1,
      "image": "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
    },
    {
      "id": 10,
      "name": "Avengers: Endgame",
      "year": 2019,
      "rating": 8.4,
      "image": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    }
  ],
  "Comedy": [
    {
      "id": 11,
      "name": "3 Idiots",
      "year": 2009,
      "rating": 8.4,
      "image": "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg"
    },
    {
      "id": 12,
      "name": "The Hangover",
      "year": 2009,
      "rating": 7.7,
      "image": "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
    },
    {
      "id": 13,
      "name": "Home Alone",
      "year": 1990,
      "rating": 7.7,
      "image": "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
    },
    {
      "id": 14,
      "name": "Jumanji",
      "year": 1995,
      "rating": 7.1,
      "image": "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg"
    },
    {
      "id": 15,
      "name": "Hera Pheri",
      "year": 2000,
      "rating": 8.2,
      "image": "https://image.tmdb.org/t/p/w500/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg"
    }
  ],
  "Horror": [
    {
      "id": 16,
      "name": "The Conjuring",
      "year": 2013,
      "rating": 7.5,
      "image": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
    },
    {
      "id": 17,
      "name": "IT",
      "year": 2017,
      "rating": 7.3,
      "image": "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"
    },
    {
      "id": 18,
      "name": "A Quiet Place",
      "year": 2018,
      "rating": 7.5,
      "image": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
    },
    {
      "id": 19,
      "name": "The Nun",
      "year": 2018,
      "rating": 5.3,
      "image": "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg"
    },
    {
      "id": 20,
      "name": "Insidious",
      "year": 2010,
      "rating": 6.8,
      "image": "https://image.tmdb.org/t/p/w500/1egpmVXu6h4DoBPD4D8Q6j8v5jK.jpg"
    }
  ]
}

localStorage.setItem("movies",JSON.stringify(movies));


function getMovies() {
    const movies =  JSON.parse(localStorage.getItem("fiterMovies"));

    for (const key in movies) {
        const main = document.createElement("main");
        const h2 = document.createElement("h2");
        const aside = document.createElement("aside");
        h2.append(key);
        main.appendChild(h2);

        for (const movie of movies[key]) {
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img");
            const p = document.createElement("p");
            const b = document.createElement("b");
            const btn = document.createElement("button");

            h3.append(movie.name);
            img.src = movie.image;
            p.append(movie.year);
            b.append(movie.rating);
            btn.append("Add Watchlist");

            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(b);
            div.appendChild(btn);

            aside.appendChild(div);
        }
        main.appendChild(aside);
        document.querySelector("section").appendChild(main);
    }
}

getMovies();
document.querySelector("input").onchange = function (e) {
    const allMovies = JSON.parse(localStorage.getItem("movies"));
    if(e.target.value == "all"){
        localStorage.setItem("fiterMovies",JSON.stringify(allMovies));
        location.href = "index.html";
        return;
    }
    for (const key in allMovies) {
            const temp = allMovies[key].filter((movie)=>{
                    return movie.name.includes(e.target.value);
                });
                allMovies[key] = temp;
            }
    localStorage.setItem("fiterMovies",JSON.stringify(allMovies));
    location.href = "index.html";
}


document.querySelector("section").onclick = function (e){
    const lists = JSON.parse(localStorage.getItem("watchlist"));
    if(e.target.tagName == "BUTTON"){
        lists.push(e.target.parentElement.children[0].innerText);
        localStorage.setItem("watchlist",JSON.stringify(lists));
    }
}
document.querySelector("span").onclick = ()=>{
    location.href = "watchlist.html";
}