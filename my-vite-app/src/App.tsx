import './App.css';

function App() {
    return (
        <div className="container">
            <button className="hidden-on-mobile" data-testid="test-button">Click me</button>
            <button className="visible-on-mobile" data-testid="visible-test-button">Click me</button>
        </div>
    );
}

export default App;
