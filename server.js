import app from "./src/app.js";
import "dotenv/config";

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
