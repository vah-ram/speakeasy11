const host = import.meta.env.MODE === "develoment" ? 'http://localhost:5000' : '/'

module.exports.addMessage = `${host}/api/messages/addmessage`;
module.exports.getMessage = `${host}/api/messages/getmessage`;