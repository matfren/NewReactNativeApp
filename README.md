      Creating a New Mobile Application
1.	In the command prompt terminal navigate to the directory (folder) where the project will be made. Navigation can be achieved using:
·	cd..  To move up closer to the home directory.
·	cd / To go to the home directory.
·	cd /folder To move into a desired folder.
·	cd /D [DriveLetter]: To move to another hard drive.
·	The direct path to the folder can also be entered eg: /enter/the/path
2.	When in the desired directory enter the following to begin creating your new application.
·	npx create-expo-app@latest --template
·	Choose: blank. 
·	Enter the application’s name.
3.	After a moment make sure your directory is on the new application then enter:
·	npm run web to see your application in the web browser or npm run android to run it in an emulator or on your phone.
·	If there is an error follow the instructions listed. 
·	Eg: The following command was shown to fix the error while trying to run on the web: npx expo install react-native-web react-dom @expo/metro-runtime 
·	repeat npm run web / npm run android after fixing the error.
4.	Once the server is running a number of options will present themselves in the menu which are self-explanatory. There is a QR code that a phone can scan if you want to check the development updates on your phone.
5.	Once the server is running in the web you can press ctrl + C in order to stop the server from running.
6.	Press code . or O to quickly jump into your default IDE at any time. The terminal in whichever chosen IDE can be used instead of the command prompt terminal.
7.	The expo router is important in order to continue development. In order to install it do the following:
Router installation documentation: https://docs.expo.dev/router/installation/
·	Follow instructions under manual installation. Skip the babel steps. Babel is already taken care of.
·	npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
·	In package.json change main to --> "main": "expo-router/entry"
·	In app.json change the scheme to match the main and slug which should both be the same name as the application.
·	If developing for web based --> npx expo install react-native-web react-dom
·	Finally to start the application in VSCode terminal --> npx expo start -c

Additional Links
·	Information on using frameworks with with React-Native.
o	https://reactnative.dev/docs/environment-setup
·	Expo go download.
o	https://expo.dev/go
·	Android studio to use as an emulator for a digital android phone and further instructions on how to make it work.
o	https://developer.android.com/
o	https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated
