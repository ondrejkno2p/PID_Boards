import { p as prisma } from "../../../chunks/prisma.js";
import { f as url_all_stops, o as options, d as url_route } from "../../../chunks/golem.js";
const static_route_data = [
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U306Z101P",
    stop_sequence: 1
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U507Z101P",
    stop_sequence: 2
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U462Z101P",
    stop_sequence: 3
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U157Z101P",
    stop_sequence: 4
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U321Z101P",
    stop_sequence: 5
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U163Z101P",
    stop_sequence: 6
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U360Z101P",
    stop_sequence: 7
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U703Z101P",
    stop_sequence: 8
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U1072Z101P",
    stop_sequence: 9
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U400Z101P",
    stop_sequence: 10
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U476Z101P",
    stop_sequence: 11
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U118Z101P",
    stop_sequence: 12
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U921Z101P",
    stop_sequence: 13
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U713Z101P",
    stop_sequence: 14
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U953Z101P",
    stop_sequence: 15
  },
  {
    route_id: "L991",
    direction_id: 1,
    stop_id: "U1071Z101P",
    stop_sequence: 16
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U1071Z101P",
    stop_sequence: 1
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U953Z102P",
    stop_sequence: 2
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U713Z102P",
    stop_sequence: 3
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U921Z102P",
    stop_sequence: 4
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U118Z102P",
    stop_sequence: 5
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U476Z102P",
    stop_sequence: 6
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U400Z102P",
    stop_sequence: 7
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U1072Z102P",
    stop_sequence: 8
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U703Z102P",
    stop_sequence: 9
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U360Z102P",
    stop_sequence: 10
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U163Z102P",
    stop_sequence: 11
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U321Z102P",
    stop_sequence: 12
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U157Z102P",
    stop_sequence: 13
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U462Z102P",
    stop_sequence: 14
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U507Z102P",
    stop_sequence: 15
  },
  {
    route_id: "L991",
    direction_id: 0,
    stop_id: "U306Z102P",
    stop_sequence: 16
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U897Z101P",
    stop_sequence: 1
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U818Z101P",
    stop_sequence: 2
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U135Z101P",
    stop_sequence: 3
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U75Z101P",
    stop_sequence: 4
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U474Z101P",
    stop_sequence: 5
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U510Z101P",
    stop_sequence: 6
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U529Z101P",
    stop_sequence: 7
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U655Z101P",
    stop_sequence: 8
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U758Z101P",
    stop_sequence: 9
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U689Z101P",
    stop_sequence: 10
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U480Z101P",
    stop_sequence: 11
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U1072Z121P",
    stop_sequence: 12
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U539Z101P",
    stop_sequence: 13
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U237Z101P",
    stop_sequence: 14
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U1040Z101P",
    stop_sequence: 15
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U458Z101P",
    stop_sequence: 16
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U957Z101P",
    stop_sequence: 17
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U685Z101P",
    stop_sequence: 18
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U602Z101P",
    stop_sequence: 19
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U1154Z101P",
    stop_sequence: 20
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U258Z101P",
    stop_sequence: 21
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U1007Z101P",
    stop_sequence: 22
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U1140Z101P",
    stop_sequence: 23
  },
  {
    route_id: "L992",
    direction_id: 1,
    stop_id: "U1141Z101P",
    stop_sequence: 24
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U1141Z102P",
    stop_sequence: 1
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U1140Z102P",
    stop_sequence: 2
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U1007Z102P",
    stop_sequence: 3
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U258Z102P",
    stop_sequence: 4
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U1154Z102P",
    stop_sequence: 5
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U602Z102P",
    stop_sequence: 6
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U685Z102P",
    stop_sequence: 7
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U957Z102P",
    stop_sequence: 8
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U458Z102P",
    stop_sequence: 9
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U1040Z102P",
    stop_sequence: 10
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U237Z102P",
    stop_sequence: 11
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U539Z102P",
    stop_sequence: 12
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U1072Z122P",
    stop_sequence: 13
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U480Z102P",
    stop_sequence: 14
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U689Z102P",
    stop_sequence: 15
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U758Z102P",
    stop_sequence: 16
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U655Z102P",
    stop_sequence: 17
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U529Z102P",
    stop_sequence: 18
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U510Z102P",
    stop_sequence: 19
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U474Z102P",
    stop_sequence: 20
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U75Z102P",
    stop_sequence: 21
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U135Z102P",
    stop_sequence: 22
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U818Z102P",
    stop_sequence: 23
  },
  {
    route_id: "L992",
    direction_id: 0,
    stop_id: "U897Z102P",
    stop_sequence: 24
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U286Z101P",
    stop_sequence: 1
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U106Z101P",
    stop_sequence: 2
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U52Z101P",
    stop_sequence: 3
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U601Z101P",
    stop_sequence: 4
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U228Z101P",
    stop_sequence: 5
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U50Z101P",
    stop_sequence: 6
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U385Z101P",
    stop_sequence: 7
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U597Z101P",
    stop_sequence: 8
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U527Z101P",
    stop_sequence: 9
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U190Z101P",
    stop_sequence: 10
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U400Z121P",
    stop_sequence: 11
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U142Z101P",
    stop_sequence: 12
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U689Z121P",
    stop_sequence: 13
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U100Z101P",
    stop_sequence: 14
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U115Z101P",
    stop_sequence: 15
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U675Z101P",
    stop_sequence: 16
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U78Z101P",
    stop_sequence: 17
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U332Z101P",
    stop_sequence: 18
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U603Z101P",
    stop_sequence: 19
  },
  {
    route_id: "L993",
    direction_id: 1,
    stop_id: "U1000Z101P",
    stop_sequence: 20
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U1000Z102P",
    stop_sequence: 1
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U603Z102P",
    stop_sequence: 2
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U332Z102P",
    stop_sequence: 3
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U78Z102P",
    stop_sequence: 4
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U675Z102P",
    stop_sequence: 5
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U115Z102P",
    stop_sequence: 6
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U100Z102P",
    stop_sequence: 7
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U689Z122P",
    stop_sequence: 8
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U142Z102P",
    stop_sequence: 9
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U400Z122P",
    stop_sequence: 10
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U190Z102P",
    stop_sequence: 11
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U527Z102P",
    stop_sequence: 12
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U597Z102P",
    stop_sequence: 13
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U385Z102P",
    stop_sequence: 14
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U50Z102P",
    stop_sequence: 15
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U228Z102P",
    stop_sequence: 16
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U601Z102P",
    stop_sequence: 17
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U52Z102P",
    stop_sequence: 18
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U106Z102P",
    stop_sequence: 19
  },
  {
    route_id: "L993",
    direction_id: 0,
    stop_id: "U286Z102P",
    stop_sequence: 20
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U651Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U467Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U740Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U78Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U314Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U676Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U675Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U249Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U514Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U870Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U54Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U861Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U779Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U471Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U272Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U529Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U331Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U365Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U81Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U595Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U100Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U717Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U262Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U692Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U163Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U592Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U645Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U519Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U15Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U858Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U844Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U507Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L1",
    direction_id: 1,
    stop_id: "U541Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U541Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U844Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U858Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U15Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U519Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U645Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U592Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U163Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U692Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U100Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U595Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U81Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U365Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U331Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U529Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U471Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U779Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U861Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U54Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U870Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U514Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U249Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U675Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U676Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U314Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U78Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U740Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L1",
    direction_id: 0,
    stop_id: "U651Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U449Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U387Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U614Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U110Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U303Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U583Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U878Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U237Z7P",
    stop_sequence: 8
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U237Z5P",
    stop_sequence: 9
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 11
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U221Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U703Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U360Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U20Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U598Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U645Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U519Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U15Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U858Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U844Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U507Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L2",
    direction_id: 1,
    stop_id: "U541Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U541Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U844Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U858Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U15Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U519Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U645Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U598Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U20Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U360Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U703Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U221Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U237Z6P",
    stop_sequence: 18
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U237Z8P",
    stop_sequence: 19
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U878Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U583Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U303Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U110Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U614Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U387Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L2",
    direction_id: 0,
    stop_id: "U449Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U718Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U675Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U249Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U514Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U870Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U54Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U861Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U779Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U471Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U272Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U529Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U655Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U816Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U758Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U854Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U689Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U480Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U203Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U1072Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U484Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U997Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U237Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U237Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 25
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U237Z8P",
    stop_sequence: 26
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U878Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U583Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U303Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U110Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U614Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U387Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U449Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U71Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U19Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U76Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U388Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U1006Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U929Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U948Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U947Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L3",
    direction_id: 1,
    stop_id: "U946Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U945Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U946Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U947Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U948Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U929Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U1006Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U388Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U76Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U19Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U71Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U449Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U387Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U614Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U110Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U303Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U583Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U878Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U237Z7P",
    stop_sequence: 18
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U237Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U237Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U237Z13P",
    stop_sequence: 21
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U997Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U484Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U1072Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U203Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U480Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U689Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U854Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U758Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U816Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U655Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U529Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U471Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U779Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U861Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U54Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U870Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U514Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U249Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L3",
    direction_id: 0,
    stop_id: "U675Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U473Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U67Z7P",
    stop_sequence: 4
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U391Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U627Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U301Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U354Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U237Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 14
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U1040Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U1040Z6P",
    stop_sequence: 17
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U553Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U458Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U337Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U914Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U147Z6P",
    stop_sequence: 22
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U49Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U1049Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U1050Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U1030Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L4",
    direction_id: 1,
    stop_id: "U1019Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U1019Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U1030Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U1050Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U1049Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U49Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U147Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U914Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U337Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U458Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U553Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U1040Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U1040Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U237Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U237Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U354Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U301Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U627Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U391Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U67Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L4",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U837Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U512Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U469Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U586Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U516Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U339Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U172Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U142Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U203Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1072Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U484Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U997Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U401Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U208Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1040Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1040Z6P",
    stop_sequence: 19
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U553Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U458Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U337Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U914Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U147Z6P",
    stop_sequence: 24
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U49Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1049Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1050Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1030Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U1019Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U2701Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L5",
    direction_id: 1,
    stop_id: "U2702Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U2702Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U2701Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1019Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1030Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1050Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1049Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U49Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U147Z5P",
    stop_sequence: 8
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U914Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U337Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U458Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U553Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1040Z5P",
    stop_sequence: 13
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1040Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U208Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U401Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U997Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U484Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U1072Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U203Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U142Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U172Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U339Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U516Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U586Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U469Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U512Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L5",
    direction_id: 0,
    stop_id: "U837Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U473Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U508Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U463Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U482Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U504Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U560Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U45Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 13
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U841Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U532Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U115Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U521Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U81Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U365Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U331Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U529Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U12Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U308Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U464Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U474Z8P",
    stop_sequence: 33
  },
  {
    route_id: "L6",
    direction_id: 1,
    stop_id: "U474Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U474Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U474Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U464Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U308Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U12Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U529Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U529Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U331Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U365Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U1122Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U521Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U115Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U532Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U841Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U717Z5P",
    stop_sequence: 15
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U45Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U560Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U504Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U482Z6P",
    stop_sequence: 30
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U463Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U508Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L6",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U72Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U652Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U135Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U144Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U1053Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U499Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U75Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U873Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U1052Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U474Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U464Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U308Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U12Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U529Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U529Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U1074Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U373Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U921Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U849Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U299Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U848Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U713Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U605Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U473Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U508Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U463Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U482Z5P",
    stop_sequence: 31
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U83Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U724Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U522Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U876Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U878Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U237Z7P",
    stop_sequence: 37
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U302Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U1044Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U319Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U184Z4P",
    stop_sequence: 43
  },
  {
    route_id: "L7",
    direction_id: 1,
    stop_id: "U957Z4P",
    stop_sequence: 44
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U957Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U184Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U319Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U1044Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U302Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U237Z8P",
    stop_sequence: 8
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U878Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U876Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U522Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U724Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U83Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U482Z6P",
    stop_sequence: 14
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U463Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U508Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U605Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U713Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U848Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U1108Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U299Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U849Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U921Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U921Z12P",
    stop_sequence: 27
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U1074Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U529Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U12Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U308Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U464Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U474Z8P",
    stop_sequence: 35
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U474Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U1052Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U873Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U75Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U499Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U1053Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U144Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U135Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U652Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L7",
    direction_id: 0,
    stop_id: "U72Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U144Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U755Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U775Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U691Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U1401Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U134Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U348Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U1075Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U12Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U529Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U529Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U655Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U816Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U758Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U854Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U689Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U262Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U692Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U163Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U321Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U350Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U906Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L8",
    direction_id: 1,
    stop_id: "U126Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U126Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U906Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U350Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U321Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U163Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U692Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U689Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U854Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U758Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U816Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U655Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U529Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U12Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U1075Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U348Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U134Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U1401Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U691Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U775Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U755Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L8",
    direction_id: 0,
    stop_id: "U144Z6P",
    stop_sequence: 28
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U694Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U266Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U180Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U714Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U837Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U512Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U469Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U586Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U516Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U339Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U172Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U142Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U203Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U1072Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U484Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U997Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U809Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U481Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U4Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U25Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U805Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U254Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U240Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U289Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U580Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U567Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U865Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U394Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U395Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U113Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U236Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U47Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L9",
    direction_id: 1,
    stop_id: "U612Z12P",
    stop_sequence: 38
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U612Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U47Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U236Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U113Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U395Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U394Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U865Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U567Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U580Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U289Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U240Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U254Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U805Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U25Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U4Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U481Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U809Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U997Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U484Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U1072Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U203Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U142Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U172Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U339Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U516Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U586Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U469Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U512Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U837Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U714Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U180Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U266Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L9",
    direction_id: 0,
    stop_id: "U694Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U651Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U467Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U740Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U78Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U314Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U676Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U675Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U249Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U514Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U870Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U54Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U861Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U779Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U471Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U272Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U529Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U1074Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U373Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U921Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U518Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U540Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U851Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U744Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U237Z4P",
    stop_sequence: 32
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 33
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U25Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U805Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U254Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U240Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U289Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U580Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U567Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U865Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U394Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U395Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U113Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U236Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U47Z2P",
    stop_sequence: 48
  },
  {
    route_id: "L10",
    direction_id: 1,
    stop_id: "U612Z2P",
    stop_sequence: 49
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U612Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U47Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U236Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U113Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U395Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U394Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U865Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U567Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U580Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U289Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U240Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U254Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U805Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U25Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U237Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U237Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U744Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U851Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U540Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U518Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U515Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U921Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U921Z12P",
    stop_sequence: 29
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U1074Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U529Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U471Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U779Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U861Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U54Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U870Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U514Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U249Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U675Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U676Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U314Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U78Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U740Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L10",
    direction_id: 0,
    stop_id: "U651Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U694Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U266Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U180Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U714Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U837Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U512Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U373Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U921Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U616Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U209Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U850Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U191Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U400Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U190Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U45Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U560Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U504Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U482Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U152Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U559Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U376Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U550Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U183Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U751Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L11",
    direction_id: 1,
    stop_id: "U697Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U697Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U751Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U183Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U550Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U376Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U559Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U152Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U482Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U504Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U560Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U45Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U190Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U400Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U191Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U850Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U209Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U616Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U515Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U921Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U921Z12P",
    stop_sequence: 21
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U512Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U837Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U714Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U180Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U266Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L11",
    direction_id: 0,
    stop_id: "U694Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U532Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U532Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U115Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U521Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U81Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U81Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U595Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U100Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U717Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U439Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U68Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U360Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U361Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U138Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U809Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U481Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U4Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U1040Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U1040Z6P",
    stop_sequence: 19
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U553Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U458Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U337Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U914Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U147Z6P",
    stop_sequence: 24
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U49Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U1049Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U1050Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U1030Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L12",
    direction_id: 1,
    stop_id: "U1019Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1019Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1030Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1050Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1049Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U49Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U147Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U914Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U337Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U458Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U553Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1040Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1040Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U4Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U481Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U809Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U138Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U361Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U360Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U68Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U717Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U100Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U595Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U81Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U1122Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U521Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U115Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U532Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L12",
    direction_id: 0,
    stop_id: "U532Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U837Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U512Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U373Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U921Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U616Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U209Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U850Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U191Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U400Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U190Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U476Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U354Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U301Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U627Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U391Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L13",
    direction_id: 1,
    stop_id: "U67Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U67Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U391Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U627Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U301Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U354Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U476Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U190Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U400Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U191Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U850Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U209Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U616Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U515Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U921Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U921Z12P",
    stop_sequence: 16
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U512Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L13",
    direction_id: 0,
    stop_id: "U837Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U72Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U652Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U135Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U144Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U1053Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U499Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U75Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U873Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U1052Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U474Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U464Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U308Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U12Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U529Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U529Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U331Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U365Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U81Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U595Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U100Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U983Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U952Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U480Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U203Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U1072Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U484Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U997Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U237Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U237Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U42Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U876Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U522Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U724Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U83Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U482Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U152Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U559Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U376Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U550Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U183Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U751Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L14",
    direction_id: 1,
    stop_id: "U697Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U697Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U751Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U183Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U550Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U376Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U559Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U152Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U482Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U83Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U724Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U522Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U876Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U42Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U237Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U237Z13P",
    stop_sequence: 15
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U997Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U484Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U1072Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U203Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U480Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U952Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U983Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U100Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U595Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U81Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U365Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U331Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U529Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U12Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U308Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U464Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U474Z8P",
    stop_sequence: 33
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U474Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U1052Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U873Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U75Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U499Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U1053Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U144Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U135Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U652Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L14",
    direction_id: 0,
    stop_id: "U72Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U516Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U339Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U172Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U142Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U68Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U360Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U361Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U138Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U809Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U481Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U4Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U25Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U805Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U254Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U240Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L15",
    direction_id: 1,
    stop_id: "U289Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U289Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U289Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U240Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U254Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U805Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U25Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U4Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U481Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U809Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U138Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U361Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U360Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U68Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U142Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U172Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U339Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U516Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L15",
    direction_id: 0,
    stop_id: "U515Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U807Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U404Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U358Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U1071Z9P",
    stop_sequence: 4
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U1071Z11P",
    stop_sequence: 5
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U70Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U827Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U900Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U690Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U1108Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U299Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U849Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U921Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U921Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U518Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U540Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U851Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U744Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U237Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 26
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U25Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U805Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U254Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U240Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U289Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U580Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U567Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U865Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U394Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U395Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U113Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U236Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U47Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L16",
    direction_id: 1,
    stop_id: "U612Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U612Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U47Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U236Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U113Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U395Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U394Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U865Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U567Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U580Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U289Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U240Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U254Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U805Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U25Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U237Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U237Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U744Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U851Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U540Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U518Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U515Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U921Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U921Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U849Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U299Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U1108Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U690Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U900Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U827Z4P",
    stop_sequence: 35
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U70Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U1071Z8P",
    stop_sequence: 37
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U1071Z12P",
    stop_sequence: 38
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U358Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U404Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L16",
    direction_id: 0,
    stop_id: "U807Z4P",
    stop_sequence: 41
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U864Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U864Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U333Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U718Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U675Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U249Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U139Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U447Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U765Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U115Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U532Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U841Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U717Z5P",
    stop_sequence: 13
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U439Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U68Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U593Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U703Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U221Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U483Z6P",
    stop_sequence: 19
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U208Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U237Z8P",
    stop_sequence: 21
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U878Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U583Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U303Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U110Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U614Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U387Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U449Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U71Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U19Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U76Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U388Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U1006Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U929Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U948Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U947Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U946Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U2708Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U509Z4P",
    stop_sequence: 39
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U659Z4P",
    stop_sequence: 40
  },
  {
    route_id: "L17",
    direction_id: 1,
    stop_id: "U533Z4P",
    stop_sequence: 41
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U533Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U659Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U509Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U2708Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U945Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U946Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U947Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U948Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U929Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U1006Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U388Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U76Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U19Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U71Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U449Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U387Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U614Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U110Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U303Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U583Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U878Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U237Z7P",
    stop_sequence: 22
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U208Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U483Z5P",
    stop_sequence: 24
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U221Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U703Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U593Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U68Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U717Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U841Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U532Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U115Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U765Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U447Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U139Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U249Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U675Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U718Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U333Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L17",
    direction_id: 0,
    stop_id: "U864Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U866Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U433Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U2784Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U597Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U530Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U503Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U482Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U83Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U724Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U522Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U876Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U42Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 14
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U221Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U703Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U360Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U20Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U598Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U592Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U321Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U350Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U906Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L18",
    direction_id: 1,
    stop_id: "U126Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U126Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U906Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U350Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U321Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U592Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U598Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U20Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U360Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U703Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U221Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U42Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U876Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U522Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U724Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U83Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U482Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U503Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U530Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U597Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U2784Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U433Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L18",
    direction_id: 0,
    stop_id: "U866Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U694Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U266Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U180Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U714Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U837Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U512Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U373Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U921Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U849Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U299Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U848Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U713Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U605Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U473Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U508Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U463Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U482Z5P",
    stop_sequence: 21
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U482Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U503Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U530Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U597Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U2784Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L19",
    direction_id: 1,
    stop_id: "U385Z12P",
    stop_sequence: 27
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U385Z11P",
    stop_sequence: 1
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U2784Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U597Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U530Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U503Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U482Z9P",
    stop_sequence: 6
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U463Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U508Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U605Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U713Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U848Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U1108Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U299Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U849Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U921Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U921Z12P",
    stop_sequence: 19
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U512Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U837Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U714Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U180Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U266Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L19",
    direction_id: 0,
    stop_id: "U694Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U85Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U868Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U283Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U462Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U73Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U943Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U157Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U40Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U130Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U757Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U321Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U321Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U592Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U598Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U20Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U360Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U361Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U138Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U809Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U481Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U4Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U1040Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U1040Z6P",
    stop_sequence: 23
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U553Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U458Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U337Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U914Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U147Z6P",
    stop_sequence: 28
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U49Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U1049Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U1050Z4P",
    stop_sequence: 31
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U1030Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L20",
    direction_id: 1,
    stop_id: "U1019Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U1019Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U1030Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U1050Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U1049Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U49Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U147Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U914Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U337Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U458Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U553Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U1040Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U1040Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U4Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U481Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U809Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U138Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U361Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U360Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U20Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U598Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U592Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U321Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U321Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U757Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U130Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U40Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U157Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U943Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U73Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U462Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U283Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U868Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L20",
    direction_id: 0,
    stop_id: "U85Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U458Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U553Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U1040Z5P",
    stop_sequence: 3
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U1040Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U901Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U237Z8P",
    stop_sequence: 6
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U878Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U583Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U303Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U110Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U614Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U387Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U449Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U71Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U19Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U76Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U388Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U1006Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U929Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U948Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U947Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L21",
    direction_id: 1,
    stop_id: "U946Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U945Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U946Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U947Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U948Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U929Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U1006Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U388Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U76Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U19Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U71Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U449Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U387Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U614Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U110Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U303Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U583Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U878Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U237Z7P",
    stop_sequence: 18
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U901Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U1040Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U1040Z6P",
    stop_sequence: 21
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U553Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L21",
    direction_id: 0,
    stop_id: "U458Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U453Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U472Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U403Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U596Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U670Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U584Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U618Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U459Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U605Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U473Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U67Z7P",
    stop_sequence: 16
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U391Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U627Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U301Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U354Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 25
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U809Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U138Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U361Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U360Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U20Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U598Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U46Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U531Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U362Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U366Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U103Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U778Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U994Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U636Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U872Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U610Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U364Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L22",
    direction_id: 1,
    stop_id: "U31Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U31Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U364Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U610Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U872Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U636Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U994Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U778Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U103Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U366Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U362Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U531Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U46Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U598Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U20Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U360Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U361Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U138Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U809Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U354Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U301Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U627Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U391Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U67Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U605Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U459Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U618Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U584Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U889Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U670Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U596Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U403Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U472Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L22",
    direction_id: 0,
    stop_id: "U453Z4P",
    stop_sequence: 44
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U1121Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U45Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 6
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U809Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U138Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U361Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U360Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U20Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U598Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U46Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U531Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U362Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L23",
    direction_id: 1,
    stop_id: "U362Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U362Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U362Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U140Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U46Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U598Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U20Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U360Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U361Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U138Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U809Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U45Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L23",
    direction_id: 0,
    stop_id: "U1121Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U482Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U83Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U724Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U522Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U876Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U42Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 8
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U32Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U689Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U854Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U758Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U816Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U655Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U529Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U471Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U779Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U861Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U54Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U870Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U514Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U249Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U675Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U718Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U333Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L24",
    direction_id: 1,
    stop_id: "U864Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U864Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U864Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U333Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U718Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U675Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U249Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U514Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U870Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U54Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U861Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U779Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U471Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U272Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U529Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U655Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U816Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U758Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U854Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U689Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U32Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U42Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U876Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U522Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U724Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U83Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U482Z6P",
    stop_sequence: 33
  },
  {
    route_id: "L24",
    direction_id: 0,
    stop_id: "U482Z4P",
    stop_sequence: 34
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U72Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U652Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U135Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U144Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U755Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U775Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U691Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U1401Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U134Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U348Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U1075Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U12Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U529Z5P",
    stop_sequence: 13
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U529Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U331Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U365Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U81Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U595Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U100Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U717Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U262Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U692Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U163Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U592Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U140Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U362Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U366Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U103Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U778Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U994Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U636Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U872Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U610Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U364Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L25",
    direction_id: 1,
    stop_id: "U31Z4P",
    stop_sequence: 38
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U31Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U364Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U610Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U872Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U636Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U994Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U778Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U103Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U366Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U362Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U140Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U592Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U163Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U692Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U100Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U595Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U81Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U365Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U331Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U529Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U12Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U1075Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U348Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U134Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U1401Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U691Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U775Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U755Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U144Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U135Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U652Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L25",
    direction_id: 0,
    stop_id: "U72Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U453Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U472Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U403Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U596Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U670Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U584Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U618Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U459Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U713Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U848Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U1108Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U299Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U849Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U921Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U921Z12P",
    stop_sequence: 18
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U469Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U586Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U516Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U339Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U172Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U142Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U262Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U692Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U163Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U321Z4P",
    stop_sequence: 34
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U321Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U757Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U130Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U40Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U157Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U943Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U73Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U462Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U283Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U868Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L26",
    direction_id: 1,
    stop_id: "U85Z4P",
    stop_sequence: 45
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U85Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U868Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U283Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U462Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U73Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U943Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U157Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U40Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U130Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U757Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U321Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U321Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U163Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U692Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U142Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U172Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U339Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U516Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U586Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U469Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U373Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U921Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U849Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U299Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U848Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U713Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U459Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U618Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U584Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U889Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U670Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U596Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U403Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U472Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L26",
    direction_id: 0,
    stop_id: "U453Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L49",
    direction_id: 1,
    stop_id: "U1997Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L49",
    direction_id: 1,
    stop_id: "U1998Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L49",
    direction_id: 1,
    stop_id: "U1999Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L49",
    direction_id: 0,
    stop_id: "U1999Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L49",
    direction_id: 0,
    stop_id: "U1998Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L49",
    direction_id: 0,
    stop_id: "U1997Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U529Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U529Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U471Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U779Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U861Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U54Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U870Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U514Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U249Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U675Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U718Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U333Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L90",
    direction_id: 1,
    stop_id: "U864Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U864Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U864Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U333Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U718Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U675Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U249Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U514Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U870Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U54Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U861Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U779Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U471Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U272Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L90",
    direction_id: 0,
    stop_id: "U529Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U618Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U459Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U713Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U848Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U1108Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U299Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U849Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U921Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U921Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U518Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U540Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U851Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U744Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 21
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U262Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U692Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U163Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U321Z4P",
    stop_sequence: 35
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U321Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U757Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U130Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U40Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U157Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U943Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U73Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U462Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U283Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U868Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L91",
    direction_id: 1,
    stop_id: "U85Z4P",
    stop_sequence: 46
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U85Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U868Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U283Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U462Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U73Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U943Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U157Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U40Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U130Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U757Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U321Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U321Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U163Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U692Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U744Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U851Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U540Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U518Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U515Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U921Z4P",
    stop_sequence: 36
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U921Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U849Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U299Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U848Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U713Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L91",
    direction_id: 0,
    stop_id: "U459Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U945Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U946Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U947Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U948Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U929Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U1006Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U388Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U76Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U19Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U71Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U449Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U387Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U614Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U110Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U303Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U583Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U878Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U237Z7P",
    stop_sequence: 18
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U237Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 21
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U32Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U689Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U854Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U758Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U816Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U655Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U529Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U12Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U1075Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U348Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U134Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U1401Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U691Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U775Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U755Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U144Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U135Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U652Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L92",
    direction_id: 1,
    stop_id: "U72Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U72Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U652Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U135Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U144Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U755Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U775Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U691Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U1401Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U134Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U348Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U1075Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U12Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U529Z5P",
    stop_sequence: 13
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U529Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U655Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U816Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U758Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U854Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U689Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U32Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U237Z6P",
    stop_sequence: 28
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U237Z8P",
    stop_sequence: 29
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U878Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U583Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U303Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U110Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U614Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U387Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U449Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U71Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U19Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U76Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U388Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U1006Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U929Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U948Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U947Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L92",
    direction_id: 0,
    stop_id: "U946Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U866Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U433Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U2784Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U597Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U530Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U503Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U482Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U83Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U724Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U522Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U876Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U42Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 14
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U997Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U221Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U703Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U593Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U68Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U841Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U532Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U115Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U765Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U447Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U139Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U249Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U675Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U676Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U314Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U78Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U740Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L93",
    direction_id: 1,
    stop_id: "U651Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U651Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U467Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U740Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U78Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U314Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U676Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U675Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U249Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U139Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U447Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U765Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U115Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U532Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U841Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U717Z5P",
    stop_sequence: 15
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U68Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U593Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U703Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U221Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U997Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U42Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U876Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U522Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U724Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U83Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U482Z6P",
    stop_sequence: 31
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U503Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U530Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U597Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U2784Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U433Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L93",
    direction_id: 0,
    stop_id: "U866Z4P",
    stop_sequence: 37
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1019Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1030Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1050Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1049Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U49Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U147Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U914Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U337Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U458Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U553Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1040Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1040Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U901Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U237Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 16
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U841Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U532Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U115Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U521Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U81Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U365Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U331Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U529Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U12Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U308Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U464Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U474Z8P",
    stop_sequence: 36
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U474Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1052Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U873Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U75Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U499Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U1053Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U144Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U135Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U652Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L94",
    direction_id: 1,
    stop_id: "U72Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U72Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U652Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U135Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U144Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1053Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U499Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U75Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U873Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1052Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U474Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U464Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U308Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U12Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U529Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U529Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U331Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U365Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1122Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U521Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U115Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U532Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U841Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U717Z5P",
    stop_sequence: 23
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U237Z6P",
    stop_sequence: 34
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U901Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1040Z4P",
    stop_sequence: 36
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1040Z6P",
    stop_sequence: 37
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U553Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U458Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U337Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U914Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U147Z6P",
    stop_sequence: 42
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U49Z4P",
    stop_sequence: 43
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1049Z4P",
    stop_sequence: 44
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1050Z4P",
    stop_sequence: 45
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1030Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L94",
    direction_id: 0,
    stop_id: "U1019Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U807Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U404Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U358Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U1071Z11P",
    stop_sequence: 4
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U70Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U827Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U900Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U690Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U848Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U713Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U605Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U473Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U508Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U463Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U482Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U83Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U724Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U522Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U876Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U42Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U237Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 24
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U142Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U172Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U339Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U516Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U586Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U469Z4P",
    stop_sequence: 34
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U469Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U34Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U1074Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U529Z4P",
    stop_sequence: 38
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U471Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U779Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U861Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U54Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U870Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U514Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U249Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U675Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U718Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U333Z2P",
    stop_sequence: 48
  },
  {
    route_id: "L95",
    direction_id: 1,
    stop_id: "U864Z2P",
    stop_sequence: 49
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U864Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U864Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U333Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U718Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U675Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U249Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U514Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U870Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U54Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U861Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U779Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U471Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U272Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U529Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U1074Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U34Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U469Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U469Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U586Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U516Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U339Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U172Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U142Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U237Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U42Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U876Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U522Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U724Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U83Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U482Z6P",
    stop_sequence: 35
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U463Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U508Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U605Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U713Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U848Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U1108Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U690Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U900Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U827Z4P",
    stop_sequence: 47
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U70Z2P",
    stop_sequence: 48
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U1071Z12P",
    stop_sequence: 49
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U358Z2P",
    stop_sequence: 50
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U404Z2P",
    stop_sequence: 51
  },
  {
    route_id: "L95",
    direction_id: 0,
    stop_id: "U807Z2P",
    stop_sequence: 52
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U697Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U751Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U183Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U550Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U376Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U559Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U152Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U482Z5P",
    stop_sequence: 8
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U504Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U560Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U45Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 15
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U997Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U484Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U1072Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U203Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U717Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U262Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U692Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U163Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U592Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U645Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U519Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U15Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U858Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U844Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U507Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L96",
    direction_id: 1,
    stop_id: "U541Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U541Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U844Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U858Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U15Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U519Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U645Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U592Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U163Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U692Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U203Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U1072Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U484Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U997Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U45Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U560Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U504Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U482Z6P",
    stop_sequence: 29
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U152Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U559Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U376Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U550Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U183Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U751Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L96",
    direction_id: 0,
    stop_id: "U697Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U453Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U472Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U403Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U596Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U670Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U584Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U618Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U459Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U605Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U473Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U67Z7P",
    stop_sequence: 16
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U391Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U627Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U301Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U354Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 25
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U997Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U809Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U138Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U361Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U360Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U20Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U598Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U140Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U362Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U366Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U103Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U778Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U994Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U636Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U872Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U610Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U364Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L97",
    direction_id: 1,
    stop_id: "U31Z4P",
    stop_sequence: 46
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U31Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U364Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U610Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U872Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U636Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U994Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U778Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U103Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U366Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U362Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U140Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U598Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U20Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U360Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U361Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U138Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U809Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U997Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U354Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U301Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U627Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U391Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U67Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U605Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U459Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U618Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U584Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U889Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U670Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U596Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U403Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U472Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L97",
    direction_id: 0,
    stop_id: "U453Z4P",
    stop_sequence: 45
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U694Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U266Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U180Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U714Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U837Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U512Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U34Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U469Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U373Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U921Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U515Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U118Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U516Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U339Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U172Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U142Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U203Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U1072Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U484Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U997Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U997Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U809Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U481Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U4Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U25Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U805Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U254Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U240Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U289Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U580Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U567Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U865Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U394Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U395Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U113Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U236Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U47Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L98",
    direction_id: 1,
    stop_id: "U612Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U612Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U47Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U236Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U113Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U395Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U394Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U865Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U567Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U580Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U289Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U240Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U254Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U805Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U25Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U4Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U481Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U809Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U997Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U997Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U484Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U1072Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U203Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U142Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U172Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U339Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U516Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U118Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U515Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U921Z4P",
    stop_sequence: 32
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U921Z12P",
    stop_sequence: 33
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U469Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U34Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U512Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U837Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U714Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U180Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U266Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L98",
    direction_id: 0,
    stop_id: "U694Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U584Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U618Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U459Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U605Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U473Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U680Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U269Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U67Z7P",
    stop_sequence: 11
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U391Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U627Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U301Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U354Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U476Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U190Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U739Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U237Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U237Z13P",
    stop_sequence: 20
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U997Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U539Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U483Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U809Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U481Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U4Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U25Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U805Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U254Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U240Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U289Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U580Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U567Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U865Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U394Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U395Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U113Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U236Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U47Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L99",
    direction_id: 1,
    stop_id: "U612Z12P",
    stop_sequence: 41
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U612Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U47Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U236Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U113Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U395Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U394Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U865Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U567Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U580Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U289Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U240Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U254Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U805Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U25Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U4Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U481Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U809Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U483Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U539Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U997Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U237Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U739Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U190Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U354Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U301Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U627Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U391Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U67Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U269Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U680Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U473Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U605Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U459Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U618Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U584Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L99",
    direction_id: 0,
    stop_id: "U889Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U384Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U399Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U64Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U791Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U63Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U451Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U368Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U766Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U125Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U771Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U89Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U405Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U1000Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U606Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U500Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U603Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U754Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U251Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U1413Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L58",
    direction_id: 1,
    stop_id: "U529Z5P",
    stop_sequence: 20
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U529Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U471Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U1413Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U251Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U754Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U603Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U500Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U606Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U1000Z12P",
    stop_sequence: 9
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U405Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U89Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U771Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U125Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U766Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U368Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U451Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U63Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U791Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U64Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U399Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L58",
    direction_id: 0,
    stop_id: "U384Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U628Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U629Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U1090Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U776Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U698Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U218Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L100",
    direction_id: 1,
    stop_id: "U1141Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U1141Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U218Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U698Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U776Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U628Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U629Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L100",
    direction_id: 0,
    stop_id: "U1090Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U172Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U821Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U2789Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U2788Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U209Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U540Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U1067Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U189Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U269Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U723Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U37Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U1092Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U886Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U576Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U825Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U784Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U887Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U760Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U890Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U673Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U953Z8P",
    stop_sequence: 23
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U1076Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U1068Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U1066Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U226Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U227Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U292Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L101",
    direction_id: 1,
    stop_id: "U320Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U320Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U292Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U227Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U226Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U1066Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U1068Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U1076Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U953Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U673Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U889Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U890Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U760Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U887Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U784Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U825Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U576Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U886Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U1092Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U37Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U723Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U269Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U189Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U1067Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U540Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U851Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U209Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U2788Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U2789Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L101",
    direction_id: 0,
    stop_id: "U172Z17P",
    stop_sequence: 30
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U648Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U912Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U371Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U924Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U925Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U544Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U543Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U267Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U675Z8P",
    stop_sequence: 9
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U4128Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U4129Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U39Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U55Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L102",
    direction_id: 1,
    stop_id: "U55Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U55Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U39Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U4129Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U4128Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U675Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U267Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U543Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U544Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U925Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U924Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U371Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U912Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L102",
    direction_id: 0,
    stop_id: "U648Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U458Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U642Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U1260Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U153Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U117Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U117Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U437Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U49Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U753Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U337Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L105",
    direction_id: 0,
    stop_id: "U458Z8P",
    stop_sequence: 12
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U449Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U449Z9P",
    stop_sequence: 2
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U71Z6P",
    stop_sequence: 3
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U984Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U412Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U1087Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U853Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U895Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U879Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U662Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U488Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L106",
    direction_id: 1,
    stop_id: "U228Z5P",
    stop_sequence: 16
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U228Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U497Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U662Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U879Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U895Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U853Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U1087Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U412Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U984Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U71Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L106",
    direction_id: 0,
    stop_id: "U449Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U513Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U721Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U874Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U233Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U397Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U623Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U506Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U177Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U126Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U162Z6P",
    stop_sequence: 10
  },
  {
    route_id: "L107",
    direction_id: 1,
    stop_id: "U321Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U321Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U162Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U126Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U177Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U506Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U623Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U397Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U233Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U874Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U721Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L107",
    direction_id: 0,
    stop_id: "U513Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U321Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3216Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U646Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U2767Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U2768Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U906Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3217Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3218Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U757Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U2757Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U867Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U645Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3041Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3042Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3043Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3044Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U858Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3045Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U3045Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U844Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U507Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U541Z6P",
    stop_sequence: 22
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U334Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1198Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U630Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U631Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U700Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1166Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1169Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1168Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1167Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U2793Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1046Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L108",
    direction_id: 1,
    stop_id: "U1046Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1046Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1046Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U2793Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1167Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1168Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1169Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1166Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U700Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U631Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U630Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U1198Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U334Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U541Z7P",
    stop_sequence: 13
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U844Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3045Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U858Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3044Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3043Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3042Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3041Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U645Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U867Z5P",
    stop_sequence: 23
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U2757Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U757Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3218Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3217Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U906Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U2768Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U2767Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U646Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U3216Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L108",
    direction_id: 0,
    stop_id: "U321Z5P",
    stop_sequence: 33
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U880Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U2276Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U28Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U448Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U97Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U801Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U349Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U193Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U318Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U695Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U884Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U276Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U574Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U694Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U13Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U498Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U12Z6P",
    stop_sequence: 17
  },
  {
    route_id: "L109",
    direction_id: 1,
    stop_id: "U529Z8P",
    stop_sequence: 18
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U529Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U12Z7P",
    stop_sequence: 2
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U498Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U13Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U694Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U574Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U276Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U884Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U695Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U318Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U193Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U349Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U801Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U97Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U448Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U28Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U2276Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L109",
    direction_id: 0,
    stop_id: "U880Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U274Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U311Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U568Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U275Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U792Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U107Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1115Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1059Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U108Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U215Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1099Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U96Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1024Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U761Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U798Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1033Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U824Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U226Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1066Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1068Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U1076Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L111",
    direction_id: 1,
    stop_id: "U953Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U953Z8P",
    stop_sequence: 1
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1076Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1068Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1066Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U226Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U227Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U824Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1033Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U798Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U761Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1024Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U96Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1099Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U215Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U108Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1059Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U1115Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U107Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U792Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U275Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U568Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U311Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L111",
    direction_id: 0,
    stop_id: "U274Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L112",
    direction_id: 1,
    stop_id: "U764Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L112",
    direction_id: 1,
    stop_id: "U290Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L112",
    direction_id: 1,
    stop_id: "U66Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L112",
    direction_id: 1,
    stop_id: "U241Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L112",
    direction_id: 1,
    stop_id: "U765Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L112",
    direction_id: 1,
    stop_id: "U115Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U115Z8P",
    stop_sequence: 1
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U115Z11P",
    stop_sequence: 2
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U588Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U765Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U241Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U66Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U290Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L112",
    direction_id: 0,
    stop_id: "U764Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U185Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U1591Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U1584Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U4428Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U2754Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U545Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U546Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U871Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U369Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U783Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U335Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U804Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U194Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U749Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U656Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U893Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U488Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L113",
    direction_id: 1,
    stop_id: "U228Z5P",
    stop_sequence: 18
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U228Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U488Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U893Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U656Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U749Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U194Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U804Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U335Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U783Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U369Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U871Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U546Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U545Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U2754Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U4428Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U1584Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U1591Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L113",
    direction_id: 0,
    stop_id: "U185Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L116",
    direction_id: 1,
    stop_id: "U414Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L116",
    direction_id: 1,
    stop_id: "U230Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L116",
    direction_id: 1,
    stop_id: "U56Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L116",
    direction_id: 1,
    stop_id: "U285Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L116",
    direction_id: 1,
    stop_id: "U199Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L116",
    direction_id: 1,
    stop_id: "U157Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L116",
    direction_id: 0,
    stop_id: "U157Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L116",
    direction_id: 0,
    stop_id: "U199Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L116",
    direction_id: 0,
    stop_id: "U285Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L116",
    direction_id: 0,
    stop_id: "U56Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L116",
    direction_id: 0,
    stop_id: "U230Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L116",
    direction_id: 0,
    stop_id: "U414Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U458Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U614Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U110Z7P",
    stop_sequence: 4
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U1403Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U569Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U495Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U429Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U296Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U50Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U50Z7P",
    stop_sequence: 11
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U265Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U1402Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U415Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U832Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U79Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U643Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U697Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U141Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L118",
    direction_id: 1,
    stop_id: "U669Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U669Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U141Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U697Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U643Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U79Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U832Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U431Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U1402Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U265Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U50Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U296Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U429Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U495Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U569Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U1403Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U110Z8P",
    stop_sequence: 16
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U337Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L118",
    direction_id: 0,
    stop_id: "U458Z8P",
    stop_sequence: 18
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U628Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U629Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U1090Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U776Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U698Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U218Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U80Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U493Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U85Z8P",
    stop_sequence: 9
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U868Z51P",
    stop_sequence: 10
  },
  {
    route_id: "L119",
    direction_id: 1,
    stop_id: "U462Z15P",
    stop_sequence: 11
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U462Z11P",
    stop_sequence: 1
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U868Z52P",
    stop_sequence: 2
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U85Z5P",
    stop_sequence: 3
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U493Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U80Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U218Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U698Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U776Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U628Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U629Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L119",
    direction_id: 0,
    stop_id: "U1090Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U456Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U608Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U637Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U830Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U57Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U214Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U347Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U885Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U120Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U780Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U470Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U216Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U517Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U501Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U1125Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U1030Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U1050Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U1191Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U682Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U146Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U904Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U428Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U147Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U914Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U468Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U817Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U302Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L120",
    direction_id: 1,
    stop_id: "U1040Z16P",
    stop_sequence: 28
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U1040Z21P",
    stop_sequence: 1
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U302Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U817Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U562Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U468Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U914Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U147Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U428Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U904Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U831Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U146Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U682Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U1191Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U1050Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U1030Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U1125Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U501Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U1127Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U720Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U3209Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U216Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U470Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U780Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U120Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U885Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U347Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U214Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U57Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U830Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U637Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U608Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L120",
    direction_id: 0,
    stop_id: "U456Z5P",
    stop_sequence: 32
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U449Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U449Z9P",
    stop_sequence: 2
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U71Z6P",
    stop_sequence: 3
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U984Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U412Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U284Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U255Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U124Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U833Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U329Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U893Z6P",
    stop_sequence: 13
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U935Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U1048Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U127Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U632Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U950Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L121",
    direction_id: 1,
    stop_id: "U50Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U50Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U950Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U632Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U127Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U1048Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U935Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U893Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U497Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U329Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U833Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U124Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U255Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U284Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U412Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U984Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U71Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L121",
    direction_id: 0,
    stop_id: "U449Z6P",
    stop_sequence: 18
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U382Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U6Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U810Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U812Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U1058Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U2780Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U1404Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U247Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U239Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U278Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U916Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L122",
    direction_id: 1,
    stop_id: "U106Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U106Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U916Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U278Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U239Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U247Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U1404Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U2780Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U1058Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U812Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L122",
    direction_id: 0,
    stop_id: "U810Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U733Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U156Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U372Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U782Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U58Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U426Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U644Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U2604Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U240Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U254Z6P",
    stop_sequence: 10
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U1040Z14P",
    stop_sequence: 11
  },
  {
    route_id: "L123",
    direction_id: 1,
    stop_id: "U1040Z16P",
    stop_sequence: 12
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U1040Z18P",
    stop_sequence: 1
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U1040Z12P",
    stop_sequence: 2
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U254Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U240Z5P",
    stop_sequence: 4
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U240Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U644Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U426Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U58Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U782Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U372Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U156Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U234Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L123",
    direction_id: 0,
    stop_id: "U733Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U910Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U796Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U632Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U950Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U50Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U50Z7P",
    stop_sequence: 6
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U265Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U422Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U129Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U2964Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U376Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U559Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U263Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U813Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U508Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U269Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U189Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U413Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U29Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L124",
    direction_id: 1,
    stop_id: "U921Z7P",
    stop_sequence: 20
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U921Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U921Z10P",
    stop_sequence: 2
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U29Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U413Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U268Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U67Z7P",
    stop_sequence: 6
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U508Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U813Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U263Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U559Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U376Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U129Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U422Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U1402Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U265Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U50Z15P",
    stop_sequence: 16
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U50Z6P",
    stop_sequence: 17
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U950Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U632Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U796Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L124",
    direction_id: 0,
    stop_id: "U910Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U953Z8P",
    stop_sequence: 1
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U1076Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U1068Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U1066Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U226Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U677Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U453Z10P",
    stop_sequence: 7
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U654Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U633Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U2707Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U154Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U973Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U732Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U3052Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U770Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U842Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U963Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U967Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U338Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U286Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U386Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U604Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U379Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U1345Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U344Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U424Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U181Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L125",
    direction_id: 1,
    stop_id: "U458Z8P",
    stop_sequence: 30
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U458Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U424Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U344Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U1345Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U379Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U604Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U386Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U338Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U967Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U842Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U978Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U770Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U3052Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U732Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U973Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U154Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U2707Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U633Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U654Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U453Z12P",
    stop_sequence: 24
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U677Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U226Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U1066Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U1068Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U1076Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L125",
    direction_id: 0,
    stop_id: "U953Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U461Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U336Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U3053Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U220Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U919Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U169Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U382Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U6Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U286Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U386Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U43Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U735Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U99Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U960Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U23Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U1131Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U52Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U969Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U989Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L126",
    direction_id: 1,
    stop_id: "U271Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U271Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U989Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U969Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U52Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U1131Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U23Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U960Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U99Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U735Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U43Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U590Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U386Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 13
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U6Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U382Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U169Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U919Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U220Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U3053Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U336Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U542Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L126",
    direction_id: 0,
    stop_id: "U461Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U147Z8P",
    stop_sequence: 1
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U914Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U1152Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U1153Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U1155Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U1156Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U1159Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U1152Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L128",
    direction_id: 0,
    stop_id: "U147Z7P",
    stop_sequence: 9
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U14Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U578Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U1039Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U917Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U802Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U814Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U902Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U315Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U317Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U102Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U355Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L129",
    direction_id: 1,
    stop_id: "U458Z13P",
    stop_sequence: 13
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U458Z11P",
    stop_sequence: 1
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U355Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U102Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U317Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U315Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U902Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U802Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U917Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U1039Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U578Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L129",
    direction_id: 0,
    stop_id: "U14Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1050Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1030Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1125Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U501Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1127Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U720Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U3209Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U216Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U470Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U944Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1406Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U892Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U634Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U122Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U679Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1211Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U2764Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1140Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U979Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U281Z7P",
    stop_sequence: 20
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1265Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L130",
    direction_id: 1,
    stop_id: "U1141Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1141Z14P",
    stop_sequence: 1
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1265Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U281Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U979Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1140Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U2764Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1211Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U679Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U122Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U634Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U892Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U944Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U470Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U216Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U517Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U501Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1125Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1030Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L130",
    direction_id: 0,
    stop_id: "U1050Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U163Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U646Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U450Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U980Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U906Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U425Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U213Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U787Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U736Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U112Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U133Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U3017Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L131",
    direction_id: 1,
    stop_id: "U157Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U157Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U3017Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U133Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U112Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U736Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U787Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U213Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U425Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U906Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U980Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U646Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L131",
    direction_id: 0,
    stop_id: "U163Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U660Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U660Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U548Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U161Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U418Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U767Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U357Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U1064Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U16Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U34Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U512Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U69Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U2787Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U745Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U789Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U3018Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L133",
    direction_id: 1,
    stop_id: "U689Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U689Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U3018Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U789Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U745Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U2787Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U69Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U512Z8P",
    stop_sequence: 7
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U34Z51P",
    stop_sequence: 8
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U16Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U1064Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U357Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U767Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U418Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U161Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U548Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U660Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L133",
    direction_id: 0,
    stop_id: "U660Z6P",
    stop_sequence: 17
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U110Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U110Z7P",
    stop_sequence: 2
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U797Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U822Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U88Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U863Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U911Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U910Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U796Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U632Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U950Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U50Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U50Z8P",
    stop_sequence: 13
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U907Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U385Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U663Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U589Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U406Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U664Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U597Z9P",
    stop_sequence: 20
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U261Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U98Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L134",
    direction_id: 1,
    stop_id: "U583Z5P",
    stop_sequence: 23
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U583Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U98Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U261Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U597Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U664Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U406Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U589Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U1055Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U663Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U385Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U385Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U907Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U50Z15P",
    stop_sequence: 13
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U50Z6P",
    stop_sequence: 14
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U950Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U632Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U796Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U911Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U863Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U88Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U822Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U797Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L134",
    direction_id: 0,
    stop_id: "U110Z5P",
    stop_sequence: 23
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U52Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U1032Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U601Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U1221Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U141Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U697Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U751Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U183Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U37Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U680Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U29Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U413Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U268Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U1067Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U301Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U354Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U476Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U1062Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U427Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U821Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U3018Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L135",
    direction_id: 1,
    stop_id: "U689Z3P",
    stop_sequence: 22
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U689Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U3018Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U821Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U427Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U1062Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U476Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U354Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U301Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U1067Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U413Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U29Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U680Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U37Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U183Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U751Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U697Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U141Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U669Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U141Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U322Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U417Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U601Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U1032Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L135",
    direction_id: 0,
    stop_id: "U52Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U210Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U286Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U353Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U916Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U344Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U424Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U181Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U1221Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U141Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U697Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U751Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U183Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U37Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U680Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U29Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U855Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U518Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U118Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U516Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U743Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U2787Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U69Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U512Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U1074Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U763Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U678Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U498Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U225Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U134Z5P",
    stop_sequence: 31
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U474Z5P",
    stop_sequence: 32
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U603Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U500Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U606Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U1000Z12P",
    stop_sequence: 36
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U405Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U89Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U771Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U125Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U766Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U368Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U451Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U791Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U114Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L136",
    direction_id: 1,
    stop_id: "U1102Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U1102Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U114Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U791Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U451Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U368Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U766Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U125Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U771Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U89Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U405Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U1000Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U606Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U500Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U603Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U474Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U134Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U225Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U678Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U763Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U1074Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U512Z5P",
    stop_sequence: 21
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U69Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U2787Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U743Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U516Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U118Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U518Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U855Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U29Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U680Z3P",
    stop_sequence: 30
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U37Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U183Z3P",
    stop_sequence: 32
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U751Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U697Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U322Z3P",
    stop_sequence: 35
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U417Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U424Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U344Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U916Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U353Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 43
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L136",
    direction_id: 0,
    stop_id: "U210Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1073Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1232Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U875Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1029Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1007Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U711Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U475Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U492Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U709Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1130Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U968Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U602Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U205Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1296Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U846Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U685Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U3211Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U174Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U396Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U116Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U815Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U363Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U835Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U638Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U922Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L137",
    direction_id: 1,
    stop_id: "U1040Z16P",
    stop_sequence: 26
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1040Z19P",
    stop_sequence: 1
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U638Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U835Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U363Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U815Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U116Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U396Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U396Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U174Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U3211Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U685Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U846Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1296Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U205Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U602Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U602Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U968Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1130Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U709Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U492Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U475Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U711Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1007Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1029Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U875Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1232Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L137",
    direction_id: 0,
    stop_id: "U1073Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U378Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U1096Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U908Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U819Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U257Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U228Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U832Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U79Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U704Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U624Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U322Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U697Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U697Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U375Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U669Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U669Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U784Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U887Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U760Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U890Z3P",
    stop_sequence: 22
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U673Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U953Z8P",
    stop_sequence: 26
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U1076Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U668Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U674Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L138",
    direction_id: 1,
    stop_id: "U1323Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U1323Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U674Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U668Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U1076Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U953Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U673Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U889Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U890Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U760Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U887Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U784Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U669Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U669Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U375Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U697Z7P",
    stop_sequence: 16
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U322Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U624Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U704Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U79Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U832Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U415Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U228Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U488Z6P",
    stop_sequence: 25
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U257Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U819Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U908Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L138",
    direction_id: 0,
    stop_id: "U378Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U672Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U802Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U814Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U902Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U392Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U465Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U896Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U882Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U280Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U224Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U388Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U1158Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U939Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U928Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U927Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U625Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U446Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U658Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U329Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U228Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U415Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U422Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U129Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U2964Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U376Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U559Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U263Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U813Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U508Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U269Z4P",
    stop_sequence: 34
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U189Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U413Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U29Z3P",
    stop_sequence: 37
  },
  {
    route_id: "L139",
    direction_id: 1,
    stop_id: "U921Z7P",
    stop_sequence: 38
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U921Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U921Z10P",
    stop_sequence: 2
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U29Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U413Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U268Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U67Z7P",
    stop_sequence: 6
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U508Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U813Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U263Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U559Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U376Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U129Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U422Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U415Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U228Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U497Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U329Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U658Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U446Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U625Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U927Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U928Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U939Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U1158Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U388Z3P",
    stop_sequence: 28
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U62Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U280Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U882Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U896Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U465Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U392Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U902Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U802Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L139",
    direction_id: 0,
    stop_id: "U672Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U384Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U399Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U64Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U1083Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U248Z12P",
    stop_sequence: 5
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U934Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U791Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U63Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U451Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U368Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U766Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U125Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U771Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U89Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U405Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U1000Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U606Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U500Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U603Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U754Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U251Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U1413Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L140",
    direction_id: 1,
    stop_id: "U529Z8P",
    stop_sequence: 23
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U529Z11P",
    stop_sequence: 1
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U1413Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U251Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U754Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U603Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U500Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U606Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U1000Z12P",
    stop_sequence: 8
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U405Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U89Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U771Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U125Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U766Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U368Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U451Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U63Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U791Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U934Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U248Z11P",
    stop_sequence: 19
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U1083Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U64Z6P",
    stop_sequence: 21
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U399Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L140",
    direction_id: 0,
    stop_id: "U384Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1041Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U408Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U279Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1031Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U452Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U859Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 8
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U897Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U897Z7P",
    stop_sequence: 10
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1129Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1057Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1061Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1070Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U137Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U970Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U657Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U652Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U135Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L141",
    direction_id: 1,
    stop_id: "U1228Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1228Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U135Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U652Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U657Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U970Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U137Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1070Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1061Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1057Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1129Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U897Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U897Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U859Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U452Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1031Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U279Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U408Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L141",
    direction_id: 0,
    stop_id: "U1041Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U1114Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U1124Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U1073Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U1232Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U875Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U356Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U304Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L142",
    direction_id: 1,
    stop_id: "U602Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U602Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U304Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U356Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U875Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U1232Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U1073Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U1124Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U587Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L142",
    direction_id: 0,
    stop_id: "U1114Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U699Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U981Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U362Z9P",
    stop_sequence: 3
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U140Z5P",
    stop_sequence: 4
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U867Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U592Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U321Z22P",
    stop_sequence: 7
  },
  {
    route_id: "L143",
    direction_id: 1,
    stop_id: "U321Z12P",
    stop_sequence: 8
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U321Z13P",
    stop_sequence: 1
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U940Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U592Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U867Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U140Z6P",
    stop_sequence: 5
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U362Z10P",
    stop_sequence: 6
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U981Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L143",
    direction_id: 0,
    stop_id: "U699Z12P",
    stop_sequence: 8
  },
  {
    route_id: "L144",
    direction_id: 1,
    stop_id: "U649Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L144",
    direction_id: 1,
    stop_id: "U924Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L144",
    direction_id: 1,
    stop_id: "U925Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L144",
    direction_id: 1,
    stop_id: "U544Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L144",
    direction_id: 1,
    stop_id: "U543Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L144",
    direction_id: 1,
    stop_id: "U675Z7P",
    stop_sequence: 6
  },
  {
    route_id: "L144",
    direction_id: 0,
    stop_id: "U675Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L144",
    direction_id: 0,
    stop_id: "U543Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L144",
    direction_id: 0,
    stop_id: "U544Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L144",
    direction_id: 0,
    stop_id: "U925Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L144",
    direction_id: 0,
    stop_id: "U924Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L144",
    direction_id: 0,
    stop_id: "U649Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U949Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U74Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U330Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U1015Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U615Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U898Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U864Z9P",
    stop_sequence: 7
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U1011Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U688Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U675Z9P",
    stop_sequence: 10
  },
  {
    route_id: "L145",
    direction_id: 1,
    stop_id: "U675Z7P",
    stop_sequence: 11
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U675Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U688Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U1011Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U864Z11P",
    stop_sequence: 4
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U898Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U615Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U330Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U74Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U949Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L145",
    direction_id: 0,
    stop_id: "U949Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U869Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U111Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U874Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U721Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U53Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U233Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U397Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U623Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U506Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U177Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U126Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U162Z6P",
    stop_sequence: 12
  },
  {
    route_id: "L147",
    direction_id: 1,
    stop_id: "U321Z5P",
    stop_sequence: 13
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U321Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U162Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U126Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U177Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U506Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U623Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U397Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U233Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U53Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U721Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U874Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U111Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L147",
    direction_id: 0,
    stop_id: "U869Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U190Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U955Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U956Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U959Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U964Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U237Z22P",
    stop_sequence: 6
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U237Z10P",
    stop_sequence: 7
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U964Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U959Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U956Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U933Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U958Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L148",
    direction_id: 0,
    stop_id: "U190Z9P",
    stop_sequence: 13
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U281Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U999Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U1210Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U786Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U1130Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U968Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U602Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U238Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U1296Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U27Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U685Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U846Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U174Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U396Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U573Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U788Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U254Z6P",
    stop_sequence: 17
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U254Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U443Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U565Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U579Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U992Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U1407Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U699Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U981Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U362Z12P",
    stop_sequence: 26
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U563Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U182Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U867Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U592Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U321Z22P",
    stop_sequence: 31
  },
  {
    route_id: "L149",
    direction_id: 1,
    stop_id: "U321Z12P",
    stop_sequence: 32
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U321Z13P",
    stop_sequence: 1
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U940Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U592Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U867Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U182Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U563Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U362Z10P",
    stop_sequence: 7
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U981Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U699Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U1407Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U992Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U579Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U443Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U254Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U206Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U788Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U573Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U396Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U174Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U846Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U685Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U27Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U238Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U602Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U602Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U968Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U1130Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U786Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U1210Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U999Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L149",
    direction_id: 0,
    stop_id: "U281Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U24Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U1037Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U1036Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U1035Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U1157Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U928Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U927Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U625Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U446Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U658Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U329Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U228Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U415Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U422Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U129Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U2964Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U376Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U550Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U183Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U37Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U680Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U29Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L150",
    direction_id: 1,
    stop_id: "U921Z7P",
    stop_sequence: 27
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U921Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U921Z10P",
    stop_sequence: 2
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U29Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U680Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U37Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U183Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U550Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U376Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U129Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U422Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U415Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U228Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U497Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U329Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U658Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U446Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U625Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U927Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U928Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U1157Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U1035Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U1036Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U1037Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L150",
    direction_id: 0,
    stop_id: "U24Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U3205Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U2704Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U351Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U332Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U683Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U990Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U502Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U1081Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U1151Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U603Z6P",
    stop_sequence: 10
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U603Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U300Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U260Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U259Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U591Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U790Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U474Z7P",
    stop_sequence: 17
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U464Z5P",
    stop_sequence: 18
  },
  {
    route_id: "L151",
    direction_id: 1,
    stop_id: "U510Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U510Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U464Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U474Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U790Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U591Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U259Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U260Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U300Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U603Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U603Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U1151Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U1081Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U502Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U990Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U683Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U332Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U351Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U2704Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U1170Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L151",
    direction_id: 0,
    stop_id: "U3205Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U510Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U474Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U603Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U665Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U332Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U467Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U740Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U78Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U675Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U267Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U543Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U544Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U581Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U806Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U330Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U74Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U949Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L152",
    direction_id: 1,
    stop_id: "U949Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U949Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U74Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U330Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U806Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U581Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U544Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U543Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U267Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U675Z8P",
    stop_sequence: 9
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U78Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U740Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U467Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U332Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U665Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U603Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U474Z7P",
    stop_sequence: 16
  },
  {
    route_id: "L152",
    direction_id: 0,
    stop_id: "U510Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U659Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1009Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U335Z2P_230527",
    stop_sequence: 3
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U2901Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U91Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U799Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U611Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U309Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U729Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U2794Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U165Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1038Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U731Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U730Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1345Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U379Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U604Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U386Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U286Z5P",
    stop_sequence: 20
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U151Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U491Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1012Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U967Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U967Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1013Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1001Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1069Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U154Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U2707Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U633Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U654Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U453Z12P",
    stop_sequence: 33
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U453Z6P",
    stop_sequence: 34
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U472Z4P",
    stop_sequence: 35
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U403Z8P",
    stop_sequence: 36
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U596Z3P",
    stop_sequence: 37
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U1285Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U887Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U784Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U671Z4P",
    stop_sequence: 41
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U920Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U198Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U459Z5P",
    stop_sequence: 44
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L154",
    direction_id: 1,
    stop_id: "U713Z6P",
    stop_sequence: 46
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U713Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U459Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U198Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U920Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U671Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U784Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U887Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1285Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U596Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U403Z7P",
    stop_sequence: 11
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U472Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U453Z7P",
    stop_sequence: 13
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U453Z10P",
    stop_sequence: 14
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U654Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U633Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U2707Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U154Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1069Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1001Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1013Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U967Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U967Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1012Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U491Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U151Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U286Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U386Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U604Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U379Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1345Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U730Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U731Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1038Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U165Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U2794Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U729Z3P",
    stop_sequence: 38
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U309Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U611Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U799Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U91Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U2901Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U335Z1P_230527",
    stop_sequence: 44
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U1009Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L154",
    direction_id: 0,
    stop_id: "U659Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U115Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U196Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3036Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3031Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3032Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3033Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U365Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3034Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U48Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U100Z6P",
    stop_sequence: 10
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U717Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U841Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U2770Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U841Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3035Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U100Z11P",
    stop_sequence: 16
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U100Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U48Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3034Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U365Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3033Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3032Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3031Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U3036Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L156",
    direction_id: 0,
    stop_id: "U115Z6P",
    stop_sequence: 25
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U11Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U1157Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 3
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U928Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U927Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U625Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U446Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U658Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U329Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U488Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L157",
    direction_id: 1,
    stop_id: "U228Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U228Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U329Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U658Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U446Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U625Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U927Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U928Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U1157Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L157",
    direction_id: 0,
    stop_id: "U11Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U769Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U293Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U1392Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U64Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U1083Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U248Z12P",
    stop_sequence: 6
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U934Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U791Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U63Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U451Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U368Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U766Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U21Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U2601Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U899Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U326Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U325Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U1Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U405Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L158",
    direction_id: 1,
    stop_id: "U1000Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U1000Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U405Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U1Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U325Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U326Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U899Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U21Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U766Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U368Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U451Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U63Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U791Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U934Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U248Z11P",
    stop_sequence: 14
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U1083Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U64Z6P",
    stop_sequence: 16
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U1392Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U293Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L158",
    direction_id: 0,
    stop_id: "U769Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U1105Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U1107Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U4172Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U179Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U9549Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U145Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U243Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U202Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U323Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U2769Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U2600Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U171Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U109Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U803Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L159",
    direction_id: 1,
    stop_id: "U1000Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U1000Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U1000Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U803Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U109Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U171Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U2600Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U2769Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U323Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U202Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U243Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U243Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U145Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U9549Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U4172Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U1107Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L159",
    direction_id: 0,
    stop_id: "U1105Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U869Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U1399Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U111Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U874Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U721Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U513Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U1398Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U53Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U233Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U1098Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U1097Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U352Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U918Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U556Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U923Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U3Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U506Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U177Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U126Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U162Z6P",
    stop_sequence: 20
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U906Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L160",
    direction_id: 1,
    stop_id: "U321Z5P",
    stop_sequence: 22
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U321Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U162Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U126Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U177Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U506Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U3Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U923Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U556Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U918Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U352Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U1098Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U233Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U53Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U1398Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U513Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U721Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U874Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U111Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U1399Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L160",
    direction_id: 0,
    stop_id: "U869Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U609Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U609Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U3243Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U800Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U1047Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U485Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U486Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U905Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U419Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U1219Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U440Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U199Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L161",
    direction_id: 1,
    stop_id: "U157Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U157Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U199Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U440Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U1219Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U419Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U905Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U486Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U1047Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U800Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U3243Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U609Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L161",
    direction_id: 0,
    stop_id: "U223Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U93Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U82Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U374Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U2753Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U92Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U555Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U864Z9P",
    stop_sequence: 7
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U1011Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U688Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U675Z9P",
    stop_sequence: 10
  },
  {
    route_id: "L162",
    direction_id: 1,
    stop_id: "U675Z7P",
    stop_sequence: 11
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U675Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U688Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U1011Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U864Z11P",
    stop_sequence: 4
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U555Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U92Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U94Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U374Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U410Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U82Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L162",
    direction_id: 0,
    stop_id: "U93Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U286Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U386Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U604Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U379Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U1345Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U106Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U730Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U731Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U1038Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U165Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U2794Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U729Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U309Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U611Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U799Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U91Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U2901Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U335Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U1009Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U659Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U509Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U945Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U946Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U947Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U948Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 26
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U939Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U1158Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U388Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U62Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U280Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U882Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U211Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U896Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U465Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U392Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U902Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U802Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L165",
    direction_id: 1,
    stop_id: "U672Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U672Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U802Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U814Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U902Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U392Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U465Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U896Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U882Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U280Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U224Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U388Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U1158Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U939Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U929Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U948Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U947Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U946Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U945Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U509Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U659Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U1009Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U335Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U2901Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U91Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U799Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U611Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U309Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U729Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U2794Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U165Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U1038Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U731Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U730Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U106Z6P",
    stop_sequence: 35
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U1345Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U379Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U604Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U386Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L165",
    direction_id: 0,
    stop_id: "U286Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U1094Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U1100Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U306Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U1123Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U489Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U572Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U653Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U150Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U289Z8P",
    stop_sequence: 9
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U240Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U254Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U1040Z14P",
    stop_sequence: 12
  },
  {
    route_id: "L167",
    direction_id: 1,
    stop_id: "U1040Z16P",
    stop_sequence: 13
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U1040Z18P",
    stop_sequence: 1
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U1040Z12P",
    stop_sequence: 2
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U254Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U240Z5P",
    stop_sequence: 4
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U289Z7P",
    stop_sequence: 5
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U150Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U653Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U572Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U489Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U306Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U1100Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L167",
    direction_id: 0,
    stop_id: "U1094Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U31Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U558Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U104Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U700Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U700Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U631Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U630Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1198Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U334Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U541Z7P",
    stop_sequence: 10
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U507Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U844Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1077Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U872Z6P",
    stop_sequence: 14
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U872Z7P",
    stop_sequence: 15
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1100Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1094Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1100Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U306Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U394Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U966Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U3299Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U3298Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U786Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U709Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1369Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U1154Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U3296Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L168",
    direction_id: 1,
    stop_id: "U602Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U602Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U602Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U3296Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1154Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1369Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U709Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U786Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U3298Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U3299Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U966Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U394Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U306Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1100Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1094Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1100Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U872Z8P",
    stop_sequence: 16
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1077Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U273Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U844Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U507Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U541Z6P",
    stop_sequence: 21
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U334Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U1198Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U630Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U631Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U700Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U700Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U104Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U558Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U31Z8P",
    stop_sequence: 30
  },
  {
    route_id: "L168",
    direction_id: 0,
    stop_id: "U31Z6P",
    stop_sequence: 31
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U949Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U3239Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U696Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U94Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U92Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U555Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U864Z9P",
    stop_sequence: 7
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U1011Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U688Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U675Z9P",
    stop_sequence: 10
  },
  {
    route_id: "L169",
    direction_id: 1,
    stop_id: "U675Z7P",
    stop_sequence: 11
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U675Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U688Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U1011Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U864Z11P",
    stop_sequence: 4
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U555Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U92Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U94Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U696Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U3239Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L169",
    direction_id: 0,
    stop_id: "U949Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U961Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U1126Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U1125Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U1030Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U1050Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U1049Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U49Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U753Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U614Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U619Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U245Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U856Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U571Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U436Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U936Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U127Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U632Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U950Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U50Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U50Z7P",
    stop_sequence: 20
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U265Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U1402Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U415Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U832Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U79Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U643Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U697Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U322Z3P",
    stop_sequence: 28
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U417Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U181Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U23Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U960Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U99Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U735Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U43Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U590Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U386Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U286Z5P",
    stop_sequence: 38
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U151Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L170",
    direction_id: 1,
    stop_id: "U210Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U210Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U151Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U286Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U386Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U43Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U735Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U99Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U960Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U23Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U181Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1221Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U141Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U697Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U643Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U79Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U832Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U431Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1402Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U265Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U50Z15P",
    stop_sequence: 20
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U50Z6P",
    stop_sequence: 21
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U950Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U632Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U127Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U936Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U436Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U571Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U856Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U245Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U619Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U614Z4P",
    stop_sequence: 31
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U753Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U49Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1049Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1050Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1030Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1125Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U1126Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L170",
    direction_id: 0,
    stop_id: "U961Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U3203Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U3202Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U3201Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U1021Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U2574Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U479Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U702Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U1183Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U355Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L172",
    direction_id: 1,
    stop_id: "U458Z13P",
    stop_sequence: 11
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U458Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U355Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U2786Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U1183Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U1021Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U2574Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U479Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U702Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U3201Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U3202Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L172",
    direction_id: 0,
    stop_id: "U3203Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U1071Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U358Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U404Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U389Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U741Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U3240Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U741Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U389Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U404Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U358Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L173",
    direction_id: 0,
    stop_id: "U1071Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U768Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U505Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U840Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U634Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U122Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U679Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U1211Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U1029Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U1007Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U711Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U475Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U492Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U709Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U1130Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U966Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U394Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U306Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U444Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L174",
    direction_id: 1,
    stop_id: "U872Z8P",
    stop_sequence: 19
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U872Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U444Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U306Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U394Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U966Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U1130Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U709Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U492Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U475Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U711Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U1007Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U1029Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U1211Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U679Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U122Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U634Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U840Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U505Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L174",
    direction_id: 0,
    stop_id: "U768Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U286Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U151Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U338Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U967Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U1013Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U1001Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U2982Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U973Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U154Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U2707Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U633Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U3014Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U472Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U403Z8P",
    stop_sequence: 14
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U2752Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U1224Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U1226Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U673Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U953Z7P",
    stop_sequence: 21
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U829Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U738Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U713Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U605Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U570Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U398Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U2751Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U855Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U518Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U118Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U516Z4P",
    stop_sequence: 32
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U743Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U745Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U789Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U3018Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L175",
    direction_id: 1,
    stop_id: "U689Z5P",
    stop_sequence: 37
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U689Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U3018Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U789Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U745Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U743Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U516Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U118Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U518Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U855Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U2751Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U398Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U570Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U605Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U713Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U738Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U829Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U953Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U673Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U889Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U1226Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U1224Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U2752Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U403Z7P",
    stop_sequence: 24
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U472Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U3014Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U633Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U2707Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U154Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U973Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U2982Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U1001Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U1013Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U967Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U338Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U151Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L175",
    direction_id: 0,
    stop_id: "U286Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U699Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U693Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U168Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U2607Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U148Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U930Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U481Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U4Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U208Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L176",
    direction_id: 1,
    stop_id: "U237Z9P",
    stop_sequence: 10
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U237Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U237Z6P",
    stop_sequence: 2
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U208Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U4Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U481Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U930Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U148Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U2607Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U168Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U693Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L176",
    direction_id: 0,
    stop_id: "U699Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U52Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U1116Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U972Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U982Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U774Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U344Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U99Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U195Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U409Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U166Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U641Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U160Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U596Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U670Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U673Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U953Z7P",
    stop_sequence: 19
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U1222Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U827Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U660Z5P",
    stop_sequence: 22
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U359Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U2703Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U574Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U694Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U13Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U225Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U134Z5P",
    stop_sequence: 29
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U474Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U603Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U665Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U332Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U467Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U740Z3P",
    stop_sequence: 35
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U78Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U675Z3P",
    stop_sequence: 37
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U267Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U543Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U544Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U581Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U345Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U511Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U912Z4P",
    stop_sequence: 44
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U371Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L177",
    direction_id: 1,
    stop_id: "U649Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U649Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U371Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U912Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U511Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U345Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U581Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U544Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U543Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U267Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U675Z8P",
    stop_sequence: 10
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U78Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U740Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U467Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U332Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U665Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U603Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U474Z6P",
    stop_sequence: 17
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U134Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U225Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U13Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U694Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U574Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U2703Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U359Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U660Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U827Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U1222Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U953Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U673Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U889Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U670Z3P",
    stop_sequence: 32
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U596Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U160Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U641Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U166Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U409Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U195Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U99Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U344Z4P",
    stop_sequence: 40
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U774Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U982Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U972Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U1116Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L177",
    direction_id: 0,
    stop_id: "U52Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U321Z13P",
    stop_sequence: 1
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U940Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U592Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U182Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U229Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U44Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U872Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U872Z7P",
    stop_sequence: 9
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U444Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U306Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U394Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U395Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U113Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U236Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U47Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U612Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U706Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U913Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U178Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U1141Z14P",
    stop_sequence: 21
  },
  {
    route_id: "L180",
    direction_id: 1,
    stop_id: "U4191Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U4191Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U1141Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U178Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U913Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U706Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U612Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U47Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U236Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U113Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U395Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U394Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U306Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U444Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U872Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U44Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U229Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U182Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U592Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U321Z22P",
    stop_sequence: 20
  },
  {
    route_id: "L180",
    direction_id: 0,
    stop_id: "U321Z12P",
    stop_sequence: 21
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U344Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U99Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U219Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U823Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U641Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U160Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U403Z7P",
    stop_sequence: 8
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U472Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U453Z7P",
    stop_sequence: 10
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U677Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U227Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U975Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U552Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U708Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U747Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U538Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U884Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U535Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U207Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U313Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U1197Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U137Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U818Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U650Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U1056Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L181",
    direction_id: 1,
    stop_id: "U897Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U897Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U1056Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U650Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U818Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U137Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U1197Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U313Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U207Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U535Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U884Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U1022Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U538Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U747Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U552Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U975Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U227Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U677Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U453Z6P",
    stop_sequence: 18
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U472Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U403Z8P",
    stop_sequence: 20
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U160Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U641Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U823Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U219Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U99Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U344Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L181",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U344Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U99Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U219Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U823Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U641Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U160Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U403Z7P",
    stop_sequence: 8
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U472Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U453Z7P",
    stop_sequence: 10
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U677Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U227Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U975Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U552Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U708Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U747Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U538Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U884Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U276Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U574Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U694Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U13Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U225Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U134Z5P",
    stop_sequence: 24
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U474Z5P",
    stop_sequence: 25
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U442Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U603Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U500Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U606Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U1000Z10P",
    stop_sequence: 30
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U1000Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U803Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U109Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U171Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U526Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U2777Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U243Z4P",
    stop_sequence: 37
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U243Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U145Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U9549Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U179Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U346Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L182",
    direction_id: 1,
    stop_id: "U852Z3P",
    stop_sequence: 43
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U852Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U346Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U179Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U9549Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U145Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U243Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U202Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U243Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U4000Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U526Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U171Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U109Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U803Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U1000Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U606Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U500Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U603Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U442Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U474Z6P",
    stop_sequence: 19
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U134Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U225Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U13Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U694Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U574Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U276Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U538Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U747Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U552Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U975Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U227Z3P",
    stop_sequence: 30
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U677Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U453Z6P",
    stop_sequence: 32
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U472Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U403Z8P",
    stop_sequence: 34
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U160Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U641Z4P",
    stop_sequence: 36
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U823Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U219Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U99Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U344Z4P",
    stop_sequence: 40
  },
  {
    route_id: "L182",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U286Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U151Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U338Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U967Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U1013Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U1001Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U1069Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U154Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U2707Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U633Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U654Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U453Z12P",
    stop_sequence: 12
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U677Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U227Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U975Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U552Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U708Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U747Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U538Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U884Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U276Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U574Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U694Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U13Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U225Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U134Z5P",
    stop_sequence: 26
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U474Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U442Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U603Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U665Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U332Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U467Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U651Z5P",
    stop_sequence: 33
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U55Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U39Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U864Z6P",
    stop_sequence: 36
  },
  {
    route_id: "L183",
    direction_id: 1,
    stop_id: "U864Z9P",
    stop_sequence: 37
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U864Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U39Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U55Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U651Z6P",
    stop_sequence: 4
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U467Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U467Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U332Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U665Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U603Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U442Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U474Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U134Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U225Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U13Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U694Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U574Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U276Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U538Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U747Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U552Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U975Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U227Z3P",
    stop_sequence: 22
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U677Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U453Z10P",
    stop_sequence: 24
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U654Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U633Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U2707Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U154Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U1069Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U1001Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U1013Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U967Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U338Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U151Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L183",
    direction_id: 0,
    stop_id: "U286Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U872Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U444Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U306Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U394Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U966Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U968Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U602Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U304Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U356Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U875Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U1124Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U587Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L184",
    direction_id: 1,
    stop_id: "U1114Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U1114Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U1124Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U875Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U356Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U304Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U602Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U602Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U968Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U966Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U394Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U306Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U444Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L184",
    direction_id: 0,
    stop_id: "U872Z8P",
    stop_sequence: 13
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U1104Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U1111Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U1103Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U202Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U243Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U4000Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U526Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U171Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U109Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U803Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L185",
    direction_id: 1,
    stop_id: "U1000Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U1000Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U1000Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U803Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U109Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U171Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U526Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U243Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U202Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U1103Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U1111Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L185",
    direction_id: 0,
    stop_id: "U1104Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L187",
    direction_id: 0,
    stop_id: "U115Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L187",
    direction_id: 0,
    stop_id: "U196Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L187",
    direction_id: 0,
    stop_id: "U536Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L187",
    direction_id: 0,
    stop_id: "U7406Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L187",
    direction_id: 0,
    stop_id: "U115Z51P",
    stop_sequence: 5
  },
  {
    route_id: "L187",
    direction_id: 0,
    stop_id: "U115Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U589Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U1055Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U663Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U385Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U640Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U201Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U263Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U559Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U376Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U550Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U183Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U1092Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U886Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U576Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U825Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U671Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U920Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U198Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U459Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U713Z5P",
    stop_sequence: 21
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U90Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U827Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U660Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U548Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U161Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U418Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L188",
    direction_id: 1,
    stop_id: "U921Z9P",
    stop_sequence: 28
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U921Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U575Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U418Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U161Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U548Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U660Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U827Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U90Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U713Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U459Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U198Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U920Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U671Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U825Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U576Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U886Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U1092Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U183Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U550Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U376Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U559Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U263Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U201Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U640Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U385Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U663Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L188",
    direction_id: 0,
    stop_id: "U589Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U658Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U328Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U60Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U494Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U749Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U656Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U893Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U488Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L189",
    direction_id: 1,
    stop_id: "U228Z5P",
    stop_sequence: 9
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U228Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U488Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U893Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U656Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U749Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U494Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U60Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U328Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L189",
    direction_id: 0,
    stop_id: "U658Z5P",
    stop_sequence: 9
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U24Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U1037Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U1036Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U1035Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U1157Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U928Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U927Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U1023Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U987Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U71Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U449Z8P",
    stop_sequence: 12
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U387Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L190",
    direction_id: 1,
    stop_id: "U458Z8P",
    stop_sequence: 15
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U458Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U387Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U449Z9P",
    stop_sequence: 4
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U71Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U987Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U1023Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U927Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U928Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U1157Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U1035Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U1036Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U1037Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L190",
    direction_id: 0,
    stop_id: "U24Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U628Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U629Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1090Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U776Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U416Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U698Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U218Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1295Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U554Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U61Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U661Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1046Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U2793Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1198Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U334Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U541Z7P",
    stop_sequence: 16
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U507Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U844Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1077Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U872Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U737Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U781Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U626Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U748Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1407Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U699Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U176Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U579Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U443Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U254Z5P",
    stop_sequence: 30
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1040Z14P",
    stop_sequence: 31
  },
  {
    route_id: "L191",
    direction_id: 1,
    stop_id: "U1040Z16P",
    stop_sequence: 32
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1040Z18P",
    stop_sequence: 1
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1040Z12P",
    stop_sequence: 2
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U254Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U443Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U565Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U579Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U176Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U699Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1407Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U748Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U626Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U781Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U737Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U872Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U872Z8P",
    stop_sequence: 15
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1077Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U273Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U844Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U507Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U541Z6P",
    stop_sequence: 20
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U334Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1198Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U2793Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1046Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U661Z5P",
    stop_sequence: 25
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U2795Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U554Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1295Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U218Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U698Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U416Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U776Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U628Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U629Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L191",
    direction_id: 0,
    stop_id: "U1090Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U729Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U309Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U611Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U799Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U909Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U378Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U1096Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U908Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U819Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U257Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U343Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U50Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U296Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U429Z5P",
    stop_sequence: 16
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U297Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U663Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U663Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U385Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U2784Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U597Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U530Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U503Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U482Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L193",
    direction_id: 1,
    stop_id: "U463Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U463Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U482Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U503Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U530Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U597Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U2784Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U385Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U663Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U297Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U429Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U296Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U50Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U343Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U488Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U257Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U819Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U908Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U909Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U799Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U611Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U309Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L193",
    direction_id: 0,
    stop_id: "U729Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U671Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U192Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U143Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U890Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U889Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U2781Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U673Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U953Z7P",
    stop_sequence: 8
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U1222Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U827Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U660Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U359Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U2703Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U574Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U694Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U13Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U225Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U134Z5P",
    stop_sequence: 18
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U474Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U442Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U603Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U500Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U606Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U1000Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U405Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U1Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U325Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U326Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U899Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L195",
    direction_id: 1,
    stop_id: "U21Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U21Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U2601Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U899Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U326Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U325Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U1Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U405Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U1000Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U606Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U500Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U603Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U442Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U474Z6P",
    stop_sequence: 13
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U134Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U225Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U13Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U694Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U574Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U2703Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U359Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U660Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U827Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U1222Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U953Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U673Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U2781Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U889Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U890Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U143Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U192Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L195",
    direction_id: 0,
    stop_id: "U671Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U458Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U614Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U619Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U245Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U839Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U879Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U662Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U228Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U415Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U422Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U129Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U2964Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U376Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U559Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L196",
    direction_id: 1,
    stop_id: "U263Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U263Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U559Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U376Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U129Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U422Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U415Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U228Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U497Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U662Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U879Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U971Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U839Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U245Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U619Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U614Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U337Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L196",
    direction_id: 0,
    stop_id: "U458Z8P",
    stop_sequence: 21
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U458Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U614Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U619Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U245Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U839Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U879Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U662Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U497Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U329Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U658Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U328Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U60Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U494Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U613Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U533Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U1009Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U783Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U369Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U894Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U307Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U989Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U969Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U52Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U1131Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U23Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U960Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U99Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U735Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U43Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U590Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U386Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L197",
    direction_id: 1,
    stop_id: "U286Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U286Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U386Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U43Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U735Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U99Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U960Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U23Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U1131Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U52Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U969Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U989Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U307Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U894Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U369Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U783Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U335Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U804Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U194Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U613Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U1336Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U494Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U60Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U328Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U658Z6P",
    stop_sequence: 24
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U329Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U497Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U662Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U879Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U971Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U839Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U245Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U619Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U614Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U337Z4P",
    stop_sequence: 34
  },
  {
    route_id: "L197",
    direction_id: 0,
    stop_id: "U458Z8P",
    stop_sequence: 35
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U660Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U660Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U548Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U161Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U418Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U921Z9P",
    stop_sequence: 6
  },
  {
    route_id: "L199",
    direction_id: 1,
    stop_id: "U921Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U921Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U575Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U418Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U161Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U548Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U660Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L199",
    direction_id: 0,
    stop_id: "U660Z6P",
    stop_sequence: 7
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U648Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U912Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U511Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U345Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U581Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U544Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U543Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L200",
    direction_id: 1,
    stop_id: "U675Z7P",
    stop_sequence: 8
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U675Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U543Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U544Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U581Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U345Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U511Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U912Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L200",
    direction_id: 0,
    stop_id: "U648Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U897Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U1056Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U650Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U818Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U173Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U212Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U342Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U1414Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U51Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U457Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U762Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U639Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U762Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U1276Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U1120Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U243Z6P",
    stop_sequence: 16
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U243Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U202Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U323Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U2769Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U327Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U326Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U899Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U21Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U125Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U771Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U89Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U405Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U1000Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U606Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U1170Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U2704Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U351Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U332Z4P",
    stop_sequence: 34
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U683Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U990Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U993Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U54Z4P",
    stop_sequence: 38
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U870Z4P",
    stop_sequence: 39
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U622Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U305Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U196Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L201",
    direction_id: 1,
    stop_id: "U115Z6P",
    stop_sequence: 43
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U115Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U196Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U305Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U622Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U870Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U54Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U993Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U990Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U683Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U332Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U351Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U2704Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1170Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U606Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1000Z10P",
    stop_sequence: 15
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1000Z12P",
    stop_sequence: 16
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U405Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U89Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U771Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U125Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U21Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U2601Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U899Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U326Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U327Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U2769Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U323Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U202Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U243Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U243Z5P",
    stop_sequence: 30
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1120Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1276Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U762Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U639Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U762Z4P",
    stop_sequence: 35
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U51Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1414Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U342Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U173Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U818Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U650Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U1056Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L201",
    direction_id: 0,
    stop_id: "U897Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U4000Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U2777Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U202Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U1103Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U1111Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U1104Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U384Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U399Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U64Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U791Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U63Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U451Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U368Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U766Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U287Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U270Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U430Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U795Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U1008Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U94Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U696Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U3239Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U949Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U74Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U330Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U806Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U345Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U511Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U912Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U371Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L202",
    direction_id: 1,
    stop_id: "U649Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U649Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U371Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U912Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U511Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U345Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U806Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U330Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U74Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U949Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U3239Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U696Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U94Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U1008Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U795Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U430Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U270Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U287Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U766Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U368Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U451Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U63Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U791Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U64Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U399Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U384Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U1104Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U1111Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U1103Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U202Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U243Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L202",
    direction_id: 0,
    stop_id: "U4000Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U512Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U512Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U69Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U2787Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U745Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U789Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U3018Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U689Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U620Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U593Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L207",
    direction_id: 1,
    stop_id: "U703Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U703Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U593Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U620Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U689Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U3018Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U789Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U745Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U2787Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U69Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U512Z8P",
    stop_sequence: 13
  },
  {
    route_id: "L207",
    direction_id: 0,
    stop_id: "U512Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U461Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U336Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U3053Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U220Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U919Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U169Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U382Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U6Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U286Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U353Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U916Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 13
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U344Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U424Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U181Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U1221Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U141Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U697Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U751Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U183Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U37Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U680Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U29Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L213",
    direction_id: 1,
    stop_id: "U921Z7P",
    stop_sequence: 25
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U921Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U921Z10P",
    stop_sequence: 2
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U29Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U680Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U37Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U183Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U751Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U697Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U322Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U417Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U424Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U344Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U916Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U353Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U6Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U382Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U169Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U919Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U220Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U3053Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U336Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U542Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L213",
    direction_id: 0,
    stop_id: "U461Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U659Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U1009Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U335Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U804Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U194Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U613Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U1336Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U749Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U656Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U893Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U488Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L215",
    direction_id: 1,
    stop_id: "U228Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U228Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U488Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U893Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U656Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U749Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U494Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U613Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U533Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L215",
    direction_id: 0,
    stop_id: "U659Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3215Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3214Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U787Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U736Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U112Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U133Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3017Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U157Z9P",
    stop_sequence: 8
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U2790Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U701Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U577Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U477Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U867Z6P",
    stop_sequence: 13
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U645Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3041Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3042Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3043Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3044Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U858Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L216",
    direction_id: 1,
    stop_id: "U3045Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3045Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U858Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3044Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3043Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3042Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3041Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U645Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U867Z5P",
    stop_sequence: 8
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U477Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U577Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U701Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U2790Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U157Z8P",
    stop_sequence: 13
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U157Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3017Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U133Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U112Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U736Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U787Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3214Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L216",
    direction_id: 0,
    stop_id: "U3215Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U5Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U420Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U462Z11P",
    stop_sequence: 3
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U283Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U868Z52P",
    stop_sequence: 5
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U85Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U493Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U80Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U554Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U61Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1166Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U700Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U104Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U383Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1203Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1063Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U843Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U236Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U33Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U281Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U979Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1140Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U710Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1007Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1029Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U875Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1124Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U587Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L225",
    direction_id: 1,
    stop_id: "U1114Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1114Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1124Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U875Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1029Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1007Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U710Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1140Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U979Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U281Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U33Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U236Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U843Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1063Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1203Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U383Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U104Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U700Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U1166Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U61Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U554Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U80Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U493Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U85Z8P",
    stop_sequence: 23
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U868Z51P",
    stop_sequence: 24
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U283Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U462Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U420Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L225",
    direction_id: 0,
    stop_id: "U5Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U294Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U131Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U1405Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U490Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U1233Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U808Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U336Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U542Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U435Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U123Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U367Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U1099Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U96Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U310Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U741Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U389Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U404Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U358Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L229",
    direction_id: 1,
    stop_id: "U1071Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U1071Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U358Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U404Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U389Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U741Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U310Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U96Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U1099Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U367Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U123Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U435Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U542Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U336Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U336Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U808Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U1233Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U490Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U1405Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U131Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L229",
    direction_id: 0,
    stop_id: "U294Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U117Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U437Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U1049Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U1050Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U1030Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U1128Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U264Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U1125Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U501Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U1127Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U720Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U3209Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U216Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U470Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U944Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U566Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L230",
    direction_id: 1,
    stop_id: "U149Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U149Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U566Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U944Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U470Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U216Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U517Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U501Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U1125Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U264Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U1128Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U1030Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U1050Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U1049Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U437Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L230",
    direction_id: 0,
    stop_id: "U117Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U1040Z21P",
    stop_sequence: 1
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U302Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U817Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U562Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U282Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U84Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U252Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U561Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U121Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U965Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U302Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L231",
    direction_id: 0,
    stop_id: "U1040Z16P",
    stop_sequence: 12
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U582Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U3210Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U557Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U764Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U290Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U66Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U241Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U765Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U7406Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L234",
    direction_id: 1,
    stop_id: "U115Z6P",
    stop_sequence: 10
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U115Z8P",
    stop_sequence: 1
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U115Z11P",
    stop_sequence: 2
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U7406Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U588Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U765Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U241Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U66Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U290Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U764Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U557Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U3210Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L234",
    direction_id: 0,
    stop_id: "U582Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U582Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U3210Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U557Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U371Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U912Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U511Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U345Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U806Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U2771Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U2776Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U2775Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U2772Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U2773Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L235",
    direction_id: 1,
    stop_id: "U2774Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U2774Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U2775Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U2772Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U2771Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U806Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U345Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U511Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U912Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U371Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U557Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U3210Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L235",
    direction_id: 0,
    stop_id: "U582Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U582Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U3210Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U557Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U371Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U912Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U648Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U38Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U1133Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U1134Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L236",
    direction_id: 1,
    stop_id: "U607Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U607Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U1134Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U1133Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U38Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U648Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U912Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U371Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U557Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U3210Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L236",
    direction_id: 0,
    stop_id: "U582Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U1225Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U341Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U777Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U564Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U537Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U288Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U672Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U802Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U814Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U902Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U315Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U317Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U102Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U355Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L241",
    direction_id: 1,
    stop_id: "U458Z13P",
    stop_sequence: 16
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U458Z11P",
    stop_sequence: 1
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U355Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U102Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U317Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U315Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U902Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U802Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U672Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U288Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U537Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U564Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U777Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U341Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L241",
    direction_id: 0,
    stop_id: "U1225Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U666Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U524Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U456Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U746Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U1042Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U600Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U891Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U705Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U976Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U1183Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U355Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L244",
    direction_id: 1,
    stop_id: "U458Z13P",
    stop_sequence: 13
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U458Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U355Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U2786Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U1183Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U976Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U705Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U891Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U600Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U1042Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U746Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U456Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U456Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U524Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U434Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L244",
    direction_id: 0,
    stop_id: "U666Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U456Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U608Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1274Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1017Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1002Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1182Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1184Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1181Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U998Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U1026Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U608Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L245",
    direction_id: 0,
    stop_id: "U456Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U939Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U1158Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U388Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U62Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U280Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U882Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U211Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U896Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U465Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U392Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U902Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U315Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U316Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U1043Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U600Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U1042Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U746Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U456Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U456Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U608Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U637Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U830Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U57Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U785Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U941Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U59Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U380Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U888Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U915Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U892Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U634Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U4258Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U2764Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U1140Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U979Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U281Z7P",
    stop_sequence: 37
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U1265Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L246",
    direction_id: 1,
    stop_id: "U1141Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U1141Z14P",
    stop_sequence: 1
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U1265Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U281Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U979Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U1140Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U2764Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U4258Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U634Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U892Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U915Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U888Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U380Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U59Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U941Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U785Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U57Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U830Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U637Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U608Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U456Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U746Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U1042Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U600Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U1043Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U315Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U902Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U392Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U465Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U896Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U882Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U280Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U224Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U388Z4P",
    stop_sequence: 33
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U1158Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U939Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L246",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 36
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U1039Z2P_230527",
    stop_sequence: 1
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U917Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U802Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U814Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U902Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U315Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U316Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U1043Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U600Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U1042Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U746Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L247",
    direction_id: 1,
    stop_id: "U456Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U456Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U746Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U1042Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U600Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U1043Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U315Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U902Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U802Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U917Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L247",
    direction_id: 0,
    stop_id: "U1039Z1P_230527",
    stop_sequence: 10
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U3221Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U3222Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U3223Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U3224Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U3225Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U666Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U524Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L248",
    direction_id: 1,
    stop_id: "U456Z5P",
    stop_sequence: 8
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U456Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U524Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U434Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U3220Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U3221Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U3222Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U3223Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U3224Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U3225Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U666Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U524Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L248",
    direction_id: 0,
    stop_id: "U456Z5P",
    stop_sequence: 12
  },
  {
    route_id: "L249",
    direction_id: 1,
    stop_id: "U1141Z14P",
    stop_sequence: 1
  },
  {
    route_id: "L249",
    direction_id: 1,
    stop_id: "U3241Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L249",
    direction_id: 1,
    stop_id: "U1141Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U1016Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U621Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U903Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U719Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U811Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U3008Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U36Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U432Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U28Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U448Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U1235Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 12
  },
  {
    route_id: "L250",
    direction_id: 1,
    stop_id: "U897Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U897Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U1235Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U448Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U28Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U432Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U36Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U3008Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U811Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U719Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U903Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U621Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L250",
    direction_id: 0,
    stop_id: "U1016Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U949Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U74Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U330Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U1015Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U615Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U898Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U864Z7P",
    stop_sequence: 7
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U39Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L251",
    direction_id: 0,
    stop_id: "U55Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U741Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U3240Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U310Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U96Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U1099Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U1069Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U154Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U973Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U732Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U3052Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U770Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U842Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U963Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L252",
    direction_id: 0,
    stop_id: "U1012Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U733Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U156Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U372Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U782Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U58Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U426Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U644Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U2604Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U240Z6P",
    stop_sequence: 9
  },
  {
    route_id: "L253",
    direction_id: 0,
    stop_id: "U2605Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U414Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U230Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U56Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U285Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U199Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U157Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U425Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L255",
    direction_id: 0,
    stop_id: "U906Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L256",
    direction_id: 0,
    stop_id: "U1341Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L256",
    direction_id: 0,
    stop_id: "U23Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L256",
    direction_id: 0,
    stop_id: "U960Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L256",
    direction_id: 0,
    stop_id: "U99Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L256",
    direction_id: 0,
    stop_id: "U381Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U1228Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U135Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U652Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U657Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U970Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U137Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U313Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U207Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U535Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U884Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U695Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U318Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U193Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L259",
    direction_id: 1,
    stop_id: "U158Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U158Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U349Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U647Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U318Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U695Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U884Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U535Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U207Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U313Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U137Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U970Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U657Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U652Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U135Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L259",
    direction_id: 0,
    stop_id: "U1228Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U31Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U364Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U610Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U872Z8P",
    stop_sequence: 4
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U541Z7P",
    stop_sequence: 5
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U844Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L260",
    direction_id: 0,
    stop_id: "U954Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U672Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U802Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U814Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U902Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U315Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U316Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U746Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U456Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U1223Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U456Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U746Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U891Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U976Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U1021Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U2574Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L261",
    direction_id: 0,
    stop_id: "U479Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U30Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U862Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U155Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U1149Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U1150Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U155Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U408Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U1041Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U28Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U432Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U36Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U3008Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U811Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U719Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U903Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U621Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L262",
    direction_id: 1,
    stop_id: "U1016Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U1016Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U621Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U903Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U719Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U811Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U3008Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U36Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U432Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U28Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U1041Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U408Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U155Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U1150Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U1149Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U155Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U862Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L262",
    direction_id: 0,
    stop_id: "U30Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L263",
    direction_id: 0,
    stop_id: "U40Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L263",
    direction_id: 0,
    stop_id: "U157Z6P",
    stop_sequence: 2
  },
  {
    route_id: "L263",
    direction_id: 0,
    stop_id: "U199Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L263",
    direction_id: 0,
    stop_id: "U1219Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U699Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U176Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U579Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U443Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U254Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U240Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U289Z7P",
    stop_sequence: 7
  },
  {
    route_id: "L265",
    direction_id: 0,
    stop_id: "U150Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U634Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U122Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U679Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U1211Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U1029Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U1007Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U711Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U475Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U492Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U1154Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U3296Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L266",
    direction_id: 1,
    stop_id: "U602Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U602Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U304Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U356Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U875Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U1211Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U679Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U122Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U634Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U892Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U915Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L266",
    direction_id: 0,
    stop_id: "U888Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L267",
    direction_id: 0,
    stop_id: "U128Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L267",
    direction_id: 0,
    stop_id: "U834Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L267",
    direction_id: 0,
    stop_id: "U1064Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L267",
    direction_id: 0,
    stop_id: "U16Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L267",
    direction_id: 0,
    stop_id: "U516Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L269",
    direction_id: 0,
    stop_id: "U456Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L269",
    direction_id: 0,
    stop_id: "U1223Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U817Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U184Z52P",
    stop_sequence: 2
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U957Z51P",
    stop_sequence: 3
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U84Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U252Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U561Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U121Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U965Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U184Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L271",
    direction_id: 0,
    stop_id: "U957Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U6Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U382Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U169Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U919Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U220Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U3053Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U336Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U808Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U808Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U336Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U542Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L272",
    direction_id: 0,
    stop_id: "U461Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L274",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L274",
    direction_id: 0,
    stop_id: "U929Z6P",
    stop_sequence: 2
  },
  {
    route_id: "L274",
    direction_id: 0,
    stop_id: "U948Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L274",
    direction_id: 0,
    stop_id: "U947Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L274",
    direction_id: 0,
    stop_id: "U946Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L274",
    direction_id: 0,
    stop_id: "U945Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L275",
    direction_id: 1,
    stop_id: "U1102Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L275",
    direction_id: 1,
    stop_id: "U114Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L275",
    direction_id: 1,
    stop_id: "U64Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L275",
    direction_id: 1,
    stop_id: "U934Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L275",
    direction_id: 0,
    stop_id: "U934Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L275",
    direction_id: 0,
    stop_id: "U114Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L275",
    direction_id: 0,
    stop_id: "U1102Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L277",
    direction_id: 0,
    stop_id: "U2754Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L277",
    direction_id: 0,
    stop_id: "U4428Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L277",
    direction_id: 0,
    stop_id: "U6954Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L277",
    direction_id: 0,
    stop_id: "U186Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L277",
    direction_id: 0,
    stop_id: "U24Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L277",
    direction_id: 0,
    stop_id: "U1037Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U52Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U1116Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U972Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U307Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U611Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U908Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U488Z8P",
    stop_sequence: 7
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U50Z13P",
    stop_sequence: 8
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U385Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U597Z7P",
    stop_sequence: 10
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U1117Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U190Z6P",
    stop_sequence: 12
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U142Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U689Z7P",
    stop_sequence: 14
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U480Z5P",
    stop_sequence: 15
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U142Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U190Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U1117Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U597Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U385Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U50Z17P",
    stop_sequence: 21
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U488Z8P",
    stop_sequence: 22
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U1116Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U972Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L289",
    direction_id: 0,
    stop_id: "U52Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L290",
    direction_id: 1,
    stop_id: "U628Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L290",
    direction_id: 1,
    stop_id: "U142Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L290",
    direction_id: 0,
    stop_id: "U142Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L290",
    direction_id: 0,
    stop_id: "U628Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L290",
    direction_id: 0,
    stop_id: "U629Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L290",
    direction_id: 0,
    stop_id: "U1090Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U210Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U286Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U386Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U604Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U379Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U1345Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U344Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U424Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U181Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L295",
    direction_id: 1,
    stop_id: "U458Z8P",
    stop_sequence: 12
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U458Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U424Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U344Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U1345Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U379Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U604Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U386Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L295",
    direction_id: 0,
    stop_id: "U210Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1200Z2",
    stop_sequence: 1
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1199Z2",
    stop_sequence: 2
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1204Z2",
    stop_sequence: 3
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1205Z2",
    stop_sequence: 4
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1086Z1",
    stop_sequence: 5
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U3051Z2",
    stop_sequence: 6
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1089Z2",
    stop_sequence: 7
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1085Z2",
    stop_sequence: 8
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U634Z2",
    stop_sequence: 9
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U122Z2",
    stop_sequence: 10
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U679Z2",
    stop_sequence: 11
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1211Z2",
    stop_sequence: 12
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1029Z1",
    stop_sequence: 13
  },
  {
    route_id: "L301",
    direction_id: 1,
    stop_id: "U1007Z71",
    stop_sequence: 14
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1007Z72",
    stop_sequence: 1
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1029Z2",
    stop_sequence: 2
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1211Z1",
    stop_sequence: 3
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U679Z1",
    stop_sequence: 4
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U122Z1",
    stop_sequence: 5
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U634Z1",
    stop_sequence: 6
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1085Z1",
    stop_sequence: 7
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1089Z1",
    stop_sequence: 8
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U3051Z1",
    stop_sequence: 9
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1086Z2",
    stop_sequence: 10
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1205Z1",
    stop_sequence: 11
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1204Z1",
    stop_sequence: 12
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1199Z1",
    stop_sequence: 13
  },
  {
    route_id: "L301",
    direction_id: 0,
    stop_id: "U1200Z1",
    stop_sequence: 14
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1320Z2",
    stop_sequence: 1
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U2140Z1",
    stop_sequence: 2
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1364Z1",
    stop_sequence: 3
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1319Z2",
    stop_sequence: 4
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U4181Z2",
    stop_sequence: 5
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1318Z3",
    stop_sequence: 6
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1317Z2",
    stop_sequence: 7
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1310Z2",
    stop_sequence: 8
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U3246Z2",
    stop_sequence: 9
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U4259Z2",
    stop_sequence: 10
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U223Z2",
    stop_sequence: 11
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U609Z4",
    stop_sequence: 12
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U3243Z2",
    stop_sequence: 13
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U800Z2",
    stop_sequence: 14
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1047Z2",
    stop_sequence: 15
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U485Z2",
    stop_sequence: 16
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U486Z2",
    stop_sequence: 17
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U905Z2",
    stop_sequence: 18
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U419Z2",
    stop_sequence: 19
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U1219Z2",
    stop_sequence: 20
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U440Z2",
    stop_sequence: 21
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U199Z3",
    stop_sequence: 22
  },
  {
    route_id: "L312",
    direction_id: 1,
    stop_id: "U157Z4",
    stop_sequence: 23
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U157Z6",
    stop_sequence: 1
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U199Z1",
    stop_sequence: 2
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U440Z1",
    stop_sequence: 3
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1219Z1",
    stop_sequence: 4
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U419Z1",
    stop_sequence: 5
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U905Z1",
    stop_sequence: 6
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U486Z1",
    stop_sequence: 7
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1047Z1",
    stop_sequence: 8
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U800Z1",
    stop_sequence: 9
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U3243Z1",
    stop_sequence: 10
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U609Z3",
    stop_sequence: 11
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U223Z1",
    stop_sequence: 12
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U4259Z1",
    stop_sequence: 13
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U3246Z1",
    stop_sequence: 14
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1310Z1",
    stop_sequence: 15
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1317Z1",
    stop_sequence: 16
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1318Z2",
    stop_sequence: 17
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U4181Z1",
    stop_sequence: 18
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1319Z1",
    stop_sequence: 19
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1364Z1",
    stop_sequence: 20
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U2140Z1",
    stop_sequence: 21
  },
  {
    route_id: "L312",
    direction_id: 0,
    stop_id: "U1320Z1",
    stop_sequence: 22
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1258Z1",
    stop_sequence: 1
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1257Z1",
    stop_sequence: 2
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1256Z1",
    stop_sequence: 3
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1255Z2",
    stop_sequence: 4
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1254Z2",
    stop_sequence: 5
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1253Z4",
    stop_sequence: 6
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1912Z1",
    stop_sequence: 7
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1913Z1",
    stop_sequence: 8
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U2311Z2",
    stop_sequence: 9
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1913Z2",
    stop_sequence: 10
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1912Z2",
    stop_sequence: 11
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1253Z2",
    stop_sequence: 12
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U274Z2",
    stop_sequence: 13
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U311Z2",
    stop_sequence: 14
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U568Z2",
    stop_sequence: 15
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U275Z2",
    stop_sequence: 16
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U792Z3",
    stop_sequence: 17
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U107Z2",
    stop_sequence: 18
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1115Z2",
    stop_sequence: 19
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1059Z2",
    stop_sequence: 20
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U108Z2",
    stop_sequence: 21
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U215Z2",
    stop_sequence: 22
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1099Z2",
    stop_sequence: 23
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U96Z4",
    stop_sequence: 24
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1024Z2",
    stop_sequence: 25
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U761Z2",
    stop_sequence: 26
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U798Z2",
    stop_sequence: 27
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1033Z2",
    stop_sequence: 28
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U824Z2",
    stop_sequence: 29
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U226Z3",
    stop_sequence: 30
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1066Z2",
    stop_sequence: 31
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1068Z2",
    stop_sequence: 32
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1076Z2",
    stop_sequence: 33
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U953Z2",
    stop_sequence: 34
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U673Z3",
    stop_sequence: 35
  },
  {
    route_id: "L329",
    direction_id: 1,
    stop_id: "U1323Z1",
    stop_sequence: 36
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1323Z1",
    stop_sequence: 1
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U673Z4",
    stop_sequence: 2
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U953Z8",
    stop_sequence: 3
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1076Z1",
    stop_sequence: 4
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1068Z1",
    stop_sequence: 5
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1066Z1",
    stop_sequence: 6
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U226Z1",
    stop_sequence: 7
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U227Z3",
    stop_sequence: 8
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U824Z4",
    stop_sequence: 9
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1033Z1",
    stop_sequence: 10
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U798Z1",
    stop_sequence: 11
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U761Z1",
    stop_sequence: 12
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1024Z1",
    stop_sequence: 13
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U96Z3",
    stop_sequence: 14
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1099Z1",
    stop_sequence: 15
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U215Z1",
    stop_sequence: 16
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U108Z1",
    stop_sequence: 17
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1059Z1",
    stop_sequence: 18
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1115Z1",
    stop_sequence: 19
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U107Z1",
    stop_sequence: 20
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U792Z2",
    stop_sequence: 21
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U275Z1",
    stop_sequence: 22
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U568Z1",
    stop_sequence: 23
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U311Z1",
    stop_sequence: 24
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U274Z2",
    stop_sequence: 25
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1253Z1",
    stop_sequence: 26
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1912Z1",
    stop_sequence: 27
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1913Z1",
    stop_sequence: 28
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U2311Z2",
    stop_sequence: 29
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1913Z2",
    stop_sequence: 30
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1912Z2",
    stop_sequence: 31
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1253Z3",
    stop_sequence: 32
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1254Z1",
    stop_sequence: 33
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1255Z1",
    stop_sequence: 34
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1257Z1",
    stop_sequence: 35
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1256Z1",
    stop_sequence: 36
  },
  {
    route_id: "L329",
    direction_id: 0,
    stop_id: "U1258Z1",
    stop_sequence: 37
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U2110Z2",
    stop_sequence: 1
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U2099Z2",
    stop_sequence: 2
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U2098Z2",
    stop_sequence: 3
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U2096Z2",
    stop_sequence: 4
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U2095Z2",
    stop_sequence: 5
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U1381Z2",
    stop_sequence: 6
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U623Z4",
    stop_sequence: 7
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U506Z2",
    stop_sequence: 8
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U177Z2",
    stop_sequence: 9
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U126Z2",
    stop_sequence: 10
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U162Z6",
    stop_sequence: 11
  },
  {
    route_id: "L340",
    direction_id: 1,
    stop_id: "U321Z18",
    stop_sequence: 12
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U321Z9",
    stop_sequence: 1
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U162Z5",
    stop_sequence: 2
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U126Z1",
    stop_sequence: 3
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U177Z1",
    stop_sequence: 4
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U506Z1",
    stop_sequence: 5
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U623Z3",
    stop_sequence: 6
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U1381Z1",
    stop_sequence: 7
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U2095Z1",
    stop_sequence: 8
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U2096Z1",
    stop_sequence: 9
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U2098Z1",
    stop_sequence: 10
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U2099Z1",
    stop_sequence: 11
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U2110Z1",
    stop_sequence: 12
  },
  {
    route_id: "L340",
    direction_id: 0,
    stop_id: "U2110Z2",
    stop_sequence: 13
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U394Z4",
    stop_sequence: 1
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U306Z1",
    stop_sequence: 2
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U444Z1",
    stop_sequence: 3
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U610Z3",
    stop_sequence: 4
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U364Z3",
    stop_sequence: 5
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U31Z7",
    stop_sequence: 6
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U558Z1",
    stop_sequence: 7
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1027Z1",
    stop_sequence: 8
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1065Z1",
    stop_sequence: 9
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U2113Z1",
    stop_sequence: 10
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1386Z1",
    stop_sequence: 11
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U2114Z1",
    stop_sequence: 12
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U2116Z3",
    stop_sequence: 13
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1144Z1",
    stop_sequence: 14
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1147Z2",
    stop_sequence: 15
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1146Z1",
    stop_sequence: 16
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1217Z1",
    stop_sequence: 17
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1176Z2",
    stop_sequence: 18
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1179Z1",
    stop_sequence: 19
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1176Z1",
    stop_sequence: 20
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1177Z1",
    stop_sequence: 21
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1178Z1",
    stop_sequence: 22
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U4141Z2",
    stop_sequence: 23
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1180Z2",
    stop_sequence: 24
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1178Z2",
    stop_sequence: 25
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1177Z2",
    stop_sequence: 26
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U3206Z2",
    stop_sequence: 27
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1190Z2",
    stop_sequence: 28
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1968Z2",
    stop_sequence: 29
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1643Z2",
    stop_sequence: 30
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1142Z2",
    stop_sequence: 31
  },
  {
    route_id: "L347",
    direction_id: 1,
    stop_id: "U1141Z1",
    stop_sequence: 32
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1141Z3",
    stop_sequence: 1
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1142Z1",
    stop_sequence: 2
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1643Z1",
    stop_sequence: 3
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1968Z1",
    stop_sequence: 4
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1190Z1",
    stop_sequence: 5
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U3206Z1",
    stop_sequence: 6
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1177Z1",
    stop_sequence: 7
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1178Z1",
    stop_sequence: 8
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1180Z1",
    stop_sequence: 9
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U4141Z1",
    stop_sequence: 10
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1178Z2",
    stop_sequence: 11
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1177Z2",
    stop_sequence: 12
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1176Z2",
    stop_sequence: 13
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1179Z1",
    stop_sequence: 14
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1176Z1",
    stop_sequence: 15
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1217Z2",
    stop_sequence: 16
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1146Z2",
    stop_sequence: 17
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1147Z1",
    stop_sequence: 18
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1144Z4",
    stop_sequence: 19
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U2116Z4",
    stop_sequence: 20
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U2114Z2",
    stop_sequence: 21
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U2113Z2",
    stop_sequence: 22
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U1065Z2",
    stop_sequence: 23
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U104Z4",
    stop_sequence: 24
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U558Z2",
    stop_sequence: 25
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U31Z8",
    stop_sequence: 26
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U364Z4",
    stop_sequence: 27
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U610Z4",
    stop_sequence: 28
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U872Z7",
    stop_sequence: 29
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U444Z2",
    stop_sequence: 30
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U306Z2",
    stop_sequence: 31
  },
  {
    route_id: "L347",
    direction_id: 0,
    stop_id: "U394Z3",
    stop_sequence: 32
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1305Z1",
    stop_sequence: 1
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1304Z2",
    stop_sequence: 2
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1303Z2",
    stop_sequence: 3
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1971Z2",
    stop_sequence: 4
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1302Z2",
    stop_sequence: 5
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1301Z1",
    stop_sequence: 6
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1300Z2",
    stop_sequence: 7
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U988Z2",
    stop_sequence: 8
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U977Z2",
    stop_sequence: 9
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U974Z2",
    stop_sequence: 10
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1484Z2",
    stop_sequence: 11
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1084Z2",
    stop_sequence: 12
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U2778Z2",
    stop_sequence: 13
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U769Z3",
    stop_sequence: 14
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U293Z2",
    stop_sequence: 15
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U114Z3",
    stop_sequence: 16
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U791Z2",
    stop_sequence: 17
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U451Z2",
    stop_sequence: 18
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U368Z2",
    stop_sequence: 19
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U766Z2",
    stop_sequence: 20
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U125Z2",
    stop_sequence: 21
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U771Z2",
    stop_sequence: 22
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U89Z2",
    stop_sequence: 23
  },
  {
    route_id: "L351",
    direction_id: 1,
    stop_id: "U1000Z4",
    stop_sequence: 24
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1000Z11",
    stop_sequence: 1
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1000Z1",
    stop_sequence: 2
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U89Z1",
    stop_sequence: 3
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U771Z1",
    stop_sequence: 4
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U125Z1",
    stop_sequence: 5
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U766Z1",
    stop_sequence: 6
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U368Z1",
    stop_sequence: 7
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U451Z1",
    stop_sequence: 8
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U791Z1",
    stop_sequence: 9
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U114Z1",
    stop_sequence: 10
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U293Z1",
    stop_sequence: 11
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U769Z1",
    stop_sequence: 12
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U2778Z1",
    stop_sequence: 13
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1084Z3",
    stop_sequence: 14
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1484Z1",
    stop_sequence: 15
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U974Z1",
    stop_sequence: 16
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U977Z1",
    stop_sequence: 17
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U988Z1",
    stop_sequence: 18
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1300Z1",
    stop_sequence: 19
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1301Z1",
    stop_sequence: 20
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1302Z1",
    stop_sequence: 21
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1971Z1",
    stop_sequence: 22
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1303Z1",
    stop_sequence: 23
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1304Z1",
    stop_sequence: 24
  },
  {
    route_id: "L351",
    direction_id: 0,
    stop_id: "U1305Z1",
    stop_sequence: 25
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1189Z1",
    stop_sequence: 1
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1188Z1",
    stop_sequence: 2
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1187Z1",
    stop_sequence: 3
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1186Z1",
    stop_sequence: 4
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1185Z1",
    stop_sequence: 5
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1086Z1",
    stop_sequence: 6
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U3051Z2",
    stop_sequence: 7
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1089Z2",
    stop_sequence: 8
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1085Z2",
    stop_sequence: 9
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U634Z2",
    stop_sequence: 10
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U122Z2",
    stop_sequence: 11
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U679Z2",
    stop_sequence: 12
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1211Z2",
    stop_sequence: 13
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1029Z1",
    stop_sequence: 14
  },
  {
    route_id: "L352",
    direction_id: 1,
    stop_id: "U1007Z71",
    stop_sequence: 15
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1007Z73",
    stop_sequence: 1
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1029Z2",
    stop_sequence: 2
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1211Z1",
    stop_sequence: 3
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U679Z1",
    stop_sequence: 4
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U122Z1",
    stop_sequence: 5
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U634Z1",
    stop_sequence: 6
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1085Z1",
    stop_sequence: 7
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1089Z1",
    stop_sequence: 8
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U3051Z1",
    stop_sequence: 9
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1086Z2",
    stop_sequence: 10
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1185Z2",
    stop_sequence: 11
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1186Z2",
    stop_sequence: 12
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1187Z2",
    stop_sequence: 13
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1188Z2",
    stop_sequence: 14
  },
  {
    route_id: "L352",
    direction_id: 0,
    stop_id: "U1189Z3",
    stop_sequence: 15
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U1192Z1",
    stop_sequence: 1
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U1139Z2",
    stop_sequence: 2
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U1138Z2",
    stop_sequence: 3
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U4468Z2",
    stop_sequence: 4
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U1137Z2",
    stop_sequence: 5
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U1136Z2",
    stop_sequence: 6
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U4251Z2",
    stop_sequence: 7
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U2706Z2",
    stop_sequence: 8
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U352Z3",
    stop_sequence: 9
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U918Z2",
    stop_sequence: 10
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U556Z2",
    stop_sequence: 11
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U3Z2",
    stop_sequence: 12
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U506Z2",
    stop_sequence: 13
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U177Z2",
    stop_sequence: 14
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U126Z2",
    stop_sequence: 15
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U162Z6",
    stop_sequence: 16
  },
  {
    route_id: "L355",
    direction_id: 1,
    stop_id: "U321Z5",
    stop_sequence: 17
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U321Z7",
    stop_sequence: 1
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U162Z5",
    stop_sequence: 2
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U126Z1",
    stop_sequence: 3
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U177Z1",
    stop_sequence: 4
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U506Z1",
    stop_sequence: 5
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U3Z1",
    stop_sequence: 6
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U556Z1",
    stop_sequence: 7
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U918Z1",
    stop_sequence: 8
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U352Z1",
    stop_sequence: 9
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U2706Z1",
    stop_sequence: 10
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U4251Z1",
    stop_sequence: 11
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U1136Z1",
    stop_sequence: 12
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U1137Z1",
    stop_sequence: 13
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U4468Z2",
    stop_sequence: 14
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U1138Z1",
    stop_sequence: 15
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U1139Z1",
    stop_sequence: 16
  },
  {
    route_id: "L355",
    direction_id: 0,
    stop_id: "U1192Z1",
    stop_sequence: 17
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U3355Z2",
    stop_sequence: 1
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1869Z2",
    stop_sequence: 2
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U2097Z2",
    stop_sequence: 3
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1374Z2",
    stop_sequence: 4
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1382Z2",
    stop_sequence: 5
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1373Z2",
    stop_sequence: 6
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1372Z2",
    stop_sequence: 7
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1371Z2",
    stop_sequence: 8
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1370Z2",
    stop_sequence: 9
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1366Z2",
    stop_sequence: 10
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1227Z2",
    stop_sequence: 11
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1365Z2",
    stop_sequence: 12
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U165Z2",
    stop_sequence: 13
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U1038Z2",
    stop_sequence: 14
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U731Z2",
    stop_sequence: 15
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U730Z2",
    stop_sequence: 16
  },
  {
    route_id: "L357",
    direction_id: 1,
    stop_id: "U106Z4",
    stop_sequence: 17
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U106Z1",
    stop_sequence: 1
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U730Z1",
    stop_sequence: 2
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U731Z1",
    stop_sequence: 3
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1038Z1",
    stop_sequence: 4
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U165Z5",
    stop_sequence: 5
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1365Z1",
    stop_sequence: 6
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1227Z1",
    stop_sequence: 7
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1366Z1",
    stop_sequence: 8
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1370Z1",
    stop_sequence: 9
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1371Z1",
    stop_sequence: 10
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1372Z1",
    stop_sequence: 11
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1373Z1",
    stop_sequence: 12
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1382Z1",
    stop_sequence: 13
  },
  {
    route_id: "L357",
    direction_id: 0,
    stop_id: "U1374Z1",
    stop_sequence: 14
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U4195Z1",
    stop_sequence: 1
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U2095Z1",
    stop_sequence: 2
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U2765Z1",
    stop_sequence: 3
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U4194Z1",
    stop_sequence: 4
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U2283Z1",
    stop_sequence: 5
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U2099Z1",
    stop_sequence: 6
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U1192Z1",
    stop_sequence: 7
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U1139Z2",
    stop_sequence: 8
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U1138Z2",
    stop_sequence: 9
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U4468Z2",
    stop_sequence: 10
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U869Z1",
    stop_sequence: 11
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U111Z2",
    stop_sequence: 12
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U874Z2",
    stop_sequence: 13
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U721Z1",
    stop_sequence: 14
  },
  {
    route_id: "L359",
    direction_id: 1,
    stop_id: "U513Z3",
    stop_sequence: 15
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U513Z3",
    stop_sequence: 1
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U721Z2",
    stop_sequence: 2
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U874Z3",
    stop_sequence: 3
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U111Z1",
    stop_sequence: 4
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U4468Z2",
    stop_sequence: 5
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U1138Z1",
    stop_sequence: 6
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U1139Z1",
    stop_sequence: 7
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U2099Z2",
    stop_sequence: 8
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U2098Z3",
    stop_sequence: 9
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U4194Z1",
    stop_sequence: 10
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U2283Z1",
    stop_sequence: 11
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U2765Z2",
    stop_sequence: 12
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U2095Z2",
    stop_sequence: 13
  },
  {
    route_id: "L359",
    direction_id: 0,
    stop_id: "U4195Z1",
    stop_sequence: 14
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1600Z2",
    stop_sequence: 1
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1599Z2",
    stop_sequence: 2
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1700Z2",
    stop_sequence: 3
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1598Z2",
    stop_sequence: 4
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1562Z2",
    stop_sequence: 5
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1563Z2",
    stop_sequence: 6
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1871Z2",
    stop_sequence: 7
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1873Z2",
    stop_sequence: 8
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1872Z2",
    stop_sequence: 9
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1874Z2",
    stop_sequence: 10
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1866Z2",
    stop_sequence: 11
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1864Z2",
    stop_sequence: 12
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1896Z2",
    stop_sequence: 13
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U4250Z2",
    stop_sequence: 14
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1263Z5",
    stop_sequence: 15
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1262Z2",
    stop_sequence: 16
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1744Z2",
    stop_sequence: 17
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1374Z2",
    stop_sequence: 18
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1382Z2",
    stop_sequence: 19
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1373Z2",
    stop_sequence: 20
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1372Z2",
    stop_sequence: 21
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1371Z2",
    stop_sequence: 22
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1370Z2",
    stop_sequence: 23
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1284Z2",
    stop_sequence: 24
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U810Z2",
    stop_sequence: 25
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U812Z2",
    stop_sequence: 26
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1058Z2",
    stop_sequence: 27
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U2780Z2",
    stop_sequence: 28
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U1404Z2",
    stop_sequence: 29
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U247Z2",
    stop_sequence: 30
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U239Z2",
    stop_sequence: 31
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U278Z2",
    stop_sequence: 32
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U916Z4",
    stop_sequence: 33
  },
  {
    route_id: "L363",
    direction_id: 1,
    stop_id: "U106Z4",
    stop_sequence: 34
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U106Z1",
    stop_sequence: 1
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U916Z3",
    stop_sequence: 2
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U278Z1",
    stop_sequence: 3
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U239Z1",
    stop_sequence: 4
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U247Z1",
    stop_sequence: 5
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1404Z1",
    stop_sequence: 6
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U2780Z1",
    stop_sequence: 7
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1058Z1",
    stop_sequence: 8
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U812Z1",
    stop_sequence: 9
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U810Z1",
    stop_sequence: 10
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1284Z1",
    stop_sequence: 11
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1370Z1",
    stop_sequence: 12
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1371Z1",
    stop_sequence: 13
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1372Z1",
    stop_sequence: 14
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1373Z1",
    stop_sequence: 15
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1382Z1",
    stop_sequence: 16
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1374Z1",
    stop_sequence: 17
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1744Z1",
    stop_sequence: 18
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1262Z1",
    stop_sequence: 19
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1263Z4",
    stop_sequence: 20
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U4250Z1",
    stop_sequence: 21
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1896Z1",
    stop_sequence: 22
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1864Z1",
    stop_sequence: 23
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1866Z1",
    stop_sequence: 24
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1874Z1",
    stop_sequence: 25
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1872Z1",
    stop_sequence: 26
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1873Z1",
    stop_sequence: 27
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1871Z1",
    stop_sequence: 28
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1563Z1",
    stop_sequence: 29
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1562Z1",
    stop_sequence: 30
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1598Z1",
    stop_sequence: 31
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1700Z3",
    stop_sequence: 32
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1599Z1",
    stop_sequence: 33
  },
  {
    route_id: "L363",
    direction_id: 0,
    stop_id: "U1600Z2",
    stop_sequence: 34
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1819Z2",
    stop_sequence: 1
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1818Z2",
    stop_sequence: 2
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U2891Z2",
    stop_sequence: 3
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1817Z2",
    stop_sequence: 4
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1815Z2",
    stop_sequence: 5
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1816Z3",
    stop_sequence: 6
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U3295Z1",
    stop_sequence: 7
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1814Z3",
    stop_sequence: 8
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U2456Z2",
    stop_sequence: 9
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1813Z2",
    stop_sequence: 10
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U9364Z2",
    stop_sequence: 11
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1875Z2",
    stop_sequence: 12
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1885Z2",
    stop_sequence: 13
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U2137Z2",
    stop_sequence: 14
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U808Z2",
    stop_sequence: 15
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U336Z2",
    stop_sequence: 16
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U542Z2",
    stop_sequence: 17
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U435Z2",
    stop_sequence: 18
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U123Z2",
    stop_sequence: 19
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U367Z2",
    stop_sequence: 20
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1099Z2",
    stop_sequence: 21
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U96Z2",
    stop_sequence: 22
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U310Z2",
    stop_sequence: 23
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U741Z2",
    stop_sequence: 24
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U389Z2",
    stop_sequence: 25
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U404Z4",
    stop_sequence: 26
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U358Z4",
    stop_sequence: 27
  },
  {
    route_id: "L364",
    direction_id: 1,
    stop_id: "U1071Z2",
    stop_sequence: 28
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1071Z4",
    stop_sequence: 1
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U358Z3",
    stop_sequence: 2
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U404Z3",
    stop_sequence: 3
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U389Z1",
    stop_sequence: 4
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U741Z1",
    stop_sequence: 5
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U310Z1",
    stop_sequence: 6
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U96Z1",
    stop_sequence: 7
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1099Z1",
    stop_sequence: 8
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U367Z1",
    stop_sequence: 9
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U123Z1",
    stop_sequence: 10
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U435Z1",
    stop_sequence: 11
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U542Z1",
    stop_sequence: 12
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U336Z3",
    stop_sequence: 13
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U336Z1",
    stop_sequence: 14
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U808Z1",
    stop_sequence: 15
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U2137Z1",
    stop_sequence: 16
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1885Z1",
    stop_sequence: 17
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1875Z1",
    stop_sequence: 18
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U9364Z1",
    stop_sequence: 19
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1813Z1",
    stop_sequence: 20
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U2456Z1",
    stop_sequence: 21
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1814Z1",
    stop_sequence: 22
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1816Z3",
    stop_sequence: 23
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U3295Z1",
    stop_sequence: 24
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1815Z1",
    stop_sequence: 25
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1817Z1",
    stop_sequence: 26
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U2891Z1",
    stop_sequence: 27
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1818Z1",
    stop_sequence: 28
  },
  {
    route_id: "L364",
    direction_id: 0,
    stop_id: "U1819Z1",
    stop_sequence: 29
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U2008Z3",
    stop_sequence: 1
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1908Z2",
    stop_sequence: 2
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U2072Z4",
    stop_sequence: 3
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1819Z2",
    stop_sequence: 4
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1818Z2",
    stop_sequence: 5
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U2891Z2",
    stop_sequence: 6
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1817Z2",
    stop_sequence: 7
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1816Z2",
    stop_sequence: 8
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U3295Z1",
    stop_sequence: 9
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1930Z2",
    stop_sequence: 10
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1812Z2",
    stop_sequence: 11
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1272Z2",
    stop_sequence: 12
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U131Z2",
    stop_sequence: 13
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1405Z2",
    stop_sequence: 14
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U490Z2",
    stop_sequence: 15
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1233Z2",
    stop_sequence: 16
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U808Z2",
    stop_sequence: 17
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U336Z2",
    stop_sequence: 18
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U542Z2",
    stop_sequence: 19
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U435Z2",
    stop_sequence: 20
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U123Z2",
    stop_sequence: 21
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U367Z2",
    stop_sequence: 22
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1099Z2",
    stop_sequence: 23
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U96Z2",
    stop_sequence: 24
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U310Z2",
    stop_sequence: 25
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U741Z2",
    stop_sequence: 26
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U389Z2",
    stop_sequence: 27
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U404Z4",
    stop_sequence: 28
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U358Z4",
    stop_sequence: 29
  },
  {
    route_id: "L366",
    direction_id: 1,
    stop_id: "U1071Z2",
    stop_sequence: 30
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1071Z4",
    stop_sequence: 1
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U358Z3",
    stop_sequence: 2
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U404Z3",
    stop_sequence: 3
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U389Z1",
    stop_sequence: 4
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U741Z1",
    stop_sequence: 5
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U310Z1",
    stop_sequence: 6
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U96Z1",
    stop_sequence: 7
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1099Z1",
    stop_sequence: 8
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U367Z1",
    stop_sequence: 9
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U123Z1",
    stop_sequence: 10
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U435Z1",
    stop_sequence: 11
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U542Z1",
    stop_sequence: 12
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U336Z3",
    stop_sequence: 13
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U336Z1",
    stop_sequence: 14
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U808Z1",
    stop_sequence: 15
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1233Z1",
    stop_sequence: 16
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U490Z1",
    stop_sequence: 17
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1405Z1",
    stop_sequence: 18
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U131Z1",
    stop_sequence: 19
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1272Z1",
    stop_sequence: 20
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1812Z1",
    stop_sequence: 21
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1930Z1",
    stop_sequence: 22
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1816Z3",
    stop_sequence: 23
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1816Z1",
    stop_sequence: 24
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1817Z1",
    stop_sequence: 25
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U2891Z1",
    stop_sequence: 26
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1818Z1",
    stop_sequence: 27
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1819Z1",
    stop_sequence: 28
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U2072Z3",
    stop_sequence: 29
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U1908Z1",
    stop_sequence: 30
  },
  {
    route_id: "L366",
    direction_id: 0,
    stop_id: "U2008Z2",
    stop_sequence: 31
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U512Z51P",
    stop_sequence: 1
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U512Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U1074Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U763Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U678Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U12Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L810",
    direction_id: 1,
    stop_id: "U529Z8P",
    stop_sequence: 7
  },
  {
    route_id: "L810",
    direction_id: 0,
    stop_id: "U529Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L810",
    direction_id: 0,
    stop_id: "U529Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L810",
    direction_id: 0,
    stop_id: "U1074Z52P",
    stop_sequence: 3
  },
  {
    route_id: "L810",
    direction_id: 0,
    stop_id: "U512Z52P",
    stop_sequence: 4
  },
  {
    route_id: "L872",
    direction_id: 0,
    stop_id: "U1000Z11",
    stop_sequence: 1
  },
  {
    route_id: "L872",
    direction_id: 0,
    stop_id: "U1000Z12",
    stop_sequence: 2
  },
  {
    route_id: "L872",
    direction_id: 0,
    stop_id: "U405Z5",
    stop_sequence: 3
  },
  {
    route_id: "L872",
    direction_id: 0,
    stop_id: "U1000Z4",
    stop_sequence: 4
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U717Z6P",
    stop_sequence: 3
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U692Z52P",
    stop_sequence: 6
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U163Z10P",
    stop_sequence: 7
  },
  {
    route_id: "L891",
    direction_id: 1,
    stop_id: "U321Z22P",
    stop_sequence: 8
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U321Z21P",
    stop_sequence: 1
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U163Z9P",
    stop_sequence: 2
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U692Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L891",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U512Z51P",
    stop_sequence: 1
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U512Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U1074Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U763Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U678Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U12Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L895",
    direction_id: 1,
    stop_id: "U529Z8P",
    stop_sequence: 7
  },
  {
    route_id: "L895",
    direction_id: 0,
    stop_id: "U529Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L895",
    direction_id: 0,
    stop_id: "U529Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L895",
    direction_id: 0,
    stop_id: "U1074Z52P",
    stop_sequence: 3
  },
  {
    route_id: "L895",
    direction_id: 0,
    stop_id: "U512Z52P",
    stop_sequence: 4
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U717Z6P",
    stop_sequence: 3
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U231Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U324Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U692Z52P",
    stop_sequence: 6
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U163Z10P",
    stop_sequence: 7
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U592Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L896",
    direction_id: 1,
    stop_id: "U867Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U867Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U163Z9P",
    stop_sequence: 2
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U692Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U324Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U231Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U717Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U439Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L896",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U953Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U829Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U738Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U713Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U599Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U459Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U198Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U920Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U671Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U192Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U143Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U890Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U760Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U1285Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U596Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U160Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U641Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U166Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U409Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U195Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U99Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U381Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U344Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U106Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U730Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U731Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U1038Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U165Z3P",
    stop_sequence: 28
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U2794Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U729Z3P",
    stop_sequence: 30
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U309Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U611Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U799Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U909Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U908Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U819Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U257Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U893Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U722Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U497Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U662Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U879Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U971Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U839Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U245Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U619Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U614Z4P",
    stop_sequence: 47
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 48
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U458Z13P",
    stop_sequence: 49
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U1040Z5P",
    stop_sequence: 50
  },
  {
    route_id: "L901",
    direction_id: 1,
    stop_id: "U1040Z11P",
    stop_sequence: 51
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U1040Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U1040Z6P",
    stop_sequence: 2
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U458Z17P",
    stop_sequence: 3
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U614Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U619Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U245Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U839Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U879Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U662Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U497Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U722Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U893Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U257Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U819Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U908Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U909Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U799Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U611Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U309Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U729Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U2794Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U165Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U1038Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U731Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U730Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U106Z6P",
    stop_sequence: 27
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U344Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U381Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U99Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U195Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U409Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U166Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U641Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U160Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U596Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U1285Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U760Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U890Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U143Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U192Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U920Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U198Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U459Z5P",
    stop_sequence: 44
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U599Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U713Z5P",
    stop_sequence: 46
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U738Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U829Z3P",
    stop_sequence: 48
  },
  {
    route_id: "L901",
    direction_id: 0,
    stop_id: "U953Z2P",
    stop_sequence: 49
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U768Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U505Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U840Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U634Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U122Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U679Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U1211Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U1029Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U1007Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U711Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U475Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U492Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U709Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U1130Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U966Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U394Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U306Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U444Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U872Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U44Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U229Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U182Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U867Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U592Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U321Z22P",
    stop_sequence: 25
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U350Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U162Z5P",
    stop_sequence: 27
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U126Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U177Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U506Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U3Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U556Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U918Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L902",
    direction_id: 1,
    stop_id: "U352Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U352Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U352Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U918Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U556Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U3Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U506Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U177Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U126Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U162Z6P",
    stop_sequence: 9
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U350Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U321Z21P",
    stop_sequence: 11
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U592Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U867Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U182Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U229Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U44Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U872Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U444Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U306Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U394Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U966Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U1130Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U709Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U492Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U475Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U711Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U1007Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U1029Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U1211Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U679Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U122Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U634Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U840Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U505Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L902",
    direction_id: 0,
    stop_id: "U768Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U369Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U783Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U335Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U804Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U194Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U613Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1336Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U749Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U656Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U343Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U50Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U296Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U429Z5P",
    stop_sequence: 16
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U297Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U663Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U663Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U589Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U406Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U664Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U597Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U597Z7P",
    stop_sequence: 24
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U527Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U190Z6P",
    stop_sequence: 26
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U3213Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U237Z10P",
    stop_sequence: 28
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 29
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U319Z4P",
    stop_sequence: 32
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U184Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U957Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U3211Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U685Z13P",
    stop_sequence: 36
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U27Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U205Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U602Z4P",
    stop_sequence: 39
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U968Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1130Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1154Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U356Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U875Z3P",
    stop_sequence: 44
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1124Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U587Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1114Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U875Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1029Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U1007Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L904",
    direction_id: 1,
    stop_id: "U712Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U712Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1007Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1029Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1114Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1124Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U875Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U356Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1154Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1130Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U968Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U602Z5P",
    stop_sequence: 11
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U205Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U27Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U685Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U3211Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U957Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U184Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U319Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U302Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U208Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U401Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U739Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U190Z5P",
    stop_sequence: 25
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U527Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U597Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U664Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U406Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U589Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1055Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U663Z3P",
    stop_sequence: 32
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U297Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U429Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U296Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U50Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U343Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U488Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U893Z3P",
    stop_sequence: 40
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U656Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U749Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U494Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U613Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U533Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U1009Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U783Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L904",
    direction_id: 0,
    stop_id: "U369Z3P",
    stop_sequence: 48
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U210Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U286Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U386Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U43Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U735Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U381Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U424Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U181Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U1221Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U141Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U697Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U643Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U79Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U832Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U431Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U1402Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U265Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U50Z8P",
    stop_sequence: 19
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U907Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U385Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U2784Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U597Z7P",
    stop_sequence: 23
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U527Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U190Z6P",
    stop_sequence: 25
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U400Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U142Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 28
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U100Z5P",
    stop_sequence: 31
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U48Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U196Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U305Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U622Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U870Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U514Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U675Z11P",
    stop_sequence: 38
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U267Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U543Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U544Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U925Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U924Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U371Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U912Z3P",
    stop_sequence: 45
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U648Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U511Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U345Z2P",
    stop_sequence: 48
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U806Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U330Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U74Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U949Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L905",
    direction_id: 1,
    stop_id: "U949Z2P",
    stop_sequence: 53
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U949Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U74Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U330Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U806Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U345Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U511Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U648Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U912Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U371Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U924Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U925Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U544Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U543Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U267Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U675Z10P",
    stop_sequence: 15
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U514Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U870Z5P",
    stop_sequence: 17
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U622Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U305Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U196Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U48Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U100Z6P",
    stop_sequence: 22
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U142Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U400Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U190Z5P",
    stop_sequence: 28
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U527Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U597Z5P",
    stop_sequence: 30
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U2784Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U385Z3P",
    stop_sequence: 32
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U907Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U50Z7P",
    stop_sequence: 34
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U265Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U1402Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U415Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U832Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U79Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U643Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U697Z3P",
    stop_sequence: 41
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U322Z3P",
    stop_sequence: 42
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U417Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U424Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U381Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U735Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U43Z2P",
    stop_sequence: 48
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U590Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U386Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 51
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L905",
    direction_id: 0,
    stop_id: "U210Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U487Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U132Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U1054Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U455Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U1294Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U445Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U1004Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U525Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U340Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U159Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U22Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U931Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U336Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U3053Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U220Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U919Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U169Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U382Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U6Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U812Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U1058Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U2780Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U1404Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U247Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U239Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U278Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U916Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U106Z6P",
    stop_sequence: 28
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U344Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U381Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U99Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U195Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U409Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U166Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U641Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U160Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U596Z3P",
    stop_sequence: 37
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U1285Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U760Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U890Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U143Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U192Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U920Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U198Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U459Z5P",
    stop_sequence: 45
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U599Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U713Z5P",
    stop_sequence: 47
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U738Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U829Z3P",
    stop_sequence: 49
  },
  {
    route_id: "L906",
    direction_id: 1,
    stop_id: "U953Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U953Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U829Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U738Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U713Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U599Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U459Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U198Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U920Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U671Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U192Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U143Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U890Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U760Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U1285Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U596Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U160Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U641Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U166Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U409Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U195Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U99Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U381Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U344Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U106Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U916Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U278Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U239Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U247Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U1404Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U2780Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U1058Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U812Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U6Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U382Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U169Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U919Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U220Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U3053Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U336Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U931Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U22Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U159Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U340Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U525Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U1004Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U445Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U1294Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U455Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U1054Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U132Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L906",
    direction_id: 0,
    stop_id: "U487Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U14Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U578Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U1039Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U917Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U802Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U814Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U902Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U315Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U317Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U102Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U355Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U337Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U458Z13P",
    stop_sequence: 13
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U1040Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U1040Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U901Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U208Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U739Z3P",
    stop_sequence: 18
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U190Z6P",
    stop_sequence: 19
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U400Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U142Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U262Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U163Z6P",
    stop_sequence: 26
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U646Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U450Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U980Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U906Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U425Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U213Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U787Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U736Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U112Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U133Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U3017Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U157Z6P",
    stop_sequence: 38
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U199Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U440Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U1219Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U419Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U905Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U486Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U1047Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U800Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U3243Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U609Z3P",
    stop_sequence: 48
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U223Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U628Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U629Z3P",
    stop_sequence: 51
  },
  {
    route_id: "L907",
    direction_id: 1,
    stop_id: "U1090Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U628Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U629Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U1090Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U223Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U609Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U3243Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U800Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U1047Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U485Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U486Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U905Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U419Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U1219Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U440Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U199Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U157Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U3017Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U133Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U112Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U736Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U787Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U213Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U425Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U906Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U980Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U646Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U163Z5P",
    stop_sequence: 27
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U262Z3P",
    stop_sequence: 28
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U142Z4P",
    stop_sequence: 32
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U400Z3P",
    stop_sequence: 33
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U3213Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U237Z10P",
    stop_sequence: 35
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U237Z6P",
    stop_sequence: 36
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U901Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U1040Z4P",
    stop_sequence: 38
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U1040Z6P",
    stop_sequence: 39
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U458Z17P",
    stop_sequence: 40
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U458Z20P",
    stop_sequence: 41
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U337Z3P",
    stop_sequence: 42
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U355Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U102Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U317Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U315Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U902Z3P",
    stop_sequence: 47
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U802Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U917Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U1039Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U578Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L907",
    direction_id: 0,
    stop_id: "U14Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U256Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U932Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U18Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U686Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U684Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U170Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U811Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1935Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U105Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1283Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U311Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U568Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U275Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U792Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U107Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1115Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1059Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U108Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U215Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1099Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U96Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U310Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U741Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U552Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U975Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U226Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1066Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1068Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1076Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1222Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U827Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U660Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U548Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U161Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U418Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U767Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U357Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1064Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U16Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U34Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U512Z5P",
    stop_sequence: 41
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U69Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U2787Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U745Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U789Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U3018Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U689Z3P",
    stop_sequence: 47
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U480Z3P",
    stop_sequence: 49
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U142Z4P",
    stop_sequence: 50
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U400Z3P",
    stop_sequence: 51
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U3213Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U237Z10P",
    stop_sequence: 53
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 54
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U901Z2P",
    stop_sequence: 55
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U1040Z2P",
    stop_sequence: 56
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U638Z1P",
    stop_sequence: 57
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U835Z1P",
    stop_sequence: 58
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U363Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U815Z1P",
    stop_sequence: 60
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U116Z1P",
    stop_sequence: 61
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U396Z3P",
    stop_sequence: 62
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U174Z1P",
    stop_sequence: 63
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U846Z1P",
    stop_sequence: 64
  },
  {
    route_id: "L908",
    direction_id: 1,
    stop_id: "U685Z3P",
    stop_sequence: 65
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U685Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U846Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U174Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U396Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U116Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U815Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U363Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U835Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U638Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U922Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1040Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U901Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U208Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U739Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U190Z6P",
    stop_sequence: 15
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U400Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U142Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U480Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U689Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U3018Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U789Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U745Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U2787Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U69Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U512Z8P",
    stop_sequence: 26
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U34Z51P",
    stop_sequence: 27
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U16Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1064Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U357Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U767Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U418Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U161Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U548Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U660Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U827Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1222Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1076Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1068Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1066Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U226Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U227Z4P",
    stop_sequence: 42
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U975Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U552Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U741Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U310Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U96Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1099Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U215Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U108Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1059Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1115Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U107Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U792Z2P",
    stop_sequence: 54
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U275Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U568Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U311Z4P",
    stop_sequence: 57
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1283Z2P",
    stop_sequence: 58
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U1935Z2P",
    stop_sequence: 59
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U811Z3P",
    stop_sequence: 60
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U170Z1P",
    stop_sequence: 61
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U454Z3P",
    stop_sequence: 62
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U684Z1P",
    stop_sequence: 63
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U686Z1P",
    stop_sequence: 64
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U18Z1P",
    stop_sequence: 65
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U932Z1P",
    stop_sequence: 66
  },
  {
    route_id: "L908",
    direction_id: 0,
    stop_id: "U256Z1P",
    stop_sequence: 67
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U1016Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U621Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U903Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U719Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U811Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U3008Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U36Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U432Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U28Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U448Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U97Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U801Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U349Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U193Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U318Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U207Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U207Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U535Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U884Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U1022Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U538Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U707Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U750Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U585Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U1071Z7P",
    stop_sequence: 25
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U70Z6P",
    stop_sequence: 26
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U827Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U660Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U548Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U161Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U418Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U767Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U357Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U1064Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U16Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U34Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U512Z5P",
    stop_sequence: 37
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U69Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U2787Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U745Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U789Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U3018Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U689Z3P",
    stop_sequence: 43
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U692Z4P",
    stop_sequence: 47
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U163Z10P",
    stop_sequence: 48
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U321Z22P",
    stop_sequence: 49
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U350Z3P",
    stop_sequence: 50
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U162Z5P",
    stop_sequence: 51
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U126Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U177Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U506Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U623Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U397Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U233Z3P",
    stop_sequence: 57
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U874Z2P",
    stop_sequence: 58
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U721Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L909",
    direction_id: 1,
    stop_id: "U513Z1P",
    stop_sequence: 60
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U513Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U721Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U874Z4P",
    stop_sequence: 3
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U233Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U397Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U623Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U506Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U177Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U126Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U162Z6P",
    stop_sequence: 10
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U350Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U321Z21P",
    stop_sequence: 12
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U163Z9P",
    stop_sequence: 13
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U692Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U689Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U3018Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U789Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U745Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U2787Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U69Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U512Z8P",
    stop_sequence: 24
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U34Z51P",
    stop_sequence: 25
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U16Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U1064Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U357Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U767Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U418Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U161Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U548Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U660Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U827Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U70Z7P",
    stop_sequence: 35
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U1071Z6P",
    stop_sequence: 36
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U585Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U750Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U707Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U538Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U884Z3P",
    stop_sequence: 41
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U535Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U207Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U207Z3P",
    stop_sequence: 44
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U318Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U193Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U349Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U801Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U97Z2P",
    stop_sequence: 49
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U448Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U28Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U432Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U36Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U3008Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U811Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U719Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U903Z1P",
    stop_sequence: 57
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U621Z1P",
    stop_sequence: 58
  },
  {
    route_id: "L909",
    direction_id: 0,
    stop_id: "U1016Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U24Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1037Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1036Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1035Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1157Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 6
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U928Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U927Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U625Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U446Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U658Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U329Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U228Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U415Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1402Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U265Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U50Z8P",
    stop_sequence: 22
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U907Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U385Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U2784Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U597Z7P",
    stop_sequence: 26
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U527Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U190Z6P",
    stop_sequence: 28
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U3213Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U237Z10P",
    stop_sequence: 30
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U237Z6P",
    stop_sequence: 31
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U208Z3P",
    stop_sequence: 32
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U4Z3P",
    stop_sequence: 33
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U481Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U930Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U148Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U2607Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U168Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U693Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U699Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1407Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U748Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U626Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U781Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U737Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U872Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1077Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U273Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U844Z3P",
    stop_sequence: 49
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U507Z2P",
    stop_sequence: 50
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U541Z6P",
    stop_sequence: 51
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1198Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U61Z4P",
    stop_sequence: 53
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U554Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U218Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U698Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U416Z1P",
    stop_sequence: 57
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U776Z1P",
    stop_sequence: 58
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U628Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U629Z3P",
    stop_sequence: 60
  },
  {
    route_id: "L910",
    direction_id: 1,
    stop_id: "U1090Z1P",
    stop_sequence: 61
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U628Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U629Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1090Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U776Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U416Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U698Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U218Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U554Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U61Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U661Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1046Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U2793Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1198Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U541Z7P",
    stop_sequence: 14
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U844Z4P",
    stop_sequence: 16
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1077Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U872Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U737Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U781Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U626Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U748Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1407Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U699Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U693Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U168Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U2607Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U148Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U930Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U481Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U4Z4P",
    stop_sequence: 31
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U208Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U401Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U739Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U190Z5P",
    stop_sequence: 35
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U527Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U597Z5P",
    stop_sequence: 37
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U2784Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U385Z3P",
    stop_sequence: 39
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U907Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U50Z7P",
    stop_sequence: 41
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U265Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1402Z2P",
    stop_sequence: 43
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U415Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U228Z3P",
    stop_sequence: 45
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 49
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U497Z3P",
    stop_sequence: 50
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U329Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U658Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U446Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U625Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U927Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U928Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 57
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1157Z1P",
    stop_sequence: 58
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1035Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1036Z1P",
    stop_sequence: 60
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U1037Z1P",
    stop_sequence: 61
  },
  {
    route_id: "L910",
    direction_id: 0,
    stop_id: "U24Z1P",
    stop_sequence: 62
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U453Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U654Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U633Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U2707Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U154Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U973Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U732Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U3052Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U770Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U842Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U963Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U967Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U338Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U286Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U353Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U916Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U774Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U982Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U972Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U1116Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U1032Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U433Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U190Z6P",
    stop_sequence: 24
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U400Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U142Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U480Z4P",
    stop_sequence: 27
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U480Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U87Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U100Z5P",
    stop_sequence: 30
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U48Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U196Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U305Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U622Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U870Z3P",
    stop_sequence: 35
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U54Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U993Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U990Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U683Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U332Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U665Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U603Z4P",
    stop_sequence: 42
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U603Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U500Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U606Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U405Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U89Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U771Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U125Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U766Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U368Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U451Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U63Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U791Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U114Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L911",
    direction_id: 1,
    stop_id: "U1102Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U1102Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U114Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U791Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U63Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U451Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U368Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U766Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U125Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U771Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U89Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U405Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U606Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U500Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U603Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U603Z3P",
    stop_sequence: 15
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U665Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U332Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U683Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U990Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U993Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U54Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U870Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U622Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U305Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U196Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U48Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U100Z6P",
    stop_sequence: 27
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U87Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U480Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U480Z3P",
    stop_sequence: 30
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U142Z4P",
    stop_sequence: 31
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U400Z3P",
    stop_sequence: 32
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U190Z5P",
    stop_sequence: 33
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U433Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U601Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U1032Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U1116Z3P",
    stop_sequence: 37
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U972Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U982Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U774Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U916Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U353Z1P",
    stop_sequence: 42
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 43
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 44
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U338Z1P",
    stop_sequence: 45
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U967Z4P",
    stop_sequence: 46
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U842Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U978Z2P",
    stop_sequence: 48
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U770Z2P",
    stop_sequence: 49
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U3052Z2P",
    stop_sequence: 50
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U732Z2P",
    stop_sequence: 51
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U973Z2P",
    stop_sequence: 52
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U154Z4P",
    stop_sequence: 53
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U2707Z2P",
    stop_sequence: 54
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U633Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U654Z2P",
    stop_sequence: 56
  },
  {
    route_id: "L911",
    direction_id: 0,
    stop_id: "U453Z9P",
    stop_sequence: 57
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U1041Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U408Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U279Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U1031Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U452Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U859Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 8
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U1129Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U1057Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U1061Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U1070Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U137Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L912",
    direction_id: 1,
    stop_id: "U72Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U72Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U137Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U1070Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U1061Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U1057Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U1129Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U897Z10P",
    stop_sequence: 7
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U859Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U452Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U1031Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U279Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U408Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L912",
    direction_id: 0,
    stop_id: "U1041Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U185Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U1591Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U1584Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U4428Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U545Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U546Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U871Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U369Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U783Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U335Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U804Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U194Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U1336Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U857Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U488Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U377Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U1221Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U141Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U697Z5P",
    stop_sequence: 22
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U751Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U183Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U37Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U680Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U29Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U855Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U518Z4P",
    stop_sequence: 29
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U118Z3P",
    stop_sequence: 30
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U516Z4P",
    stop_sequence: 31
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U743Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U2787Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U69Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U512Z4P",
    stop_sequence: 35
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U1074Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U763Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U678Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U498Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U225Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U134Z5P",
    stop_sequence: 41
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U474Z4P",
    stop_sequence: 42
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U442Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U603Z3P",
    stop_sequence: 44
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U665Z2P",
    stop_sequence: 45
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U332Z2P",
    stop_sequence: 46
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U467Z2P",
    stop_sequence: 47
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U740Z3P",
    stop_sequence: 48
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U78Z3P",
    stop_sequence: 49
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U675Z4P",
    stop_sequence: 50
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U688Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U1011Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U864Z11P",
    stop_sequence: 53
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U555Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U92Z1P",
    stop_sequence: 55
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U94Z1P",
    stop_sequence: 56
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U374Z1P",
    stop_sequence: 57
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U410Z1P",
    stop_sequence: 58
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U82Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L913",
    direction_id: 1,
    stop_id: "U93Z1P",
    stop_sequence: 60
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U93Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U82Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U374Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U2753Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U92Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U555Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U864Z9P",
    stop_sequence: 7
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U1011Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U688Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U675Z9P",
    stop_sequence: 10
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U675Z8P",
    stop_sequence: 11
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U78Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U740Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U467Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U332Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U665Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U603Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U442Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U474Z6P",
    stop_sequence: 19
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U134Z4P",
    stop_sequence: 20
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U225Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U678Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U763Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U1074Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U512Z5P",
    stop_sequence: 25
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U69Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U2787Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U743Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U516Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U118Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U518Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U855Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U29Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U680Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U37Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U183Z3P",
    stop_sequence: 36
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U751Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U697Z3P",
    stop_sequence: 38
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U322Z3P",
    stop_sequence: 39
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U417Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U377Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 44
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U497Z5P",
    stop_sequence: 45
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U857Z1P",
    stop_sequence: 46
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U494Z1P",
    stop_sequence: 47
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U194Z1P",
    stop_sequence: 48
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U804Z1P",
    stop_sequence: 49
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U335Z1P",
    stop_sequence: 50
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U783Z1P",
    stop_sequence: 51
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U369Z1P",
    stop_sequence: 52
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U871Z1P",
    stop_sequence: 53
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U546Z1P",
    stop_sequence: 54
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U545Z3P",
    stop_sequence: 55
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U4428Z2P",
    stop_sequence: 56
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U1584Z1P",
    stop_sequence: 57
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U1591Z1P",
    stop_sequence: 58
  },
  {
    route_id: "L913",
    direction_id: 0,
    stop_id: "U185Z1P",
    stop_sequence: 59
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U63Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U791Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U934Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U248Z11P",
    stop_sequence: 4
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U1083Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U64Z6P",
    stop_sequence: 6
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U399Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L915",
    direction_id: 1,
    stop_id: "U384Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U384Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U399Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U64Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U1083Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U248Z12P",
    stop_sequence: 5
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U934Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U791Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L915",
    direction_id: 0,
    stop_id: "U63Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U179Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U9549Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U145Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U243Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U243Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U202Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U323Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U2769Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U327Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U325Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U1Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U405Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U606Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U500Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U603Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U754Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U251Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U1413Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L916",
    direction_id: 1,
    stop_id: "U529Z8P",
    stop_sequence: 19
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U529Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U1413Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U251Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U754Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U603Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U500Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U606Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U405Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U1Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U325Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U327Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U2769Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U323Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U202Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U243Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U243Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U145Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U9549Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L916",
    direction_id: 0,
    stop_id: "U179Z5P",
    stop_sequence: 19
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U826Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U3242Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U962Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U287Z6P",
    stop_sequence: 4
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U270Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U430Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U795Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U291Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U312Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U167Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U651Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U467Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U740Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L103",
    direction_id: 1,
    stop_id: "U78Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U78Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U740Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U651Z5P",
    stop_sequence: 3
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U167Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U312Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U291Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U795Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U430Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U270Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U287Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U962Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U3242Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L103",
    direction_id: 0,
    stop_id: "U826Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U97Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U801Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U158Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U349Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U193Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U318Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U207Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U313Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U1197Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U137Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U970Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U657Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U652Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U135Z5P",
    stop_sequence: 14
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U242Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U499Z6P",
    stop_sequence: 16
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U65Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U1000Z12P",
    stop_sequence: 18
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U405Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U89Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U771Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U125Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U766Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U368Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U752Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U1034Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U222Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U2778Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U769Z3P",
    stop_sequence: 29
  },
  {
    route_id: "L110",
    direction_id: 1,
    stop_id: "U293Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U293Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U769Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U2778Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U222Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U1034Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U752Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U368Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U766Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U125Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U771Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U89Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U405Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U1000Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U1000Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U65Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U499Z5P",
    stop_sequence: 16
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U242Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U135Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U652Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U657Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U970Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U137Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U1197Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U313Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U207Z3P",
    stop_sequence: 25
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U318Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U193Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U158Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U349Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U801Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L110",
    direction_id: 0,
    stop_id: "U97Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U52Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U1131Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U1341Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U1132Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U1334Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U1131Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L115",
    direction_id: 0,
    stop_id: "U52Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U3236Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U991Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U280Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U224Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U1006Z52P",
    stop_sequence: 5
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U2602Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U929Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U939Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U1158Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U76Z4P",
    stop_sequence: 10
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U17Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U727Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U772Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U995Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U927Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U625Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U446Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U658Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U658Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U328Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U60Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U494Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U857Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U497Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U722Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U893Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U488Z8P",
    stop_sequence: 27
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U441Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U1048Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U937Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U938Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U343Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L117",
    direction_id: 1,
    stop_id: "U50Z6P",
    stop_sequence: 33
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U50Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U343Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U938Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U937Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U1048Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U441Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U488Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U893Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U722Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U497Z5P",
    stop_sequence: 10
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U857Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U494Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U60Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U328Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U658Z5P",
    stop_sequence: 15
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U658Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U446Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U625Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U246Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U772Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U727Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U17Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U76Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U1158Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U939Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U929Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U1006Z51P",
    stop_sequence: 27
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U62Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U280Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U280Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U991Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L117",
    direction_id: 0,
    stop_id: "U3236Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U4262Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U4261Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U4260Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U694Z4P",
    stop_sequence: 4
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U266Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U3235Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U128Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U834Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U357Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U767Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U575Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L146",
    direction_id: 1,
    stop_id: "U921Z9P",
    stop_sequence: 12
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U921Z6P",
    stop_sequence: 1
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U575Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U767Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U357Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U834Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U128Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U266Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U694Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U4260Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U4261Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L146",
    direction_id: 0,
    stop_id: "U4262Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U805Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3234Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3233Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3232Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U363Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3231Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U835Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U319Z12P",
    stop_sequence: 8
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U184Z14P",
    stop_sequence: 9
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U957Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3228Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U84Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3238Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L153",
    direction_id: 1,
    stop_id: "U3227Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U3227Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U84Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U3228Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U957Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U184Z13P",
    stop_sequence: 5
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U319Z11P",
    stop_sequence: 6
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U835Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U3231Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U363Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U3232Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U3233Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L153",
    direction_id: 0,
    stop_id: "U805Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U548Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U660Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U660Z5P",
    stop_sequence: 3
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U359Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U1018Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U359Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U1160Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U4572Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U128Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U834Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U357Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U767Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U575Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U921Z9P",
    stop_sequence: 14
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U921Z7P",
    stop_sequence: 15
  },
  {
    route_id: "L155",
    direction_id: 1,
    stop_id: "U2954Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U2954Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U921Z6P",
    stop_sequence: 2
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U575Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U767Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U357Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U834Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U128Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U4572Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U1160Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U1018Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U359Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U660Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U1387Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L155",
    direction_id: 0,
    stop_id: "U548Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U1016Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U621Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U903Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U719Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U811Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U3008Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U36Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U432Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U28Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U448Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U97Z3P",
    stop_sequence: 11
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U1390Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U1161Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U742Z4P",
    stop_sequence: 14
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U820Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U793Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U794Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U1014Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U741Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U389Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U404Z4P",
    stop_sequence: 21
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U358Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L163",
    direction_id: 1,
    stop_id: "U1071Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U1071Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U358Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U404Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U389Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U741Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U1014Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U794Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U793Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U820Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U742Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U1161Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U1390Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U97Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U448Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U28Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U432Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U36Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U3008Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U811Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U719Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U903Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U621Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L163",
    direction_id: 0,
    stop_id: "U1016Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U362Z12P",
    stop_sequence: 1
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U563Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U229Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U2608Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U3045Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U844Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U507Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U541Z6P",
    stop_sequence: 8
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U2791Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U3245Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U872Z6P",
    stop_sequence: 11
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U610Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U364Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U31Z7P",
    stop_sequence: 14
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U3021Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U3022Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U3023Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U667Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U236Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U843Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U1063Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U244Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U635Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U2766Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U612Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U706Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U913Z3P",
    stop_sequence: 27
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U1209Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U35Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U1148Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L164",
    direction_id: 1,
    stop_id: "U687Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U687Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U1148Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U35Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U1209Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U913Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U706Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U612Z5P",
    stop_sequence: 7
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U2766Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U635Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U244Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U1063Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U843Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U236Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U667Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U3023Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U3022Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U3021Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U31Z8P",
    stop_sequence: 18
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U364Z4P",
    stop_sequence: 19
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U610Z6P",
    stop_sequence: 20
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U872Z8P",
    stop_sequence: 21
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U3245Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U2791Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U541Z7P",
    stop_sequence: 24
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U507Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U844Z4P",
    stop_sequence: 26
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U3045Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U2609Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U2608Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U229Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U563Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L164",
    direction_id: 0,
    stop_id: "U362Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U4130Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U55Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U39Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U4129Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U4128Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U78Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U985Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U881Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U54Z5P",
    stop_sequence: 9
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U3005Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U3006Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U3007Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U870Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U54Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U993Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U990Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1151Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U603Z6P",
    stop_sequence: 18
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U665Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U332Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U332Z3P",
    stop_sequence: 21
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U351Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U2704Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1170Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U606Z5P",
    stop_sequence: 25
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U405Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1397Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1396Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1395Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1394Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U125Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U766Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U368Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U451Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U63Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U791Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U934Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U248Z11P",
    stop_sequence: 38
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1083Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U64Z6P",
    stop_sequence: 40
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U1392Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L166",
    direction_id: 1,
    stop_id: "U293Z4P",
    stop_sequence: 42
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U769Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U293Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1392Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U64Z3P",
    stop_sequence: 4
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1083Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U248Z12P",
    stop_sequence: 6
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U934Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U791Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U63Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U451Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U368Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U766Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U125Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1394Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1395Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1396Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1397Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U405Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U606Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1170Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U2704Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U351Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U332Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U665Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U603Z5P",
    stop_sequence: 25
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U1151Z3P",
    stop_sequence: 26
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U990Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U993Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U54Z5P",
    stop_sequence: 29
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U3005Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U3006Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U3007Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U870Z3P",
    stop_sequence: 33
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U54Z3P",
    stop_sequence: 34
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U54Z4P",
    stop_sequence: 35
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U881Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U985Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U78Z3P",
    stop_sequence: 38
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U4128Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U4129Z1P",
    stop_sequence: 40
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U39Z2P",
    stop_sequence: 41
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U55Z2P",
    stop_sequence: 42
  },
  {
    route_id: "L166",
    direction_id: 0,
    stop_id: "U4130Z1P",
    stop_sequence: 43
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1041Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U408Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U279Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1031Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U452Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U859Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 8
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U897Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U897Z7P",
    stop_sequence: 10
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1129Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1057Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1061Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1070Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1197Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U313Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U207Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U535Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U884Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1022Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U538Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U707Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U750Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U585Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L171",
    direction_id: 1,
    stop_id: "U1071Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1071Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U585Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U750Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U707Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U538Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U884Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U535Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U207Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U313Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1197Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1070Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1061Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1057Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1129Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U897Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U897Z5P",
    stop_sequence: 16
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U859Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U452Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1031Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U279Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U408Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L171",
    direction_id: 0,
    stop_id: "U1041Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U852Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U346Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U179Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U9549Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U1415Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U762Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U457Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U51Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U1414Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U342Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U173Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U72Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U818Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U650Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U1056Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L186",
    direction_id: 1,
    stop_id: "U897Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U897Z7P",
    stop_sequence: 1
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U1056Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U650Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U818Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U72Z5P",
    stop_sequence: 5
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U173Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U212Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U342Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U1414Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U51Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U457Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U1415Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U4269Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U9549Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U179Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U346Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L186",
    direction_id: 0,
    stop_id: "U852Z3P",
    stop_sequence: 17
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U689Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U32Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U2956Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U1410Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U2957Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U2958Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U2959Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U1408Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U703Z5P",
    stop_sequence: 9
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U360Z10P",
    stop_sequence: 10
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U3249Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U361Z6P",
    stop_sequence: 12
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U2952Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L194",
    direction_id: 1,
    stop_id: "U2953Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U2953Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U361Z4P",
    stop_sequence: 2
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U703Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U1408Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U2962Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U2963Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U1410Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U1409Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U2956Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U32Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L194",
    direction_id: 0,
    stop_id: "U689Z9P",
    stop_sequence: 11
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U286Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U4133Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U286Z13P",
    stop_sequence: 3
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U386Z12P",
    stop_sequence: 4
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U1020Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U4174Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U43Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U735Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U381Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U424Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U181Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U601Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U1032Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U1116Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U972Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U982Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U271Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U307Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U2794Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U729Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U309Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U611Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U799Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U909Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U378Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U1096Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U908Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U819Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U488Z8P",
    stop_sequence: 29
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U441Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U1048Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U937Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U938Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U343Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L203",
    direction_id: 1,
    stop_id: "U50Z6P",
    stop_sequence: 35
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U50Z5P",
    stop_sequence: 1
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U343Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U938Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U937Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U1048Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U441Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U488Z6P",
    stop_sequence: 7
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U257Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U819Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U908Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U378Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U909Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U799Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U611Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U309Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U729Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U2794Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U307Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U271Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U982Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U972Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U1116Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U1032Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U601Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U181Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U424Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U381Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U735Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U43Z2P",
    stop_sequence: 29
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U4174Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U1020Z2P",
    stop_sequence: 31
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U386Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U4133Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L203",
    direction_id: 0,
    stop_id: "U286Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U967Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U842Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U978Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U770Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U3052Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U732Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U973Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U154Z4P",
    stop_sequence: 8
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U154Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1069Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1099Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U96Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U310Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U741Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1014Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U794Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U793Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U820Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U742Z3P",
    stop_sequence: 19
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1161Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1390Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U3015Z3P",
    stop_sequence: 22
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1163Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U6004Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U986Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U438Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U845Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U200Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U2603Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U30Z2P",
    stop_sequence: 30
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U452Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1031Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U862Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1352Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1351Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1378Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1288Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L204",
    direction_id: 1,
    stop_id: "U1291Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1291Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1288Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1378Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1351Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1352Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1347Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U862Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1031Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U452Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U3024Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U30Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U2603Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U200Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U253Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U438Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U986Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U6004Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1163Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1162Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U3015Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1390Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1161Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U742Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U820Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U793Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U794Z2P",
    stop_sequence: 26
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1014Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U741Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U310Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U96Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1099Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U1069Z4P",
    stop_sequence: 32
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U154Z3P",
    stop_sequence: 33
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U973Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U732Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U3052Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U770Z1P",
    stop_sequence: 37
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U842Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U963Z1P",
    stop_sequence: 39
  },
  {
    route_id: "L204",
    direction_id: 0,
    stop_id: "U967Z3P",
    stop_sequence: 40
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U1165Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U1164Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U1163Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U1162Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U3015Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U801Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U349Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U193Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U318Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U4887Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U4108Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U793Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U794Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U1014Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U741Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U389Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U404Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U358Z4P",
    stop_sequence: 18
  },
  {
    route_id: "L208",
    direction_id: 1,
    stop_id: "U1071Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U1071Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U358Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U404Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U389Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U741Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U1014Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U794Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U793Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U4108Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U4887Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U318Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U193Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U349Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U801Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U97Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U3015Z3P",
    stop_sequence: 16
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U1163Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U4240Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U1164Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L208",
    direction_id: 0,
    stop_id: "U1165Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U461Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U336Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U336Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U808Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1233Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U490Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1405Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U568Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U311Z4P",
    stop_sequence: 9
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1283Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1935Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U811Z13P",
    stop_sequence: 12
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U811Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U3008Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U36Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U432Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U28Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U2276Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U880Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1367Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U926Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U726Z4P",
    stop_sequence: 22
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U883Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1041Z14P",
    stop_sequence: 24
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U408Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1347Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1348Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1288Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1291Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U4435Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U4132Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U762Z2P",
    stop_sequence: 32
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1276Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1120Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U243Z16P",
    stop_sequence: 35
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U4000Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U526Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U171Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U109Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U803Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L209",
    direction_id: 1,
    stop_id: "U1000Z6P",
    stop_sequence: 41
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1000Z10P",
    stop_sequence: 1
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1000Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U803Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U109Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U171Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U526Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U243Z15P",
    stop_sequence: 7
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1120Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1276Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U762Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U4132Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U4435Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1291Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1288Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1348Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1347Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U408Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1041Z13P",
    stop_sequence: 18
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U883Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U726Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U926Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1367Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U880Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U2276Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U28Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U432Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U36Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U3008Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U811Z14P",
    stop_sequence: 29
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1935Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U105Z1P",
    stop_sequence: 31
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1283Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U311Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U568Z2P",
    stop_sequence: 34
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1405Z2P",
    stop_sequence: 35
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U490Z2P",
    stop_sequence: 36
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U1233Z2P",
    stop_sequence: 37
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U808Z2P",
    stop_sequence: 38
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U336Z2P",
    stop_sequence: 39
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U542Z2P",
    stop_sequence: 40
  },
  {
    route_id: "L209",
    direction_id: 0,
    stop_id: "U461Z1P",
    stop_sequence: 41
  },
  {
    route_id: "L210",
    direction_id: 1,
    stop_id: "U4106Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L210",
    direction_id: 1,
    stop_id: "U4105Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L210",
    direction_id: 1,
    stop_id: "U4180Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L210",
    direction_id: 1,
    stop_id: "U4104Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L210",
    direction_id: 1,
    stop_id: "U170Z3P",
    stop_sequence: 5
  },
  {
    route_id: "L210",
    direction_id: 1,
    stop_id: "U454Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U454Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U170Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U811Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U1101Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U4104Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U4180Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U4105Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L210",
    direction_id: 0,
    stop_id: "U4106Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L211",
    direction_id: 1,
    stop_id: "U1016Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L211",
    direction_id: 1,
    stop_id: "U621Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L211",
    direction_id: 1,
    stop_id: "U903Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L211",
    direction_id: 1,
    stop_id: "U719Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L211",
    direction_id: 1,
    stop_id: "U170Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L211",
    direction_id: 1,
    stop_id: "U454Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U454Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U170Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U811Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U719Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U903Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U621Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L211",
    direction_id: 0,
    stop_id: "U1016Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U4107Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U4171Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U4137Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U4136Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U686Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U684Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L212",
    direction_id: 1,
    stop_id: "U454Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L212",
    direction_id: 0,
    stop_id: "U454Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L212",
    direction_id: 0,
    stop_id: "U684Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L212",
    direction_id: 0,
    stop_id: "U686Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L212",
    direction_id: 0,
    stop_id: "U4136Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L212",
    direction_id: 0,
    stop_id: "U4137Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L212",
    direction_id: 0,
    stop_id: "U4107Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U897Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U4170Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1347Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1348Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1288Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U9728Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1288Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1378Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1351Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U1352Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U897Z11P",
    stop_sequence: 11
  },
  {
    route_id: "L220",
    direction_id: 0,
    stop_id: "U897Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U256Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U932Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U18Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U686Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U684Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U454Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U170Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U811Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U3008Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U36Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U432Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U28Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U2276Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U880Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U1367Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U926Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U726Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U883Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U1041Z14P",
    stop_sequence: 19
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U408Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U279Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U1031Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U452Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U859Z2P",
    stop_sequence: 24
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 26
  },
  {
    route_id: "L221",
    direction_id: 1,
    stop_id: "U897Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U897Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U859Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U452Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U1031Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U279Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U408Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U1041Z13P",
    stop_sequence: 8
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U883Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U726Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U926Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U1367Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U880Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U2276Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U28Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U432Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U36Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U3008Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U170Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U454Z3P",
    stop_sequence: 20
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U684Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U686Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U18Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U932Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L221",
    direction_id: 0,
    stop_id: "U256Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L222",
    direction_id: 1,
    stop_id: "U986Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L222",
    direction_id: 1,
    stop_id: "U438Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L222",
    direction_id: 1,
    stop_id: "U407Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L222",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L222",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 5
  },
  {
    route_id: "L222",
    direction_id: 1,
    stop_id: "U897Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L222",
    direction_id: 0,
    stop_id: "U897Z4P",
    stop_sequence: 1
  },
  {
    route_id: "L222",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L222",
    direction_id: 0,
    stop_id: "U407Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L222",
    direction_id: 0,
    stop_id: "U438Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L222",
    direction_id: 0,
    stop_id: "U986Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U30Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U2603Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U200Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U253Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U407Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 7
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U897Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U897Z7P",
    stop_sequence: 9
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U1129Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U1091Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L223",
    direction_id: 1,
    stop_id: "U6010Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U6010Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U1091Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U1129Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U897Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U897Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U407Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U845Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U200Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U2603Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L223",
    direction_id: 0,
    stop_id: "U30Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1041Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1041Z13P",
    stop_sequence: 2
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U6006Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U6005Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U30Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U2603Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U986Z4P",
    stop_sequence: 7
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U438Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U407Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U188Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U3011Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1235Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U897Z7P",
    stop_sequence: 13
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1129Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1091Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1057Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1061Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1070Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1197Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1060Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U3012Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1051Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U9880Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U207Z3P",
    stop_sequence: 24
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U318Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U193Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U158Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U3013Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U3015Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U97Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U3015Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U1163Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U6001Z1P",
    stop_sequence: 33
  },
  {
    route_id: "L224",
    direction_id: 1,
    stop_id: "U2763Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U2763Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U6001Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1163Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1162Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U3015Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U97Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U3015Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U3013Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U158Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U349Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U193Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U318Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U207Z4P",
    stop_sequence: 13
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U9880Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1051Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U3012Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1060Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1197Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1070Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1061Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1057Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1091Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1129Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U897Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U897Z4P",
    stop_sequence: 25
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1235Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U3011Z2P",
    stop_sequence: 27
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U188Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U407Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U438Z1P",
    stop_sequence: 30
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U986Z3P",
    stop_sequence: 31
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U2603Z1P",
    stop_sequence: 32
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U30Z2P",
    stop_sequence: 33
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U6005Z1P",
    stop_sequence: 34
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U6006Z1P",
    stop_sequence: 35
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U3237Z1P",
    stop_sequence: 36
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1041Z14P",
    stop_sequence: 37
  },
  {
    route_id: "L224",
    direction_id: 0,
    stop_id: "U1041Z1P",
    stop_sequence: 38
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U159Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U340Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U525Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U277Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U725Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U838Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U828Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U808Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U336Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U542Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U435Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U402Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U26Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U967Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U338Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L226",
    direction_id: 1,
    stop_id: "U286Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U286Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U338Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U967Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U26Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U402Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U435Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U461Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U336Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U336Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U808Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U828Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U838Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U725Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U277Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U525Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U340Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L226",
    direction_id: 0,
    stop_id: "U159Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U487Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U132Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U1054Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U455Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U1294Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U445Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U1004Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U277Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U725Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U838Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U828Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U808Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U336Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U542Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U435Z4P",
    stop_sequence: 15
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U402Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U26Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U967Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U338Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U151Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L227",
    direction_id: 1,
    stop_id: "U286Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U286Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U286Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U151Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U338Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U967Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U26Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U402Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U435Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U461Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U336Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U336Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U808Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U828Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U838Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U725Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U277Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U1004Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U445Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U1294Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U455Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U1054Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U132Z1P",
    stop_sequence: 22
  },
  {
    route_id: "L227",
    direction_id: 0,
    stop_id: "U487Z1P",
    stop_sequence: 23
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U159Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U22Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1385Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U136Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U3053Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U336Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U808Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U336Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U542Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U461Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U9691Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U9692Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U108Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1059Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1115Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U107Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U9694Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U793Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U794Z2P",
    stop_sequence: 19
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1014Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U741Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U389Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U404Z4P",
    stop_sequence: 23
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U358Z4P",
    stop_sequence: 24
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1071Z2P",
    stop_sequence: 25
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1071Z7P",
    stop_sequence: 26
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U70Z6P",
    stop_sequence: 27
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U827Z2P",
    stop_sequence: 28
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U1387Z1P",
    stop_sequence: 29
  },
  {
    route_id: "L228",
    direction_id: 1,
    stop_id: "U548Z4P",
    stop_sequence: 30
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U548Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U660Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U827Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U70Z7P",
    stop_sequence: 4
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U1071Z6P",
    stop_sequence: 5
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U1071Z3P",
    stop_sequence: 6
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U358Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U404Z3P",
    stop_sequence: 8
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U389Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U741Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U1014Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U794Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U793Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U9694Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U107Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U1115Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U1059Z2P",
    stop_sequence: 17
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U108Z2P",
    stop_sequence: 18
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U9692Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U9691Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U9690Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U461Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U336Z3P",
    stop_sequence: 23
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U3053Z1P",
    stop_sequence: 24
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U136Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U1385Z1P",
    stop_sequence: 26
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U22Z1P",
    stop_sequence: 27
  },
  {
    route_id: "L228",
    direction_id: 0,
    stop_id: "U159Z1P",
    stop_sequence: 28
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U286Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U286Z5P",
    stop_sequence: 2
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U151Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U491Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U1012Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U842Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U978Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U770Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U3052Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U732Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U973Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U154Z4P",
    stop_sequence: 12
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U154Z2P",
    stop_sequence: 13
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U1069Z3P",
    stop_sequence: 14
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U215Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U108Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U1059Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U1115Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U107Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U4117Z2P",
    stop_sequence: 20
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U1342Z1P",
    stop_sequence: 21
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U448Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U1235Z2P",
    stop_sequence: 23
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U897Z11P",
    stop_sequence: 24
  },
  {
    route_id: "L240",
    direction_id: 1,
    stop_id: "U897Z1P",
    stop_sequence: 25
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U897Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U1235Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U448Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U1344Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U4117Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U107Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U1115Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U1059Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U108Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U215Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U1069Z4P",
    stop_sequence: 11
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U154Z3P",
    stop_sequence: 12
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U973Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U732Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U3052Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U770Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U842Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U963Z1P",
    stop_sequence: 18
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U1012Z1P",
    stop_sequence: 19
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U491Z1P",
    stop_sequence: 20
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U151Z2P",
    stop_sequence: 21
  },
  {
    route_id: "L240",
    direction_id: 0,
    stop_id: "U286Z2P",
    stop_sequence: 22
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U4287Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U4357Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U1225Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U341Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U777Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U4290Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U4291Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U14Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U578Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U1039Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U917Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U802Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U814Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L242",
    direction_id: 1,
    stop_id: "U902Z6P",
    stop_sequence: 14
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U902Z3P",
    stop_sequence: 1
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U802Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U917Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U1039Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U578Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U1701Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U4291Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U4290Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U4289Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U777Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U341Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U1225Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U4357Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L242",
    direction_id: 0,
    stop_id: "U4287Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L243",
    direction_id: 1,
    stop_id: "U4286Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L243",
    direction_id: 1,
    stop_id: "U4288Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L243",
    direction_id: 1,
    stop_id: "U1225Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L243",
    direction_id: 0,
    stop_id: "U1225Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L243",
    direction_id: 0,
    stop_id: "U4288Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L243",
    direction_id: 0,
    stop_id: "U4286Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U195Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U409Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U166Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U641Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U160Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U403Z7P",
    stop_sequence: 6
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U472Z3P",
    stop_sequence: 7
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U3014Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U633Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U2707Z1P",
    stop_sequence: 10
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U154Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U973Z1P",
    stop_sequence: 12
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U732Z1P",
    stop_sequence: 13
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U3052Z1P",
    stop_sequence: 14
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U770Z1P",
    stop_sequence: 15
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U842Z1P",
    stop_sequence: 16
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U963Z1P",
    stop_sequence: 17
  },
  {
    route_id: "L254",
    direction_id: 0,
    stop_id: "U1012Z71P",
    stop_sequence: 18
  },
  {
    route_id: "L257",
    direction_id: 1,
    stop_id: "U934Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L257",
    direction_id: 1,
    stop_id: "U64Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L257",
    direction_id: 1,
    stop_id: "U399Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L257",
    direction_id: 1,
    stop_id: "U384Z11P",
    stop_sequence: 4
  },
  {
    route_id: "L257",
    direction_id: 0,
    stop_id: "U384Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L257",
    direction_id: 0,
    stop_id: "U399Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L257",
    direction_id: 0,
    stop_id: "U64Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L257",
    direction_id: 0,
    stop_id: "U934Z74P",
    stop_sequence: 4
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U147Z8P",
    stop_sequence: 1
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U147Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U428Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U904Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U831Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U146Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U682Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U1191Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U1050Z1P",
    stop_sequence: 9
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U1030Z3P",
    stop_sequence: 10
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U1125Z1P",
    stop_sequence: 11
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U1191Z2P",
    stop_sequence: 12
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U682Z3P",
    stop_sequence: 13
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U146Z2P",
    stop_sequence: 14
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U904Z2P",
    stop_sequence: 15
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U428Z2P",
    stop_sequence: 16
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U147Z4P",
    stop_sequence: 17
  },
  {
    route_id: "L258",
    direction_id: 0,
    stop_id: "U147Z7P",
    stop_sequence: 18
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U719Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U903Z1P",
    stop_sequence: 2
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U621Z1P",
    stop_sequence: 3
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U1016Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U621Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U903Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U719Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U1101Z1P",
    stop_sequence: 8
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U170Z3P",
    stop_sequence: 9
  },
  {
    route_id: "L264",
    direction_id: 1,
    stop_id: "U170Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U1101Z1P",
    stop_sequence: 1
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U170Z3P",
    stop_sequence: 2
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U170Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U811Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U719Z1P",
    stop_sequence: 5
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U903Z1P",
    stop_sequence: 6
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U621Z1P",
    stop_sequence: 7
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U1016Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U621Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U903Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L264",
    direction_id: 0,
    stop_id: "U719Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L268",
    direction_id: 0,
    stop_id: "U921Z9P",
    stop_sequence: 1
  },
  {
    route_id: "L268",
    direction_id: 0,
    stop_id: "U515Z52P",
    stop_sequence: 2
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U547Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U382Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U6Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U338Z1P",
    stop_sequence: 4
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U967Z4P",
    stop_sequence: 5
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U842Z2P",
    stop_sequence: 6
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U978Z2P",
    stop_sequence: 7
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U770Z2P",
    stop_sequence: 8
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U3052Z2P",
    stop_sequence: 9
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U732Z2P",
    stop_sequence: 10
  },
  {
    route_id: "L270",
    direction_id: 0,
    stop_id: "U973Z2P",
    stop_sequence: 11
  },
  {
    route_id: "L273",
    direction_id: 0,
    stop_id: "U1071Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L273",
    direction_id: 0,
    stop_id: "U1222Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L273",
    direction_id: 0,
    stop_id: "U1323Z3P",
    stop_sequence: 3
  },
  {
    route_id: "L276",
    direction_id: 0,
    stop_id: "U164Z2P",
    stop_sequence: 1
  },
  {
    route_id: "L276",
    direction_id: 0,
    stop_id: "U165Z2P",
    stop_sequence: 2
  },
  {
    route_id: "L276",
    direction_id: 0,
    stop_id: "U1038Z2P",
    stop_sequence: 3
  },
  {
    route_id: "L276",
    direction_id: 0,
    stop_id: "U731Z2P",
    stop_sequence: 4
  },
  {
    route_id: "L276",
    direction_id: 0,
    stop_id: "U730Z2P",
    stop_sequence: 5
  },
  {
    route_id: "L276",
    direction_id: 0,
    stop_id: "U106Z4P",
    stop_sequence: 6
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4328Z2",
    stop_sequence: 1
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4327Z2",
    stop_sequence: 2
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U3095Z2",
    stop_sequence: 3
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U2889Z3",
    stop_sequence: 4
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4325Z2",
    stop_sequence: 5
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4313Z7",
    stop_sequence: 6
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U3094Z2",
    stop_sequence: 7
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4310Z2",
    stop_sequence: 8
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4308Z2",
    stop_sequence: 9
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4306Z2",
    stop_sequence: 10
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4304Z2",
    stop_sequence: 11
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4303Z2",
    stop_sequence: 12
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4738Z2",
    stop_sequence: 13
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4302Z2",
    stop_sequence: 14
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U4301Z2",
    stop_sequence: 15
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U80Z4",
    stop_sequence: 16
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U85Z8",
    stop_sequence: 17
  },
  {
    route_id: "L300",
    direction_id: 1,
    stop_id: "U462Z15",
    stop_sequence: 18
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U462Z12",
    stop_sequence: 1
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U85Z9",
    stop_sequence: 2
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U80Z3",
    stop_sequence: 3
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4301Z1",
    stop_sequence: 4
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4302Z1",
    stop_sequence: 5
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4738Z1",
    stop_sequence: 6
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4303Z1",
    stop_sequence: 7
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4304Z1",
    stop_sequence: 8
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4306Z1",
    stop_sequence: 9
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4308Z1",
    stop_sequence: 10
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4310Z1",
    stop_sequence: 11
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U3094Z1",
    stop_sequence: 12
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4313Z3",
    stop_sequence: 13
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4325Z1",
    stop_sequence: 14
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U2889Z1",
    stop_sequence: 15
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U3095Z1",
    stop_sequence: 16
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4327Z1",
    stop_sequence: 17
  },
  {
    route_id: "L300",
    direction_id: 0,
    stop_id: "U4328Z1",
    stop_sequence: 18
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U1237Z1",
    stop_sequence: 1
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U1671Z1",
    stop_sequence: 2
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U2572Z2",
    stop_sequence: 3
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U1957Z2",
    stop_sequence: 4
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U1290Z2",
    stop_sequence: 5
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U179Z4",
    stop_sequence: 6
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U9549Z2",
    stop_sequence: 7
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U145Z2",
    stop_sequence: 8
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U243Z2",
    stop_sequence: 9
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U4000Z2",
    stop_sequence: 10
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U526Z2",
    stop_sequence: 11
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U171Z2",
    stop_sequence: 12
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U109Z2",
    stop_sequence: 13
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U803Z2",
    stop_sequence: 14
  },
  {
    route_id: "L302",
    direction_id: 1,
    stop_id: "U1000Z6",
    stop_sequence: 15
  },
  {
    route_id: "L302",
    direction_id: 0,
    stop_id: "U1000Z10",
    stop_sequence: 1
  },
  {
    route_id: "L302",
    direction_id: 0,
    stop_id: "U1000Z2",
    stop_sequence: 2
  },
  {
    route_id: "L302",
    direction_id: 0,
    stop_id: "U803Z1",
  },
  {
];