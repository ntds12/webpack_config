import { state } from '../store/state';
import gen_rect_size from '../utils/rand_rect_size';

const {
  first_call_arr,
  second_call_arr
} = state;

import gen_rand_num from '../utils/rand_num_generator';

const gen_rect_with_first = (i, arg1, arg2, color) => {
  let x = gen_rand_num(first_call_arr[i][0] + arg1, first_call_arr[i][0] + arg2);
  let y = gen_rand_num(first_call_arr[i][1] + arg1, first_call_arr[i][1] + arg2);

  const rect_size = gen_rect_size();

  state.ctx.fillStyle = color;
  state.ctx.fillRect(x, y, rect_size, rect_size);

}

const gen_rect_with_second = (i, arg2) => {
  let x = gen_rand_num(second_call_arr[i][0], second_call_arr[i][0] + arg2);
  let y = gen_rand_num(second_call_arr[i][1], second_call_arr[i][1] + arg2);

  state.ctx.fillStyle = 'silver';
  state.ctx.fillRect(x, y, 2, 2);
}


export { gen_rect_with_first, gen_rect_with_second };