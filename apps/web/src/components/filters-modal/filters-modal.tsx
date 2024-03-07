import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import FiltersWrapper from '@/components/filters-modal/filters-wrapper';
import bookingItems from '@/components/filters-modal/booking-items';

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export const FiltersModal = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      classNames={{
        base: 'max-h-[calc(100vh-8rem)]',
        body: 'overflow-y-auto',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Filtry</ModalHeader>
            <ModalBody>
              <FiltersWrapper items={bookingItems} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
