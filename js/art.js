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
        imageURL : "img/art/sunnyside_cruise.png",
        title : "Sunnyside Cruise",
        description : "",
    },
    {
        imageURL : "img/art/leo_starter_pack_noai_small.png",
        title : "Yolwoocle Starter Pack",
        description : "",
    },
    {
        imageURL : "img/drawings/dino_remake.png",
        title : "Chrome Dino Remake (2025)",
        description : "Concept art",
    },
    {
        imageURL : "img/drawings/mario_redraw_scene.png",
        title : "Super Mario Bros. Redrawn",
        description : "Concept art",
    },
    {
        imageURL : "img/drawings/assembleenationale2.png",
        title : "Ennemicycle",
        description : "Mockup for a french politics fighting game",
    },
    {
        imageURL : "./img/art/catcliff.png",
        title : "Serenity",
        description : "",
    },
    {
        imageURL : "./img/drawings/switchblade.png",
        title : "Switchblade",
        description : "Commissioned artwork for a game",
    },
    {
        imageURL : "./img/art/BoxOfMushies.png",
        title : "Box of Mushies",
        description : "Made using Blender",
    },
    {
        imageURL : "./img/pictures/hxi2_sweat.png",
        title : "HXi&sup2 hoodie",
        description : "Artwork for a school hoodie",
    },
    {
        imageURL : "./img/art/sweat_taupins_v1.png",
        title : "Taupins",
        description : "Artwork for a school hoodie",
    },
    {
        imageURL : "./img/art/TreesThings.png",
        title : "Hidden Kingdom",
        description : "",
    },
    {
        imageURL : "./img/art/antPoster.png",
        title : "Soldier Ant",
        description : "Artwork that inspired Bugscraper",
    },
    {
        imageURL : "./img/art/minecraft_desert-pico8.png",
        title : "PICO-8 Minecraft: Desert",
        description : "Concept Art Mockup",
    },
    {
        imageURL : "./img/art/minecraft-pico8.png",
        title : "PICO-8 Minecraft: Overworld",
        description : "Concept Art Mockup",
    },
    {
        imageURL : "./img/art/pico-8_unrailed_concept.png",
        title : "PICO-8 Unrailed Demake Mockup",
        description : "",
    },
    {
        imageURL : "./img/art/LCD Console Concept.png",
        title : "LCD Console Mockup",
        description : "",
    },
    {
        imageURL : "./img/art/BJG_coffee_recycle_shop_thing_FINAL.png",
        title : "Cofee Shop",
        description : "Inspired by Brandon James Greer",
    },
    {
        imageURL : "./img/art/aquarium.gif",
        title : "Aquarium",
        description : "",
    },
    {
        imageURL : "./img/art/microchipCity_watermark.png",
        title : "Microchip City",
        description : "Made to accompany the following track: <a href=\"https://www.youtube.com/watch?v=JCoXo-hwczs\">https://www.youtube.com/watch?v=JCoXo-hwczs</a>",
    },
    {
        imageURL : "./img/art/MicrochipCitySketch.jpg",
        title : "Microchip City Sketch",
        description : "",
    },
    {
        imageURL : "./img/art/clayGoombud.jpg",
        title : "Clay Goombud",
        description : "",
    },
    {
        imageURL : "./img/art/atelier_info.png",
        title : "Poster for a highschool programming club",
        description : "",
    },
    {
        imageURL : "./img/art/girlwateringplant4.png",
        title : "Girl Watering Plants",
        description : "",
    },
    {
        imageURL : "./img/art/dino_sleeping17.gif",
        title : "Dino's adventure begins",
        description : "",
    },
    {
        imageURL : "./img/art/dinogbwatermark_bigger.gif",
        title : "Gameboy Chrome Dino",
        description : "Concept Art",
    }, 
    {
        imageURL : "./img/art/diamond5.png",
        title : "Diamonds",
        description : "",
    }, 
    {
        imageURL : "./img/art/heartImprovedWaterMark.png",
        title : "Hearts",
        description : "",
    }, 
    {
        imageURL : "./img/art/trefleImprovedWatermark.png",
        title : "Clubs",
        description : "",
    }, 
    {
        imageURL : "./img/art/spaceChess.jpg",
        title : "Space Chess",
        description : "Made using Blender",
    }, 
    {
        imageURL : "./img/art/NESvoxelArt.jpg",
        title : "NES Voxel Art",
        description : "A tribute",
    }, 
    {
        imageURL : "./img/art/RobertoZucco.png",
        title : "Roberto Zucco",
        description : "Made for my French class",
    }, 
    {
        imageURL : "./img/art/GoombaGoombette3.png",
        title : "Goomba Love",
        description : "",
    }, 
    // {
    //     imageURL : "./img/art/DoodleArtVertical.png",
    //     title : "Doodle Art",
    //     description : "",
    // }, 
    // {
    //     imageURL : "./img/art/voxelArtCactus.jpg",
    //     title : "Voxel Cacti",
    //     description : "Made using Magicavoxel",
    // },
    // {
    //     imageURL : "./img/art/DeepSeaFishV3.png",
    //     title : "Deep Sea Fish",
    //     description : "2019",
    // },
    {
        imageURL : "./img/art/pigeons_NOT_WATERMARKED_23-oct_V3.png",
        title : "Pigeon chase",
        description : "",
    },
    // {
    //     imageURL : "./img/art/marioMakerFanArt.png",
    //     title : "Super Mario Maker 2 Fanart",
    //     description : "Around 2018",
    // },
]

function getHTMLofCard(card, index) {
    let div = document.createElement("div")
    div.innerHTML = `
        <div class="card artCard" onclick="openImageViewer(${index})">
            <div class="cardImageContainer">
                <img src="${card.imageURL}">
            </div>
            <h2>${card.title}</h2>
            <p>${card.description}</p>
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
    let title = document.getElementById("imageViewerTitleId")
    let description = document.getElementById("imageViewerDescriptionId")
    let counter = document.getElementById("imageViewerCounterId")
    let currentCard = cards[currentCardIndex]

    img.src = currentCard.imageURL
    title.innerHTML = currentCard.title
    description.innerHTML = currentCard.description
    counter.innerText = `${currentCardIndex + 1} / ${cards.length}`
}

function fillBodyWithCards() {
    let grid = document.getElementById("cardGridId")
    
    for (let i=0; i<cards.length; i++) {
        grid.append(getHTMLofCard(cards[i], i))
    }
}


fillBodyWithCards()