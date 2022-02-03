import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import { IssuesTable, Pagination } from './Components';

const URL = 'https://api.github.com/repos/microsoft/TypeScript/issues';

function App() {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [stateValue, setStateValue] = useState('all');

  useEffect(() => {
    async function getIssues() {
      const { data } = await axios.get(URL, {
        params: {
          page: page,
          per_page: 10,
          state: stateValue
        }
      });
      setIssues(data);
    }

    getIssues();
  }, [page, stateValue]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleStateValueChange = (e) => {
    setStateValue(e.target.value);
    setPage(1);
  };

  return (
    <Fragment>
      <IssuesTable
        issues={issues}
        selectedStateValue={stateValue}
        handleStateValueChange={handleStateValueChange}
      />
      <Pagination handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} page={page} />
    </Fragment>
  );
}

export default App;
