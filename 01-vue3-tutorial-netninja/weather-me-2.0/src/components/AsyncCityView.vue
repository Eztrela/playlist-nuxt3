<template>
    <div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const getWeatherData = async () => {
    try{
        const weatherData = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude=minutely&appid=$84db9bfaa5c9f6330d08b40637b86362&units=metric`
        );

        const localOffset = new Date().getTimezoneOffset() * 60000;
        const gmt = weatherData.data.current.dt * 1000 + localOffset;
        weatherData.data.currentTime = gmt + 1000 * weatherData.data.timezone_offset;

        weatherData.data.hourly.forEach((hour)=> 
        {
            const gmt = hour.dt * 1000 + localOffset;
            hour.currentTime = gmt + 1000 * weatherData.data.timezone_offset;
        });
        return weatherData;
    }catch(error) {
        console.error(error);
    }
}
const weatherData = await getWeatherData();
console.log(weatherData);
</script>
