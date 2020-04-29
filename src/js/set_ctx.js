import { state } from './store/state';

const set_ctx = () => {
  return new Promise(res => {
    var mycanvas = document.getElementById("canvas");
    state.ctx = mycanvas.getContext('2d');
    state.ctx.canvas.height = innerHeight;
    state.ctx.canvas.width = innerWidth;

    state.ctx.lineWidth = 0.9;

    state.ctx.strokeStyle = 'black';
    res();
  });
};

export default set_ctx;