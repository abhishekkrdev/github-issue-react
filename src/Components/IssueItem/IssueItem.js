import React from 'react';

const IssueItem = ({ issue }) => {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>
        <img src={issue.user.avatar_url} width={'25px'} height={'25px'} />
      </td>
      <td>{issue.user.login}</td>
      <td>{issue.title}</td>
      <td>{issue.state}</td>
      <td>
        <a href={issue.html_url} target={'_blank'}>
          Issue
        </a>
      </td>
    </tr>
  );
};

export default IssueItem;
