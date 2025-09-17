import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { QuestionnaireScreen } from "./components/QuestionnaireScreen";
import { RecommendationsScreen } from "./components/RecommendationsScreen";

type Screen = 'welcome' | 'questionnaire' | 'recommendations';

interface QuestionnaireData {
  nicho: string;
  dificuldade: string;
  clientesMes: string;
  experienciaTech: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData | null>(null);

  const handleStartQuestionnaire = () => {
    setCurrentScreen('questionnaire');
  };

  const handleQuestionnaireSubmit = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    setCurrentScreen('recommendations');
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const handleBackToQuestionnaire = () => {
    setCurrentScreen('questionnaire');
  };

  const handleRestart = () => {
    setQuestionnaireData(null);
    setCurrentScreen('welcome');
  };

  switch (currentScreen) {
    case 'welcome':
      return <WelcomeScreen onStartQuestionnaire={handleStartQuestionnaire} />;
    
    case 'questionnaire':
      return (
        <QuestionnaireScreen 
          onBack={handleBackToWelcome}
          onSubmit={handleQuestionnaireSubmit}
        />
      );
    
    case 'recommendations':
      return questionnaireData ? (
        <RecommendationsScreen 
          data={questionnaireData}
          onBack={handleBackToQuestionnaire}
          onRestart={handleRestart}
        />
      ) : null;
    
    default:
      return <WelcomeScreen onStartQuestionnaire={handleStartQuestionnaire} />;
  }
}