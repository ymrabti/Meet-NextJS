import { IncomingMessage, ServerResponse } from "http";
// req = HTTP incoming message, res = HTTP server response

/**
 * Http request Handler
 * @param {IncomingMessage} req Incoming Message
 * @param {ServerResponse} res Server Response
 */
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello, ' + new Date() });
}