<script lang="ts" setup>
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { error } from 'console'

const error = ref('')

const router = useRouter()

const inscription = ref({
    email: '',
    pseudo: '',
    password: '',
    confirmPassword: ''
})
const createUser = async () => {

    const { data, error } = await supabase.auth.signUp({
        email: inscription.value.email,
        password: inscription.value.password,
    })
    if (error) {
        error.value = error.message
    }
    else {
        router.replace('/connection')
    }
}

</script>
<template>
    <div>
        <div class="container">
            <div class="left">
                <h2>Bienvenu sur <span>Flinmi</span> </h2>
                <p>Flinmi est une application de jeu de mémoire qui vous permet de rester éveiller et d'allumer votre
                    cerveau</p>
            </div>
            <div class="right">
                <form id="signup_form" action="" @submit.prevent>
                    <div class="form_signup">
                        <div class="form">
                            <div>
                                <p>Votre Email</p>
                                <input type="email" id="email" placeholder="Email" v-model="inscription.email">
                                <p>Votre pseudo</p>
                                <input type="text" id="pseudo" placeholder="Pseudo" v-model="inscription.pseudo">

                            </div>
                            <div>
                                <p>Votre mot de passe</p>
                                <input type="password" id="pass" v-model="inscription.password">
                                <p>Confirmer votre mot de passe</p>
                                <input type="password" v-model="inscription.confirmPassword">
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="button">
                                <p>{{ error }}</p>
                                <router-link id="inscrire" to="" @click="createUser">S'INSCRIRE</router-link>
                            </div>
                            <div class="button">
                                <span>Déjà un compte?</span>
                                <router-link id="connecter" to="">SE CONNECTER</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1000px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 40px;
    margin: 15rem auto;
    gap: 2rem;
}

.left {

    width: 40%;
}


.left h2 {
    font-size: 40px;
    margin-bottom: 10px;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out 0.5s forwards;
    font-size: 36px;

}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.left p {
    font-size: 20px;
    color: #555;
    line-height: 1.5;
    text-align: justify;
}


.left span {
    color: #3498db;
    font-size: 40px;
}

.right {
    width: 60%;
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}

.form_signup {
    padding: 10px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-out 0.2s forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.form_signup p {
    font-size: 18px;
    margin-top: 15px;
    color: #fff;
}

.form {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.form_signup input {
    width: 90%;
    padding: 10px;
    margin-top: 5px;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
}

.form_signup input::placeholder {
    color: #fff;
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    margin-top: 20px;
}

#connecter {
    margin-top: 20px;
    text-decoration: none;
    margin-left: 10px;
    color: #fff;
}

#inscrire {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fff;
    color: #3498db;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 900;
}

.form_signup a:hover {
    background-color: #3498db;
    color: #fff;
    font-weight: 900
}

#inscrire,
#connecter {
    transition: background-color 0.3s, color 0.3s;
}

#inscrire:hover,
#connecter:hover {
    background-color: #3498db;
    color: #fff;
}</style>