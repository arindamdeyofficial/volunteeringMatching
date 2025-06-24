// lib/signalr/client.ts
import * as signalR from '@microsoft/signalr';

let connection: signalR.HubConnection | null = null;

export function initializeSignalR(onNotificationReceived: (notification: any) => void) {
  if (!connection) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl('/api/notificationHub') // Your backend SignalR endpoint
      .withAutomaticReconnect()
      .build();

    connection.on('newNotification', (notification) => {
      onNotificationReceived(notification);
    });

    connection.start().catch(console.error);
  }
}
