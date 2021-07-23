import genres from "../constants/genres";

export const state = () => ({
  library: {
    tv: [
      {
        id: 1,
        genres: [genres.comedy],
        title: 'Comedy Club',
        trailerVideo: '',
        image: 'https://www.vokrug.tv/pic/product/1/8/5/d/185d16ed74d47af01146e61ac94b838f.jpg',
        ageLimit: 16,
        rating: '6.2',
        year: 2005,
        description: 'They come out onto a small patch of the stage right from the auditorium, exchanging words with others along the way, making compliments, asking for a light. They do not recognize any authority, decency or rule. They can easily ridicule any star person - even if she is sitting in the hall. They are part of their audience, they live by the same interests. Their goal is to entertain the audience, not to perform by playing a memorized program.'
      },
      {
        id: 2,
        genres: [genres.comedy],
        title: 'Voice. Children',
        trailerVideo: '',
        image: 'https://static.1tv.ru/uploads/project/social_photo_image/2020/08/12/2162/_original/2162_662c59f6d1.jpg',
        ageLimit: 8,
        rating: '7.2',
        year: 2014,
        description: 'The rules of the show “Voice. Children "practically do not differ from the rules of the adult" Voice ". The first stage of the competition is "blind" auditions, in which 100 children from 7 to 14 years old, selected as a result of casting, take part. The members of the jury (they are also mentors) listen to the performances of the applicants, turning their backs to them. If the mentor likes the participant, he presses the red button, thereby expressing the desire to take the participant to his team. If all or several mentors have turned to the applicant, the participant has the right to choose with whom he wants to continue his path in the project. As a result of "blind" auditions, each of the three mentors recruits a team of 15 people.'
      },
      {
        id: 3,
        genres: [genres.action],
        title: 'Good night, children!',
        trailerVideo: '',
        image: 'https://www.vokrug.tv/pic/product/2/d/0/a/2d0a6abedf4c04cbefba94365fe9a7ac.jpg',
        ageLimit: 0,
        rating: '6.2',
        year: 1964,
        description: '"Good night, children!" - a TV show for children of preschool and primary school age, has existed since September 1964, has never stopped going on the air and has always been popular. It was conceived as "Bedtime Story", in pictures with offscreen text. Later, puppet shows and small plays for children appeared. From the very beginning, the program had its own voice, a unique song "Tired Toys Sleep", which lulls the little ones.'
      },
      {
        id: 4,
        genres: [genres.comedy],
        title: 'Exactly the same!',
        trailerVideo: '',
        image: 'https://upload.wikimedia.org/wikipedia/ru/7/7c/%D0%A2%D0%9E%D0%A7%D0%AC-%D0%92-%D0%A2%D0%9E%D0%A7%D0%AC.jpg',
        ageLimit: 12,
        rating: '6.7',
        year: 2001,
        description: 'It is a makeover show in which celebrities go to great lengths to put on fireworks of talented and unexpected performances. The creators of the country\'s most spectacular shows, such as Eurovision, Voice, Golden Gramophone, and Star Factory, worked on this unpredictable, gambling and funny project.'
      },
      {
        id: 5,
        genres: [genres.comedy],
        title: 'Stand Up',
        trailerVideo: '',
        image: 'https://standup.tnt-online.ru/storage/media/31735/1QU7ntvxG2zZW9nRcacwuNigfEvZ9czEbh1yohxH.jpeg?v=1624171910',
        ageLimit: 16,
        rating: '8.1',
        year: 2013,
        description: 'Stand Up is a show in which young comedians perform humorous monologues. Among the program participants are well-known artists, Comedy Club residents, former KVN players and Slaughter League players, as well as novice comedians. Each of the participants in the show has his own image, which he uses with pleasure in his numbers. Stand Up comedians do not hesitate to make fun of themselves and the situations and people around us. They are jokers from the people who have their own opinion and the desire to express it in a humorous form.'
      },
      {
        id: 6,
        genres: [genres.documentary],
        title: 'In the animal world',
        trailerVideo: '',
        image: 'https://cdn1.ozone.ru/multimedia/1012301643.jpg',
        ageLimit: 0,
        rating: '8.5',
        year: 1968,
        description: 'Popular science program about the animal world, study of the habits and habitat of its representatives. The founder and first presenter is People\'s Artist of the USSR and Professor of VGIK, documentary filmmaker Alexander Zguridi. During the existence of the program, guests have visited: Doctor of Biological Sciences V. E. Flint, American ornithologist, President of the International Union for the Conservation of Cranes, Dr. D. Archibald, Professor B. Grzimek, author of the film "Polar Bear" Y. Ya. Ledin, Academician V.E.Sokolov, writer B.S.Ryabinin, leading Soviet scientists A.G. Bannikov, M.P. Pavlov, D.V. Panfilov, V.M. Galushin, Olympic champion, candidate of biological sciences E.V. Petushkova. "In the world of animals" - laureate of the TEFI-1996 prize in the nomination "Best publicistic program".'
      },
      {
        id: 7,
        genres: [genres.action, genres.comedy],
        title: 'Weighted people',
        trailerVideo: '',
        image: 'https://resizer.mail.ru/p/6514da51-e829-5c36-a08e-bdc0cc6c1409/AAACbVfQwFZd8eLUbkHwQotUi49bCNFB-PDeR4DRdldseUspuBVy3yq8nwVQXLoTV_ylaK1s2S93WaCauL-fWRER1ZQ.png',
        ageLimit: 12,
        rating: '7.1',
        year: 2015,
        description: '8 participants, whose total weight exceeds several tons, are divided into two teams. Experienced nutritionists and fitness trainers offer the heroes real tests of strength and will: players have to pull trucks at speed, catch piglets, build sugar pyramids, and dance samba. At the same time, they have complete freedom of action in terms of nutrition and sports. Each week, the team with the lowest weight loss chooses one player to leave the project. Only two remain in the final, and not only a slim figure, but also a cash prize awaits the winner.'
      },
    ],
    movies: [
      {
        id: 1,
        genres: [genres.action],
        title: 'F9',
        trailerVideo: 'https://www.youtube.com/embed/aSiDu3Ywi8E',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
        ageLimit: 12,
        rating: '5.9',
        year: 2021,
        description: 'Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they\'ve ever encountered: his forsaken brother.',
      },
      {
        id: 2,
        genres: [genres.comedy],
        title: 'Cruella',
        trailerVideo: 'https://www.youtube.com/embed/gmRKv7n2If8',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
        ageLimit: 12,
        rating: '7.3',
        year: 2021,
        description: 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
      },
      {
        id: 3,
        genres: [genres.action, genres.scienceFiction],
        title: 'Infinite',
        trailerVideo: 'https://www.youtube.com/embed/_WWEOCQGxSw',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
        ageLimit: 12,
        rating: '5.6',
        year: 2021,
        description: 'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
      },
      {
        id: 4,
        genres: [genres.action, genres.scienceFiction],
        title: 'Black Widow',
        trailerVideo: 'https://www.youtube.com/embed/Fp9pNPdNwjI',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
        ageLimit: 16,
        rating: '6.3',
        year: 2021,
        description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
      },
      {
        id: 5,
        genres: [genres.historical, genres.drama],
        title: 'Hacksaw Ridge',
        trailerVideo: 'https://www.youtube.com/embed/s2-1hz1juBI',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg',
        ageLimit: 16,
        rating: '8.0',
        year: 2016,
        description: 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.',
      },
      {
        id: 6,
        genres: [genres.documentary],
        title: 'Money Heist: The Phenomenon',
        trailerVideo: 'https://www.youtube.com/embed/GZD8pBF9J2E',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AboUXTrDWEi0PuZUqaft0iwBTm7.jpg',
        ageLimit: 16,
        rating: '8.0',
        year: 2020,
        description: 'A documentary on why and how \'Money Heist\' sparked a wave of enthusiasm around the world for a lovable group of thieves and their professor.',
      },
      {
        id: 7,
        genres: [genres.documentary],
        title: 'After We Collided',
        trailerVideo: 'https://www.youtube.com/embed/2SvwX3ux_-8',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg',
        ageLimit: 16,
        rating: '5.4',
        year: 2020,
        description: 'Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.',
      },
      {
        id: 8,
        genres: [genres.action, genres.comedy],
        title: 'Boruto: Naruto the Movie',
        trailerVideo: 'https://www.youtube.com/embed/Qyonn5Vbg7s',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg',
        ageLimit: 16,
        rating: '7.2',
        year: 2015,
        description: 'The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy with his Hokage duties, puts a damper on Boruto\'s fire. He ends up meeting his father\'s friend Sasuke, and requests to become... his apprentice!? The curtain on the story of the new generation rises!',
      },
    ],
    series: [
      {
        id: 1,
        genres: [genres.drama],
        title: 'Breaking Bad',
        trailerVideo: 'https://www.youtube.com/embed/HhesaQXLuRY',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
        ageLimit: 18,
        rating: '8.9',
        year: 2008,
        description: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future at any cost as he enters the dangerous world of drugs and crime.'
      },
      {
        id: 2,
        genres: [genres.drama, genres.romance],
        title: 'Elite',
        trailerVideo: 'https://www.youtube.com/embed/QNwhAdrdwp0',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg',
        ageLimit: 18,
        rating: '7.7',
        year: 2018,
        description: 'When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.',
      },
      {
        id: 3,
        genres: [genres.comedy, genres.scienceFiction, genres.action],
        title: 'Rick and Morty',
        trailerVideo: 'https://www.youtube.com/embed/_uUcMwsR5hg',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
        ageLimit: 18,
        rating: '8.9',
        year: 2013,
        description: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future at any cost as he enters the dangerous world of drugs and crime.'
      },
      {
        id: 4,
        genres: [genres.scienceFiction, genres.drama, genres.action],
        title: 'Game of Thrones',
        trailerVideo: 'https://www.youtube.com/embed/gcTkNV5Vg1E',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
        ageLimit: 18,
        rating: '9.0',
        year: 2011,
        description: 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night\'s Watch, is all that stands between the realms of men and icy horrors beyond.'
      },
      {
        id: 5,
        genres: [genres.scienceFiction, genres.drama],
        title: 'Stranger Things',
        trailerVideo: 'https://www.youtube.com/embed/b9EkMc79ZSU',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
        ageLimit: 16,
        rating: '8.4',
        year: 2016,
        description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.'
      },
      {
        id: 6,
        genres: [genres.comedy, genres.drama],
        title: 'The Simpsons',
        trailerVideo: 'https://www.youtube.com/embed/HRV6tMR-SSs',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zLudbPueg8CxGhMS2tyDh3p0TdK.jpg',
        ageLimit: 16,
        rating: '8.4',
        year: 1986,
        description: 'Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.'
      },
      {
        id: 7,
        genres: [genres.drama],
        title: 'Your Honor',
        trailerVideo: 'https://www.youtube.com/embed/ZJPOla_1Px0',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xWJZjIKPeEZhK3JRYKOe06yW6IU.jpg',
        ageLimit: 16,
        rating: '7.5',
        year: 2020,
        description: 'New Orleans judge Michael Desiato is forced to confront his own deepest convictions when his son is involved in a hit and run that embroils an organized crime family.'
      },
      {
        id: 8,
        genres: [genres.drama, genres.scienceFiction],
        title: 'Grimm',
        trailerVideo: 'https://www.youtube.com/embed/2-4xKNZ_gaA',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iOptnt1QHi6bIHmOq6adnZTV0bU.jpg',
        ageLimit: 18,
        rating: '7.8',
        year: 2011,
        description: 'After Portland homicide detective Nick Burkhardt discovers he\'s descended from an elite line of criminal profilers known as "Grimms," he increasingly finds his responsibilities as a detective at odds with his new responsibilities as a Grimm.'
      },
      {
        id: 9,
        genres: [genres.drama],
        title: 'The Good Doctor',
        trailerVideo: 'https://www.youtube.com/embed/fYlZDTru55g',
        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1iAXT9yCa3oI2FLzFk9kqznXoag.jpg',
        ageLimit: 16,
        rating: '8.0',
        year: 2017,
        description: 'A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn\'t have the ability to relate to people actually save their lives'
      },
    ],
  },
  actors: [
    {
      id: 1,
      title: 'Tom Hardy',
      description: 'Edward Thomas "Tom" Hardy (born 15 September 1977) is an English actor. He is best known for playing the title character in the 2009 British film Bronson, and for his roles in the films Star Trek Nemesis, RocknRolla, and Inception. He has been cast in the Christopher Nolan film The Dark Knight Rises as Bane.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sGMA6pA2D6X0gun49igJT3piHs3.jpg'
    },
    {
      id: 2,
      title: 'Tom Cruise',
      description: 'An American actor and filmmaker. He has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the 1981 film Endless Love. After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete "Maverick" Mitchell in Top Gun (1986). He has since 1996 been well known for his role as secret agent Ethan Hunt in the Mission: Impossible film series. In 2012, Cruise was Hollywood\'s highest-paid actor. Fifteen of his films grossed over $100 million domestically; twenty-one have grossed in excess of $200 million worldwide. Cruise is known for his support for the Church of Scientology and its affiliated social programs.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gThaIXgpCm3PCiXwFNDBJCme85y.jpg'
    },
    {
      id: 3,
      title: 'Emma Stone',
      description: 'Emily Jean "Emma" Stone is an American actress. The recipient of numerous accolades, including an Academy Award and a Golden Globe Award, she was the world\'s highest-paid actress in 2017. Born and raised in Scottsdale, Arizona, Stone began acting as a child, in a theater production of The Wind in the Willows in 2000. As a teenager, she relocated to Los Angeles with her mother and made her television debut in In Search of the New Partridge Family (2004), a reality show that produced only an unsold pilot. After small television roles, she made her film debut in Superbad (2007), and received positive media attention for her role in Zombieland (2009). The 2010 teen comedy Easy A was Stone\'s first starring role, earning her nominations for the BAFTA Rising Star Award and a Golden Globe Award for Best Actress. Stone gained wider recognition as Gwen Stacy in the 2012 superhero film The Amazing Spider-Man, and its 2014 sequel. She was nominated for the Academy Award for Best Supporting Actress for playing a recovering drug addict in the black comedy Birdman (2014), and her Broadway debut came in a revival of the musical Cabaret (2014–2015). She won the Academy Award for Best Actress for playing an aspiring actress in the romantic musical La La Land (2016). Stone received a third Academy Award nomination for her portrayal of Abigail Masham in the historical comedy-drama The Favourite (2018).',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg'
    },
    {
      id: 4,
      title: 'Scarlett Johansson',
      description: 'Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola\'s Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg'
    },
    {
      id: 5,
      title: 'Vin Diesel',
      description: 'Mark Sinclair (born 18 July 1967), known professionally as Vin Diesel, is an American actor, producer, director and screenwriter. He is best known for playing Dominic Toretto in the Fast & Furious franchise and is one of the highest-grossing actors of all time. He began his career in 1990 but struggled to gain roles until he wrote, directed, produced, scored, and starred in the short film Multi-Facial (1995). This attracted the attention of Steven Spielberg, who was developing Saving Private Ryan (1998); Spielberg re-wrote elements of the film to allow Diesel to appear. He subsequently voiced the titular character in The Iron Giant (1999) while gaining a reputation as an action star after headlining the Fast & Furious, XXX, and The Chronicles of Riddick film franchises.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ac1dr6oK2ImdcJInKjIZw9sG6Jk.jpg'
    },
    {
      id: 6,
      title: 'Alexandra Daddario',
      description: 'Alexandra Anna Daddario is an American actress. She is known for playing Annabeth Chase in the Percy Jackson film series, Blake Gaines in San Andreas (2015), Summer Quinn in Baywatch (2017), Emma Corrigan in Can You Keep a Secret?, and Alexis Butler in We Summon the Darkness (both 2019). She has also starred in the films Texas Chainsaw 3D and Hall Pass and has guest starred in television series such as White Collar, It\'s Always Sunny in Philadelphia, True Detective, New Girl, and American Horror Story: Hotel.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg'
    },
    {
      id: 7,
      title: 'Benedict Cumberbatch',
      description: 'Benedict Timothy Carlton Cumberbatch (born 19 July 1976) is an English actor. He first performed at the Open Air Theatre, Regent\'s Park in Shakespearean productions, and made his West End debut in Richard Eyre\'s revival of Hedda Gabler in 2005. Since then, he has starred in the Royal National Theatre productions After the Dance (2010) and Frankenstein (2011). In 2015, he played the title role in Hamlet at the Barbican Theatre. His television work includes appearances in Silent Witness (2002) and Fortysomething (2003) before playing Stephen Hawking in the television film Hawking (2004). He has starred as Sherlock Holmes in the series Sherlock since 2010. He has also headlined Tom Stoppard\'s adaptation of Parade\'s End (2012), The Hollow Crown: The Wars of the Roses (2016), and Patrick Melrose (2018). In the film, he has starred in Amazing Grace (2006), Star Trek Into Darkness (2013), 12 Years a Slave (2013), The Fifth Estate (2013), and The Imitation Game (2014). He also made a brief appearance in 1917 (2019). From 2012 to 2014, through voice and motion capture, he played the characters of Smaug and the Necromancer in The Hobbit film series. In superhero films set in the Marvel Cinematic Universe, he has played Dr. Stephen Strange in Doctor Strange (2016), Thor: Ragnarok (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019).',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fBEucxECxGLKVHBznO0qHtCGiMO.jpg'
    },
    {
      id: 8,
      title: 'Margot Robbie',
      description: 'Margot Elise Robbie (born 2 July 1990) is an Australian actress and producer. She has received nominations for two Academy Awards and five BAFTA Awards. In 2017, Time magazine named her one of the 100 most influential people in the world, and in 2019, she was ranked among the world\'s highest-paid actresses.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg'
    },
  ],
  searchArray: [],
})

