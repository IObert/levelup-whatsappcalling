const fastify = require("fastify");
const FastifyBodyParser = require("@fastify/formbody");
const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");
const { logHeaders } = require("./helper");
const MessagingResponse = require("twilio/lib/twiml/MessagingResponse");

const server = fastify({});

server
  .register(FastifyBodyParser)
  .all("/status-callback", async (req, reply) => {
    console.log("** Status Callback received **\n");
    logHeaders(req.body);

    const response = new MessagingResponse();

    reply.type("text/xml");
    reply.send(response.toString());
  })
  .all("/message", async (req, reply) => {
    console.log("** Incoming Message received **\n");
    logHeaders(req.body);

    reply.send("ok");
  })
  .all("/voice", async (req, reply) => {
    console.log("** Incoming Call received **\n");
    logHeaders(req.body);

    // await new Promise((r) => setTimeout(r, 10000));

    const response = new VoiceResponse();
    // response.reject();
    response.say("Hi! This is a call from your Twilio account");
    response.pause({ length: 3 });
    response.say("Please let me know if you have any questions. Goodbye!");

    reply.type("text/xml");
    reply.send(response.toString());
  });

const port = 3000;

server.listen({ port }, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Started locally at: ${address}`);
});

