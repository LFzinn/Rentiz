module.exports = function (req, res, next) {
  if (req.method === "GET" && req.url.includes("houses")) {
    const params = new URLSearchParams(req.url.split("?")[1]);
    const page = Number(params.get("_page")) || 1;
    const limit = Number(params.get("_limit")) || 12;
    const start = (page - 1) * limit;
    const end = page * limit;

    req.url = req.url.split("?")[0] + `?_start=${start}&_end=${end}`;
  }

  next();
};
