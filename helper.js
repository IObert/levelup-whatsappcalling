// escapePhoneNumber replaces all but the last 4 digits of a phone number with asterisks
// if there is a non-numerical prefix, it is kept as is
// e.g. whatsapp:+4915123456789 becomes whatsapp:+49********89
function escapePhoneNumber(number) {

    const match = number.match(/^(.*\D)?(\d{2})(\d+)(\d{2})$/);
    if (!match) {
        return number; // return as is if it doesn't match the expected pattern
    }
    const prefix = match[1] || ""; // non-numeric prefix, e.g. whatsapp:
    const countryCode = match[2]; // e.g. 49
    const middle = match[3]; // e.g. 1512345678
    const lastTwo = match[4]; // e.g. 89

    const escapedMiddle = "*".repeat(middle.length); // replace all but last 2 digits with asterisks

    return `${prefix}${countryCode}${escapedMiddle}${lastTwo}`;
}
const listOfHeaders = ["From", "To", "MessageSid", "Body", "ButtonPayload", "ButtonText", "CallSid", "CallStatus", "Duration", "CallbackSource", "Direction",
    "ErrorCode", "ErrorMessage", "CallerName"];

function logHeaders(headers) {
    // only log the headers mentiond in the comment above
    for (const header of listOfHeaders) {
        if (header in headers) {
            const value = headers[header];
            if (header === 'From' || header === 'To') {
                console.log(`${header}: ${escapePhoneNumber(value)}`);
            } else {
                console.log(`${header}: ${value}`);
            }
        }
    }
    console.log('\n---\n');
}

module.exports = { escapePhoneNumber, logHeaders };