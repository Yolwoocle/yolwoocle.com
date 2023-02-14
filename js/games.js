// let css = '.card:hover{ transform: rotate(${Math.random()*6 - 3}deg) }';
// let style = document.createElement('style');

// if (style.styleSheet) {
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

// document.getElementsByTagName('head')[0].appendChild(style);

// const cards = document.getElementsByClassName("card");
// for (let i=0; i < cards.length; i++) {
//     console.log(i)
// }

let isViewing = false
let currentCardIndex = 0

const cards = [
    {
        title : "Bugscraper",
        tagline : "Rise to the last floor in a pest infected tower",
        description : `Welcome to the bugscraper.<br>
        Here, nefarious insects and pests all around the world come to plan their next mischief. <br>
        Stop them before it is too late!<br>
        Rise to the top of a bug-infested tower by fighting on an elevator. On each floor, waves of enemies will come for your skin (or rather, exoskeleton). With your trusty pea gun, eliminate them and prepare for the next floor!<br>
        `,
        thumbnail : "./img/games/bugscraper/thumbnail.png",
        preview : "./img/games/bugscraper/gameplay.gif",
        trailer : null,
        links: {
            "itch.io": "https://yolwoocle.itch.io/bugscraper/",
        }
    }, 
    {
        title : "Oracle's Inn",
        tagline : "Practice Malpractice",
        description : `Welcome to my potion shoppe! I'm glad to have you here. However, I can sense dark waters in your future. I know just the ingredients...
        In <b>Oracle's Inn</b>, you take the role of alchemist/doctor/oracle/bundle of joy and happen to be just the person your customers need. Catch glimpses into the futures of your customers, and prepare for them live-saving potions in advance!
        This game was made in 3 days with Louie Chapman for the Mini Jam 112, following the theme "Chrono" and limitation "Only three buttons".`,
        thumbnail : "./img/games/oraclesInn/OraclesInnThumnail.png",
        preview : "./img/games/oraclesInn/gameplay.gif",
        trailer : null,
        links: {
            "itch.io": "https://louiechapm.itch.io/oracles-inn",
        }
    }, 
    {
        title : "Birds With Guns",
        tagline : "Mess with the Flock, you get the Glock",
        description : `Are you ready to have a quacking time? Toucan play this egg-citing game right now! Made by an im-peck-able team of quail-ified developers, you're gonna have no egrets. <b>Birds With Guns</b> is a game I made with a friend over the course of a vacation.`,
        thumbnail : "./img/games/bwg/bwg_square.png",
        preview : null, //"./img/games/bwg/gif/bwg_1.gif",
        trailer : "https://www.youtube.com/embed/jb6uOKTxTlc",
        links : {
            "PICO-8 Forums": "https://www.lexaloffle.com/bbs/?tid=45334",
            "itch.io": "https://yolwoocle.itch.io/birds-with-guns",
        },
    }, 
    {
        title : "Minesweeper Royale",
        tagline : "Minesweeper, but it's a battle royale.",
        description : `<b>Minesweeper Royale</b> is what minesweeper would be like if it were
        a battle royale game. Multiple players compete to be the fastest to complete the
        same minesweeper board, or to be the last one alive. This game is complete with a chat
        system and a display showing all the player boards. This was my first ever attempt 
        at networking, using the L&Ouml;VE framework and luasocket. It was a project I made 
        for school, hence it's not available on itch.io and I didn't advertize it. <br>The 
        source code is available on GitHub, but the little documentation I have provided
        is in French. During my attempts to make it work, I have rarely managed to make it
        work across multiple computers, but it does work locally. I encourage you to take 
        a look at the source code.`,
        thumbnail : "./img/games/minesweeper_royale/thumbnail.png",
        preview : "./img/games/minesweeper_royale/gameplay.png",
        trailer : null, //"https://www.youtube.com/embed/jb6uOKTxTlc",
        links : {
            "GitHub": "https://github.com/Yolwoocle/Minesweeper_Royale",
        },
    }, 
    {
        title : "Octoboom",
        tagline : "Ping, Pong, Boom. Made for a game jam.",
        description : `<b>Octoboom</b> is a game I made with friends for 
        <a href="https://ldjam.com/events/ludum-dare/49">Ludum Dare 49</a> 
        in the span of 3 days. <br>An accident has occurred in the mine and 
        toxic gas is escaping! Flee! Your bomb is your weapon. Throw it on 
        enemies, and catch it before it explodes. The longer you let it 
        fly, the more points it’ll give you, but this is at your own risk.`,
        thumbnail : "./img/games/octoboom/thumbnail.png",
        preview : "./img/games/octoboom/screenshot2.png",
        trailer : null, //"https://www.youtube.com/embed/jb6uOKTxTlc",
        links : {
            "itch.io": "https://yolwoocle.itch.io/octoboom",
            "Ludum Dare 49 Submission": "https://ldjam.com/events/ludum-dare/49/octoboom",
        },
    }, 
    {
        title : "Derailed!",
        tagline : "A co-op game about building tracks",
        description : `<b>Derailed!</b> is yet another PICO-8 game I made to challenge myself. It's a co-op game where you need to communicate with a friend to bring a train to its station. It's a fan-made demake of Unrailed!. After I made some concept art for a PICO-8 demake of this game, I thought it would be fun to actually turn it into a real thing. I hope that you'll have fun playing it, and maybe you can grab a friend to try it out.<br><br><i>(The game is unfinished, but it's playable nonetherless. I don't plan to finish it.)</i>`,
        thumbnail : "./img/games/derailed/pico-8_unrailed_concept_thumbnail.png",
        preview : "./img/games/derailed/pico-8_unrailed_concept_thumbnail_wide.png",
        trailer: null,
        links: {
            "PICO-8 Forums": "https://www.lexaloffle.com/bbs/?pid=derailed",
            "itch.io": "https://yolwoocle.itch.io/derailed",
        }
    },
    {
        title : "Pico Dino",
        tagline : "Reimagining Google Chrome's secret game",
        description : `<b>Pico Dino</b> is what came out as I tried to make something simple, but as polished as possible. I really like complexity 
        that rises from simple things, like icons and puzzles (and even math), so I found it very fun trying to come up with a complex moveset 
        from a very simple 2-button control scheme. I originally wanted to add different worlds, power-ups, more enemies, but at some point I had 
        to make something I could actually finish. Nonetherless, I'm quite pleased with how it turned out.<br>
        I sent my game by email to Edward Jung, one of the two creators of the original game, and he seemed to love it, which made me very happy.
        `,
        thumbnail : "./img/games/picodino/thumbnail.png",
        preview : "./img/games/picodino/dinogifusethis.gif",
        trailer: null, //"https://www.youtube.com/embed/XF79HG9XOaA",
        links: {
            "PICO-8 Forums": "https://www.lexaloffle.com/bbs/?tid=40759",
            "itch.io": "https://yolwoocle.itch.io/pico-dino",
        }
    }, 
    {
        title : "Chaser Of Dawn",
        tagline : "A game about looping around a planet. Made for a game jam.",
        description : `<b>Chaser Of Dawn</b> is a game that was made for the Ludum Dare 47 game jam.
        We had 3 days to make a game based on the theme "Stuck in a loop", and we used the Pico-8 engine. The game was inspired by exoplanets that don't rotate and have a very big difference in temperature between their two sides.
        It was a lot of fun and we hope to do more games like this in the future!`,
        thumbnail : "./img/games/chaserofdawn/chaserofdawn_miniature.png",
        preview : null,//"./img/games/chaserofdawn/chaserofdawn_1.png",
        trailer: "https://www.youtube.com/embed/XF79HG9XOaA",
        links: {
            "Ludum Dare 47 Submission": "https://ldjam.com/events/ludum-dare/47/chaser-of-dawn",
            "PICO-8 Forums": "https://www.lexaloffle.com/bbs/?tid=40733",
            "itch.io": "https://yolwoocle.itch.io/chaser-of-dawn",
        }
    }, 
]

