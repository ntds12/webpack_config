import { state } from './store/state';

import { main_draw_line } from './drawLine/main_draw_line';

import { clear_rect } from './utils/clear_rect';
import { draw_pixels_rect } from './rects/draw_pixels_rect';

import set_ctx from './set_ctx';


const main = async () => {
  await set_ctx();

  state.ctx.translate(state.ctx.canvas.width / 2, state.ctx.canvas.height / 2);
  window.addEventListener('resize', () => {
    state.ctx.canvas.height = innerHeight;
    state.ctx.canvas.width = innerWidth;
    state.ctx.translate(state.ctx.canvas.width / 2, state.ctx.canvas.height / 2);
  });
  setInterval(
    async () => {
      await clear_rect();
      await main_draw_line();
      await draw_pixels_rect();
      state.ctx.rotate(-0.2);


    },
    100

  );
};

main();

