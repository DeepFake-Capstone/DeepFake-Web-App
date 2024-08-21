const express=require("express");
const cors =require("cors");
const rootrouter=require("./routes/index");

const app=express();

app.use(cors());
app.use(express.json());


app.use('/api/v1',rootrouter);

// Define the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
