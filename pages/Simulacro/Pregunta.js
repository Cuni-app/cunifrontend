import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/Simulacro/Preguntas.styles';

const Pregunta = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = {
    id: 8,
    totalQuestions: 80,
    timeRemaining: "0:48:36 minutos",
    text: "En la figura, halle α + β + γ + θ",
    image: require("../../assets/Simulacro/Pregunta/PreguntaEjemplo.png"), 
    options: [
      { id: 1, text: "300°", correct: false },
      { id: 2, text: "270°", correct: false },
      { id: 3, text: "306°", correct: false },
      { id: 4, text: "288°", correct: true }, 
    ],
  };

  const handleSelectOption = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption) {
      setIsCorrect(selectedOption.correct);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Pregunta {question.id} de {question.totalQuestions}</Text>
      </View>

      {/* Tiempo restante */}
      <Text style={styles.timeText}>⏳ Tiempo restante: {question.timeRemaining}</Text>

      {/* Pregunta */}
      <Text style={styles.questionText}>Pregunta B:</Text>
      <Text style={styles.questionDescription}>{question.text}</Text>

      {/* Imagen */}
      <Image source={question.image} style={styles.questionImage} />

      {/* Opciones de respuesta */}
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
              isAnswered && option.correct && styles.correctOption,
              isAnswered && !option.correct && selectedOption === option && styles.incorrectOption,
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botón de comprobar / continuar */}
      {isAnswered ? (
        <View style={[styles.feedbackContainer, isCorrect ? styles.correctFeedback : styles.incorrectFeedback]}>
          <Text style={styles.feedbackText}>{isCorrect ? "✅ ¡Correcto!" : "❌ Incorrecto"}</Text>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
            <Text style={styles.nextButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.checkButton, !selectedOption && styles.disabledButton]}
          onPress={handleCheckAnswer}
          disabled={!selectedOption}
        >
          <Text style={styles.checkButtonText}>Comprobar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Pregunta;
