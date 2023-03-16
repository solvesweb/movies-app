const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTM2YmQwNmNjYWUwMDliYjBiZDM1ZWYyYmJmMmEwYiIsInN1YiI6IjY0MDA3NzllNjk5ZmI3MDA3ZDhlZmRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DmOdEEUWCkvA5om3l5EsO5aZ6LerZskuSJSa3zEaJFg",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
