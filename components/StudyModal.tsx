"use client";
import Image from "next/image";
import {
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Cur1 from "@/public/cur1.png";
import Cur2 from "@/public/cur2.png";
import { AiOutlinePlus } from "react-icons/ai";

const TheModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div className="justify-end text-sm text-gray-500 mdfont-semibold ">
        Show curriculums
        <button
          onClick={onOpen}
          className="text-[12px] text-white rounded-sm animation-div3 m-2 p-[2px]"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        scrollBehavior="inside"
        backdrop="blur"
        classNames={{
          body: "px-6",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Software Engineering Programme Curriculum
              </ModalHeader>
              <ModalBody>
                <div>
                  <Image src={Cur1} alt="img" placeholder="blur" />
                  <Image
                    src={Cur2}
                    alt="img"
                    placeholder="blur"
                    className="mt-4"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="text-white animation-div3" onPress={onClose}>
                  <a
                    href="https://www.alxafrica.com/software-engineering-plus/"
                    target="_blank"
                  >
                    See More
                  </a>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TheModal;