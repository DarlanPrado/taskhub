<template>
    <div id="form">
        <div>
            <div class="field centralizes-content">
                <LoginUserIcon style="margin-bottom: 30px;"/>
            </div>
            <div class="field centralizes-content">
                <span style="font-size: 35px;"><strong>Recuperar senha</strong></span>
            </div>
        </div>  
       <form @submit.prevent="enviarEmail">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input is-medium" type="text" placeholder="Usuário">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input is-medium" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control content-buttons-form">
                    <button class="button buttomForm is-medium is-info" @click="loginForm">
                        voltar
                    </button>
                    <button class="button buttomForm is-medium is-success">
                        Enviar
                    </button>
                </p>
            </div>
       </form>
    </div>
</template>
<script lang="ts">
export default {
    name: 'EsqueciASenhaForm',
    methods: {
        loginForm(){
            this.$emit('alterForm','login')
        },
        enviarEmail(){
            
        }
    },
    async asyncData(){
        console.info('esqueciASenha');
    }
}
</script>
<style scoped>
    #form{
        background-color: white;
        border-radius: 15px;
        padding: 20px;
        width: 30vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        min-width: 300px;
    }

    .field{
        width: 100%;
    }

    input {
        width: 100% !important;
    }

    .content-buttons-form{
        display: flex;
        align-items: center;
        justify-content:space-between;
    }

    .buttomForm{
        width: 40%;
    }
</style>