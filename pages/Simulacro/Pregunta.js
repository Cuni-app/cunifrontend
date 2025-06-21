import { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../../styles/Simulacro/Preguntas.styles';
import overlaystyles from '../../styles/Simulacro/CuySabio.styles';

const Pregunta = ({ navigation }) => {

  const [simulacro, setSimulacro] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showOverlay, setShow] = useState(false);
  const [showAnswer, setAnswer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {

    const fetchSimulacro = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/category/getSimulacro/2?cantidad=5`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setSimulacro(data);
        setCurrentQuestion(data.preguntas[0]);
        setTimeRemaining(data.duracion * 60);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener el simulacro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimulacro();
    
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const handleSelectOption = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption) {
      setIsCorrect(selectedOption.esCorrecto);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < simulacro.preguntas.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentQuestion(simulacro.preguntas[nextIndex]);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setShow(false);
      setAnswer(false);
    } else {
      navigation.goBack();
    }
  };

  const openPopup = () => setShow(true);
  const closePopup = () => setShow(false);
  const openAnswer = () => setAnswer(true);
  const closeAnswer = () => setAnswer(false);

  const Popup = () => {
    

    if (!showAnswer) {
      return (
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/Sabio/Iconuser.png')} style={{ margin: '3%' }} />
            <View style={overlaystyles.dialogue_box}>
              <Text style={overlaystyles.text}>Necesitas ayuda para contestar?</Text>
            </View>
          </View>
          <View style={overlaystyles.dialogue_box}>
            <Text style={overlaystyles.text}>Te puedo ayudar a recordar teoremas o contextos históricos, solo házmelo saber :D</Text>
          </View>
          <View style={overlaystyles.dialogue_box}>
            <Text style={overlaystyles.text}>Si sientes que ya lo intentaste y no te sale, te puedo revelar la respuesta.</Text>
            <TouchableOpacity style={overlaystyles.button_complete} onPress={openAnswer}>
              <Text style={overlaystyles.buttonText}>Mostrar Respuesta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView contentContainerStyle={{ minWidth: '100%', justifyContent: 'center', alignItems: 'center' }} showsVerticalScrollIndicator={false}>
          <Text style={styles.questionText}>Solución</Text>
          <Image source={require('../../assets/Simulacro/Pregunta/RespuestaEjemplo.png')} />
          <TouchableOpacity style={styles.nextButton} onPress={() => { handleNextQuestion(); closeAnswer(); closePopup(); }}>
            <Text style={styles.nextButtonText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };

  if (!simulacro || !currentQuestion || timeRemaining === null) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Cargando simulacro...</Text>
        </View>
      );
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('MainSimulacros')}>
        <Image source={require('../../assets/Derivados/close.png')} style={styles.closeButtonImage} />
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Pregunta {currentIndex + 1} de {simulacro.preguntas.length}</Text>
      </View>

      <Text style={styles.timeText}>⏳ Tiempo restante: {formatTime(timeRemaining)}</Text>

      <Text style={styles.questionText}>Pregunta B:</Text>
      <Text style={styles.questionDescription}>{currentQuestion.enunciado}</Text>

      {currentQuestion.imagen_url && (
        <Image source={{ uri: currentQuestion.imagen_url }} style={styles.questionImage} />
      )}

      <View style={styles.optionsContainer}>
        {currentQuestion.respuestas.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
              isAnswered && option.esCorrecto && styles.correctOption,
              isAnswered && !option.esCorrecto && selectedOption === option && styles.incorrectOption,
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option.contenido}</Text>
          </TouchableOpacity>
        ))}
      </View>

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

      <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignSelf: 'flex-end', marginTop: '10%' }}>
        <ImageBackground source={require('../../assets/Sabio/TextBubble.png')} style={{ alignSelf: 'center', marginRight: '2%' }}>
          <Text style={styles.questionDescription}> ¿Necesitas ayuda?</Text>
        </ImageBackground>

        <TouchableOpacity onPress={openPopup}>
          <Image source={require('../../assets/Sabio/Iconuser.png')} style={{ alignSelf: 'center' }} />
          <Text style={styles.questionText}>Cuy Sabio</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showOverlay} onRequestClose={closePopup} transparent={true} animationType="fade">
        <View style={overlaystyles.overlay}>
          <View style={overlaystyles.popup_container}>
            <Popup />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Pregunta;
