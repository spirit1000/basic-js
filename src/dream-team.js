const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  function isMembersArray() {
    if (typeof members !== 'object') return false;
  }

  if (!members) return false;

  let teamMembersNames = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') continue;
    teamMembersNames.push(members[i]);
  }

  for (let i = 0; i < teamMembersNames.length; i++) {
    teamMembersNames[i] = teamMembersNames[i].trim().toUpperCase();

  }

  teamMembersNames.sort();

  let teamName = [];

  for (let i = 0; i < teamMembersNames.length; i++) {
    teamName.push(teamMembersNames[i].substring(0, 1));
  }

  teamName = teamName.join('');


  return teamName;
};