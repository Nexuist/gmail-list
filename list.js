const { google } = require("googleapis");

/*
  TODO: 
   * Command line option to change maxResults
   * Command line option to change query
*/

module.exports = async (auth) => {
  const userId = "me";
  const gmail = google.gmail({ version: "v1", auth });
  async function fromAddressForID(id) {
    let res = await gmail.users.messages.get({ auth, id, userId });
    return res.data.payload.headers.filter((x) => x.name == "From")[0].value;
  }
  let listResponse = await gmail.users.messages.list({
    auth,
    userId,
    q: "is:inbox",
    maxResults: 300,
  });
  let list = listResponse.data.messages;
  for ({ id, threadId } of list) {
    console.log(await fromAddressForID(id));
  }
};

