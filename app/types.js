const YES_NO_TYPE = "yesNoType";
const TIME_TYPE = "timeType";
const UNHANDLED_TYPE = "unhandledType";

const YesNoInterrogatives = [
  "do",
  "does",
  "will",
  "can",
  "has",
  "have",
  "shall",
  "should",
  "is",
  "am",
  "are"
]

const TimeInterrogatives = [
  "when"
]

let getType = (interrogative) => {
  if (YesNoInterrogatives.includes(interrogative)) {
    return YES_NO_TYPE;
  } else if (TimeInterrogatives.includes(interrogative)) {
    return TIME_TYPE;
  } else {
    return UNHANDLED_TYPE;
  }
}

module.exports = {
  getType: getType,
  YES_NO_TYPE: YES_NO_TYPE,
  TIME_TYPE: TIME_TYPE,
  UNHANDLED_TYPE: UNHANDLED_TYPE
}