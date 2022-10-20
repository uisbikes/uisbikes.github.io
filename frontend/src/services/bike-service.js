import http from "../http-common";

class BikeDataService {
  get(type, available) {
    return http.get(`/getBikes?type=${type}&available=${available}`);
  }
 
  addBike(data) {
    return http.post("/addBike", data);
  }

  updateBike(data) {
    return http.put("/updateBike", data)
  }
  
  deleteBike(id, bikeId) {
    return http.delete(`/deleteBike?id=${id}`, {data:{bike_id: bikeId}})
  }
}

export default new BikeDataService();
