import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
