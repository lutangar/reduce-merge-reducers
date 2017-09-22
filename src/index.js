export default function reduceMergeReducers(...reducers) {
  return (previous, current) => {
    let isInitial = typeof previous === 'undefined';

    return reducers.reduce((p, r) => {
      if (isInitial) {
        return { ...r(undefined, current), ...p };
      }

      return r(p, current);
    }, { ...previous });
  };
}
