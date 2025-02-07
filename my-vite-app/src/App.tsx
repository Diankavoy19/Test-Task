import './App.css';

function App() {
    const marginIssue = import.meta.env.VITE_MARGIN_ISSUE === 'true';
    console.log('VITE_MARGIN_ISSUE:', marginIssue);
    if (marginIssue) {
        document.documentElement.style.setProperty('--margin-left', '5000px');
      } else {
        document.documentElement.style.setProperty('--margin-left', '0px');
      }
    return (
        <div className="container">
            <button className="hidden-on-mobile" data-testid="test-button">Click me</button>
        </div>
    );
}

export default App;
