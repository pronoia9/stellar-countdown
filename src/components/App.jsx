import './App.scss';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return <div className={`${darkMode ? 'bg-dark' : 'bg-light'}`}></div>;
}