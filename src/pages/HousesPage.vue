<template>
  <section class="row">
    <div v-for="house in houses" :key="house.id" class="col-4">
      <div class="elevation-3 rounded bg-light border border-1 border-dark my-2">
        <img class="img-fluid rounded-top" :src="house.imgUrl" :alt="house.bedrooms + ' ' + house.levels">
        <div class="text-center p-2">
          <h2> {{ 'Bedrooms:' + house.bedrooms + ' ' + '|' + ' ' + 'Bathrooms:' + house.bathrooms + ' ' + '|' + ' ' +
            'Levels:' + house.bedrooms }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';



export default {
  setup() {

    async function getHouses() {
      try {
        await housesService.getHouses()

      } catch (error) {
        logger.log(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getHouses();

    });

    return {
      houses: computed(() => AppState.houses),
    }
  }
}
</script>


<style lang="scss" scoped></style>