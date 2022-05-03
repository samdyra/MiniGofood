import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer biN3N4D8oY6q2JHURGzaTUe-5FrDYbLksOY8ZGODYn-TinzQZUwckfOsgk6z-qq79MvQn7I54Re73lauC1nyvDDj9eit6VnMjo5wxBB1mI999uWP4QiHW75wBiG2YXYx",
  },
});
