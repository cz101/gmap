
interface Mappable{
  location :{
    lat:number,
    lng:number
  }
  makerContent():string
}

export class CustomMap{

  private googleMap: google.maps.Map

  constructor(divID:string){
   
   this.googleMap = new google.maps.Map(document.getElementById(divID)!,{
      zoom:1,
      center :{
        lat:0,
        lng:0
      }
    })

  }

  addMarker(mappable:Mappable):void{

     const marker = new google.maps.Marker({
        map:this.googleMap,
        position:{
          lat:mappable.location.lat,
          lng:mappable.location.lng
        }


     })

     marker.addListener('click',()=>{

      const infoWindow = new google.maps.InfoWindow({
         content : mappable.makerContent()
      }) 

      infoWindow.open(this.googleMap,marker)
     })

  }

}