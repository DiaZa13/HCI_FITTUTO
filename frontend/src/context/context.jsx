import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from '../components/Sesions/Sesions'
import { lightTheme, darkTheme } from '../style/theme'
import { GlobalStyles } from '../style/global'
import { ThemeContext } from '../context/themeContext'

const App = () => {

  const context = useContext(ThemeContext);
  const { theme } = context;


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Dashboard />
      </>
    </ThemeProvider>
  )
}

export default App
