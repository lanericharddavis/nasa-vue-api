import { AppState } from '../AppState'
import Picture from '../models/Picture'
import { nasaApi } from './AxiosService'

class PicturesService {
  async getPictures (query) {
    const response = await nasaApi.get(query)
    AppState.results = response.data.results.map(res => new Picture(res))
  }
}

export const picturesService = new PicturesService()
