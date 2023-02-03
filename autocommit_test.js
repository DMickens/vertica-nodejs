const {Client} = require('vertica-nodejs');
const client = new Client();

async function main() {
await client.connect();
let res = await client.query("SELECT * FROM dc_client_server_messages")
console.log(res.rows);
await client.end();
}

main()
