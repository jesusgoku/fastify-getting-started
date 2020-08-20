import app from './app';
import { PORT } from './config';

(async () => {
  try {
    const address = await app.listen(PORT, '::');
    app.log.info(`Server listening at ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
