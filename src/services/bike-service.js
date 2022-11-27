import http from "../http-common";

class BikeDataService {
  
  // Retrieve Bike Serveless Feature
  get(type, available) {
    return http.get(`/getBikes?type=${type}&available=${available}`);
  }

  // Add Bike Serveless Feature
  addBike(data) {
    return http.post("/addBike", data);
  }

  // Update Bike Serveless Feature
  updateBike(data) {
    return http.put("/updateBike", data)
  }

  // Deleting Bike Serveless Feature
  deleteBike(id, bikeId) {
    return http.delete(`/removeBike?id=${id}`, {data:{bike_id: bikeId}})
  }
}

export default new BikeDataService();
