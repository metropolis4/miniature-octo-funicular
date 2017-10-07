function* createId () {
  let id = 1;
  while(true) {
    yield id++;
  }
}

const IdFactory = createId();

export default IdFactory;
