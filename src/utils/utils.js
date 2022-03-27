export const classNamesToString = classNames => {
  return classNames.join(' ');
};

export const urlRandomUser = ({ keyword = '', gender = '' }) => {
  const genderFilter = gender && `&gender=${gender}`;
  const keywordFilter = keyword && `&keyword=${keyword}`;

  return `https://randomuser.me/api/?results=10${genderFilter}${keywordFilter}`;
};
