export default function Teclado({ onOperacao }) {
    return (
        <div className="grid grid-cols-4 gap-2">

            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('1')}>1</button>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('2')}>2</button>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('3')}>3</button>
            <button className="bg-red-600 p-4 rounded text-white" onClick={() => onOperacao('cancelar')}>Cancelar</button>

            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('4')}>4</button>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('5')}>5</button>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('6')}>6</button>

            <button className="bg-yellow-600 p-4 rounded text-white" onClick={() => onOperacao('apagar')}>Apagar</button>

            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('7')}>7</button>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('8')}>8</button>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('9')}>9</button>

            <button className="bg-green-600 p-4 rounded text-white" onClick={() => onOperacao('confirmar')}>Confirmar</button>

            <div></div>
            <button className="bg-gray-600 p-4 rounded text-white" onClick={() => onOperacao('0')}>0</button>
            <div></div>
        </div>
    );
}