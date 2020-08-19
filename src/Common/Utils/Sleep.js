const Sleep = (timeInMs) => {
  return new Promise(res => setTimeout(res, timeInMs))
};

export default Sleep;
