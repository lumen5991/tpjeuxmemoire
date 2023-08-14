<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';



import Chien from "@/assets/images/Chien.png"
import Coq from "@/assets/images/Coq.png"
import Dinosaures from "@/assets/images/Dinosaures .png"
import Hippopotame from "@/assets/images/Hippopotame.png"
import Kangourou from "@/assets/images/Kangourou.png"
import Lion from "@/assets/images/Lion.png"
import Singe from "@/assets/images/Singe.png"
import Panthere from "@/assets/images/Panthere.png"
import Cheval from "@/assets/images/Cheval.png"

import { Fireworks } from '@fireworks-js/vue'
import { ref, onMounted, watch } from "vue" 

const images = ref([
    Cheval,
    Chien,
    Coq,
    Dinosaures,
    Hippopotame,
    Kangourou,
    Lion,
    Singe,
    Panthere
]);


const pairesImages: ref<Card[]> = ref([])
const nbreTentatives = ref(0)
const paires = ref([])
const pairesTrouver = ref([])
const timestamp = ref(0)
const timer = ref()
const startTimer = ref<boolean>(false)


const melange = () => {
    let createPairs = [];
    for (let i = 0; i < images.value.length; i++) {
        createPairs.push(
            { id: i, img: images.value[i] },
            { id: i, img: images.value[i] }
        );
    }
    pairesImages.value = createPairs.sort(() => 0.5 - Math.random());

};

watch(
    startTimer,
    (startTimer) => {
        if (startTimer.valueOf()) {
            let minutes = 0
            let secondes = 0
            timer.value = setInterval(() => {
                secondes++
                if (secondes < 10) {
                    secondes = 0 + secondes
                }
                if (secondes > 60) {
                    secondes = 0
                    minutes++
                }
                timestamp.value = minutes + 'min' + secondes + 'sec'

            }, 1000)

        }
    }

);
const myButton = ref(null);
console.log(myButton.value)
const isButtonDisabled = ref(true);
function rotate(e) {    
    isButtonDisabled.value = false
    startTimer.value = true
    if (paires.value.length < 2) {
        paires.value.push(e.target)
        e.target.classList.toggle("rotate");
        if (paires.value.length === 2) {
            nbreTentatives.value++
            if (paires.value[0].dataset.id === paires.value[1].dataset.id) {
                pairesTrouver.value++
                paires.value = []
            }
            else {
                setTimeout(() => {
                    paires.value[0].classList.remove('rotate')
                    paires.value[1].classList.remove('rotate')
                    paires.value = []
                }, 1000)
            }
        }
    }  
}

//const dureeAffichageInitial = 3000;

const affichageInitialEnCours = ref(true);

function afficherCartes() {
    reset()
}

function recommencer() {
    nbreTentatives.value = 0
    pairesImages.value = 0
    timestamp.value = 0
    startTimer.value=true
    isButtonDisabled.value = true
    clearInterval(timer.value)
    paires.value = []
    melange()
    reset()
    if(pairesTrouver.value === 9){
        clearInterval(timer.value)
        document.querySelector("#restart").innerHTML='rejouer'
        melange()
        reset()


    }
}

const cardRefs = ref<HTMLElement[]>([]);
function reset() {
    const affichageInitialEnCours = ref(true);
   
    cardRefs.value.forEach(cardRef => {
        if (cardRef) {
            cardRef.classList.add("rotate");
        }
        setTimeout(() => {
        cardRefs.value.forEach(cardRef => {
            if (cardRef) {
                cardRef.classList.remove("rotate");
            }
        });
        affichageInitialEnCours.value = false; 
    }, 10000);
    });
}

onMounted(() => {
    melange();
    
});

</script>
<template>
    <div class="wrapper">
        <div class="container">
            <header>
                <Navbar />
            </header>
            <main>
                <div class="config">
                    <span>Nombre total de paires : {{ images.length }}</span>
                    <span>Nombre d'essais : {{ nbreTentatives }} </span>
                    <span>Temps du jeu : {{ timestamp }} </span>
                    <span>Nombre de bonnes réponses : {{ pairesTrouver }} </span>
                    <button class="restart"  v-if="affichageInitialEnCours" @click="afficherCartes">Afficher les cartes</button>
                    <button ref="myButton" :disabled="isButtonDisabled" class="restart" @click="recommencer">&#x21BB;
                        Recommencer</button>
                </div>
                <div class="cards">
            
                    <div class="card" v-for="(element, i) in pairesImages" :key="i" :data-id="element.id"
                        @click.self="rotate" :ref="ref => cardRefs[i] = ref">
                        <div class="card__front">
                            <div class="card-body">
                                <img :src="element.img" alt="animal" class="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
   
</template>


<style >

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
}

.wrapper {
    overflow-x: hidden;
    background-color: whitesmoke;
    height: 100vh;
    width: 100%;
    padding: 1rem 2rem;
}
header {
    /*  width: 96%; */
}
main {
    overflow-y: hidden;
    margin-top: 25px;
    gap: 20px;
}

.container {
    border-radius: 5px;
    padding: 0 15px;
    margin: 0 auto;

}

.config {
    height: 5rem;
    width: 100%;
    padding: 0.5rem;
    /*  margin-bottom: 2rem; */
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
}

.restart {
    padding: 5px 10px;
    background-color: #3498db;
    font-size: 25px;
    border-radius: 0 10px;
    cursor: pointer;
}

.cards {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    perspective: 1000px;
    transform-style: preserve-3d;
    margin-top: 20px;

}
.card {
    cursor: pointer;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.3s all ease-in-out;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
}
.card__front {
    width: 100%;
    height: 100%;
    cursor: default;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
.card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 12rem;
    height: 12rem;
}

.card-body img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.rotate {
    transform: rotateY(180deg);
}
</style>