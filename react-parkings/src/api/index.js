import Axios from "axios";

export const fetchParkings = () => {
  return Axios.get(
    "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20"
  );
};
