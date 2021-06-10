// 查询文章列表
exports.getArticles = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get  GET /api/articles");
  } catch (error) {
    next(error);
  }
};

// feed
exports.feed = async (req, res, next) => {
  try {
    // 处理请求
    res.send("GET /api/articles/feed");
  } catch (error) {
    next(error);
  }
};

// slug
exports.slug = async (req, res, next) => {
  try {
    // 处理请求
    res.send("GET /api/articles/:slug");
  } catch (error) {
    next(error);
  }
};

// post article
exports.getpost = async (req, res, next) => {
  try {
    // 处理请求
    res.send("POST /api/articles");
  } catch (error) {
    next(error);
  }
};

// put atticle
exports.putslug = async (req, res, next) => {
  try {
    // 处理请求
    res.send("put /api/articles/:slug");
  } catch (error) {
    next(error);
  }
};

exports.deleteslug = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /api/articles/:slug");
  } catch (error) {
    next(error);
  }
};

exports.postcomments = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post   /:slug/comments");
  } catch (error) {
    next(error);
  }
};

exports.getcomments = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get   /:slug/comments");
  } catch (error) {
    next(error);
  }
};

exports.deletecomments = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete   /:slug/comments/:id");
  } catch (error) {
    next(error);
  }
};

exports.postlove = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post   /:slug/favorite");
  } catch (error) {
    next(error);
  }
};

exports.deletelove = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete   /:slug/favorite");
  } catch (error) {
    next(error);
  }
};
