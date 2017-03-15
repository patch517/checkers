export const SET_TEXT = 'auth/SET_TEXT';

interface SAMPLE_INTERFACE_STATE {
  text: string;
}

const DEFAULT_STATE: SAMPLE_INTERFACE_STATE = {
  text: ''
};

export const setText = (dat) => {
  return { type: SET_TEXT, dat: dat }
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_TEXT:
      return Object.assign({}, state, {
        text: action.dat
      });
  }
  return state;
};
