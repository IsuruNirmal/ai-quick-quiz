const QUESTION_COUNT = 5;
const RESPONSE_ENDPOINT = "https://script.google.com/macros/s/AKfycbzer1QruZo_kSUIRHWAfSCK5f4yiA2oNUcxryu1B-abiGQ87tvcmz1lWTZCinWKQotxwA/exec";

const questions = [
  { q: "What does AI stand for?", a: ["Artificial Intelligence", "Automated Internet", "Advanced Input", "Artificial Information"], c: 0, e: "AI stands for Artificial Intelligence: computer systems designed to perform tasks that usually require human intelligence." },
  { q: "Which of these is a common example of AI in daily life?", a: ["A voice assistant", "A paper notebook", "A basic light switch", "A drinking glass"], c: 0, e: "Voice assistants use AI to understand speech, interpret requests, and produce useful responses." },
  { q: "What can generative AI create?", a: ["Text, images, audio, and code", "Only spreadsheets", "Only physical machines", "Electricity"], c: 0, e: "Generative AI can produce many kinds of digital content, including text, images, music, video, and software code." },
  { q: "Which device might use AI to recognize your face?", a: ["A smartphone", "A wooden chair", "A paper clip", "A standard mug"], c: 0, e: "Many smartphones use AI-powered facial recognition to help verify the owner's identity." },
  { q: "What is a chatbot designed to do?", a: ["Have a conversation with users", "Charge a phone battery", "Print paper documents", "Repair computer hardware"], c: 0, e: "A chatbot is software designed to communicate with people through text or voice." },
  { q: "What does an AI model learn from?", a: ["Data and examples", "Luck alone", "Electric cables", "Screen brightness"], c: 0, e: "AI models identify patterns by learning from data and examples during training." },
  { q: "Can AI make mistakes?", a: ["Yes, AI can be wrong", "No, AI is always correct", "Only on Tuesdays", "Only without internet"], c: 0, e: "AI can produce incorrect, biased, or misleading results, so important outputs should be checked." },
  { q: "What is a prompt when using generative AI?", a: ["An instruction or question", "A computer battery", "A type of password", "A screen setting"], c: 0, e: "A prompt is the instruction, question, or information you give an AI system." },
  { q: "Which is the safest way to use an AI answer?", a: ["Check important facts", "Trust every word immediately", "Share private passwords", "Never read the result"], c: 0, e: "AI is useful, but important information should be verified with reliable sources." },
  { q: "How can AI help with email?", a: ["Drafting and summarizing messages", "Physically delivering a parcel", "Replacing the internet", "Charging the keyboard"], c: 0, e: "AI tools can help write, rewrite, translate, and summarize email messages." },
  { q: "What can recommendation systems suggest?", a: ["Movies, music, or products", "Tomorrow's exact lottery numbers", "A new law of physics", "Your private password"], c: 0, e: "Recommendation systems learn from patterns to suggest content or products a user may enjoy." },
  { q: "Which field uses AI to help examine medical images?", a: ["Healthcare", "Carpentry only", "Pottery only", "Bookbinding only"], c: 0, e: "AI can assist healthcare professionals by identifying patterns in scans and other medical images." },
  { q: "What is machine learning?", a: ["A way for computers to learn patterns from data", "Teaching a laptop to walk", "Building machines by hand", "A faster internet cable"], c: 0, e: "Machine learning is a branch of AI in which systems learn patterns from data." },
  { q: "Which AI feature helps email services identify unwanted messages?", a: ["Spam filtering", "Screen rotation", "Battery saver", "Volume control"], c: 0, e: "Spam filters use learned patterns to detect suspicious or unwanted email." },
  { q: "What should you avoid entering into a public AI tool?", a: ["Passwords and sensitive personal data", "A general knowledge question", "A recipe idea", "A made-up story topic"], c: 0, e: "Sensitive or confidential information should not be shared with public AI tools unless approved and protected." },
  { q: "Can AI understand human emotions exactly as people do?", a: ["No, it can only detect patterns and signals", "Yes, always and perfectly", "Only through a printer", "Only when offline"], c: 0, e: "AI can detect emotional signals in text, voice, or images, but it does not experience feelings like a person." },
  { q: "What is speech recognition used for?", a: ["Turning spoken words into text or commands", "Making a screen brighter", "Cooling a computer", "Printing photographs"], c: 0, e: "Speech recognition converts spoken language into text or actions a computer can process." },
  { q: "Which task is AI translation useful for?", a: ["Converting text between languages", "Increasing battery size", "Folding a paper document", "Changing screen material"], c: 0, e: "AI translation tools help convert words and sentences from one language into another." },
  { q: "What is an algorithm?", a: ["A set of steps for solving a problem", "A computer brand", "A type of screen", "An internet bill"], c: 0, e: "An algorithm is a sequence of instructions or rules used to complete a task or solve a problem." },
  { q: "Why does the quality of training data matter?", a: ["It affects the quality of AI results", "It changes the computer's color", "It controls room temperature", "It makes keyboards larger"], c: 0, e: "Incomplete, incorrect, or biased training data can lead to poor AI results." },
  { q: "Which is an example of computer vision?", a: ["Identifying objects in a photo", "Reading a paper book by hand", "Turning up speaker volume", "Sending a blank email"], c: 0, e: "Computer vision helps machines analyze and understand images and video." },
  { q: "How might AI help a driver?", a: ["Detecting lanes and nearby obstacles", "Removing the need for all road rules", "Guaranteeing no accidents", "Creating fuel from nothing"], c: 0, e: "Driver assistance systems can use AI to detect lanes, signs, vehicles, and hazards." },
  { q: "What is a deepfake?", a: ["AI-generated or altered media that can look real", "A very deep swimming pool", "A broken hard drive", "A secure backup"], c: 0, e: "Deepfakes use AI to create or alter video, images, or audio in convincing ways." },
  { q: "What is one good way to spot possible AI-generated misinformation?", a: ["Compare it with trusted sources", "Believe it if it looks professional", "Count the number of colors", "Check your battery level"], c: 0, e: "Cross-check surprising claims with multiple reliable sources before believing or sharing them." },
  { q: "Does AI need electricity and computing power to run?", a: ["Yes", "No", "Only in winter", "Only for images"], c: 0, e: "AI systems run on computers and data centers that require hardware and electricity." },
  { q: "Which human skill remains important when using AI?", a: ["Critical thinking", "Typing without reading", "Ignoring context", "Sharing every result"], c: 0, e: "Critical thinking helps people judge whether an AI result is accurate, useful, fair, and appropriate." },
  { q: "What does personalization mean in an AI service?", a: ["Adapting results to a user's interests or needs", "Giving everyone the exact same result", "Removing all settings", "Turning off the device"], c: 0, e: "Personalization uses information or behavior patterns to tailor suggestions and experiences." },
  { q: "Can AI help people with accessibility needs?", a: ["Yes, through tools such as captions and text-to-speech", "No, it has no accessibility uses", "Only by changing wallpaper", "Only by printing documents"], c: 0, e: "AI can power live captions, image descriptions, speech tools, and other accessibility features." },
  { q: "What does text-to-speech do?", a: ["Reads written text aloud", "Turns music into a photo", "Makes a keyboard wireless", "Encrypts every file"], c: 0, e: "Text-to-speech technology converts written words into spoken audio." },
  { q: "Why should a human review an important AI decision?", a: ["AI may miss context or make an error", "AI needs help turning on", "Humans use less electricity", "It makes the screen sharper"], c: 0, e: "Human review adds judgment, accountability, and context, especially for decisions affecting people." },
  { q: "Which is a responsible use of AI at work?", a: ["Using approved tools and checking the output", "Uploading confidential data anywhere", "Hiding all AI use", "Letting AI make every decision alone"], c: 0, e: "Responsible workplace use follows company policy, protects data, and includes human review." },
  { q: "What can an AI summary do?", a: ["Shorten a long piece of content into key points", "Guarantee every detail is correct", "Replace the original forever", "Repair a damaged screen"], c: 0, e: "AI can condense long content, but summaries should be checked for missing or incorrect details." },
  { q: "What is facial recognition based on?", a: ["Patterns in facial features", "A person's shoe size", "The phone's ringtone", "The day of the week"], c: 0, e: "Facial recognition compares patterns and measurements found in images of faces." },
  { q: "Which statement about AI and jobs is most accurate?", a: ["AI can change tasks and create new kinds of work", "AI affects no jobs at all", "AI will replace every job tomorrow", "Only robots can use AI"], c: 0, e: "AI often changes how tasks are performed and can both transform existing roles and create new ones." },
  { q: "What is bias in an AI system?", a: ["Unfair patterns in its results", "A faster processor", "A low battery warning", "A software update"], c: 0, e: "AI bias occurs when a system produces unfair or systematically skewed outcomes." },
  { q: "Can AI-generated images show events that never happened?", a: ["Yes", "No", "Only in black and white", "Only with a camera attached"], c: 0, e: "Generative AI can create realistic-looking fictional scenes, so images are not always proof of an event." },
  { q: "Which question makes a prompt more useful?", a: ["What context and outcome do I want?", "Is my screen bright enough?", "How old is my keyboard?", "What color is the cable?"], c: 0, e: "Clear context, constraints, and a desired output usually help AI provide a more useful response." },
  { q: "What is natural language processing used for?", a: ["Working with human language", "Building physical roads", "Charging electric cars", "Measuring room size"], c: 0, e: "Natural language processing helps computers analyze, understand, and generate human language." },
  { q: "Can AI learn your preferences from your activity?", a: ["Yes, if the service collects and uses that data", "Never under any condition", "Only from printed paper", "Only while the phone is off"], c: 0, e: "Some services use browsing, viewing, or purchase activity to personalize their AI-powered recommendations." },
  { q: "What is a smart way to ask AI for better writing?", a: ["Describe the audience, tone, and purpose", "Use only one vague word", "Provide a password", "Turn off spell-check"], c: 0, e: "Details about audience, tone, format, and purpose give the AI clearer direction." },
  { q: "Which AI use is common in online shopping?", a: ["Product recommendations", "Making physical products appear instantly", "Removing the need for payment", "Guaranteeing every item fits"], c: 0, e: "Online stores use AI to recommend products based on browsing and purchasing patterns." },
  { q: "What is automation?", a: ["Using technology to perform tasks with less manual effort", "Doing every task by hand", "A type of computer screen", "A paper filing method"], c: 0, e: "Automation uses rules or technology, sometimes including AI, to carry out tasks automatically." },
  { q: "Are all automated systems AI?", a: ["No, some simply follow fixed rules", "Yes, every timer is AI", "Only if they use batteries", "Only if they are online"], c: 0, e: "Traditional automation can follow fixed instructions without learning or adapting, so it is not always AI." },
  { q: "What does AI hallucination mean?", a: ["A confident-sounding but incorrect AI response", "A computer going to sleep", "A colorful screen effect", "A virtual reality game"], c: 0, e: "An AI hallucination is false or invented information presented as though it were true." },
  { q: "How can AI help with a meeting?", a: ["Transcribing and summarizing discussion", "Physically attending without any device", "Guaranteeing everyone agrees", "Changing the room size"], c: 0, e: "AI tools can create transcripts, summaries, action items, and follow-up drafts from meetings." },
  { q: "What does data privacy mean?", a: ["Protecting how personal information is collected and used", "Making every file public", "Deleting the internet", "Using a larger monitor"], c: 0, e: "Data privacy concerns people's control over how their personal information is collected, stored, and shared." },
  { q: "Why might an AI give different answers to the same question?", a: ["Its generation can vary and context may differ", "The keyboard changed color", "The screen got warmer", "The internet forgot the alphabet"], c: 0, e: "Generative systems can produce varied outputs, and small changes in context or settings can affect an answer." },
  { q: "Which action helps protect privacy when using AI?", a: ["Remove sensitive details before submitting text", "Include every personal identifier", "Share account passwords", "Publish confidential files"], c: 0, e: "Removing names, account details, and confidential information reduces privacy risk." },
  { q: "Can AI replace human creativity completely?", a: ["No, it is a tool that people can direct and build upon", "Yes, in every situation", "Only for music", "Only on weekends"], c: 0, e: "AI can support creative work, but human intent, taste, experience, and judgment remain central." },
  { q: "What is the best description of AI today?", a: ["A powerful tool with useful abilities and real limits", "A perfect human mind", "Magic that never fails", "A device that needs no data"], c: 0, e: "Modern AI is powerful and useful, but it has limitations and works best with thoughtful human oversight." }
];