function getHTMLofCard(card, index) {
    let div = document.createElement("div")
    div.innerHTML = `
        <div class="card artCard" onclick="openImageViewer(${index})">
            <div class="cardImageContainer">
                <img src="${card.thumbnail}">
            </div>
            <h2>${card.title}</h2>
            <p>${card.tagline}</p>
        </div>`
    return div
}

function openImageViewer(index) {
    isViewing = true
    let element = document.getElementById("cardViewerId")
    element.style.display = "flex"

    currentCardIndex = index
    updateImage()
}

function closeImageViewer() {
    isViewing = false
    let element = document.getElementById("cardViewerId")
    element.style.display = "none"
}

// TODO: merge art.js and games.js into a single abstraction
function previousImage() {
    if (currentCardIndex <= 0) {
        return
    }

    currentCardIndex = Math.max(currentCardIndex-1, 0)
    console.log(currentCardIndex)

    updateImage()
}

function nextImage() {
    if (currentCardIndex >= cards.length-1) {
        return
    }

    currentCardIndex = Math.min(currentCardIndex+1, cards.length-1)
    console.log(currentCardIndex)

    updateImage()
}

function updateImage() {
    let img = document.getElementById("imageViewerImageId")
    let trailer = document.getElementById("imageViewerTrailerId")
    let title = document.getElementById("imageViewerTitleId")
    let tagline = document.getElementById("imageViewerTaglineId")
    let description = document.getElementById("imageViewerDescriptionId")
    let counter = document.getElementById("imageViewerCounterId")
    let links = document.getElementById("imageViewerLinksId")
    let currentCard = cards[currentCardIndex]

    // img.src = currentCard.preview
    title.innerText = currentCard.title
    tagline.innerText = currentCard.tagline
    description.innerHTML = currentCard.description
    counter.innerText = `${currentCardIndex + 1} / ${cards.length}`
    
    links.innerHTML = `<b>PLAY IT:</b> `
    let i = 0
    for (const link in currentCard.links) {
        if (i > 0) {links.innerHTML += " &middot; "}
        links.innerHTML += `<a href="${currentCard.links[link]}">${link}</a>`
        i++
    }

    // Repetition: maybe we should abstract or something idk anything about js
    if (currentCard.preview) {
        img.style.display = ""
        img.src = currentCard.preview
    } else {
        img.style.display = "none"
    }
    
    if (currentCard.trailer) {
        trailer.style.display = ""
        trailer.src = currentCard.trailer
    } else {
        trailer.style.display = "none"
    }

    // Hide/show L/R buttons if we reach the bginning/end
    let leftButton = document.getElementById("buttonLeftImgId")
    let rightButton = document.getElementById("buttonRightImgId")
    
    leftButton.style.display = ""
    rightButton.style.display = ""
    if (currentCardIndex == 0) { leftButton.style.display = "none" }
    if (currentCardIndex == cards.length - 1) { rightButton.style.display = "none" }
}

function fillBodyWithCards() {
    let grid = document.getElementById("cardGridId")
    
    for (let i=0; i<cards.length; i++) {
        grid.append(getHTMLofCard(cards[i], i))
    }
}


fillBodyWithCards()