  import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { 
  FaTeeth,
  FaRegClock,
  FaTint,
  FaRegClipboard,
  FaRegCheckCircle
} from 'react-icons/fa';
import { 
  TbDental, 
  TbMoodSad,
  TbToolsKitchen2
} from 'react-icons/tb';
import { GiToothbrush } from 'react-icons/gi';
import { MdOutlineCleanHands } from 'react-icons/md';

const FloatingButton = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-white z-[9999] group relative"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-pulse opacity-30" />
      <div className="relative z-10 flex items-center justify-center">
        <FaRegClipboard className="w-8 h-8" />
        <div className="absolute -right-1 -top-1">
          <FaTeeth className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
    <div className="absolute -top-12 whitespace-nowrap bg-white text-primary px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Check Your Oral Health Score
    </div>
  </motion.button>
);

const ProgressBar = ({ current, total }) => (
  <div className="flex justify-between items-center mb-12">
    <div className="flex space-x-3">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`relative h-3 w-12 rounded-full transition-all duration-500 ${
            current > idx 
              ? 'bg-gradient-to-r from-primary via-secondary to-accent scale-110'
              : 'bg-gray-200'
          }`}
        >
          {current > idx && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-50 rounded-full blur-sm"
            />
          )}
        </div>
      ))}
    </div>
    <span className="text-sm font-medium text-gray-600">
      {current}/{total} Questions
    </span>
  </div>
);

