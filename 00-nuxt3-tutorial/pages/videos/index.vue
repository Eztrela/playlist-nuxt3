<template>
    <div>
        Vídeos
    </div>
    <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
    <div class="videos">
        <div v-for="video in videos" :key="video.id">
            <h2>{{ video.descricao }}</h2>
            <p>{{ converteDataBrasil(video.data_postagem) }}</p>
            <iframe
            width="550"
            height="400"
            :src="video.url"
            title="Youtube video Player"
            frameborder="0"
            />
            <div>
                <button @click="adicionarFavorito(video)">Adicionar Favorito</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Video } from '~/interfaces/video';


// const favoritos = useFavoritos()

const {adicionarFavorito} = useVideoStore();

const videos: Video[] = [
    {
        id:1,
        descricao: "01 - Introdução e Instalação",
        url: "https://www.youtube.com/watch?v=WahQ5AoXpuU&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=2",
        data_postagem: "2024-10-15"
    },
    {
        id:2,
        descricao: "02 - Configuração",
        url: "https://www.youtube.com/watch?v=JbbB84bnPog&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=3",
        data_postagem: "2024-10-20"
    },
    {
        id:3,
        descricao: "03 - Pages",
        url: "https://www.youtube.com/watch?v=S99sVicr8NI&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=4",
        data_postagem: "2024-10-25"
    }
]

const converteDataBrasil = (dataAtual: string) =>{
    return new Date(dataAtual).toLocaleDateString("pt-BR")
}

// const adicionaFavorito = (video: Video) => {
//     favoritos.value.push(video)
// }
</script>

<style scoped>

.videos{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.videos button{
    display: inline-block
}

</style>