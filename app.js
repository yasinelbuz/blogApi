const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan());
const router = express.Router();
app.use("/api/v1/categories", router)


router.route("/")
.get((req, res) => {
    res.json({
        status:"success1",
    })
  })
.post((req, res) => {
    res.json({
        status:"success2",
    })
})

router.route("/:id")
.get((req, res) => {
    res.json({
        status:"success3",
    })
  })
.patch((req, res) => {
    res.json({
        status:"success4",
    })
})
.delete((req, res) => {
    res.json({
        status:"success5",
    })
})



//Server listing
const port = 8000;
app.listen(port, () => {
    console.log(`server running http://127.0.0.1:${port}`)
})