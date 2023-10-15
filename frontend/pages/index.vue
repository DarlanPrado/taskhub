<template>
  <body class="columns is-desktop">
    <div class="column is-half" id="apresentation">
      <div style="height: 50vh; max-height: 300px">
        <div class="centralizes-content">
          <img src="/TaskHub_logo.png" alt="TaskHub">
        </div>
        <div class="centralizes-content" style="margin-top: 20px;">
          <span id="slogan"> Desperte a Eficiência, Conquiste o Sucesso!</span>
        </div>
      </div>
    </div>
    <div class="column is-half form">
      <LoginLogar v-if="showLoginForm" @alterForm="alterForm" />
      <LoginEsqueciASenha v-if="showEsqueciASenhaForm" @alterForm="alterForm" />
    </div>
  </body>
</template>
<script lang="ts">
export default {
  name: 'IndexPage',
  data() {
    return {
      showLoginForm: true,
      showEsqueciASenhaForm: false,
    }
  },
  methods: {
    alterForm(form: string){
      console.log(`askoudhuuioashd${form}`);

      switch(form){
        case 'login':
          this.showEsqueciASenhaForm = false;
          this.showLoginForm = true;
          break;
          
        case 'esqueciASenha':
          this.showLoginForm = false;
          this.showEsqueciASenhaForm = true;
          break;
      }
    }
  }
}
</script>
<style scoped>
  body {
    width: 100vw;
    height: 100vh;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #slogan{
    color: white;
    font-size: 30px;
  }

  #apresentation{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
