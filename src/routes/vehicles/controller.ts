import { server } from '../../server'
import { swapUrl } from '../../swapi' 

export const getVehicles = async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await swapUrl.get(`vehicles/${id}`)
  
        return res.send(data)
        console.log(data)
    } catch(error) {
      res.send({swapApiError: [error.data, error.message]})
    }
  }