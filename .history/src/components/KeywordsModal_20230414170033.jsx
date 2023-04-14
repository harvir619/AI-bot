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
                  <ModalBody display='flex' alignItems='center' justifyContent='center'>
                      {loading ? (
                          <CircularProgress isIndeterminate color='blue.300' />
                      ) : (
                          <Text>
                              {keywords}
                          </Text>
                      )}
                  </ModalBody>
              </ModalContent>
        </Modal>
      </>
  )
}

export default KeywordsModal