const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const fs = require("fs");
const csvParser = require("csv-parser");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const result = [];
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + ".csv");
  },
});

var upload = multer({ storage: storage });
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to Smart Contract");
});

app.post(
  "/upload-csv",
  upload.fields([
    {
      name: "tier1",
      maxCount: 1,
    },
    {
      name: "tier2",
      maxCount: 1,
    },
    {
      name: "tier3",
      maxCount: 1,
    },
  ]),
  (req, res) => {
    createfile();
    res.json(req.files);
  }
);

const createfile = async () => {
  fs.createReadStream("./uploads/tier1.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data.tier1);
    })
    .on("end", () => {
      fs.writeFileSync(
        path.resolve(__dirname, "public/tier1.json"),
        JSON.stringify(result)
      );
    });
  fs.createReadStream("./uploads/tier2.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data.tier1);
    })
    .on("end", () => {
      fs.writeFileSync(
        path.resolve(__dirname, "public/tier2.json"),
        JSON.stringify(result)
      );
    });
  fs.createReadStream("./uploads/tier3.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data.tier1);
    })
    .on("end", () => {
      fs.writeFileSync(
        path.resolve(__dirname, "public/tier3.json"),
        JSON.stringify(result)
      );
    });
};
app.use(express.static("public"));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