const Question = ({ question, selectedScore, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl space-y-4 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center text-primary">
        {question.icon && <question.icon className="w-6 h-6" />}
      </div>
      <h4 className="text-lg font-medium text-gray-800">{question.question}</h4>
    </div>
    <div className="grid gap-3">
      {question.options.map(option => (
        <motion.button
          key={option.value}
          className={`group w-full p-5 text-left rounded-xl transition-all duration-500 transform ${
            selectedScore === option.score
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-xl scale-[1.02]'
              : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-xl hover:scale-[1.01]'
          }`}
          onClick={() => onSelect(option.score)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <div className={`relative w-7 h-7 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
              selectedScore === option.score
                ? 'border-white bg-white/20'
                : 'border-gray-300 group-hover:border-primary/50 group-hover:scale-110'
            }`}>
              <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                selectedScore === option.score
                  ? 'opacity-0'
                  : 'bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100'
              }`} />
              {selectedScore === option.score && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 bg-white rounded-full"
                />
              )}
            </div>
            {option.label}
          </div>
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const Results = ({ score, recommendation, onRetake, onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center"
  >
    <div className="relative inline-block">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-lg opacity-20" />
      <div className="relative p-6 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 mb-6">
        <FaRegCheckCircle className="w-8 h-8 text-primary" />
      </div>
    </div>
    
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
    >
      <h4 className="text-3xl font-bold mb-3">Your Score: {score}%</h4>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
        />
      </div>
      <p className="text-gray-600 text-lg mb-8">{recommendation}</p>
      
      <div className="space-x-4">
        <motion.button
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={onRetake}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Take Another Assessment
        </motion.button>
        <motion.button
          className="px-8 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

const HealthAssessment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  
  const allQuestions = [
    {
      id: 'brushing',
      icon: GiToothbrush,
      question: 'How often do you brush your teeth?',
      options: [
        { value: 'twice', label: 'Twice or more daily', score: 3 },
        { value: 'once', label: 'Once daily', score: 2 },
        { value: 'irregular', label: 'Irregularly', score: 1 }
      ]
    },
    {
      id: 'flossing',
      icon: TbDental,
      question: 'Do you floss regularly?',
      options: [
        { value: 'daily', label: 'Daily', score: 3 },
        { value: 'sometimes', label: 'Sometimes', score: 2 },
        { value: 'never', label: 'Never', score: 1 }
      ]
    },
    {
      id: 'mouthwash',
      icon: FaTint,
      question: 'Do you use mouthwash?',
      options: [
        { value: 'daily', label: 'Daily with fluoride mouthwash', score: 3 },
        { value: 'sometimes', label: 'Occasionally', score: 2 },
        { value: 'never', label: 'Never', score: 1 }
      ]
    },
    {
      id: 'sensitivity',
      icon: TbMoodSad,
      question: 'Do you experience tooth sensitivity?',
      options: [
        { value: 'no', label: 'No sensitivity', score: 3 },
        { value: 'mild', label: 'Mild sensitivity', score: 2 },
        { value: 'severe', label: 'Severe sensitivity', score: 1 }
      ]
    },
    {
      id: 'bleeding',
      icon: TbDental,
      question: 'Do your gums bleed when brushing?',
      options: [
        { value: 'never', label: 'Never', score: 3 },
        { value: 'sometimes', label: 'Sometimes', score: 2 },
        { value: 'often', label: 'Often', score: 1 }
      ]
    },
    {
      id: 'brushing_technique',
      icon: GiToothbrush,
      question: 'How long do you brush your teeth?',
      options: [
        { value: 'two_min', label: '2 minutes or more', score: 3 },
        { value: 'one_min', label: 'About 1 minute', score: 2 },
        { value: 'quick', label: 'Quick brush', score: 1 }
      ]
    },
    {
      id: 'dental_visits',
      icon: FaTeeth,
      question: 'How often do you visit the dentist?',
      options: [
        { value: 'regular', label: 'Every 6 months', score: 3 },
        { value: 'yearly', label: 'Once a year', score: 2 },
        { value: 'problems', label: 'Only when problems arise', score: 1 }
      ]
    },
    {
      id: 'diet',
      icon: TbToolsKitchen2,
      question: 'How would you rate your sugar consumption?',
      options: [
        { value: 'low', label: 'Low - I avoid sugary foods', score: 3 },
        { value: 'moderate', label: 'Moderate - Occasional treats', score: 2 },
        { value: 'high', label: 'High - Regular sweet treats', score: 1 }
      ]
    },
    {
      id: 'night_care',
      icon: FaRegClock,
      question: 'Do you brush your teeth before bed?',
      options: [
        { value: 'always', label: 'Always', score: 3 },
        { value: 'usually', label: 'Usually', score: 2 },
        { value: 'sometimes', label: 'Sometimes forget', score: 1 }
      ]
    },
    {
      id: 'toothbrush',
      icon: MdOutlineCleanHands,
      question: 'How often do you replace your toothbrush?',
      options: [
        { value: 'three_months', label: 'Every 3-4 months', score: 3 },
        { value: 'six_months', label: 'Every 6 months', score: 2 },
        { value: 'yearly', label: 'Yearly or longer', score: 1 }
      ]
    }
  ];

  useEffect(() => {
    if (isOpen) {
      // Randomly select 5 questions when opening the assessment
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      setCurrentQuestions(shuffled.slice(0, 5));
      setResponses({});
      setShowResults(false);
    }
  }, [isOpen]);

  const calculateScore = () => {
    const total = Object.values(responses).reduce((sum, score) => sum + score, 0);
    const max = currentQuestions.length * 3;
    return Math.round((total / max) * 100);
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return "Excellent oral health habits! Keep up the good work.";
    } else if (score >= 60) {
      return "Good habits, but there's room for improvement. Consider increasing flossing frequency.";
    } else {
      return "We recommend improving your oral health routine. Schedule a consultation for personalized advice.";
    }
  };

  const resetAssessment = () => {
    setResponses({});
    setShowResults(false);
    setIsOpen(false);
  };

  return createPortal(
    <>
      <div className="fixed bottom-8 right-8 z-[60]">
        <FloatingButton onClick={() => setIsOpen(true)} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]"
            onClick={() => !showResults && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Oral Health Assessment</h3>
                    <p className="text-sm text-gray-600 mt-1">Get personalized recommendations</p>
                  </div>
                  <button
                    onClick={() => !showResults && setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {!showResults ? (
                  <div className="space-y-6">
                    <ProgressBar
                      current={Object.keys(responses).length}
                      total={currentQuestions.length}
                    />
                    {currentQuestions.map(question => (
                      <Question
                        key={question.id}
                        question={question}
                        selectedScore={responses[question.id]}
                        onSelect={(score) => setResponses({
                          ...responses,
                          [question.id]: score
                        })}
                      />
                    ))}
                    <motion.button
                      className="w-full p-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform"
                      onClick={() => setShowResults(true)}
                      disabled={Object.keys(responses).length < currentQuestions.length}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg font-medium">View Results</span>
                    </motion.button>
                  </div>
                ) : (
                  <Results
                    score={calculateScore()}
                    recommendation={getRecommendations(calculateScore())}
                    onRetake={resetAssessment}
                    onClose={() => setIsOpen(false)}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })).isRequired
  }).isRequired,
  selectedScore: PropTypes.number,
  onSelect: PropTypes.func.isRequired
};

Results.propTypes = {
  score: PropTypes.number.isRequired,
  recommendation: PropTypes.string.isRequired,
  onRetake: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default HealthAssessment;
