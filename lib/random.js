// module.exports = (val1, val2) => {
//    if (val1 === val2) {
//       return true;
//    } else {
//       return false;
//    }
// };

const generateRandomNum = () => {
   return Math.floor(Math.random() * 9 + 1);
};

module.exports = {
   generateRandomNum: generateRandomNum,
};
