const AskRoute = (req, res) => {
  res.send("Hello Arnold");
};

const BkRoute = (req, res) => {
  res.send("Hello Bobby");
};

module.exports = {
    AskRoute,
    BkRoute
};
