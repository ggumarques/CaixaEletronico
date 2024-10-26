export default function TelaOperacao({tela}){
    return (
        <div className="bg-gray-700 w-full h-60 max-w-md p-4 rounded-lg text-center mb-6">
            {tela === 'inicio' && <p>Bem-vindo! Escolha uma operação.</p>}
            {tela === 'pix' && <p>Operação PIX</p>}
            {tela === 'saque' && <p>Operação Saque.</p>}
            {tela === 'extrato' && <p>Extrato</p>}
        </div> 
    )
}