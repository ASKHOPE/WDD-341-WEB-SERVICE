const AskRoute = (req, res) => {
  res.send("Hello Arnold");
};

const BkRoute = (req, res) => {
  res.send("Hello Bobby");
};

const IkRoute = (req, res) => {
  res.send("Hello Instructor");
};

module.exports = {
    AskRoute,
    BkRoute,
    IkRoute
};
