let allMovies = new Set();
let favMovies = new Set();

class Movie {
    constructor(title, posterImage, theDate, info, actors) {
        this.title = title;
        this.posterImage = posterImage;
        this.theDate = theDate;
        this.info = info;
        this.actors = actors;
    }

    addToFavorite() {
        favMovies.add(this);
    }

    removeFromFavorite() {
        favMovies.forEach((film) => {
            if (film.title == this.title) favMovies.delete(film);
        });
    }
}

function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function setOnclickEventNav() {
    let allNavs = document.querySelectorAll(".sidebar-nav__li");
    allNavs.forEach((elem) => {
        elem.addEventListener("click", function () {
            allMovies.forEach((film) => {
                if (film.title == elem.textContent) {
                    document.querySelector(
                        ".block-content__image"
                    ).innerHTML = `<img class="film-photo" src="${film.posterImage}"></img>`;
                    document.querySelector(".title__text").textContent =
                        film.title;
                    document.querySelector(
                        ".description__about p"
                    ).textContent = film.info;
                    document.querySelector(".dateOfProd").textContent =
                        film.theDate;
                    let counter = 0;
                    document.querySelectorAll(".actor-item").forEach((item) => {
                        if (counter < 4) {
                            item.textContent = film.actors[counter];
                            counter++;
                        }
                    });
                }
            });
        });
    });
    document
        .querySelector(".add-to-favorite")
        .addEventListener("click", function () {
            allMovies.forEach((thisFilm) => {
                if (
                    thisFilm.title ==
                    document.querySelector(".title__text").textContent
                )
                    thisFilm.addToFavorite();
            });
        });
}

function cleanSetFromObj(set) {
    let newOne = new Set(set);
    newOne.forEach((elem) => {
        let count = 0;
        set.forEach((setElem) => {
            if (deepEqual(elem, setElem)) {
                count++;
                if (count > 1) set.delete(setElem);
            }
        });
    });
}
// Jay and Silent Bob Strike Back
function startScreen(film) {
    if (film) {
        document.querySelector(
            ".block-content__image"
        ).innerHTML = `<img class="film-photo" src="${film.posterImage}"></img>`;
        document.querySelector(".title__text").textContent = film.title;
        document.querySelector(".description__about p").textContent = film.info;
        document.querySelector(".dateOfProd").textContent = film.theDate;
        let counter = 0;
        document.querySelectorAll(".actor-item").forEach((item) => {
            if (counter < 4) {
                item.textContent = film.actors[counter];
                counter++;
            }
        });
    }
}

function setNavItems(filter) {
    let list = "";
    if (filter == "all") {
        cleanSetFromObj(allMovies);
        allMovies.forEach((elem) => {
            list += `<li class="sidebar-nav__li">${elem.title}</li>`;
        });
        document.querySelector(".sidebar-nav").innerHTML = list;
    } else if (filter == "fav") {
        cleanSetFromObj(favMovies);
        favMovies.forEach((elem) => {
            list += `<li class="sidebar-nav__li">${elem.title}</li>`;
        });
        document.querySelector(".sidebar-nav").innerHTML = list;
    }
}

function setFilterEnvents() {
    document
        .querySelector(".block-favorite__all")
        .addEventListener("click", function () {
            setNavItems("all");
            setOnclickEventNav();
            startScreen(Array.from(allMovies)[0]);
            cleanSetFromObj(allMovies);
        });
    document
        .querySelector(".block-favorite__fav")
        .addEventListener("click", function () {
            setNavItems("fav");
            setOnclickEventNav();
            startScreen(Array.from(favMovies)[0]);
            cleanSetFromObj(favMovies);
        });
}

let film1 = new Movie(
    "Scream",
    "./assets/images/scream.jpg",
    "20.10.1996",
    `Scream is a 1996 American slasher film directed by Wes Craven 
    and written by Kevin Williamson. The film stars David Arquette, 
    Neve Campbell, Courteney Cox, Matthew Lillard, Rose McGowan, Skeet 
    Ulrich, and Drew Barrymore. Released on December 20, it follows 
    the character of Sidney Prescott (Campbell), a high school student 
    in the fictional town of Woodsboro, California, who becomes the 
    target of a mysterious killer in a Halloween costume known as 
    Ghostface. The film combines black comedy and "whodunit" mystery 
    with the violence of the slasher genre to satirize the clichés 
    of the horror movie genre popularized in films such as Halloween 
    (1978), Friday the 13th (1980) and Craven's own A Nightmare on 
    Elm Street (1984). Scream was considered unique at the time of 
    its release for featuring characters who were aware of real-world 
    horror films and openly discussed the clichés that the film attempted 
    to subvert. Inspired by the real-life case of the Gainesville Ripper, 
    Scream was influenced by Williamson's passion for horror films, 
    especially Halloween (1978). The script, originally titled Scary 
    Movie, was bought by Dimension Films and was retitled by the 
    Weinstein Brothers just before filming was complete. The production 
    faced censorship issues with the Motion Picture Association of 
    America and obstacles from locals while filming on location. `,
    ["David Arquette", "Neve Campbell", "Courteney Cox", "Matthew Lillard"]
);

