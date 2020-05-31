const assert = require("assert");
import { thumbWar } from "../thumbWar";
import { getWinner } from "../utils";

const winner = thumbWar("Brenno Ferreira", "Jennifer Mendez");
assert.strictEqual(winner, "Brenno Ferreira");
