export function spam() {
  return {
    ok,

    broken() {
      broken();
    }
  };
}

export function broken() {
  return true;
}

export function ok() {
  return false;
}
