import http from "../http-common";

class BikeDataService {
  get(type, available) {
    return http.get(`/getBikes?type=${type}&available=${available}`);
  }
}

export default new BikeDataService();
