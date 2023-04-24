import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress
} from '@chakra-ui/react'

const KeywordsModal = ({keywords,loading,isOpen,closeModal}) => {
  return (
      <>
          <Modal isOpen={isOpen} onClose={closeModal}>
                  
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>
                      Keywords
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody display='flex' alignItems='center'>
                      
                  </ModalBody>
              </ModalContent>
        </Modal>
      </>
  )
}

export default KeywordsModal