import { state } from '../store/state';

let {
  first_call_arr,
  second_call_arr,
  first_call_counter,
  second_call_counter
} = state;

export const draw_line = (name, rotate_num) => {
  let close_num = 0.3;
  let i_limit, get_close_to_zero, distance, x, y, turn;

  if (name === 'first') state.ctx.strokeStyle = 'black';
  else state.ctx.strokeStyle = 'black';

  state.ctx.beginPath();
  state.ctx.moveTo(0, 0);

  get_close_to_zero = rotate_num * 0.4;
  i_limit = 9500;

  for (let i = 1; i <= i_limit; i++) {
    distance = i * close_num;
    turn = i * get_close_to_zero;

    x = Math.cos(turn) * distance;
    y = Math.sin(turn) * distance;

    if (name === 'first' && first_call_counter < 1) {
      first_call_arr.push([x, y]);
    } else if (name === 'second' && second_call_counter < 1) {
      second_call_arr.push([x, y]);
    }

    state.ctx.lineTo(x, y);
  }
  if (name === 'first') first_call_counter++;
  else second_call_counter++;


  state.ctx.stroke();
  state.ctx.moveTo(0, 0);
  state.ctx.closePath();
};

