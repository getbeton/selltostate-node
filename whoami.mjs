import { SellToState } from "selltostate";

const sts = new SellToState();
const me = await sts.whoami();
console.log(me);
