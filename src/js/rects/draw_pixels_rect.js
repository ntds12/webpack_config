import { state } from '../store/state';

import {
  gen_rect_with_first,
  gen_rect_with_second
} from './gen_rects';

const draw_pixels_rect = () => {


  state.ctx.stroke();
  return new Promise(res => {
    for (let j = 0; j < 4500; j++) {
      gen_rect_with_first(j, -10, 10, 'silver');
    }
    for (let j = 200; j < 4500; j++) {
      gen_rect_with_first(j, -20, 20, 'silver');
    }
    for (let j = 300; j < 4500; j++) {
      gen_rect_with_first(j, -30, 30, 'silver');
    }
    for (let j = 400; j < 4500; j++) {
      gen_rect_with_first(j, -40, 40, 'silver');
    }

    res();

  });
};

export { draw_pixels_rect };