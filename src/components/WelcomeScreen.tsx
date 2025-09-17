import { Button } from "./ui/button";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

interface WelcomeScreenProps {
  onStartQuestionnaire: () => void;
}

export function WelcomeScreen({ onStartQuestionnaire }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Header com ícone */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Capacita+ Negócios
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Descubra cursos e estratégias ideais para seu negócio
          </p>
        </div>

        {/* Ilustração com ícones */}
        <div className="flex justify-center items-center space-x-8 py-8">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Crescimento</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600">Network</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-sm text-gray-600">Educação</p>
          </div>
        </div>

        {/* Botão principal */}
        <div className="space-y-4">
          <Button 
            onClick={onStartQuestionnaire}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Responder Questionário
          </Button>
          
          <p className="text-sm text-gray-500">
            Leva apenas 2 minutos para personalizar suas recomendaç��es
          </p>
        </div>
      </div>
    </div>
  );
}