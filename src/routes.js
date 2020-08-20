import * as handlers from './handlers';
import * as schemas from './schemas';

export default function (app, opts, done) {
  app.get('/', schemas.home, handlers.home);

  done();
}
