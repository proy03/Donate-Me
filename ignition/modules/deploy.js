const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleStorageModule", (m) => {
  const simpleStorage = m.contract("SimpleStorage");

  const setValue = m.call(simpleStorage, "store", [7]);

  return { simpleStorage, setValue };
});
