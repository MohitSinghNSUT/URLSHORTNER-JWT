const urlModel = require("../models/urlModel");

const staticData = async (req, res) => {
  try {
    console.log("from static data ", req?.user, req?.cookies);
    const data = await urlModel.find({ user: req?.user.id });
    res.send({
      data,
    });
  } catch (error) {
    res.send({ error });
  }
};
module.exports = {
  staticData,
};
