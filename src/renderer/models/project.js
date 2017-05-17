export default {
  namespace: 'project',
  state: {
    directory: '',
    _package: '',
    name: '',
    consumers: {}
  },
  reducers: {
    initProject(state, {directory, _package, name}) {
      return {...state, directory, _package, name};
    },
    addConsumer(state, {consumer}) {
      let consumers = state.consumers;
      consumers[consumer.className] = consumer;
      return {...state, consumers}
    },
    chooseFolder(state, {path}) {
      console.log(path);
      return {...state, directory: path}
    }
  },
  effects: {},
  subscriptions: {},
};
