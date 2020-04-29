import { draw_line } from './draw_line';
import { state } from '../store/state';

const main_draw_line = () => {
  return new Promise(res => {

    let which;
    state.ctx.beginPath();
    let rotate_num_arr = [
      {
        name: "first",
        rotate_num: 0.02
      },
      {
        name: "second",
        rotate_num: 0.03,
      }];
    for (let i = 0; i < 2; i++) {
      which = rotate_num_arr[i];
      draw_line(which.name, which.rotate_num);
    }
    res();
  });
};

export { main_draw_line };