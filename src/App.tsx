import React from 'react';
import { Scissors, Sparkles, Heart, Crown, Droplet } from 'lucide-react';

function App() {
  const services = [
    { icon: <Crown className="w-6 h-6" />, name: 'Reconstrução capilar' },
    { icon: <Scissors className="w-6 h-6" />, name: 'Corte de pontas' },
    { icon: <Sparkles className="w-6 h-6" />, name: 'Máscara de nutrição' },
    { icon: <Heart className="w-6 h-6" />, name: 'Tratamento de brilho' },
    { icon: <Droplet className="w-6 h-6" />, name: 'Escova hidratante' },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3")',
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-black/40 backdrop-blur-sm rounded-3xl p-8 text-center">
          <h1 className="text-4xl font-bold text-amber-200 mb-4">COMBO</h1>
          <h2 className="text-2xl font-light text-amber-100 mb-8 italic">Hidratação Intensa</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl text-amber-200 mb-6">SERVIÇOS:</h3>
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => window.location.href = '/servico'}
                className="w-full flex items-center gap-4 bg-amber-100/10 hover:bg-amber-100/20 
                         text-amber-50 rounded-xl p-4 transition-all duration-300
                         border border-amber-200/30 hover:border-amber-200"
              >
                <span className="text-amber-200">{service.icon}</span>
                <span className="flex-1 text-left">{service.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-amber-100 mb-2">Agende seu horário</p>
            <a 
              href="tel:(12)3456-7890"
              className="text-xl text-amber-200 hover:text-amber-300 transition-colors"
            >
              (12) 3456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;