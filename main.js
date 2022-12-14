
// space, scary, military, romantic, cowboy, fantasy, superhero
//favouriteMovieGenre("space")
setFavouriteMovieGenre();

setFavouriteFruit();
// watermelon, tomato, banana, orange, avocado, blueberry
//favouriteFruit("pastel")

//setMode();
// light, dark
favouriteMode("dark")

setFavouriteEdgeStyle();

// sharp, soft, round
//favouriteEdgeStyle("round")

//setting my age to page
setFullYears();




//date
function setFullYears() {
    const today = new Date();
    const birthday = new Date(1989, 12, 25);
    const age = today.getFullYear() - birthday.getFullYear();
    document.getElementById("age").innerHTML = `${age} `;
}

function setFavouriteEdgeStyle() {
    const d = document.getElementsByClassName('avatar-btn');
    //let n = "";
    for (let i = 0; i < d.length; i+=1) {
        d[i].onclick = function() {
            if (i === 0) {
                favouriteEdgeStyle("round");
            }
            if (i === 1) {
                favouriteEdgeStyle("soft");
            }
            if (i === 2) {
                favouriteEdgeStyle("sharp");
            }
        }
    }
}

function setFavouriteMovieGenre() {
    const d = document.getElementsByClassName('movie-btn');
    for (let i = 0; i < d.length; i+=1) {
        d[i].onclick = function() {
            if (i === 0) {
                favouriteMovieGenre("space");
            }
            if (i === 1) {
                favouriteMovieGenre("scary");
            }
            if (i === 2) {
                favouriteMovieGenre("military");
            }
            if (i === 3) {
                favouriteMovieGenre("romantic");
            }
            if (i === 4) {
                favouriteMovieGenre("cowboy");
            }
            if (i === 5) {
                favouriteMovieGenre("fantasy");
            }
            if (i === 6) {
                favouriteMovieGenre("superhero");
            }
        }
    }
}

function setFavouriteFruit() {
    const d = document.getElementsByClassName('fruit-btn');
    for (let i = 0; i < d.length; i+=1) {
        d[i].onclick = function() {
            if (i === 0) {
                favouriteFruit("pastel");
            }
            if (i === 1) {
                favouriteFruit("muted");
            }
            if (i === 2) {
                favouriteFruit("love");
            }
            if (i === 3) {
                favouriteFruit("sky");
            }
            if (i === 4) {
                favouriteFruit("forrest");
            }
            if (i === 5) {
                favouriteFruit("shiny");
            }
            if (i === 6) {
                favouriteFruit("banana");
            }
            if (i === 7) {
                favouriteFruit("watermelon");
            }
            if (i === 8) {
                favouriteFruit("tomato");
            }
            if (i === 9) {
                favouriteFruit("avocado");
            }
            if (i === 10) {
                favouriteFruit("orange");
            }
            if (i === 11) {
                favouriteFruit("blueberry");
            }
        }
    }
}

function setMode() {
    const d = document.getElementsByClassName('mode-btn');
    for (let i = 0; i < d.length; i+=1) {
        d[i].onclick = function() {
            if (i === 0) {
                favouriteMode("light");
            }
            if (i === 1) {
                favouriteMode("dark");
            }
        }
    }
}

// function setfavouriteEdgeStyle() {
//     const d = document.getElementsByClassName('avatar-btn');
//     const n = 0;
//     for (let i = 0; i < d.length - 1; i+=1) {
//         switch (d[i].onclick) {
//             case 0:
//                 return 'round'
//             case 1:
//                 return 'soft';
//             case 2:
//                 return 'round'
//         };
        
//     }
// }


function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");
    }
}

function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    } else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteFruit(theme) {
    if (theme === "pastel") {
        setProp('--light', "#f2f6c3")
        setProp('--dark', "#68c4af")
    } else if (theme === "muted") {
        setProp('--light', "#4c5b64")
        setProp('--dark', "#45241c")
    } else if (theme === "love") {
        setProp('--light', "#f06836")
        setProp('--dark', "#ba0001")
    } else if (theme === "sky") {
        setProp('--light', "#99ccff")
        setProp('--dark', "#3366ff")
    } else if (theme === "forrest") {
        setProp('--light', "#91B247")
        setProp('--dark', "#597C2B")
    } else if (theme === "shiny") {
        setProp('--light', "#2e9afe")
        setProp('--dark', "#02197c")
    } else if (theme === "banana") {
        setProp('--light', "#fbec5d")
        setProp('--dark', "#6b3e26")
    } else if (theme === "watermelon") {
        setProp('--light', "#75b855")
        setProp('--dark', "#ad3838")
    } else if (theme === "tomato") {
        setProp('--light', "#d62e2e")
        setProp('--dark', "#600000")
    } else if (theme === "avocado") {
        setProp('--light', "#6b8c21")
        setProp('--dark', "#704012")
    } else if (theme === "orange") {
        setProp('--light', "#ffca16")
        setProp('--dark', "#f97300")
    } else if (theme === "blueberry") {
        setProp('--light', "#41a8f9")
        setProp('--dark', "#064490")
    } else {
        setProp('--light', "#f5f5f5")
        setProp('--dark', "#222222")
    }
}



