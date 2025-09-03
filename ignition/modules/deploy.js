const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleStorageModule", (m) => {
  // Deploy SimpleStorage
  const simpleStorage = m.contract("SimpleStorage");

  // Example interaction (optional, Ignition lets you script state changes)
  const setValue = m.call(simpleStorage, "store", [7]);

  return { simpleStorage, setValue };
});