const state = {
  selected: [],
  index: 0,
  score: 0,
  answered: false,
  startedAt: 0,
  name: "",
  responses: []
};

const screens = {
  welcome: document.querySelector("#welcome-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen")
};

const startForm = document.querySelector("#start-form");
const questionCounter = document.querySelector("#question-counter");
const progressBar = document.querySelector("#progress-bar");
const scoreChip = document.querySelector("#score-chip");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const random = new Uint32Array(1);
    crypto.getRandomValues(random);
    const j = random[0] % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(event) {
  event.preventDefault();
  state.name = document.querySelector("#participant-name").value.trim();
  state.selected = shuffle(questions).slice(0, QUESTION_COUNT);
  state.index = 0;
  state.score = 0;
  state.responses = [];
  state.startedAt = Date.now();
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  const item = state.selected[state.index];
  const answerObjects = item.a.map((text, originalIndex) => ({ text, correct: originalIndex === item.c }));
  const shuffledAnswers = shuffle(answerObjects);

  questionCounter.textContent = `Question ${state.index + 1} of ${QUESTION_COUNT}`;
  progressBar.style.width = `${((state.index + 1) / QUESTION_COUNT) * 100}%`;
  scoreChip.textContent = `Score: ${state.score}`;
  questionText.textContent = item.q;
  answerList.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.classList.remove("visible");
  nextButton.innerHTML = state.index === QUESTION_COUNT - 1
    ? `See my result <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`
    : `Next question <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;

  shuffledAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.correct = answer.correct;
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer.text}</span>`;
    button.addEventListener("click", () => selectAnswer(button, item));
    answerList.appendChild(button);
  });
}

