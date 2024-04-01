<template>
    
    <div>
        Voce esta no Video com id: {{ idParams }}
    </div>
    <VideoDetalhes />
    <VideoControlePlay />
</template>

<script setup>

definePageMeta({
    layout: 'exibition',
    middleware: ['video', 'auth']
})

const route = useRoute();
const idParams = computed(() => route.params.id);
</script>

<style lang="scss" scoped>

</style>