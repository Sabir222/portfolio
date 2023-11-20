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

import Curr1 from "../public/cur.png";
import Curr2 from "../public/curr.png";
import { AiOutlinePlus } from "react-icons/ai";

const TheModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div className="justify-end text-sm text-gray-500 mdfont-semibold ">
        Show curriculum
        <button
          onClick={onOpen}
          className="text-[12px] text-white rounded-sm gradient-background m-2 p-[2px]"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        radius="sm"
        scrollBehavior="inside"
        backdrop="opaque"
        classNames={{
          body: "px-6",
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
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
                  <Image src={Curr1} alt="img" placeholder="blur" />
                  <Image
                    src={Curr2}
                    alt="img"
                    className="mt-4"
                    placeholder="blur"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="text-white gradient-background"
                  onPress={onClose}
                >
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
