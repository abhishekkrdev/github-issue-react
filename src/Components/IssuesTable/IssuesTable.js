import React, { useState } from 'react';
import IssueItem from '../IssueItem/IssueItem';

const stateOptions = ['all', 'open', 'closed'];

const IssuesTable = ({ issues, handleStateValueChange, selectedStateValue }) => {
  return (
    <div>
      {issues.length > 0 && (
        <table width={'100%'}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Avatar</td>
              <td>Username</td>
              <td>Title</td>
              <td>
                <select value={selectedStateValue} onChange={handleStateValueChange}>
                  <option value={'all'}>all</option>
                  <option value={'open'}>open</option>
                  <option value={'closed'}>closed</option>
                </select>
              </td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => {
              return <IssueItem key={issue.id} issue={issue} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IssuesTable;
