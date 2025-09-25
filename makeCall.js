const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

const client = require("twilio")();

(async () => {
  const response = new VoiceResponse();
  response.say("Hi! This is a call from your Twilio account");
  response.pause({ length: 3 });
  response.say("Please let me know if you have any questions. Goodbye!");
  const call = await client.calls.create({
    twiml: response.toString(),
    from: "whatsapp:+498962825963",
    to: `whatsapp:${process.env.MARIUS_NUMBER}`,
  });
  console.log(call.sid);

})();

