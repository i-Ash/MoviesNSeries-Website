import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmZiZmIyMGRjNGYzYTQ3YmUwZDM3NTVmZTc0MTE0YiIsIm5iZiI6MTczMTE3NTg4My44NDY3Nzg2LCJzdWIiOiI2NzJjOWI1N2VjNWM2ZDUyOWZjNTgwYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.alw8kSRRz1Kg54j4BMcz_Q_bxx5qSzYzFO3m-MnXF2g'
      },
});

export default instance;
