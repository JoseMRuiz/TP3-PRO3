function App() {
    const [numero1, setNumero1] = React.useState('');
    const [numero2, setNumero2] = React.useState('');
    const [operacion, setOperacion] = React.useState('suma');
    const [resultado, setResultado] = React.useState(null);

    const calcular = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);

        if (isNaN(n1) || isNaN(n2)) {
            setResultado('Ingrese números válidos');
            return;
        }

        let res = 0;

        switch (operacion) {
            case 'suma':
                res = n1 + n2;
                break;
            case 'resta':
                res = n1 - n2;
                break;
            case 'multiplicacion':
                res = n1 * n2;
                break;
            default:
                res = 'Operación no válida';
        }

        setResultado(res);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Calculadora</h2>
            <input
                type="number"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                placeholder="Número 1"
                style={{ marginRight: '10px' }}
            />
            <input
                type="number"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                placeholder="Número 2"
            />
            <br /><br />
            <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
            <br /><br />
            <button onClick={calcular} disabled={operacion === 'division'}>
                Calcular
            </button>
            <br /><br />
            {resultado !== null && (
                <h3>Resultado: {resultado}</h3>
            )}
            {operacion === 'division' && (
                <p style={{ color: 'red' }}>La operación de división está deshabilitada.</p>
            )}
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
