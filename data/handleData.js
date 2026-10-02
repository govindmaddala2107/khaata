import * as FileSystem from 'expo-file-system/legacy';

export const saveDataToFile = async (data, jsonFilePath) => {
    try {
        const fileUri =
            FileSystem.documentDirectory + jsonFilePath;

        await FileSystem.writeAsStringAsync(
            fileUri,
            JSON.stringify(data)
        );
        return fileUri;
    } catch (error) {
        console.log("Save Data error:", error);
        return null;
    }
};

export const readDataFromFile = async (jsonFilePath) => {
    try {
        const fileUri =
            FileSystem.documentDirectory + jsonFilePath;

        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
            console.log("File not found, creating file:", fileUri);
            await FileSystem.writeAsStringAsync(fileUri, JSON.stringify({}));
            return {};
        }

        const content =
            await FileSystem.readAsStringAsync(fileUri);

        const parsedData = JSON.parse(content);

        return parsedData;
    } catch (error) {
        console.log("Error in reading Data: ", error);
        return null;
    }
};

export const deleteFile = async (jsonFilePath) => {
    try {
        const fileUri =
            FileSystem.documentDirectory + jsonFilePath;
        await FileSystem.deleteAsync(fileUri);
        return true;
    } catch (error) {
        console.log("Error in delete file: ", error);
        return null;
    }
}