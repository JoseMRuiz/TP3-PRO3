function App() {
    const [botonIzquierdoActivo, setBotonIzquierdoActivo] = React.useState(true);

    const manejarIzquierdo = () => {
        setBotonIzquierdoActivo(false);
    };

    const manejarDerecho = () => {
        setBotonIzquierdoActivo(true);
    };

    return (
        <div >
            <button onClick={manejarIzquierdo} disabled={!botonIzquierdoActivo}>
                Izquierdo
            </button>
            <button onClick={manejarDerecho} disabled={botonIzquierdoActivo} style={{ marginLeft: '10px' }}>
                Derecho
            </button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
