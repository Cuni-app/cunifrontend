import { useState } from 'react';
import { View, ScrollView ,Text, Image,Modal, TouchableOpacity,ImageBackground } from 'react-native';
import styles from '../../styles/Simulacro/Preguntas.styles';
import overlaystyles from '../../styles/Simulacro/CuySabio.styles';

const Pregunta = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showOverlay, setShow] = useState(false);
  const [showAnswer, setAnswer] = useState(false);

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

  const openPopup = () => {
    setShow(true);
  };

  const closePopup = () => {
      setShow(false);
  };
  const openAnswer = () => {
    setAnswer(true);
  };

  const closeAnswer = () => {
      setAnswer(false);
  };

  const Popup = () =>{
    if(!showAnswer){
    return(
      <ScrollView>
        <View style = {({flexDirection:'row'})}>
        <Image source={require('../../assets/Sabio/Iconuser.png')} style={{margin: '3%'}} />
            <View style={overlaystyles.dialogue_box}>
                <Text style={overlaystyles.text}>Necesitas ayuda para contestar?</Text>
            </View>
        </View>
        <View style={overlaystyles.dialogue_box}>
          <Text style={overlaystyles.text}>Te puedo ayudar a recordar teoremas o contextos historicos, solo hazmelo saber :D</Text>
        </View>
        <View style={overlaystyles.dialogue_box}>
          <Text style={overlaystyles.text}>Si sientes que ya lo intestaste y no te sale, te puedo revelar la respuesta.</Text>
            <TouchableOpacity style={overlaystyles.button_complete} onPress={() => {
              openAnswer()
            }} >
              <Text style={overlaystyles.buttonText}>Mostrar Respuesta</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
  else{
    return(
      <ScrollView contentContainerStyle={{ minWidth: '100%', justifyContent:'center',alignItems: 'center',alignContent: 'center'}} showsVerticalScrollIndicator = {false}>
        <Text style={styles.questionText}>Solución</Text>
        <Image source={require('../../assets/Simulacro/Pregunta/RespuestaEjemplo.png')}/>
        <TouchableOpacity style={styles.nextButton} onPress={()=>{handleNextQuestion();closeAnswer();closePopup()}}>
            <Text style={styles.nextButtonText}>Continuar</Text>
          </TouchableOpacity>
      </ScrollView>


    )
  }
  };

  return (
    <View style={styles.container}>
      {/* Botón "X" para regresar a MainSimulacros */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('MainSimulacros')}>
        <Image source={require('../../assets/Derivados/close.png')} style={styles.closeButtonImage} />
      </TouchableOpacity>
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
      
      <View style={({flexDirection: 'row',justifyContent:'center', flexWrap: 'wrap',alignSelf:'flex-end',marginTop:'10%'})}>
      
        <ImageBackground source ={require('../../assets/Sabio/TextBubble.png')} style={[{alignSelf:'center',alignContent:'center',marginRight:'2%'}]}>
        <Text style = {styles.questionDescription}> ¿Necesitas ayuda?</Text>
        </ImageBackground>

        <TouchableOpacity onPress={() => openPopup()}>
          <Image source={require('../../assets/Sabio/Iconuser.png')} style={[{alignSelf:'center',alignContent:'center'}]} />
          <Text style={styles.questionText}>Cuy Sabio</Text>
        </TouchableOpacity>
      </View>
      
      
      <Modal visible={showOverlay} onRequestClose={closePopup} transparent={true} animationType="fade">    
                            <View  style={overlaystyles.overlay}>
                            <View style={overlaystyles.popup_container}>
                            <Popup/>
                                </View>
                            </View>
      </Modal>
    </View>

    

    
  );
};

export default Pregunta;
