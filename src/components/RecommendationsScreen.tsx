import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, BookOpen, Target, TrendingUp, ExternalLink, Users, DollarSign, BarChart3, ShoppingCart } from "lucide-react";

interface QuestionnaireData {
  nicho: string;
  dificuldade: string;
  clientesMes: string;
  experienciaTech: string;
}

interface RecommendationsScreenProps {
  data: QuestionnaireData;
  onBack: () => void;
  onRestart: () => void;
}

interface Recommendation {
  type: 'curso' | 'estrategia';
  title: string;
  description: string;
  provider?: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration?: string;
  icon: React.ReactNode;
  color: string;
}

export function RecommendationsScreen({ data, onBack, onRestart }: RecommendationsScreenProps) {
  // Lógica para gerar recomendações baseadas nas respostas
  const generateRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];
    
    // Recomendação de curso baseada no nível de experiência e dificuldade
    if (data.experienciaTech === 'iniciante') {
      if (data.dificuldade === 'marketing') {
        recommendations.push({
          type: 'curso',
          title: 'Marketing Digital para Iniciantes',
          description: 'Aprenda os fundamentos do marketing digital, redes sociais e Google Ads para pequenos negócios.',
          provider: 'Google Ateliê Digital',
          difficulty: 'Iniciante',
          duration: '8 horas',
          icon: <TrendingUp className="h-6 w-6" />,
          color: 'bg-green-500'
        });
      } else if (data.dificuldade === 'financas') {
        recommendations.push({
          type: 'curso',
          title: 'Gestão Financeira Básica',
          description: 'Controle de fluxo de caixa, precificação e planejamento financeiro para pequenos negócios.',
          provider: 'Sebrae',
          difficulty: 'Iniciante',
          duration: '12 horas',
          icon: <DollarSign className="h-6 w-6" />,
          color: 'bg-blue-500'
        });
      } else {
        recommendations.push({
          type: 'curso',
          title: 'Fundamentos de Análise de Dados',
          description: 'Introdução à análise de dados com ferramentas simples como Excel e Google Sheets.',
          provider: 'Coursera',
          difficulty: 'Iniciante',
          duration: '6 semanas',
          icon: <BarChart3 className="h-6 w-6" />,
          color: 'bg-purple-500'
        });
      }
    } else if (data.experienciaTech === 'intermediario') {
      recommendations.push({
        type: 'curso',
        title: 'Análise de Dados com Power BI',
        description: 'Dashboards interativos e relatórios para tomada de decisão baseada em dados.',
        provider: 'Microsoft Learn',
        difficulty: 'Intermediário',
        duration: '4 semanas',
        icon: <BarChart3 className="h-6 w-6" />,
        color: 'bg-orange-500'
      });
    } else {
      recommendations.push({
        type: 'curso',
        title: 'Data Science para Negócios',
        description: 'Machine learning, previsões e análise preditiva aplicada ao seu negócio.',
        provider: 'Coursera',
        difficulty: 'Avançado',
        duration: '8 semanas',
        icon: <BarChart3 className="h-6 w-6" />,
        color: 'bg-red-500'
      });
    }

    // Estratégia baseada no nicho e dificuldade
    if (data.nicho === 'comercio') {
      if (data.dificuldade === 'vendas') {
        recommendations.push({
          type: 'estrategia',
          title: 'Análise de Padrões de Compra',
          description: 'Identifique os produtos mais vendidos por horário/dia e otimize seu estoque e atendimento.',
          icon: <ShoppingCart className="h-6 w-6" />,
          color: 'bg-teal-500',
          difficulty: 'Intermediário'
        });
      } else {
        recommendations.push({
          type: 'estrategia',
          title: 'Dashboard de Performance',
          description: 'Crie indicadores de vendas, margem de lucro e satisfação do cliente em tempo real.',
          icon: <Target className="h-6 w-6" />,
          color: 'bg-indigo-500',
          difficulty: 'Intermediário'
        });
      }
    } else if (data.nicho === 'servicos') {
      recommendations.push({
        type: 'estrategia',
        title: 'Análise de Retenção de Clientes',
        description: 'Meça a satisfação e identifique padrões para reduzir o churn e aumentar fidelidade.',
        icon: <Users className="h-6 w-6" />,
        color: 'bg-pink-500',
        difficulty: 'Intermediário'
      });
    } else {
      recommendations.push({
        type: 'estrategia',
        title: 'Segmentação de Público',
        description: 'Use dados demográficos e comportamentais para personalizar suas ofertas e campanhas.',
        icon: <Target className="h-6 w-6" />,
        color: 'bg-cyan-500',
        difficulty: 'Intermediário'
      });
    }

    return recommendations;
  };

  const recommendations = generateRecommendations();

  const getNichoLabel = (nicho: string) => {
    const nichos: Record<string, string> = {
      comercio: 'Comércio Local',
      servicos: 'Serviços',
      alimentacao: 'Alimentação',
      moda: 'Moda'
    };
    return nichos[nicho] || nicho;
  };

  const getDificuldadeLabel = (dificuldade: string) => {
    const dificuldades: Record<string, string> = {
      vendas: 'Vendas',
      estoque: 'Estoque',
      marketing: 'Marketing',
      financas: 'Finanças'
    };
    return dificuldades[dificuldade] || dificuldade;
  };

  const getExperienciaLabel = (experiencia: string) => {
    const experiencias: Record<string, string> = {
      iniciante: 'Iniciante',
      intermediario: 'Intermediário',
      avancado: 'Avançado'
    };
    return experiencias[experiencia] || experiencia;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto py-8">
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

        {/* Resumo das respostas */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Seu Perfil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nicho</p>
                <Badge variant="secondary">{getNichoLabel(data.nicho)}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dificuldade</p>
                <Badge variant="secondary">{getDificuldadeLabel(data.dificuldade)}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Clientes/mês</p>
                <Badge variant="secondary">{data.clientesMes}</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experiência Tech</p>
                <Badge variant="secondary">{getExperienciaLabel(data.experienciaTech)}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Título das recomendações */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Suas Recomendações Personalizadas
          </h1>
          <p className="text-gray-600">
            Baseadas no seu perfil, selecionamos as melhores opções para você
          </p>
        </div>

        {/* Cards de recomendações */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {recommendations.map((rec, index) => (
            <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`${rec.color} p-3 rounded-lg text-white`}>
                    {rec.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={rec.type === 'curso' ? 'default' : 'secondary'}>
                        {rec.type === 'curso' ? 'Curso' : 'Estratégia'}
                      </Badge>
                      <Badge variant="outline">{rec.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                    {rec.provider && (
                      <CardDescription className="text-blue-600 font-medium">
                        {rec.provider}
                      </CardDescription>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{rec.description}</p>
                <div className="flex items-center justify-between">
                  {rec.duration && (
                    <span className="text-sm text-gray-500">Duração: {rec.duration}</span>
                  )}
                  {rec.type === 'curso' && (
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      Acessar
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onRestart}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Fazer Novo Questionário
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-xl border-blue-200 hover:bg-blue-50"
          >
            Salvar Recomendações
          </Button>
        </div>
      </div>
    </div>
  );
}