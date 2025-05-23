const urlModel = require("../models/urlModel.js");
const handleGenerateShortURL = async (req, res) => {
  const { nanoid } = await import("nanoid");
  const id = nanoid(6);
  if (!req.body.url) {
    return res.json({
      error: "Url was not provided",
    });
  }
  const data = urlModel.create({
    shortId: id,
    redirectUrl: req.body.url,
    visitCount: 0,
  });
  res.json({
    id,
    data,
  });
};
const handleRedirectToURL = async (req, res) => {
  // find the redirect url corresponding to nano id
  const id = req.params.id;
  const url = await urlModel.findOne({ shortId: id });
  const newdata = await urlModel.findOneAndUpdate(
    { shortId: id },
    {
      $inc: {
        visitCount: 1,
      },
    },
    { new: true }
  );
  console.log("url to requrest", url, newdata);
  if (url) res.redirect(url.redirectUrl);
  else {
    res.send({
      error: "Wrong Id provided",
    });
  }
};

module.exports = { handleGenerateShortURL, handleRedirectToURL };
