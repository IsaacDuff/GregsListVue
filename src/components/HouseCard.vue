<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
        <div class="elevation-3 rounded bg-light border border-1 border-dark my-2">
            <img class="img-fluid rounded-top" :src="house.imgUrl" :alt="house.bedrooms + ' ' + house.levels">
            <div class="text-center p-2">
                <h2> {{ 'Bedrooms:' + house.bedrooms + ' ' + '|' + ' ' + 'Bathrooms:' + house.bathrooms + ' ' + '|' + ' ' +
                    'Levels:' + house.bedrooms }}</h2>
            </div>
            <div v-if="route.name == 'HouseDetails'" class="p-3">
                <div>
                    <h2>{{ house.price }}</h2>
                </div>
            </div>
        </div>
    </router-link>
</template>


<!-- <div v-if="route.name == 'CarDetails'" class="p-4">
    <div class="d-flex justify-content-around">
      <h2>{{ car.year }}</h2>
      <h2>{{ car.price }}</h2>
    </div>
    <p class="fw-bold fs-3">{{ car.description }}</p>
    <div v-if="car.creatorId == account.id" class="d-flex justify-content-around">
      <button class="btn btn-danger" @click.stop="deleteCar()">Delete Car!</button>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-info">🖊️ Edit Car</button>
    </div>
  </div> -->





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