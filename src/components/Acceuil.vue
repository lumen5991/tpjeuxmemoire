<script lang="ts" setup>
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
        <div>
          <p>Pas de compte?</p>
          <router-link to="/inscription" class="router-link">S'INSCRIRE</router-link>
        </div>
        <div>
          <p>Déja inscrit?</p>
          <router-link to="/connection" class="router-link">SE CONNECTER</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50rem;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 15rem auto;
}

.left {
  flex: 1;
  animation: welcomeAnimation 1s ease-in-out;
}

@keyframes welcomeAnimation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.left h2 {
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
}

.left span {
  color: #3498db;
}

p {
  font-size: 20px;
  line-height: 1.6;
  text-align: justify;
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

.router-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fff;
  color: #3498db;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;
}

.router-link:hover {
  background-color: #4CAF50;
  color: #fff;
  animation: buttonHoverEffect 0.3s ease-in-out;
}

@keyframes buttonHoverEffect {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}</style>
