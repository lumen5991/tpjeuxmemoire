import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import { ref } from "vue";
type Inscription = { idJoueur?: number, emailJoueur?: string, pseudoJoueur?: string, motDePasseJoueur?: string }

export const useInscriptionStore = defineStore("inscription", () => {
    const joueur = ref<Inscription[]>([]);
    async function initialise() {
        const {data, error} = await supabase.from("Inscription").select('*');
        
        if (data) {
            joueur.value = data;
        }
    }

    async function addJoueur(inscription: Inscription) {
        const {data, error} = await supabase.from("Joueur").insert(inscription).select('*')

        if(data){
            joueur.value.push(data[0])
        }
    }
    return{joueur, addJoueur, initialise}
})