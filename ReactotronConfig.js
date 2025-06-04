import app from 'app.json';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import Reactotron, {
  networking,
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { storage, mmkvStorage } from '@config/storage';

Reactotron.setAsyncStorageHandler(mmkvStorage)
  .configure({
    name: app.displayName,
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    errors: true,
    log: false,
  })
  .use(trackGlobalErrors())
  .use(networking())
  .use(openInEditor())
  .use(mmkvPlugin({ storage }))
  .connect();
