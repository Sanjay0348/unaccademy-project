const express = require("express");
const app = express();

app.get("/api/acceptPayment", (req, res) => {
  res.send("accept payment success...");
});

app.get("/api/generateQR", (req, res) => {
  res.send("generate qr success...");
});

app.get("/api/makePayment", (req, res) => {
  res.send("make payment success...");
});

app.get("/api/scanPay", (req, res) => {
  res.send("scan & pay success...");
});

app.get("/api/generateReport", (req, res) => {
  const report = [
    { txnDate: "12/10/2022", amount: 3000, txnType: "upi" },
    { txnDate: "13/10/2022", amount: 100, txnType: "qr" },
  ];
  res.send(report);
});

//to make REST API Server listen for incoming connection
app.listen(3000, "localhost", () => {
  console.log(
    "Chandan REST API Listining on port 3000...waiting for connection"
  );
});
