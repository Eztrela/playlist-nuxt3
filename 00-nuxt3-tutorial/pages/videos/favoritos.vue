<template>
    <div>
        Favorite Videos
    </div>
    <div class="videos">
        <div v-for="video in favoritos" :key="video.id">
            <h2>{{ video.descricao }}</h2>
            <iframe
            width="550"
            height="400"
            :src="video.url"
            title="Youtube video Player"
            frameborder="0"
            />
            <div>
                <button @click="videoStore.deletarFavorito(video.id)">Remover Favorito</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// const favoritos = useFavoritos();
const videoStore = useVideoStore();
const {favoritos} = storeToRefs(videoStore)
// const deletaFavoritos = (id:number) => {
//     const favoritosFiltrados = favoritos.value.filter((x) => x.id !== id);
//     favoritos.value = favoritosFiltrados;
// }
</script>

<style lang="scss" scoped>

</style>