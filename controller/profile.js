exports.getprofile = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get  /profiles/:username");
  } catch (error) {
    next(error);
  }
};

exports.follow = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post  /profiles/:username/follow");
  } catch (error) {
    next(error);
  }
};

exports.unfollow = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete  /profiles/:username/follow");
  } catch (error) {
    next(error);
  }
};
