import app from "./app";
import { connectDB } from "./db";
import { PORT } from "./config";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log("Listening on port " + PORT);
  } catch (err) {
    console.log(err);
  }
}

main();
