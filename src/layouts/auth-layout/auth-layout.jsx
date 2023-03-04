import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { useDispatch } from 'react-redux';
import { getUser } from 'store/slices/userSlice';

export function AuthLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
