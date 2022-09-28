import React, { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/hooks';
import { getRegisteredUserData } from 'src/store/slices/authorizationSlice';
import AppHeader from '../appHeader/appHeader';
import AppTable from '../appTable/appTable';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const registeredUser = localStorage.getItem('registeredUserData');
    if (registeredUser) {
      dispatch(getRegisteredUserData(JSON.parse(registeredUser)));
      // dispatch(get(JSON.parse(registeredUser)._id));
    }
  }, []);
  return (
    <div className="App">
      <AppHeader />
      <AppTable />
    </div>
  );
};

export default App;