let film2 = new Movie(
    "Dogma",
    "./assets/images/dogma.jpg",
    "12.09.1999",
    `Dogma is a 1999 American fantasy comedy film written and directed 
    by Kevin Smith, who also stars with Ben Affleck, Matt Damon, George 
    Carlin, Linda Fiorentino, Janeane Garofalo, Chris Rock, Jason Lee, 
    Salma Hayek, Bud Cort, Alan Rickman, Alanis Morissette and Jason 
    Mewes. It is the fourth film in Smith's View Askewniverse series. 
    Brian O'Halloran and Jeff Anderson, stars of the first Askewniverse 
    film Clerks, appear in the film, as do Smith regulars Scott Mosier, 
    Dwight Ewell, Walt Flanagan, and Bryan Johnson. The story revolves 
    around two fallen angels who plan to employ an alleged loophole in 
    Catholic dogma to return to Heaven after being cast out by God, but 
    as existence is founded on the principle that God is infallible, 
    their success would prove God wrong, thus undoing all creation. The 
    last scion and two prophets are sent by the seraph Metatron to stop them.
    The film's irreverent treatment of Catholicism and the Catholic Church 
    triggered considerable controversy, even before its opening. The 
    Catholic League denounced it as blasphemy. Organized protests 
    delayed its release in many countries and led to at least two death 
    threats against Smith.`,
    ["Kevin Smith", "Ben Affleck", "Matt Damon", "George Carlin"]
);

let film3 = new Movie(
    "Clerks II",
    "./assets/images/clerks2.jpg",
    "21.07.2006",
    `Ten years after the events of the first film, Dante (Brian O'Halloran) 
    opens the Quick Stop convenience store to find that it is on fire; Randal 
    (Jeff Anderson) had left the coffee pot on after closing the night before. 
    As a result of the destruction of Quick Stop and the adjacent RST Video, 
    Dante and Randal begin working at a Mooby's fast food restaurant along with 
    Elias (Trevor Fehrman) and their manager Becky Scott (Rosario Dawson).
    A year later, Dante is planning to leave his minimum wage lifestyle in 
    favor of a family life in Florida with his fiancée Emma Bunting (Jennifer 
    Schwalbach), whose father will provide them with a home and a business 
    to run. Fearing the loss of his best friend, Randal becomes resentful 
    towards Dante and Emma. Jay and Silent Bob (Jason Mewes and Kevin Smith) 
    have followed Dante and Randal, and now loiter outside of Mooby's. Although 
    they continue to sell drugs, Jay and Silent Bob have become sober after 
    they were arrested for possession and were sent to rehab; they become 
    devout Christians after their release. Dante tells Becky that he is 
    worried about dancing at his wedding, so she takes him up to the roof 
    of the restaurant to teach him some moves. Dante soon lets go of his 
    inhibitions and begins dancing. When the song ends, Dante, caught up 
    in the moment, confesses his love for Becky, and she reveals that she's 
    pregnant; Dante and Becky had a one night stand at work a few weeks before. 
    Becky tells Dante not to tell anyone about the baby; however he tells Randal, 
    and an angered Becky leaves when she finds out.`,
    ["Kevin Smith", "Jeff Anderson", "Brian O'Halloran", "Jason Mewes"]
);

