import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A4FA3',
    alignItems: 'center',
    padding: 20,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 10,
  },
  progressText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  questionDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  questionImage: {
    width: '90%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#4A2F80',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#FFA500',
  },
  correctOption: {
    backgroundColor: '#28A745',
  },
  incorrectOption: {
    backgroundColor: '#DC3545',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  checkButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackContainer: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  correctFeedback: {
    backgroundColor: '#28A745',
  },
  incorrectFeedback: {
    backgroundColor: '#DC3545',
  },
  feedbackText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
