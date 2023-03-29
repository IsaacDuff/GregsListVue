<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-10 m-auto">
                <HouseCard :house="house" />
            </div>
        </div>
    </div>
</template>





<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import HouseCard from '../components/HouseCard.vue';


export default {
    setup() {
        const route = useRoute();
        async function getHouseById() {
            try {
                await housesService.getHouseById(route.params.houseId);
            }
            catch (error) {
                logger.log(error);
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getHouseById();
            // logger.log(route.params.houseId)
        });
        return {
            house: computed(() => AppState.house)
        };
    },
    components: { HouseCard }
};
</script>




<style></style>