function selectAnswer(selectedButton, item) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) state.score += 1;
  state.responses.push({
    question: item.q,
    selectedAnswer: selectedButton.querySelector("span:last-child").textContent,
    correctAnswer: item.a[item.c],
    isCorrect
  });

  answerList.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") button.classList.add("correct");
  });

  if (!isCorrect) selectedButton.classList.add("wrong");
  scoreChip.textContent = `Score: ${state.score}`;
  feedback.innerHTML = `<strong>${isCorrect ? "Correct!" : "Good try."}</strong> ${item.e}`;
  feedback.classList.add("visible");
  nextButton.classList.add("visible");
  nextButton.focus({ preventScroll: true });
}

function nextQuestion() {
  if (!state.answered) return;
  state.index += 1;
  if (state.index < QUESTION_COUNT) {
    renderQuestion();
  } else {
    showResults();
  }
}

async function saveResponse(elapsedSeconds) {
  const status = document.querySelector("#save-status");

  if (!RESPONSE_ENDPOINT) {
    status.textContent = "Response storage is being connected.";
    status.className = "save-status failed";
    return;
  }

  const submission = {
    name: state.name,
    submittedAt: new Date().toISOString(),
    score: state.score,
    totalQuestions: QUESTION_COUNT,
    durationSeconds: elapsedSeconds,
    responses: state.responses,
    userAgent: navigator.userAgent
  };

  status.textContent = "Saving your response...";
  status.className = "save-status saving";

  try {
    await fetch(RESPONSE_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: new URLSearchParams({ payload: JSON.stringify(submission) })
    });
    status.textContent = "Your response has been saved. Thank you!";
    status.className = "save-status saved";
  } catch (error) {
    status.textContent = "Your score is complete, but the response could not be saved.";
    status.className = "save-status failed";
  }
}

