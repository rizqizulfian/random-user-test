
# A Randomuser web application

## Introduction
This project demonstrates how to use ReactJS, Redux, Redux-Toolkit, Debounce, and Tailwindcss. It is also including fetch data from API https://randomuser.me/.


## Tech Stack

**Client:** React, Redux, Redux-Toolkit, Debounce, TailwindCSS,  


## Installation

Install with npm

```bash
  git clone https://github.com/rizqizulfian/random-user-test.git
  cd random-user-test
  npm install
  npm start
```
    
## Demo

- First Load

    On first time load, we will fetch data from API Randomuser. Then we will 
    save that data into redux store. And we will show the retrieved data in list table.

![App Screenshot](https://i.imgur.com/8DZBYbA.png)

- Search

    User able to search data with keyword.
    1. It will trigger API call https://randomuser.me/api/?results=10&keyword={keyword}
    2. It will search data username contains characters from keyword that user entered.
![App Screenshot](https://i.imgur.com/jpXMflh.png)

[Back to the top↑](#Introduction)

- Filter Gender

    User able to fetch randomuser with specific gender.
    1. Trigger API call https://randomuser.me/api/?results=10&gender={gender}.
        After fetching specific gender, retrieved data will save to redux store

![App Screenshot](https://i.imgur.com/UG4WAaF.png)

[Back to the top↑](#Introduction)

- Sort Column Name

    Will sort column Name ascending or descending
    1. Trigger API call https://randomuser.me/api/?results=10&sortBy=name&sortOrder={sort}
    2. Sort column Name by ascending or descending.
    
![App Screenshot](https://i.imgur.com/m3gMH96.png)

[Back to the top↑](#Introduction)

- Sort Column Email

    Will sort column Email ascending or descending
    1. Trigger API call https://randomuser.me/api/?results=10&sortBy=Email&sortOrder={sort}
    2. Sort column Email by ascending or descending.
    
![App Screenshot](https://i.imgur.com/Z7NwQa1.png)

[Back to the top↑](#Introduction)

- Sort Column Gender

    Will sort column Gender ascending or descending
    1. Trigger API call https://randomuser.me/api/?results=10&sortBy=Gender&sortOrder={sort}
    2. Sort column Gender by ascending or descending.
    
![App Screenshot](https://i.imgur.com/HMP4LKN.png)

[Back to the top↑](#Introduction)

- Sort Column Registere Date

    Will sort column Registere Date ascending or descending
    1. Trigger API call https://randomuser.me/api/?results=10&sortBy=registered_date&sortOrder=descend
    2. Sort column Registere Date by ascending or descending.
    
![App Screenshot](https://i.imgur.com/KW7PJb8.png)

[Back to the top↑](#Introduction)

- Pagination

    When user click next page, app will fetch new data based on the next page.
    1. Trigger API Call https://randomuser.me/api/?results=10&page=2&pageSize=5
        After fetching new data from the next page, retrieved data will save to redux store

    
    NOTE: i made only 2 page hardcode, refer to screenshot of project previews

![App Screenshot](https://i.imgur.com/AZcGcU8.png)

[Back to the top↑](#Introduction)

- Reset Filter
    
    Will reset all of active filter
[Back to the top↑](#Introduction)
## Next Update

- [x]  Design
- [x]  Development
- [x]  Documentation
- [x]  Deployment
- [ ]  Unit testing
- [ ]  Refactor
- [ ]  Implement with React.Memo, useMemo, & useCallback
- [ ]  Analysis to improve perfomance of web application