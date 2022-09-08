
import { Alert, Modal, Text, Pressable, View } from 'react-native';

//Styles
import styles from './styles';

type ModalProps = {
  name: string;
  label: string;
  btnLabel: string;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => boolean;
  callback: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ modalVisible, setModalVisible, name, label, btnLabel, callback }) => {


  function callbackBtnModal(cb: () => void) {
    setModalVisible(!modalVisible)
    cb();
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{label}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => callbackBtnModal(callback)}>
              <Text style={styles.textStyle}>{btnLabel}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )

}

export default CustomModal;