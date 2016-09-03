var stop = /,$/;
module.exports = function list(args) {
  var res = [];

  var temp = [];
  var max = args.length;
  for (var i = 0; i < max; i++) {
    var arg = args[i];
    if (stop.test(arg)) {
      temp.push(arg.slice(0, -1));
      res.push(temp);
      temp = [];
    } else {
      temp.push(arg);
    }
  }
  res.push(temp);

  return res;
};
