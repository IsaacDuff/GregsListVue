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
}

export const housesService = new HousesService()