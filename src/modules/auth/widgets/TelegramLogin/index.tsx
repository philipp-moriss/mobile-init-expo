import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WebView from "react-native-webview";

const TelegramLoginWidget = ({
  user,
  onAuth,
}: {
  user: any;
  onAuth: (user: any) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [webAuthUrl, setWebAuthUrl] = useState<string | null>(null);
  const [showWebView, setShowWebView] = useState(false);

  const isLoggedIn = !!user?.user?.id;

  const fetchWebAuthUrl = async () => {
    const response = await fetch(
      `https://dockmapapi-production.up.railway.app/auth/telegram/oauth-link`,
      {
        method: "GET",
      }
    );
    const data = await response.text();
    setWebAuthUrl(data);
    setShowWebView(true);
    setIsLoading(false);
  };

  const handleAuthSuccess = (data: any) => {
    setShowWebView(false);
    setWebAuthUrl(null);
    onAuth(data);
  };

  return (
    <>
      <View style={[styles.container, { opacity: isLoading ? 0 : 1 }]}>
        {!isLoggedIn && !webAuthUrl && (
          <View style={styles.loggedInContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsLoading(true);
                fetchWebAuthUrl();
              }}
            >
              <Text style={styles.loggedInText}>Login Telegram</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal
        visible={showWebView}
        animationType="slide"
        onRequestClose={() => {
          setShowWebView(false);
        }}
        presentationStyle="fullScreen"
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={() => setShowWebView(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <WebView
            source={{ uri: webAuthUrl! }}
            style={styles.webview}
            onLoad={() => {
              setIsLoading(true);
            }}
            onLoadEnd={() => {
              setIsLoading(false);
            }}
            onNavigationStateChange={(navState) => {
              if (navState.url.includes("#tgAuthResult=")) {
                const serverUrl = navState.url.replace(
                  "#tgAuthResult=",
                  "?tgAuthResult="
                );

                fetch(serverUrl, { method: "GET" })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data, "data");
                    handleAuthSuccess(data);
                  })
                  .catch((err) => {
                    console.log(err, "err");
                  });
              }
            }}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  loggedInContainer: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  loggedInText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  webview: {
    flex: 1,
  },
  closeButtonContainer: {
    alignItems: "flex-end",
    padding: 10,
  },
  closeButtonText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TelegramLoginWidget;