function showResults() {
  const elapsedSeconds = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");
  const percentage = (state.score / QUESTION_COUNT) * 100;
  const greeting = state.name ? `${state.name}, you` : "You";
  let title = "Curiosity unlocked!";
  let message = `${greeting} made a great start. AI is always changing, and asking good questions is the best way to keep learning.`;

  if (state.score === 5) {
    title = "AI superstar!";
    message = `${greeting} got every question right. You clearly know your way around everyday AI.`;
  } else if (state.score >= 3) {
    title = "Nicely done!";
    message = `${greeting} have a strong understanding of everyday AI. Keep exploring and questioning what technology can do.`;
  }

  document.querySelector("#result-score").textContent = `${state.score}/5`;
  document.querySelector("#result-title").textContent = title;
  document.querySelector("#result-message").textContent = message;
  document.querySelector("#correct-total").textContent = state.score;
  document.querySelector("#time-total").textContent = `${minutes}:${seconds}`;
  document.querySelector("#result-ring").style.background =
    `conic-gradient(var(--purple) ${percentage}%, #e8e6ef ${percentage}%)`;
  showScreen("result");
  saveResponse(elapsedSeconds);
}

startForm.addEventListener("submit", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", () => {
  document.querySelector("#participant-name").value = state.name;
  document.querySelector("#response-consent").checked = false;
  showScreen("welcome");
});
