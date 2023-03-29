import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class HousesService {

    async getHouses() {
        const res = await api.get('auth/api/houses')
        // logger.log("getting Houses", res.data)
        AppState.houses = res.data.map(m => new House(m))
        logger.log('mapped houses', AppState.houses)

    }

    async getHouseById(houseId) {
        AppState.house = null
        const res = await api.get('auth/api/houses/' + houseId)
        logger.log('got one house', res.data)
        AppState.house = new House(res.data)

    }
}

export const housesService = new HousesService()