<template>
    <div id="form">
        <div>
            <div class="field centralizes-content">
                <LoginUserIcon style="margin-bottom: 30px;"/>
            </div>
            <div class="field centralizes-content">
                <span style="font-size: 35px;"><strong>Login</strong></span>
            </div>
        </div>  
        <form @submit.prevent="logar">
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
                    <input class="input is-medium" type="password" placeholder="Senha">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <a style="color: #48c78e" @click="esqueciASenha">Esqueci a senha</a>
            </div>
            <div class="field">
                <p class="control">
                    <button type="submit" class="button buttonLogin is-medium is-success">
                        Login
                    </button>
                </p>    
            </div>
        </form>
    </div>
</template>
<script lang="ts">

export default {
    name: 'LoginForm',
    methods: {
        esqueciASenha(){
            this.$emit('alterForm', 'esqueciASenha');
        },
        logar(){

        }
    },
    async asyncData(){
        console.info('login');
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

    .buttonLogin{
        width: 100%;
    }
</style>