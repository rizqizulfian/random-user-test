export const classNamesToString = classNames => {
  return classNames.join(' ');
};

export const urlRandomUser = ({ page = '', pageSize = '', keyword = '', gender = '', sortBy = '', sortOrder = '' }) => {
  const genderFilter = gender && `&gender=${gender}`;
  const keywordFilter = keyword && `&keyword=${keyword}`;
  const pageFilter = page && `&page=${page}`;
  const pageSizeFilter = pageSize && `&pageSize=${pageSize}`;
  const sortByFilter = sortBy && `&sortBy=${sortBy}`;
  const sortOrderFilter = sortOrder && `&sortOrder=${sortOrder}`;

  return `https://randomuser.me/api/?results=10${pageFilter}${pageSizeFilter}${genderFilter}${keywordFilter}${sortByFilter}${sortOrderFilter}`;
};
