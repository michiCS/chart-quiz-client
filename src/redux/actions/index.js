export const logIn = (user) => {
  return {
    type: "LOG_IN",
    payload: user
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const setTotalRounds = (rounds) => {
  return {
    type: "SET_TOTAL_ROUNDS",
    payload: rounds
  };
};

export const nextRound = () => {
  return {
    type: "NEXT_ROUND",
  };
};

export const updateScore = (score) => {
  return {
    type: "UPDATE_SCORE",
    payload: score
  };
};

export const finished = () => {
  return {
    type: "FINISHED",
  };
};

export const playAgain = () => {
  return {
    type: "PLAY_AGAIN",
  };
};

export const setBlinkingId = (id) => {
  return {
    type: "SET_BLINKING_ID",
    payload: id
  };
};
