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
          <Modal isOpen={isOpen} onClose={closeModal} >
                  
              <ModalOverlay />
              <ModalContent size="xl">
                  <ModalHeader>
                      AI Response
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody display='flex' alignItems='center' justifyContent='center'>
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                  </ModalBody>
                  <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={closeModal}>
                          Close
                      </Button>
                  </ModalFooter>
              </ModalContent>
        </Modal>
      </>
  )
}

export default KeywordsModal