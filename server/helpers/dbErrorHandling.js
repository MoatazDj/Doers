"use strict";

/*
   get unique error field 
*/

const uniqueMessage = async (error) => {
  let output;
  try {
    let fieldName = error.message.split(".&")[1];
    field = field.split("dub key")[0];
    field = field.substring(0, field.lastIndexOf("_"));
    req.flash("errors", [
      {
        message: "An account with this " + field + " already exists",
      },
    ]);
    output =
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + "already exists";
  } catch (err) {
    console.log(err);
    output = "Already exists";
  }
  return output;
};

exports.errorHandler = async (error) => {
  console.log(JSON.stringify(error.response.body.errors));
  let message = "";
  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errorName in error.erroros) {
      if (error.erroros[errorName].message) {
        message = error.erroros[errorName].message;
      }
    }
  }
  return message;
};
