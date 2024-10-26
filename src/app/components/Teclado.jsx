export default function Teclado({ onOperacao }) {
    const numeros = [...Array(10).keys()];

    return (
        <div className="grid grid-cols-3 gap-2">
            {numeros.map((num) => (
                <button 
                    key={num}
                    className="bg-gray-600 p-4 rounded text-white"
                    onClick={() => console.log(`Número ${num} pressionado`)}
                >
                    {num}
                </button>
            ))}
            <button className="bg-green-600 p-4 rounded text-white" onClick={() => onOperacao('confirmar')}>
                Confirmar
            </button>
            <button className="bg-yellow-600 p-4 rounded text-white" onClick={() => onOperacao('apagar')}>
                Apagar 
            </button>
            <button className="bg-red-600 p-4 rounded text-white" onClick={() => onOperacao('cancelar')}>
                Cancelar
            </button>
        </div>
    );
}