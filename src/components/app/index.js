import React from 'react';
import {DataContext} from '@iso-react/data';

import TodoList from '~/components/todo-list';

import config from '~/config';

const App = ({client}) => {
  return (
    <DataContext.Provider value={client}>
      <div><TodoList/></div>
    </DataContext.Provider>
  );
};

export default App;
