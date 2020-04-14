import { App, Req, Res } from "../util/express-utils"

const BASE = '/event'

const eventResource = (server: App) => {
  server
    .get(BASE, (req: Req, res: Res) => {
      return res.json([
        { "date": '2020-04-03', "order": '1234', "type": 'BOOKING' },
        { "date": '2020-04-04', "order": '1234', "type": 'BOOKING' },
        { "date": '2020-04-05', "order": '1234', "type": 'BOOKING' },
        { "date": '2020-04-15', "order": '4321', "type": 'VISIT' },
        { "date": '2020-04-22', "order": '9876', "type": 'VISIT' }
      ])
    })
}    

export default eventResource