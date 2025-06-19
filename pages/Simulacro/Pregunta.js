import { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../../styles/Simulacro/Preguntas.styles';
import overlaystyles from '../../styles/Simulacro/CuySabio.styles';

const Pregunta = ({ navigation }) => {
  const simulacro = {
    id: 1,
    nombre: "Letras",
    duracion: 80,
    preguntas: [
      {
        id: 12,
        enunciado: "¿Qué figura geométrica se muestra en la imagen?",
        imagen_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/IconoCuadrado.svg/1200px-IconoCuadrado.svg.png",
        solucion_url: null,
        id_categoria: 3,
        respuestas: [
          { id: 6, esCorrecto: false, contenido: "Cuadrado", id_pregunta: 12 },
          { id: 7, esCorrecto: true, contenido: "Triángulo equilátero", id_pregunta: 12 },
          { id: 8, esCorrecto: false, contenido: "Círculo", id_pregunta: 12 },
          { id: 9, esCorrecto: false, contenido: "Rectángulo", id_pregunta: 12 }
        ]
      },
      {
        id: 13,
        enunciado: '¿Cuál es la idea principal del texto?\n “En la actualidad, muchas personas caen en la trampa de la productividad constante...”',
        imagen_url: null,
        solucion_url: null,
        id_categoria: 4,
        respuestas: [
          { id: 10, esCorrecto: false, contenido: "Destacar los beneficios del ejercicio físico", id_pregunta: 13 },
          { id: 11, esCorrecto: true, contenido: "Resaltar la importancia de una vida equilibrada entre trabajo y descanso", id_pregunta: 13 },
          { id: 12, esCorrecto: false, contenido: "Fomentar la competencia laboral en los jóvenes", id_pregunta: 13 },
          { id: 13, esCorrecto: false, contenido: "Demostrar los riesgos del sedentarismo moderado", id_pregunta: 13 }
        ]
      },
      {
        id: 14,
        enunciado: "Si 3x + 2 = 17, ¿cuál es el valor de x?",
        imagen_url: null,
        solucion_url: null,
        id_categoria: 3,
        respuestas: [
          { id: 14, esCorrecto: false, contenido: "4", id_pregunta: 14 },
          { id: 15, esCorrecto: true, contenido: "5", id_pregunta: 14 },
          { id: 16, esCorrecto: false, contenido: "6", id_pregunta: 14 },
          { id: 17, esCorrecto: false, contenido: "7", id_pregunta: 14 }
        ]
      },
      {
        id: 15,
        enunciado: "Seleccione la palabra que completa correctamente la analogía: Agua es a sed como comida es a ____.",
        imagen_url: null,
        solucion_url: null,
        id_categoria: 2,
        respuestas: [
          { id: 18, esCorrecto: false, contenido: "hambre", id_pregunta: 15 },
          { id: 19, esCorrecto: true, contenido: "hambre", id_pregunta: 15 },
          { id: 20, esCorrecto: false, contenido: "salud", id_pregunta: 15 },
          { id: 21, esCorrecto: false, contenido: "sabor", id_pregunta: 15 }
        ]
      },
      {
        id: 16,
        enunciado: "¿Qué civilización construyó Machu Picchu?",
        imagen_url: "https://image-tc.galaxy.tf/wijpeg-7ellqz2uqv2l9plk30futx9jr/experiencias-machu-picchu_wide.jpg",
        solucion_url: null,
        id_categoria: 5,
        respuestas: [
          { id: 22, esCorrecto: true, contenido: "Inca", id_pregunta: 16 },
          { id: 23, esCorrecto: false, contenido: "Azteca", id_pregunta: 16 },
          { id: 24, esCorrecto: false, contenido: "Maya", id_pregunta: 16 },
          { id: 25, esCorrecto: false, contenido: "Olmeca", id_pregunta: 16 }
        ]
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(simulacro.preguntas[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showOverlay, setShow] = useState(false);
  const [showAnswer, setAnswer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(simulacro.duracion * 60);

  useEffect(() => {
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
