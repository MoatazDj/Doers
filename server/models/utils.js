const { genSalt, hash, compare } = require("bcryptjs");
const crypto = require("crypto");
const { timeStamp, Console } = require("console");
module.exports = {
  async makeSalt() {
    //    return Math.round(new Date().valueOf() * Math.random()) + ""
    return genSalt(10);
  },
  async encryptPassword(password, salt) {
    if (!(password && salt)) return "";
    try {
      // return crypto.createHmac("sha256",this.salt)
      // .update(password)
      // .digest("hex")
      return hash(password, salt);
    } catch (err) {
      console.log(err);
    }
  },
  async authenthicate(plainPassword) {
    // return this.encryptPassword(plainPassword) === this.hashed_password
    return await compare(plainPassword, this.hashed_password);
  },
};
