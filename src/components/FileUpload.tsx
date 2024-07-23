import { useRef } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Logger } from '@/modules/logger';
import { LoadingOverlay, type LoadingOverlayRef } from './LoadingOverlay';
import { Colors } from '@/constants/Colors';

type Props = { onSuccess: (fileString: string) => void };

const UPLOAD_BOX_SIZE = 200;

export const FileUpload = ({ onSuccess }: Props) => {
  const loadingOverlayRef = useRef<LoadingOverlayRef>(null);

  const readFile = async (fileUri: string) => {
    loadingOverlayRef.current?.show();

    try {
      const fileString = await FileSystem.readAsStringAsync(fileUri);
      loadingOverlayRef.current?.hide();
      onSuccess(fileString);
    } catch (error) {
      loadingOverlayRef.current?.hide();
      Logger.error(error);
      Alert.alert('Unable to read file');
    }
  };

  const onUploadPress = async () => {
    try {
      const { assets } = await DocumentPicker.getDocumentAsync();
      const uploadedFile = assets?.[0];

      if (uploadedFile?.uri) {
        readFile(uploadedFile.uri);
      }
    } catch (error) {
      Logger.error(error);
      Alert.alert('Unable to upload');
    }
  };

  const onSelectExampleFile = async () => {
    try {
      const assets = await Asset.loadAsync(
        require('../../assets/programming-task-example-data.log'),
      );
      const localUri = assets[0]?.localUri;

      if (localUri) {
        readFile(localUri);
      }
    } catch (error) {
      Logger.error(error);
      Alert.alert('Unable to load example file');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HTTP Requests Parser</Text>

      <TouchableOpacity onPress={onUploadPress} style={styles.uploadContainer}>
        <Ionicons name="cloud-upload" color={Colors.secondary} size={24} />
        <Text style={styles.uploadText}>Upload Log File</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>OR</Text>
        <Button title="Select Example Log File" onPress={onSelectExampleFile} />
      </View>

      <LoadingOverlay loadingOverlayRef={loadingOverlayRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 20,
  },
  uploadContainer: {
    width: UPLOAD_BOX_SIZE,
    height: UPLOAD_BOX_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.secondary,
    borderRadius: 9,
  },
  uploadIcon: {
    fontSize: 24,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.secondary,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 18,
  },
});
