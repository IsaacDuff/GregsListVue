<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
        <div class="elevation-3 rounded bg-light border border-1 border-dark my-2">
            <img class="img-fluid rounded-top" :src="house.imgUrl" :alt="house.bedrooms + ' ' + house.levels">
            <div class="text-center p-2">
                <h2> {{ 'Bedrooms:' + house.bedrooms + ' ' + '|' + ' ' + 'Bathrooms:' + house.bathrooms + ' ' + '|' + ' ' +
                    'Levels:' + house.bedrooms }}</h2>
            </div>
        </div>
    </router-link>
</template>








<script>
import { House } from '../models/House.js';

export default {
    props: {
        house: {
            type: House,
            required: true
        }
    },
    setup() {
        return {};
    },
};
</script>







<style>
img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
}
</style>