export const getters = {
  getTvShows(state) {
    return state.library.tv
  },
  getMovies(state) {
    return state.library.movies
  },
  getSeries(state) {
    return state.library.series
  },
  getFromId: state => ({place, id}) => {
    return state.library[place].find(item => item.id === +id)
  },
  getActors(state) {
    return state.actors
  },
  getActor: state => id => {
    return state.actors.find(item => item.id === id)
  },
  getAllButOne: state => ({place, id, actor}) => {
    let arr = []
    if (actor) {
      arr = [...state.actors]
    } else {
      arr = [...state.library[place]]
    }
    const idx = arr.findIndex(it => it.id === id)

    arr.splice(idx, 1)

    return arr
  },
  getByGenre: state => genre => {
    const toReturn = []
    Object.keys(state.library).forEach(key => {
      state.library[key].forEach(item => {
        item.genres.includes(genre) ? toReturn.push({...item, place: key}) : null
      })
    })
    return toReturn
  }
}

export const mutations = {
  pushInSearch(state, item) {
    state.searchArray.push(item)
  },
  clearSearch(state) {
    state.searchArray = []
  }
}

export const actions = {
  search({state, commit}, searchText) {
    commit('clearSearch')

    if (searchText === '') {
      return
    }

    Object.keys(state.library).forEach(key => {
      state.library[key]
        // .forEach(item => item.title.includes(searchText) ? searchArray.push(item) : null)
        .forEach(item => {
          if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
            commit('pushInSearch', {
              ...item,
              place: key
            })
          }
        })
    })
  }
}
