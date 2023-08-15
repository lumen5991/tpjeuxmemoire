<script lang="ts" setup>
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { error } from 'console'


const Error = ref('')

const router = useRouter()

const connection = ref({
    email: '',
    password: ''
})
const loginUser = async () => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: connection.value.email,
        password: connection.value.password,
    })
    if (error) {
        Error.value = error.message
    }
    else {
        router.replace('/jeu')
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
                        <p>Votre email</p>
                        <input type="text" id="pseudo" placeholder="email" v-model="connection.email">
                        <p>Votre mot de passe</p>
                        <input type="password" id="pass" v-model="connection.password">
                        <div class="bottom">
                            <div>
                                <router-link to="" @click="loginUser" id="connecter">SE CONNECTER</router-link>
                            </div>
                            <div>
                                <p>Pas de compte?</p>
                                <router-link id="inscrire" to="/inscription">S'INSCRIRE</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 800px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 40px;
    margin: 5rem auto;
    gap: 2rem;
}

.left {
    width: 40%;
}

.left h2 {
    font-size: 40px;
    margin-bottom: 10px;
    text-align: center;
}

.left p {
    font-size: 20px;
    color: #555;
    line-height: 1.5;
    text-align: justify;
}

.left span {
    color: #3498db;
}

.right {
    width: 60%;
    background-color: #3498db;
    color: #fff;
    padding: 40px;
    border-radius: 10px;
}

.bottom {
    justify-content: center;
    text-align: center;
}

.form_signup {
    margin: 0 auto;
}

.form_signup p {
    font-size: 18px;
    margin-top: 15px;
    color: #fff;
}

.form_signup input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: none;
    outline: none;
    border-radius: 4px;
    color: #555;
    font-size: 18px;
}

#inscrire {
    display: inline-block;
    padding: 10px 20px;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 900;
    color: #fff;
}

#connecter {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fff;
    color: #3498db;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
    font-weight: 900;
}
</style>