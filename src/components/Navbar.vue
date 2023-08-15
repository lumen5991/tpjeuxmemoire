<template>
    <div>
        <header>
            <nav class="navbar">
                <div class="logo">
                    <a href="">Flinmi</a>
                </div>
                <div class="nav-links">
                    <div class="user-info">
                        <div class="user-avatar"></div>
                        <div class="user-name"></div>
                    </div>
                    <div>
                        <router-link id="disconnect" to="/acceuil">Déconnexion</router-link>
                    </div>

                </div>
            </nav>
        </header>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-size: 1.5rem;
}

.logo a {
    text-decoration: none;
    color: #073757;
    font-weight: 800;
    text-decoration: none;
    outline: none;
    border: none;
    background-color: #073757;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
}

.nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 2rem;
}

#disconnect {
    text-decoration: none;
    outline: none;
    border: none;
    background-color: #073757;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;

}

#disconnect:hover {
    background-color: #fff;
    color: #3498db;
    padding: 10px 20px;
}</style>