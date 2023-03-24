export const start = (payload) => {
  return {
    type: 'START',
    payload:true
  };
};

export const done = (payload) => {
  return {
    type: 'DONE',
    payload:false
  };
}