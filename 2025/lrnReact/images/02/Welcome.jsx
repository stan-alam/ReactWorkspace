function Salutations() {
    return <p>Greetings and Salutations!</p>;
};

function App() {
    return(
        <div>
            <h2>Welcome and Salutations!</h2>
            <Salutations />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);