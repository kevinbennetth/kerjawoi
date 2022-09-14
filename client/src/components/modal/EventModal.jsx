import BaseModal from "./BaseModal";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPeopleFill, BsTextParagraph } from "react-icons/bs";
const EventModal = ({ show, onHideModal }) => {
  return (
    <BaseModal show={show} onHideModal={onHideModal} className="w-5/12">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-bold text-dark-purple">Team Meeting</h2>
        <p>Tuesday, September 1 • 13:00 - 15:00</p>
      </div>
      <div className="grid grid-cols-[10%_90%] gap-y-4 items-center">
        <IoLocationSharp className="w-8 h-8 fill-Gray" />
        <a
          href="https://meet.google.com/"
          className="text-lg underline"
          target="_blank"
          rel="noreferrer"
        >
          https://meet.google.com/
        </a>
        
        <BsFillPeopleFill className="w-8 h-8 fill-Gray" />
        <p className="text-lg">Research Team</p>

        <BsTextParagraph className="w-8 h-8 fill-Gray self-start pt-1" />
        <p className="text-lg">
          A meeting to brainstorm ideas on the new application to take over the
          world. The idea would then be implemented as our starting point in
          achieving our hopes and dreams to finally create a dystopian empire.
        </p>
      </div>
    </BaseModal>
  );
};

export default EventModal;
