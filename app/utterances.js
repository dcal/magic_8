const YesNoReplies = [
  "It is certain.",
  "It is decidedly so.",
  "Better not tell you now.",
  "My sources say no.",
  "Without a doubt.",
  "That's a big, fat, NO.",
  "My reply is no.",
  "Ask your mom.",
  "Reply hazy. Try again later.",
  "Of course not, Duh.",
  "Don't ever ask that again.",
  "I have no clue.",
  "You betcha, amigo!",
  "No chance, silly pants.",
  "In your dreams.",
  "Of course! I'm surprised you even asked.",
  "Yes, definitely.",
  "Ummmmmmmm, yes?",
  "Indubidably"
]

const TimeReplies = [
  "Next year, probably.",
  "In an hour.",
  "After next weekend.",
  "That already happened. Weren't you paying attention?.",
  "When pigs fly.",
  "When people live on Mars.",
  "When you are like 1000 years old.",
  "Any second now.",
  "Never. That will never happen.",
  "The universe is telling me that will happen the twelfth of never.",
  "Soon. Very, very soon."
]

const UnhandledReply = "Sounds like a question for your therapist.";

const WelcomeReply = "Welcome to Magic Eight Ball. Ask me a question about your future, such as, will I be rich?";

const GoodbyeReply = "Whatevs. Later.";

const AmbiguousReply = "I didn't catch that. Sorry.";

let getRandomInt = (max) => {
 return Math.floor(Math.random() * Math.floor(max));
}

let randomReplyFrom = (list) => {
 return list[getRandomInt(list.length)];
}

module.exports = {
  yesNo: () => randomReplyFrom(YesNoReplies),
  time: () => randomReplyFrom(TimeReplies),
  welcome: () => WelcomeReply,
  unhandled: () => UnhandledReply,
  goodbye: () => GoodbyeReply,
  ambiguous: () => AmbiguousReply
}
