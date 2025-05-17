const app = require("express")();
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`We have lift off on http://localhost:${PORT}`)
);

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Shirt",
    size: "medium",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({
      message: "We need a logo!",
    });
  }
  res.send({
    tshirt: `tshirt with your ${logo} and ID of ${id}`,
  });
});
