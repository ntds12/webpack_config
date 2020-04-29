import { state } from '../store/state';

const clear_rect = () => {
  const bigNum = 1000000;
  return new Promise(res => {
    state.ctx.clearRect(-bigNum, -bigNum, state.ctx.canvas.width * bigNum, state.ctx.canvas.height * bigNum);
    res();
  });
};

export { clear_rect };