let film4 = new Movie(
    "Jay and Silent Bob Strike Back",
    "./assets/images/strikeback.jpg",
    "24.08.2001",
    `Upon receiving a restraining order from Randal Graves (Clerks) 
    for selling drugs outside the Quick Stop, Jay and Silent Bob learn 
    from Brodie Bruce (Mallrats) that Bluntman and Chronic, the comic 
    book based on their likenesses, is being adapted by Miramax Films. 
    The pair visit Holden McNeil (Chasing Amy), co-writer of Bluntman 
    and Chronic, and demand royalties from the film, but Holden explains 
    he sold his share of the rights to co-creator Banky Edwards. Seeing 
    the negative reaction the film has received online, the pair set 
    out for Hollywood to prevent the film from tainting their image, or 
    at least to receive the royalties owed them.
    En route, they befriend an animal liberation group: Justice, Sissy, 
    Missy, Chrissy, and Brent. The organization is a front; Brent is a 
    patsy, who will free animals from a laboratory as a diversion while 
    the girls rob a diamond depository. Jay throws Brent out of the van 
    to get closer to Justice, with whom he is attracted to. Justice is 
    fond of the pair, but reluctantly accepts them as new patsies.
    While the girls steal the diamonds, Jay and Silent Bob free the animals, 
    taking an orangutan named Suzanne with them. They escape as the police 
    arrive and the van explodes, which they believe has killed the girls.
    Federal Wildlife Marshal Willenholly (whose name is taken from Land of 
    the Lost characters) arrives; oblivious to the diamond heist, 
    he claims jurisdiction due to the escaped animals, all of which have 
    been recovered but the orangutan. The officers find footage of a video 
    Sissy recorded of Jay claiming to be "the clit commander", with accompanying 
    literature that "Clit" is an acronym for Coalition for the Liberation of 
    Itinerant Tree-Dwellers. Willenholly declares the crime an act of terrorism 
    and calls for backup to hunt "the two most dangerous men on the planet."`,
    ["Kevin Smith", "Ben Affleck", "Matt Damon", "Jason Mewes"]
);

let film5 = new Movie(
    "Twin Peaks",
    "./assets/images/twinpeaks.jpg",
    "08.04.1990",
    `Twin Peaks is an American mystery drama television series created 
    by Mark Frost and David Lynch that premiered on April 8, 1990, on ABC 
    until its cancellation after its second season in 1991. The show gained 
    a devoted cult following and has been referenced in a wide variety of 
    media. In subsequent years, Twin Peaks is often listed among 
    the greatest television series of all time, and is considered a landmark 
    turning point in television drama. The series follows an 
    investigation headed by FBI Special Agent Dale Cooper (Kyle MacLachlan) and 
    local Sheriff Harry S. Truman (Michael Ontkean) into the murder of homecoming 
    queen Laura Palmer (Sheryl Lee) in the fictional town of Twin Peaks, 
    Washington. The show's narrative draws on elements of detective fiction, 
    but its uncanny tone, supernatural elements, and campy, melodramatic portrayal 
    of eccentric characters also draw on American soap opera and horror tropes.
    Like much of Lynch's work, it is distinguished by surrealism, 
    offbeat humor, and distinctive cinematography. The score was composed by 
    Angelo Badalamenti with Lynch. The success of the show sparked a media 
    franchise, and the series was followed by a 1992 feature film, Twin Peaks: 
    Fire Walk with Me, that serves as a prequel to the series. Additional tie-in 
    books were also released. Following a hiatus of over 25 years, the show returned 
    in 2017 with a third season on Showtime. The season was directed by Lynch and 
    written by Lynch and Frost, and starred MacLachlan alongside other original cast members.`,
    ["Lara Flynn Boyle", "Kyle MacLachlan", "Mädchen Amick", "Sherilyn Fenn"]
);

let film6 = new Movie(
    "Rick and Morty",
    "./assets/images/rickandmorty.jpg",
    "02.10.2013",
    `The show revolves around the adventures of the members of the Smith 
    household, which consists of parents Jerry and Beth, their children 
    Summer and Morty, and Beth's father, Rick Sanchez, who lives with them 
    as a guest. According to Justin Roiland, the family lives outside of Seattle, 
    Washington.[3] The adventures of Rick and Morty, however, take place across 
    an infinite number of realities, with the characters travelling to other planets 
    and dimensions through portals and Rick's flying car.
    Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary 
    conventions such as school, marriage, love, and family. He frequently goes on 
    adventures with his 14-year-old grandson, Morty, a kind-hearted but easily 
    distressed boy, whose naïve but grounded moral compass plays counterpoint to 
    Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional 
    teenager who worries about improving her status among her peers and sometimes follows 
    Rick and Morty on their adventures. The kids' mother, Beth, is a generally 
    level-headed person and assertive force in the household, though self-conscious 
    about her professional role as a horse surgeon. She is dissatisfied with her 
    marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's 
    influence over his family.`,
    ["Justin Roiland", "Chris Parnell", "Spencer Grammer", "Sarah Chalke"]
);

let film0 = new Movie("", "", "", "", "");

allMovies.add(film1);
allMovies.add(film2);
allMovies.add(film3);
allMovies.add(film4);
allMovies.add(film5);
allMovies.add(film6);

setNavItems("all");
setOnclickEventNav();
setFilterEnvents();
startScreen(Array.from(allMovies)[0]);
