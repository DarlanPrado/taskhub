<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <nuxt-link to="/home" class="navbar-item">
          <img src="/TaskHub_logo.png" width="112" height="28">
        </nuxt-link>

        <a role="button" @click="() => { showLateralNavbar = !showLateralNavbar }" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <NuxtLink to="/home/pessoal" class="navbar-item">
            Pessoal
          </NuxtLink>
    
          <NuxtLink to="/home/equipe" class="navbar-item">
            Equipe
          </NuxtLink>

          <NuxtLink to="/home/calendario" class="navbar-item">
            Calendario
          </NuxtLink>

          <NuxtLink to="/home/ajuda" class="navbar-item">
            Ajuda
          </NuxtLink>

        </div>
    
        <div class="navbar-end">
          
        </div>
      </div>
    </nav>
    <div v-show="showLateralNavbar" class="lateral-navbar column">
      <NuxtLink to="/home/pessoal" class="navbar-item">
        Pessoal
      </NuxtLink>

      <NuxtLink to="/home/equipe" class="navbar-item">
        Equipe
      </NuxtLink>

      <NuxtLink to="/home/calendario" class="navbar-item">
        Calendario
      </NuxtLink>

      <NuxtLink to="/home/ajuda" class="navbar-item">
        Ajuda
      </NuxtLink>
      <hr style="width: 100%; height: 0.5px; background-color: #476471;">
      <a to="/home/ajuda" class="navbar-item">
        Sair
      </a>

    </div>
    <Nuxt />
  </div>
  <slot />
</template>
<script lang="ts">

export default {
  name: 'navbarDefault',
  data(){
    return{
      showLateralNavbar: false
    }
  },
  mounted() {
    this.showLateralNavbar = false;
  },
  watch: {
    $route(to, from) {
      this.showLateralNavbar = false;
    }
  }
}
</script>
<style>
  .navbar{
    margin: 0;
    background-color: #082533;
  }

  .navbar-item{
    color: #48c78e !important;
  }

 .navbar-item:hover {
    background-color: #476471 !important;
    color: #48c78e !important;
  }

  .lateral-navbar{
    background-color: #082533;
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center; 
  }

  .lateral-navbar > *{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1025px) {
    .lateral-navbar {
      display: none;
    }
  }
  
</style>