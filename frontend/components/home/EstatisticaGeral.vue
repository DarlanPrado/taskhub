<template>
    <div id="estatisticaGeral" class="columns">
        <div id="headerGraphic" class="column is-12 is-desktop">
            <button id="leftButtom" @click="previousOption" class="button"><i class="fa-solid fa-chevron-left"></i></button>
            <h4 id="graficOption">{{ graficOption[graficOptionSelected-1] }}</h4>
            <button id="rightButtom" @click="nextOption" class="button"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div id="bodyGrapgic" class="column is-12 is-desktop">
            <div id="graficoSemanal" class="graphicContainer" v-if="graficOptionSelected == 1">
                <p>grafico semanal</p>
            </div>
            <div id="graficoMensal" class="graphicContainer" v-if="graficOptionSelected == 2">
                <p>grafico mensal</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'estatisticaGeral',
    data(){
        return {
            graficOptionSelected: 1,
            graficOption: ['Semanal','Mensal']
        }
    },
    methods: {
        nextOption(){
            this.graficOptionSelected = this.graficOptionSelected+1 <= this.graficOption.length ? this.graficOptionSelected+1: this.graficOptionSelected;
        },
        previousOption(){
            this.graficOptionSelected = this.graficOptionSelected-1 >= 1 ?  this.graficOptionSelected-1: this.graficOptionSelected;
        }
    }
}
</script>
<style>

    #headerGraphic{
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    #graficOption{
        font-size: 23px;
        font-family: Gabarito-Medium;
    }

    #estatisticaGeral{
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 5px;
        margin: 15px;
        padding: 10px;
        color: rgb(0, 0, 0);
        background-color: rgb(230, 241, 237) !important;
    }
    
</style>