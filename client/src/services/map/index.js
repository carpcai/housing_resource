/**
 * Created by carpcai on 17/2/13.
 */
import api from '../index.js'
export default {
  getAboutMe(){
    return api.get('map');
  }
}
