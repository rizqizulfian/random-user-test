export const addFullnameProperty = (users) => {
  let results = [];
  for (let element of users) {
    element.name.fullNames = `${element.name.first} ${element.name.last}`;
    results.push(element);
  }

  return results;
};

export const sortAscendingName = (a, b) => {
  if (a.name.fullNames < b.name.fullNames) {
    return -1;
  }
  if (a.name.fullNames > b.name.fullNames) {
    return 1;
  }
  return 0;
};

export const sortDescendingName = (a, b) => {
  if (a.name.fullNames > b.name.fullNames) {
    return -1;
  }
  if (a.name.fullNames < b.name.fullNames) {
    return 1;
  }
  return 0;
};

export const sortName = (users, payload, sort) => {
  if (payload) users.sort(sortAscendingName);
  else users.sort(sortDescendingName);
};

// SORT EMAIL

export const sortAscendingEmail = (a, b) => {
  if (a.email < b.email) {
    return -1;
  }
  if (a.email > b.email) {
    return 1;
  }
  return 0;
};

export const sortDescendingEmail = (a, b) => {
  if (a.email > b.email) {
    return -1;
  }
  if (a.email < b.email) {
    return 1;
  }
  return 0;
};

export const sortEmail = (users, payload) => {
  if (payload) users.sort(sortAscendingEmail);
  else users.sort(sortDescendingEmail);
};

// SORT GENDER

export const sortAscendingGender = (a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
};

export const sortDescendingGender = (a, b) => {
  if (a.gender > b.gender) {
    return -1;
  }
  if (a.gender < b.gender) {
    return 1;
  }
  return 0;
};

export const sortGender = (users, payload) => {
  if (payload) users.sort(sortAscendingGender);
  else users.sort(sortDescendingGender);
};

// SORT Registered Date

export const sortAscendingRegisteredDate = (a, b) => {
  if (a.registered.date < b.registered.date) {
    return -1;
  }
  if (a.registered.date > b.registered.date) {
    return 1;
  }
  return 0;
};

export const sortDescendingRegisteredDate = (a, b) => {
  if (a.registered.date > b.registered.date) {
    return -1;
  }
  if (a.registered.date < b.registered.date) {
    return 1;
  }
  return 0;
};

export const sortRegisteredDate = (users, payload) => {
  if (payload) users.sort(sortAscendingRegisteredDate);
  else users.sort(sortDescendingRegisteredDate);
};