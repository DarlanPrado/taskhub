<template>
    <div id="icon">
        <i class="fa-regular fa-user  fa-fw" style="color: #3ec487;"></i>
    </div>
</template>
<script lang="ts">
export default {
    name: 'UserIcon'
}
</script>
<style scoped>
    #icon{
        display: flex;
        width: 150px;
        height: 150px;
        justify-content: center;
        align-items: center;
        border-radius: 80px;
        background-color: rgba(95, 95, 95, 0.11);
    }

    #icon > i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        font-size: 6rem;
    }
</style>