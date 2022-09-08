//Lib
import { Alert, Modal, Text, Pressable, View } from 'react-native';

//Components
import Button from '../button';
//Styles
import styles from './styles';

//Types
import { ModalType } from '../../types';

const CustomModal: React.FC<ModalType> = ({ modalVisible, setModalVisible, name, label, btnLabel, callback }) => {


  function callbackBtnModal(cb: () => void) {
    cb();
    setModalVisible(!modalVisible)
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
            <Button
              style={styles.button}
              onPress={() => callbackBtnModal(callback)}>
              <Text style={styles.textStyle}>{btnLabel}</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  )

}

export default CustomModal;