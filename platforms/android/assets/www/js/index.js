/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        */
        //alert('Received Event: ' + id);
        //alert('test');

        var notificationOpenedCallback = function(jsonData) {
            console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        };

        window.plugins.OneSignal.init("c3209688-7f3c-49bc-b2f3-33f248426f78",{googleProjectNumber: "359812725107"},notificationOpenedCallback);
  
        // Show an alert box if a notification comes in when the user is in your app.
        window.plugins.OneSignal.enableInAppAlertNotification(true);
        window.plugins.OneSignal.getIds(function(ids) {
          //document.getElementById("OneSignalUserID").innerHTML = "UserID: " + ids.userId;
          //document.getElementById("OneSignalPushToken").innerHTML = "PushToken: " + ids.pushToken;
          //alert('getIds: ' + JSON.stringify(ids));
        });
    }
};