async function home(request) {
  return { message: `Hello ${request.query.name}!` };
}

export {
  /* eslint-disable import/prefer-default-export */
  home,
};
