/*
 * 4. src/notifications.js
 */

import {Platform} from 'react-native';
import FCM, {
  FCMEvent, 
  RemoteNotificationResult, 
  WillPresentNotificationResult, 
  NotificationType
} from 'react-native-fcm';

let notificationListener = null;
let refreshTokenListener = null;
const API_URL = 'https://fcm.googleapis.com/fcm/send';
const FirebaseServerKey = 'AAAADeeSeqE:APA91bHtFHBYqfUA_1hS9PJxaAIpXwFT81COQdyeVvK7UuxtWcs_m0m077PPyaD-Shi_S4Pm0cx5BeuZSm1ZbxVwZlS-Fug1GCSBp19wobBn07wdLDZg5-UCixrgre8PZ15T069sPqhN';

const init = (cb) => {
  FCM.requestPermissions();
  FCM.getFCMToken().then(token => {
    cb(token)
  })
  .catch((error) => {
    console.log(error)
  });
  refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
    cb(token);
  });
  FCM.getInitialNotification().then(notif => {
    console.log("INITIAL NOTIFICATION", notif)
  })
  .catch((error) => {
    console.log(error)
  });
}

const onNotification = (cb) => {
  notificationListener = FCM.on(FCMEvent.Notification, (notif) => {
      cb(notif);

      if(Platform.OS ==='ios'){
        switch(notif._notificationType){
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData)
            break;
          case NotificationType.NotificationResponse:
            notif.finish();
            break;
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All)
            break;
        }
      }
  })
}

const unbind = () => {
  if(notificationListener) notificationListener.remove();
  if(refreshTokenListener) refreshTokenListener.remove();
}

const sendNotification = (token, data) => {
  let body = JSON.stringify({
    "to": token,
    "notification": {
      "title": data.sender || '',
      "body": data. text || '',
      "sound": "default"
    },
    "data": {
      "name": data.sender,
      "chatId": data.chatId,
      "image": data.image
    },
    "priority": 10
  });

  let headers = new Headers({
    "Content-Type": "application/json",
    "Content-Length": parseInt(body.length),
    "Authorization": "key=" + FirebaseServerKey
  });

  fetch(API_URL, { method: "POST", headers, body })
    .then(response => console.log("Send response", response))
    .catch(error => console.log("Error sending ", error));
}

export default { init, onNotification, sendNotification, unbind }