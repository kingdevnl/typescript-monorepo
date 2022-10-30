import { connectDB } from "database";
import fastify from "fastify";

console.log("Hello World!");
const db = connectDB("127.0.0.1:3306");

const app = fastify();

app.get("/", (req, res) => {
  res.send({
    users: db.getUsers(),
  });
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
