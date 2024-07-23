import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

import { FileUpload } from '../FileUpload';

describe('FileUpload', () => {
  const onSuccessMock = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<FileUpload onSuccess={onSuccessMock} />);

    expect(screen.getByText('HTTP Requests Parser')).toBeTruthy();
    expect(screen.getByText('Upload Log File')).toBeTruthy();
    expect(screen.getByText('Select Example Log File')).toBeTruthy();
  });

  it('should call `onSuccess` props with the uploaded file string when pressing `Upload Log File`', async () => {
    const user = userEvent.setup();

    jest.spyOn(DocumentPicker, 'getDocumentAsync').mockResolvedValueOnce({
      assets: [{ uri: 'mockUri', name: '' }],
      canceled: false,
    });
    jest
      .spyOn(FileSystem, 'readAsStringAsync')
      .mockResolvedValueOnce('mockFileString');

    render(<FileUpload onSuccess={onSuccessMock} />);

    await user.press(screen.getByText('Upload Log File'));

    await waitFor(() =>
      expect(FileSystem.readAsStringAsync).toHaveBeenCalledWith('mockUri'),
    );
    await waitFor(() =>
      expect(onSuccessMock).toHaveBeenCalledWith('mockFileString'),
    );
  });

  it('should show error alert when unable to upload a file', async () => {
    const alertSpy = jest.spyOn(Alert, 'alert');
    jest
      .spyOn(DocumentPicker, 'getDocumentAsync')
      .mockRejectedValueOnce(new Error('Upload error'));

    render(<FileUpload onSuccess={onSuccessMock} />);

    await userEvent.press(screen.getByText('Upload Log File'));

    await waitFor(() =>
      expect(alertSpy).toHaveBeenCalledWith('Unable to upload'),
    );
  });
});
