import genRandNum from './rand_num_generator';

const sizes = [1, 2, 3, 4, 5];
const rand_rect_size = () => {
  return genRandNum(0, sizes.length);
};

export default rand_rect_size;


