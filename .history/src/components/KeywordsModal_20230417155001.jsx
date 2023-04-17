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
          <Modal isOpen={isOpen} onClose={closeModal} size="xl" >
                  
              <ModalOverlay />
              <ModalContent
                  maxW="90vw"
                  maxH="90vh"
                  overflow="hidden"
                  textAlign="center">
                  <ModalHeader>
                      AI Response
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody display='flex' alignItems='center' justifyContent='center' m="4">
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssssasdsadsadsadsadsadsadssssssssssssssssssss
                      asdsadsadsadsadsadsadssssssssssssssssssss
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