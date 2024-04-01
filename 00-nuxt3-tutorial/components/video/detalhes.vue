<script setup>
    const {diasPassados, diferencaEmDias} = useFormatacao();
    const dataVideo = new Date(2024, 2, 13);
    diasPassados(dataVideo);
</script>
<template>
    <h1>Components - Nuxt 3</h1>
    <p> Autor: Pablo Eztrela</p>
    <p>{{ diferencaEmDias }} dias atras</p>
</template>