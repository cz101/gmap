import {User} from './User'
import {Company} from './Company'
import{CustomMap} from './CustomMap'

console.log('hi there')


const user = new User()
const company = new Company()
const custommap =new CustomMap('map')

custommap.addMarker(user)
custommap.addMarker(company)
//console.log(user)
//console.log(company)

// new google.maps.Map(document.getElementById('map')!,{
//   zoom:1,
//   center :{
//     lat:0,
//     lng:0
//   }
// })