import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

const NOTIFICATION_KEY = "FlashCards:notifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: "Take your Quiz!",
    body: "👋 don't forget to take your Quiz today!",
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync("notifications").then(
          ({ status }) => {
            if (status === "granted") {
              Notifications.cancelAllScheduledNotificationsAsync();

              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  hour: 23,
                  minute: 59,
                  repeats: true,
                },
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          }
        );
      }
    });
}
