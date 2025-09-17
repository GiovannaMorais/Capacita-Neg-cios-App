import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ArrowLeft, ChevronRight } from "lucide-react";

interface QuestionnaireData {
  nicho: string;
  dificuldade: string;
  clientesMes: string;
  experienciaTech: string;
}

interface QuestionnaireScreenProps {
  onBack: () => void;
  onSubmit: (data: QuestionnaireData) => void;
}

export function QuestionnaireScreen({ onBack, onSubmit }: QuestionnaireScreenProps) {
  const [formData, setFormData] = useState<QuestionnaireData>({
    nicho: "",
    dificuldade: "",
    clientesMes: "",
    experienciaTech: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nicho && formData.dificuldade && formData.clientesMes && formData.experienciaTech) {
      onSubmit(formData);
    }
  };

  const isFormValid = formData.nicho && formData.dificuldade && formData.clientesMes && formData.experienciaTech;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900">
              Conte-nos sobre seu negócio
            </CardTitle>
            <CardDescription className="text-base">
              Vamos personalizar as melhores recomendações para você
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nicho de atuação */}
              <div className="space-y-2">
                <Label htmlFor="nicho">Nicho de atuação</Label>
                <Select value={formData.nicho} onValueChange={(value) => setFormData({...formData, nicho: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu nicho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comercio">Comércio Local</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                    <SelectItem value="alimentacao">Alimentação</SelectItem>
                    <SelectItem value="moda">Moda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Principal dificuldade */}
              <div className="space-y-2">
                <Label htmlFor="dificuldade">Principal dificuldade</Label>
                <Select value={formData.dificuldade} onValueChange={(value) => setFormData({...formData, dificuldade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Qual sua maior dificuldade?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendas">Vendas</SelectItem>
                    <SelectItem value="estoque">Estoque</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="financas">Finanças</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Número de clientes */}
              <div className="space-y-2">
                <Label htmlFor="clientes">Número médio de clientes por mês</Label>
                <Input
                  id="clientes"
                  type="number"
                  placeholder="Ex: 150"
                  value={formData.clientesMes}
                  onChange={(e) => setFormData({...formData, clientesMes: e.target.value})}
                  min="1"
                />
              </div>

              {/* Experiência com tecnologia */}
              <div className="space-y-3">
                <Label>Nível de experiência com tecnologia</Label>
                <RadioGroup 
                  value={formData.experienciaTech} 
                  onValueChange={(value) => setFormData({...formData, experienciaTech: value})}
                  className="grid grid-cols-1 gap-3"
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="iniciante" id="iniciante" />
                    <div className="flex-1">
                      <Label htmlFor="iniciante" className="cursor-pointer">
                        Iniciante
                      </Label>
                      <p className="text-sm text-gray-500">Pouco familiarizado com tecnologia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="intermediario" id="intermediario" />
                    <div className="flex-1">
                      <Label htmlFor="intermediario" className="cursor-pointer">
                        Intermediário
                      </Label>
                      <p className="text-sm text-gray-500">Uso básico de ferramentas digitais</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="avancado" id="avancado" />
                    <div className="flex-1">
                      <Label htmlFor="avancado" className="cursor-pointer">
                        Avançado
                      </Label>
                      <p className="text-sm text-gray-500">Confortável com tecnologia e dados</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Botão de submit */}
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={!isFormValid}
              >
                Ver Recomendações
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}