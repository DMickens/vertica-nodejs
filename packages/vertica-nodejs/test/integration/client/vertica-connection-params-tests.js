'use strict'
var helper = require('./test-helper')
var vertica = helper.vertica

var suite = new helper.Suite()

suite.test('vertica label connection parameter', function () {
  // assert current default behavior
  assert.equal(vertica.defaults.client_label, '')
  
  // assert creating a client connection will use default label and persist
  var client_default = new vertica.Client()
  assert.equal(client_default.client_label, vertica.defaults.client_label)
  client_default.connect()
  client_default.query('SELECT GET_CLIENT_LABEL()', (err, res) => {
      if (err) assert(false)
      //assert.equal(res.rows[0]['GET_CLIENT_LABEL'], vertica.defaults.client_label)
      client_default.end()
  })

  // assert creating a client connection with specified label will persist
  var client_test = new vertica.Client({client_label: 'distinctLabel'})
  assert.equal(client_test.client_label, 'distinctLabel')
  client_test.connect()
  client_test.query('SELECT GET_CLIENT_LABEL()', (err, res) => {
    if (err) assert(false)
   // assert.equal(res.rows[0]['GET_CLIENT_LABEL'], 'distinctLabel')
    client_test.end()
  })
})

suite.test('vertica protocol_version connection parameter', function () {
  // assert current default behavior
  // protocol_version shouldn't be set by an environment variable, or a config,
  // so we will hardcode at definition instead of assignment later in a way 
  // that is different from all other connection properties
  assert.equal(vertica.defaults.protocol_version, undefined)

  // assert that the driver uses the protocol_version connection parameter to cap
  // the protocol version used by the server
  var client = new vertica.Client({client_label: 'pvTest'}) // make easy to find session
  client.connect()
  client.query("SELECT effective_protocol from sessions where client_label = 'pvTest'", (err, res) => {
      if (err) assert(false)
      console.log(res)
      var pv = res.rows[0]['effective_protocol'] // string of form "Major.minor"
      var int32pv = (parseInt(pv.split(".")[0]) << 16 | parseInt(pv.split(".")[1])) // int32 from (M << 16 | m)
      assert(int32pv <= client.protocol_version) // server isn't trying to talk in a protocol newer than we know
      client.end()
  })
})

  // if there is no meta function for determining the connection property server-side then we will need
  // to establish multiple connections which cannot be in parallel. One connection can insert/update data
  // if autocommit is on, the second connection will be able to see the changes, if it is off they won't
  
suite.test('vertica autocommit connection parameter - true', function () {
  // if true is default, assert current expected behavior for defaults to be true

  //
  var client = new vertica.Client({autocommit: false})
  client.connect()
  client.query("") //IS THERE A META FUNCTION FOR AUTOCOMMIT OR A SESSION TABLE PROPERTY ??
  // IF SO, CHANGE THIS TEST TO BE FOR BOTH TRUE AND FALSE AND ESTABLISH TWO CONNECTIONS
  
}

