export default function useFormatacao() {
    const diferencaEmDias = ref(0);
    const diasPassados = (data: Date) => {
        const dataAtual = new Date().getTime();
        const diferencaEmMilisegundos = dataAtual - data.getTime();
        diferencaEmDias.value = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
    }
    return { diferencaEmDias, diasPassados };
};